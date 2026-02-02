export interface PageView {
  page: string;
  views: number;
}

export interface TrafficSource {
  source: string;
  users: number;
}

export interface DailyData {
  date: string;
  views: number;
  uniqueVisitors: number;
}

export interface TopPage {
  page: string;
  count: number;
}

export interface ConversionType {
  type: string;
  count: number;
}

export interface TimeSeriesData {
  date: string;
  pageViews: number;
  conversions: number;
}

export interface AnalyticsStats {
  totalPageViews: number;
  uniqueVisitors: number;
  avgSessionDuration: number;
  bounceRate: number;
  topPages: PageView[];
  trafficSources: TrafficSource[];
  dailyData: DailyData[];
  pageViews: {
    total: number;
    last7Days: number;
    topPages: TopPage[];
  };
  conversions: {
    total: number;
    last7Days: number;
    byType: ConversionType[];
  };
  timeSeries: TimeSeriesData[];
}
