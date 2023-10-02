// analytics.js

import { Analytics } from '@vercel/analytics';

const analytics = Analytics({
  app: 'starbucks-mk9lcmctm-bluetechdev.vercel.app',
});

// Initialize analytics
analytics.page();

// Export analytics for use in other files
export default analytics;
