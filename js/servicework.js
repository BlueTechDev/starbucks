if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/servicework.js') // Path to your service worker file
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
          '/styles.css',
          'sscript.js',
          // Add more URLs to cache here
        ]);
      })
    );
  });
  
  // Fetch event: Serve cached assets or fetch from the network
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  
  