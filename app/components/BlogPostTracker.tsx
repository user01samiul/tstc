'use client';

import { useEffect } from 'react';
import { trackConversionClient } from '@/lib/analytics';

interface BlogPostTrackerProps {
  blogTitle: string;
  blogSlug: string;
}

export default function BlogPostTracker({ blogTitle, blogSlug }: BlogPostTrackerProps) {
  useEffect(() => {
    // Track page view
    const trackPageView = async () => {
      try {
        await fetch('/api/analytics/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'pageview',
            page: `Blog: ${blogTitle}`,
            path: `/blog/${blogSlug}`,
            referrer: document.referrer,
            userAgent: navigator.userAgent
          })
        });
      } catch (error) {
        console.error('Error tracking page view:', error);
      }
    };

    // Track blog view conversion
    const trackBlogView = async () => {
      try {
        await trackConversionClient('blog_view', {
          blogTitle,
          blogSlug
        });
      } catch (error) {
        console.error('Error tracking blog view:', error);
      }
    };

    trackPageView();
    trackBlogView();
  }, [blogTitle, blogSlug]);

  return null;
}
