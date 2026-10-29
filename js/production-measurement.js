// Draft deploys can test event classification without recording visits in production GA.
(() => {
  if (!['hikarisojo.com', 'www.hikarisojo.com'].includes(location.hostname)) return;
  const measurement = document.createElement('script');
  measurement.src = '/js/site-actions.js';
  measurement.onload = () => {
    const google = document.createElement('script'); google.async = true;
    google.src = 'https://www.googletagmanager.com/gtag/js?id=G-SH54LFXHJ3';
    document.head.append(google);
  };
  document.head.append(measurement);
})();
