/* ========================================
   Hikari Sushi — CTA Measurement
   Keep this neutral filename: privacy filters blocked first-party files named
   analytics.js and site-events.js during browser verification.
   ======================================== */

(function initAnalytics(globalScope, factory) {
  const analytics = factory();

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = analytics;
  }

  if (globalScope && globalScope.document) {
    globalScope.HikariAnalytics = analytics;
    const gtag = analytics.bootstrap(globalScope, 'G-SH54LFXHJ3');
    analytics.install(globalScope.document, gtag, globalScope.location);
  }
})(typeof window !== 'undefined' ? window : null, function createAnalytics() {
  const EVENT_BY_DESTINATION = [
    {
      eventName: 'click_order_online',
      matches: (url) => url.hostname === 'hikarisushi-online.square.site'
    },
    {
      eventName: 'click_reservations',
      matches: (url) => url.hostname === 'reservation.carbonaraapp.com'
    },
    {
      eventName: 'click_directions',
      matches: (url) => /(^|\.)google\.com$/.test(url.hostname) && url.pathname.startsWith('/maps/dir')
    }
  ];

  function parseUrl(href) {
    try {
      return new URL(href, 'https://hikarisojo.com');
    } catch (error) {
      return null;
    }
  }

  function classifyDestination(href) {
    const url = parseUrl(href);
    if (!url) return null;

    const match = EVENT_BY_DESTINATION.find((candidate) => candidate.matches(url));
    return match ? match.eventName : null;
  }

  function bootstrap(scope, measurementId) {
    scope.dataLayer = scope.dataLayer || [];
    scope.gtag = scope.gtag || function gtag() {
      scope.dataLayer.push(arguments);
    };

    scope.gtag('js', new Date());
    scope.gtag('config', measurementId);
    return scope.gtag;
  }

  function buildEventParameters(link, pageLocation) {
    const parameters = {
      page_path: pageLocation && pageLocation.pathname ? pageLocation.pathname : '/',
      cta_placement: link.dataset.analyticsPlacement || 'unknown',
      link_url: link.href
    };

    if (link.dataset.orderItem) {
      parameters.item_name = link.dataset.orderItem;
    }

    return parameters;
  }

  function handleClick(event, gtag, pageLocation) {
    if (typeof gtag !== 'function') return null;

    const link = event.target.closest('a[href]');
    if (!link) return null;

    const eventName = classifyDestination(link.href);
    if (!eventName) return null;

    gtag('event', eventName, buildEventParameters(link, pageLocation));
    return {
      eventName,
      placement: link.dataset.analyticsPlacement || 'unknown'
    };
  }

  function install(documentObject, gtag, pageLocation) {
    const debugMode = pageLocation && new URLSearchParams(pageLocation.search).has('analytics-debug');
    if (debugMode) {
      documentObject.documentElement.dataset.analyticsReady = 'true';
    }

    documentObject.addEventListener('click', function onTrackedClick(event) {
      const result = handleClick(event, gtag, pageLocation);
      if (debugMode && result) {
        documentObject.documentElement.dataset.lastAnalyticsEvent = result.eventName;
        documentObject.documentElement.dataset.lastAnalyticsPlacement = result.placement;
      }
    });
  }

  return {
    bootstrap,
    buildEventParameters,
    classifyDestination,
    handleClick,
    install
  };
});
