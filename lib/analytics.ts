/**
 * Client-side analytics tracking utilities
 */

/**
 * Track a conversion event from the client side
 * @param type - The type of conversion (e.g., 'blog_view', 'course_view', 'booking')
 * @param metadata - Additional metadata about the conversion
 */
export async function trackConversionClient(
  type: string,
  metadata?: Record<string, any>,
): Promise<void> {
  try {
    await fetch("/api/analytics/conversion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        metadata,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer,
      }),
    });
  } catch (error) {
    console.error("Error tracking conversion:", error);
    // Fail silently to not disrupt user experience
  }
}

/**
 * Track a page view event from the client side
 * @param page - The page name or title
 * @param path - The page path
 */
export async function trackPageViewClient(
  page: string,
  path: string,
): Promise<void> {
  try {
    await fetch("/api/analytics/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "pageview",
        page,
        path,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (error) {
    console.error("Error tracking page view:", error);
    // Fail silently to not disrupt user experience
  }
}
