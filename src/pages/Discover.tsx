import React, { useState } from 'react';
import { Search, Filter, ArrowUp, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Discover: React.FC = () => {
  const [activeTab, setActiveTab] = useState('stocks');
  
  // Sample stock data
  const stocksData = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 187.32, change: 1.28, changePercent: 0.69, marketCap: '2.97T', volume: '62.8M' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 420.21, change: 3.45, changePercent: 0.83, marketCap: '3.12T', volume: '28.6M' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 158.75, change: -1.25, changePercent: -0.78, marketCap: '1.98T', volume: '25.4M' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 180.75, change: 2.10, changePercent: 1.17, marketCap: '1.87T', volume: '37.2M' },
    { symbol: 'TSLA', name: 'Tesla, Inc.', price: 237.49, change: -5.25, changePercent: -2.16, marketCap: '755.3B', volume: '112.4M' },
    { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 124.04, change: 2.32, changePercent: 1.90, marketCap: '3.05T', volume: '185.7M' },
    { symbol: 'META', name: 'Meta Platforms Inc.', price: 515.83, change: 4.27, changePercent: 0.84, marketCap: '1.31T', volume: '13.8M' },
    { symbol: 'BRK.B', name: 'Berkshire Hathaway', price: 438.23, change: -1.02, changePercent: -0.23, marketCap: '958.7B', volume: '3.2M' },
  ];
  
  // Sample ETF data
  const etfsData = [
    { symbol: 'SPY', name: 'SPDR S&P 500 ETF', price: 518.65, change: 2.55, changePercent: 0.49, aum: '459.3B', expense: '0.09%' },
    { symbol: 'VOO', name: 'Vanguard S&P 500 ETF', price: 476.89, change: 2.32, changePercent: 0.49, aum: '342.8B', expense: '0.03%' },
    { symbol: 'QQQ', name: 'Invesco QQQ Trust', price: 455.72, change: 3.84, changePercent: 0.85, aum: '231.5B', expense: '0.20%' },
    { symbol: 'VTI', name: 'Vanguard Total Stock Market ETF', price: 264.34, change: 1.12, changePercent: 0.43, aum: '367.2B', expense: '0.03%' },
    { symbol: 'ARKK', name: 'ARK Innovation ETF', price: 50.23, change: -1.23, changePercent: -2.39, aum: '7.2B', expense: '0.75%' },
  ];
  
  // Sample crypto data
  const cryptoData = [
    { symbol: 'BTC', name: 'Bitcoin', price: 66245.78, change: 1245.32, changePercent: 1.92, marketCap: '1.30T', volume: '34.5B' },
    { symbol: 'ETH', name: 'Ethereum', price: 3521.67, change: 42.31, changePercent: 1.22, marketCap: '422.4B', volume: '18.7B' },
    { symbol: 'SOL', name: 'Solana', price: 158.23, change: -4.56, changePercent: -2.80, marketCap: '70.2B', volume: '5.3B' },
    { symbol: 'XRP', name: 'Ripple', price: 0.5672, change: 0.0123, changePercent: 2.22, marketCap: '31.5B', volume: '2.1B' },
  ];
  
  const tabData = {
    stocks: stocksData,
    etfs: etfsData,
    crypto: cryptoData,
  };
  
  const tabs = [
    { id: 'stocks', label: 'Stocks' },
    { id: 'etfs', label: 'ETFs' },
    { id: 'crypto', label: 'Crypto' },
  ];

  // Selected tab data
  const activeData = tabData[activeTab as keyof typeof tabData];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Discover</h1>
          <p className="mt-1 text-sm text-gray-500">
            Explore stocks, ETFs, and cryptocurrencies
          </p>
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
                placeholder="Search by symbol or company name"
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-4">
              <button className="w-full sm:w-auto inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <Filter size={16} className="mr-2 text-gray-500" />
                Filters
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Results table */}
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
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Change
                </th>
                {activeTab === 'stocks' && (
                  <>
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
                      Volume
                    </th>
                  </>
                )}
                {activeTab === 'etfs' && (
                  <>
                    <th
                      scope="col"
                      className="hidden md:table-cell px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      AUM
                    </th>
                    <th
                      scope="col"
                      className="hidden md:table-cell px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Expense Ratio
                    </th>
                  </>
                )}
                {activeTab === 'crypto' && (
                  <>
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
                      24h Volume
                    </th>
                  </>
                )}
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activeData.map((item: any) => (
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
                    <div className="text-sm text-gray-900">${item.price.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className={`flex items-center justify-end text-sm ${
                      item.change >= 0 ? 'text-success-700' : 'text-error-700'
                    }`}>
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
                  {activeTab === 'stocks' && (
                    <>
                      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-right">
                        <div className="text-sm text-gray-900">{item.marketCap}</div>
                      </td>
                      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-right">
                        <div className="text-sm text-gray-900">{item.volume}</div>
                      </td>
                    </>
                  )}
                  {activeTab === 'etfs' && (
                    <>
                      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-right">
                        <div className="text-sm text-gray-900">{item.aum}</div>
                      </td>
                      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-right">
                        <div className="text-sm text-gray-900">{item.expense}</div>
                      </td>
                    </>
                  )}
                  {activeTab === 'crypto' && (
                    <>
                      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-right">
                        <div className="text-sm text-gray-900">{item.marketCap}</div>
                      </td>
                      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-right">
                        <div className="text-sm text-gray-900">{item.volume}</div>
                      </td>
                    </>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <button className="text-primary-600 hover:text-primary-900">Trade</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{' '}
                <span className="font-medium">{activeData.length}</span> of{' '}
                <span className="font-medium">{activeData.length}</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  &laquo;
                </button>
                <button className="bg-primary-50 border-primary-500 text-primary-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  1
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  &raquo;
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;