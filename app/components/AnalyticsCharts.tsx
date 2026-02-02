'use client';

import { AnalyticsStats } from '@/types/analytics';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface AnalyticsChartsProps {
  stats: AnalyticsStats;
}

const COLORS = ['#000000', '#4B5563', '#6B7280', '#9CA3AF', '#D1D5DB'];

export default function AnalyticsCharts({ stats }: AnalyticsChartsProps) {
  // Format date for display
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Prepare conversion types data for pie chart
  const conversionTypeData = stats.conversions.byType.map(item => ({
    name: item.type.replace('_', ' ').toUpperCase(),
    value: item.count
  }));

  return (
    <div className="space-y-6">
      {/* Page Views & Conversions Trend */}
      <div className="bg-white border border-black/10 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-black mb-6">
          Activity Trend (Last 14 Days)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={stats.timeSeries}>
            <defs>
              <linearGradient id="colorPageViews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#000000" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#000000" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorConversions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6B7280" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#6B7280" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="date"
              tickFormatter={formatDate}
              stroke="#9CA3AF"
              style={{ fontSize: '12px' }}
            />
            <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px'
              }}
              labelFormatter={(label) => `Date: ${formatDate(label)}`}
            />
            <Legend
              wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }}
            />
            <Area
              type="monotone"
              dataKey="pageViews"
              stroke="#000000"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPageViews)"
              name="Page Views"
            />
            <Area
              type="monotone"
              dataKey="conversions"
              stroke="#6B7280"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorConversions)"
              name="Conversions"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages Bar Chart */}
        {stats.pageViews.topPages.length > 0 && (
          <div className="bg-white border border-black/10 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-black mb-6">
              Top Pages
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={stats.pageViews.topPages}
                layout="vertical"
                margin={{ left: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                <YAxis
                  dataKey="page"
                  type="category"
                  width={100}
                  stroke="#9CA3AF"
                  style={{ fontSize: '11px' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                  cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                />
                <Bar dataKey="count" fill="#000000" radius={[0, 8, 8, 0]} name="Views" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Conversion Types Pie Chart */}
        {conversionTypeData.length > 0 && (
          <div className="bg-white border border-black/10 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-black mb-6">
              Conversion Breakdown
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={conversionTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${((percent || 0) * 100).toFixed(0)}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {conversionTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
