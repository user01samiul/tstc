'use client';

import { useEffect, useState } from 'react';
import { AnalyticsStats } from '@/types/analytics';
import AnalyticsCharts from './AnalyticsCharts';

interface DashboardAnalyticsProps {
  initialStats?: {
    totalPageViews: number;
    pageViewsLast7Days: number;
    totalConversions: number;
    conversionsLast7Days: number;
    topPages: Array<{ _id: string; count: number }>;
  };
}

export default function DashboardAnalytics({ initialStats }: DashboardAnalyticsProps) {
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch('/api/analytics');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching analytics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="bg-white border border-black/10 p-6 rounded-xl">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="bg-white border border-black/10 p-6 rounded-xl">
        <div className="text-center py-12 text-black/50 text-sm">
          Failed to load analytics data
        </div>
      </div>
    );
  }

  const { totalPageViews, pageViewsLast7Days, totalConversions, conversionsLast7Days } =
    initialStats || {};

  return (
    <>
      {/* Analytics Overview Section */}
      <div className="bg-white border border-black/10 p-6 rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-black">Analytics Overview</h2>
          <svg
            className="w-6 h-6 text-black/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Total Page Views */}
          <div className="border border-black/5 p-4 rounded-lg">
            <p className="text-xs font-medium text-black/50 mb-2">Total Page Views</p>
            <p className="text-2xl font-bold text-black mb-1">
              {stats.pageViews.total.toLocaleString()}
            </p>
            <p className="text-xs text-black/40">
              {stats.pageViews.last7Days} in last 7 days
            </p>
          </div>

          {/* Total Conversions */}
          <div className="border border-black/5 p-4 rounded-lg">
            <p className="text-xs font-medium text-black/50 mb-2">Total Conversions</p>
            <p className="text-2xl font-bold text-black mb-1">
              {stats.conversions.total.toLocaleString()}
            </p>
            <p className="text-xs text-black/40">
              {stats.conversions.last7Days} in last 7 days
            </p>
          </div>

          {/* Conversion Rate */}
          <div className="border border-black/5 p-4 rounded-lg">
            <p className="text-xs font-medium text-black/50 mb-2">Conversion Rate</p>
            <p className="text-2xl font-bold text-black mb-1">
              {stats.pageViews.total > 0
                ? ((stats.conversions.total / stats.pageViews.total) * 100).toFixed(1)
                : 0}
              %
            </p>
            <p className="text-xs text-black/40">Overall conversion</p>
          </div>

          {/* Weekly Trend */}
          <div className="border border-black/5 p-4 rounded-lg">
            <p className="text-xs font-medium text-black/50 mb-2">Weekly Trend</p>
            <p className="text-2xl font-bold text-black mb-1">
              {stats.pageViews.last7Days > 0 ? '+' : ''}
              {stats.pageViews.last7Days}
            </p>
            <p className="text-xs text-black/40">Views this week</p>
          </div>
        </div>

        {stats.pageViews.total === 0 && stats.conversions.total === 0 && (
          <div className="text-center py-8 text-black/50 text-sm">
            No analytics data yet. Start tracking visits and conversions to see insights here.
          </div>
        )}
      </div>

      {/* Charts Section */}
      {(stats.pageViews.total > 0 || stats.conversions.total > 0) && (
        <AnalyticsCharts stats={stats} />
      )}
    </>
  );
}
