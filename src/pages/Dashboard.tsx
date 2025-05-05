import React from 'react';
import { ArrowUp, ArrowDown, Info, ArrowRight } from 'lucide-react';
import PortfolioChart from '../components/dashboard/PortfolioChart';
import PortfolioBreakdown from '../components/dashboard/PortfolioBreakdown';
import WatchlistPreview from '../components/dashboard/WatchlistPreview';
import RecentActivity from '../components/dashboard/RecentActivity';

const Dashboard: React.FC = () => {
  const portfolioValue = 24650.75;
  const portfolioChange = 345.28;
  const portfolioChangePercent = 1.42;
  const isPositiveChange = portfolioChange > 0;

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Monitor your portfolio and market trends
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            Deposit Funds
          </button>
        </div>
      </div>

      {/* Portfolio overview */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center">
                <h2 className="text-3xl font-bold text-gray-900">
                  ${portfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </h2>
                <button
                  className="ml-2 text-gray-400 hover:text-gray-500"
                  title="Portfolio Value"
                >
                  <Info size={16} />
                </button>
              </div>
              <div className={`flex items-center mt-1 ${isPositiveChange ? 'text-success-700' : 'text-error-700'}`}>
                {isPositiveChange ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                <span className="ml-1">
                  ${Math.abs(portfolioChange).toFixed(2)} ({Math.abs(portfolioChangePercent).toFixed(2)}%)
                </span>
                <span className="ml-1 text-gray-500 text-sm">Today</span>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-2">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Buy
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Sell
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Chart */}
        <PortfolioChart />

        {/* Time period selector */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
          <div className="flex space-x-2 overflow-x-auto">
            {['1D', '1W', '1M', '3M', 'YTD', '1Y', 'All'].map((period) => (
              <button
                key={period}
                className={`px-3 py-1 text-sm font-medium rounded-md ${
                  period === '1M'
                    ? 'bg-primary-100 text-primary-800'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Two column layout for desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column (2/3 width on large screens) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Portfolio breakdown */}
          <PortfolioBreakdown />
          
          {/* Recent activity */}
          <RecentActivity />
        </div>

        {/* Right column (1/3 width on large screens) */}
        <div className="space-y-6">
          {/* Watchlist preview */}
          <WatchlistPreview />
          
          {/* Learn card */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Learn to Invest</h3>
              <p className="mt-2 text-sm text-gray-500">
                Explore our educational resources to improve your investing skills.
              </p>
              <div className="mt-4">
                <a
                  href="/learn"
                  className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Go to learning center
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;