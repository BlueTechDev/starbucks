import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader'

async function startApp() {
    // Record all sessions on localhost, staging stacks and preview URLs
    if (!isProduction()) {
      // Start the Meticulous recorder before you initialise your app.
      // Note: all errors are caught and logged, so no need to surround with try/catch
      await tryLoadAndStartRecorder({
        projectId: '8gWMq19sbjaGngNyHGFMTEZkJBS2LWAtFwFrfQid',
        isProduction: false,
      });
    }

    // Initalise app after the Meticulous recorder is ready, e.g.
    ReactDOM.render(component, document.getElementById('root'));
}

function isProduction() {
    // TODO: Update me with your production hostname
    return window.location.hostname.indexOf("https://starbucks-randomizer.vercel.app/") > -1;
}

startApp();