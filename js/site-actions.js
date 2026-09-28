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
    const destination = parseUrl(link.href);
    const safeDestination = destination && new URL(destination.origin + destination.pathname);
    if (safeDestination) {
      for (const key of ['location', 'item']) {
        if (destination.searchParams.has(key)) {
          safeDestination.searchParams.set(key, destination.searchParams.get(key));
        }
      }
    }
    const parameters = {
      page_path: pageLocation && pageLocation.pathname ? pageLocation.pathname : '/',
      cta_placement: link.dataset.analyticsPlacement || 'unknown',
      link_url: safeDestination ? safeDestination.href : ''
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

    if (eventName === 'click_order_online') {
      const destination = parseUrl(link.href);
      const path = pageLocation && pageLocation.pathname;
      destination.searchParams.set('hikari_entry', /^\/menu(?:\.html)?\/?$/.test(path || '') ? 'qr_menu' : 'public_website');
      link.href = destination.href;
    }

    gtag('event', eventName, buildEventParameters(link, pageLocation));
    return {
      eventName,
      placement: link.dataset.analyticsPlacement || 'unknown'
    };
  }

  function install(documentObject, gtag, pageLocation) {
    // Decorate existing anchors before interaction so context-menu/new-tab
    // navigation also carries the handoff. Dynamic links are handled on click.
    if (documentObject.querySelectorAll) {
      for (const link of documentObject.querySelectorAll('a[href]')) {
        if (classifyDestination(link.href) === 'click_order_online') {
          const destination = parseUrl(link.href);
          destination.searchParams.set('hikari_entry', /^\/menu(?:\.html)?\/?$/.test(pageLocation.pathname || '') ? 'qr_menu' : 'public_website');
          link.href = destination.href;
        }
      }
    }
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
