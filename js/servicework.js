if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js') // Adjust the path to your service worker file
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

  // Install event: Cache static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache-name').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/App-page/starbucks-app.html',
          '/css/styles.css',
          '/css/customdrink.css',
          '/LoadingPage/style.css',
          '/js/script.js',
          '/LoadingPage/script.js',
          '/js/customedrink.js',
          '/js/servicework.js',
          '/js/analytics.js',
          // Add more URLs to cache here
        ]);
      })
    );
  });