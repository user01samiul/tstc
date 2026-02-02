'use client';

import { useEffect } from 'react';
import { trackConversionClient } from '@/lib/analytics';

interface CourseTrackerProps {
  courseName: string;
  courseId: string;
}

export default function CourseTracker({ courseName, courseId }: CourseTrackerProps) {
  useEffect(() => {
    // Track page view
    const trackPageView = async () => {
      try {
        await fetch('/api/analytics/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'pageview',
            page: `Course: ${courseName}`,
            path: `/courses/${courseId}`,
            referrer: document.referrer,
            userAgent: navigator.userAgent
          })
        });
      } catch (error) {
        console.error('Error tracking page view:', error);
      }
    };

    trackPageView();
  }, [courseName, courseId]);

  return null;
}
