import React from 'react';
import { ArrowRight, ArrowUp, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const WatchlistPreview: React.FC = () => {
  const watchlistItems = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 187.32, change: 1.28, changePercent: 0.69 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 420.21, change: 3.45, changePercent: 0.83 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 158.75, change: -1.25, changePercent: -0.78 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 180.75, change: 2.10, changePercent: 1.17 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Watchlist</h3>
          <Link
            to="/watchlist"
            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            See all
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="mt-4">
          <ul className="space-y-3">
            {watchlistItems.map((item) => (
              <li key={item.symbol} className="group">
                <Link to={`/stocks/${item.symbol}`} className="block hover:bg-gray-50 -mx-2 px-2 py-2 rounded-md">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">{item.symbol}</span>
                      <span className="text-xs text-gray-500">{item.name}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-medium text-gray-900">
                        ${item.price.toFixed(2)}
                      </span>
                      <div
                        className={`flex items-center text-xs ${
                          item.change >= 0 ? 'text-success-700' : 'text-error-700'
                        }`}
                      >
                        {item.change >= 0 ? (
                          <ArrowUp size={12} />
                        ) : (
                          <ArrowDown size={12} />
                        )}
                        <span className="ml-1">
                          {Math.abs(item.changePercent).toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <button className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            Add Symbol
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchlistPreview;