import React from 'react';
import { ArrowUp, ArrowDown, Filter, Search, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Watchlist: React.FC = () => {
  // Sample watchlist data
  const watchlistItems = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 187.32, change: 1.28, changePercent: 0.69, marketCap: '2.97T', addedDate: '2023-08-15' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 420.21, change: 3.45, changePercent: 0.83, marketCap: '3.12T', addedDate: '2023-08-10' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 158.75, change: -1.25, changePercent: -0.78, marketCap: '1.98T', addedDate: '2023-07-22' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 180.75, change: 2.10, changePercent: 1.17, marketCap: '1.87T', addedDate: '2023-06-30' },
    { symbol: 'TSLA', name: 'Tesla, Inc.', price: 237.49, change: -5.25, changePercent: -2.16, marketCap: '755.3B', addedDate: '2023-06-15' },
    { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 124.04, change: 2.32, changePercent: 1.90, marketCap: '3.05T', addedDate: '2023-05-10' },
    { symbol: 'META', name: 'Meta Platforms Inc.', price: 515.83, change: 4.27, changePercent: 0.84, marketCap: '1.31T', addedDate: '2023-04-05' },
  ];

  // Empty state
  const isEmpty = false; // Change to true to test empty state

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Watchlist</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track your favorite stocks and investments
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            Add Symbol
          </button>
        </div>
      </div>

      {/* Search and filter */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Search your watchlist"
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-4">
              <button className="w-full sm:w-auto inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <Filter size={16} className="mr-2 text-gray-500" />
                Sort By
              </button>
            </div>
          </div>
        </div>

        {/* Empty state */}
        {isEmpty && (
          <div className="text-center py-12 px-4">
            <div className="inline-block p-4 rounded-full bg-gray-100">
              <Search className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No stocks in your watchlist</h3>
            <p className="mt-2 text-sm text-gray-500">
              Start adding stocks to keep track of their performance.
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Add Your First Stock
              </button>
            </div>
          </div>
        )}

        {/* Watchlist items */}
        {!isEmpty && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Symbol / Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Last Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Change
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Market Cap
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Added
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {watchlistItems.map((item) => (
                  <tr key={item.symbol} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link
                        to={`/stocks/${item.symbol}`}
                        className="flex items-start"
                      >
                        <div>
                          <div className="text-sm font-medium text-gray-900">{item.symbol}</div>
                          <div className="text-sm text-gray-500">{item.name}</div>
                        </div>
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900">${item.price.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div
                        className={`flex items-center justify-end text-sm ${
                          item.change >= 0 ? 'text-success-700' : 'text-error-700'
                        }`}
                      >
                        {item.change >= 0 ? (
                          <ArrowUp size={14} />
                        ) : (
                          <ArrowDown size={14} />
                        )}
                        <span>
                          {Math.abs(item.changePercent).toFixed(2)}%
                        </span>
                      </div>
                    </td>
                    <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900">{item.marketCap}</div>
                    </td>
                    <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-500">{formatDate(item.addedDate)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                      <button className="text-gray-400 hover:text-error-600">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;