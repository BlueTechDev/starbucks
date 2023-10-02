// analytics.js

import { Analytics } from '@vercel/analytics';

const analytics = Analytics({
  app: 'your-vercel-project-url',
});

// Initialize analytics
analytics.page();

// Export analytics for use in other files
export default analytics;
