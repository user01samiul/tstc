'use client';

import { useEffect } from 'react';

export default function HomeTracker() {
  useEffect(() => {
    const trackPageView = async () => {
      try {
        await fetch('/api/analytics/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'pageview',
            page: 'Homepage',
            path: '/',
            referrer: document.referrer,
            userAgent: navigator.userAgent
          })
        });
      } catch (error) {
        console.error('Error tracking page view:', error);
      }
    };

    trackPageView();
  }, []);

  return null;
}
