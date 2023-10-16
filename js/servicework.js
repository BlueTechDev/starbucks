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
  
  let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser "Add to Home Screen" prompt
  event.preventDefault();

  // Stash the event object for later use
  deferredPrompt = event;

  // Show your custom "Add to Home Screen" button or prompt
  showInstallPrompt();
});

function showInstallPrompt() {
  // Show your custom button or prompt to the user
  const installButton = document.getElementById('addToHomeScreenButton');
  installButton.style.display = 'block';

  // Handle button click to trigger the "Add to Home Screen" prompt
  installButton.addEventListener('click', () => {
    // Show the deferred prompt to the user
    deferredPrompt.prompt();

    // Wait for the user's response
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        // The user added the app to the home screen
        console.log('App added to home screen');
      } else {
        // The user declined to add the app to the home screen
        console.log('User declined to add the app to home screen');
      }

      // Reset the deferred prompt
      deferredPrompt = null;
    });
  });
}
