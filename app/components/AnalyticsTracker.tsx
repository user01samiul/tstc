'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface AnalyticsTrackerProps {
  pageName: string;
}

export default function AnalyticsTracker({ pageName }: AnalyticsTrackerProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view
    const trackPageView = async () => {
      try {
        await fetch('/api/analytics/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'pageview',
            page: pageName,
            path: pathname,
            referrer: document.referrer,
            userAgent: navigator.userAgent
          })
        });
      } catch (error) {
        console.error('Error tracking page view:', error);
      }
    };

    trackPageView();
  }, [pageName, pathname]);

  return null; // This component doesn't render anything
}
