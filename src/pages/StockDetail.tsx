import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ArrowUp, ArrowDown, TrendingUp, TrendingDown, Info, FilePlus, Share2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// Mock data for the stock
const stocksData: Record<string, any> = {
  AAPL: {
    name: 'Apple Inc.',
    price: 187.32,
    change: 1.28,
    changePercent: 0.69,
    marketCap: '2.97T',
    volume: '62.8M',
    avgVolume: '57.2M',
    high: 188.45,
    low: 185.83,
    open: 186.04,
    prevClose: 186.04,
    pe: 30.5,
    dividend: '0.96 (0.51%)',
    about: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories.',
    news: [
      {
        id: 1,
        title: 'Apple unveils new AI features for iPhone',
        source: 'Financial Times',
        time: '2h ago',
      },
      {
        id: 2,
        title: 'Apple reports strong quarterly earnings, beating expectations',
        source: 'Wall Street Journal',
        time: '1d ago',
      },
      {
        id: 3,
        title: 'Supply chain issues resolved as Apple ramps up production',
        source: 'Bloomberg',
        time: '2d ago',
      },
    ],
  },
  MSFT: {
    name: 'Microsoft Corporation',
    price: 420.21,
    change: 3.45,
    changePercent: 0.83,
    marketCap: '3.12T',
    volume: '28.6M',
    avgVolume: '25.3M',
    high: 421.35,
    low: 417.25,
    open: 417.80,
    prevClose: 416.76,
    pe: 36.8,
    dividend: '3.00 (0.71%)',
    about: 'Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide. The company operates in three segments: Productivity and Business Processes, Intelligent Cloud, and More Personal Computing.',
    news: [
      {
        id: 1,
        title: 'Microsoft expands cloud infrastructure with new data centers',
        source: 'Reuters',
        time: '3h ago',
      },
      {
        id: 2,
        title: 'Microsoft\'s AI investments pay off as revenue surges',
        source: 'CNBC',
        time: '1d ago',
      },
      {
        id: 3,
        title: 'New Microsoft Surface devices announced with AI capabilities',
        source: 'The Verge',
        time: '3d ago',
      },
    ],
  },
  // Add more stocks as needed...
};

// Chart data
const generateChartData = () => {
  const data = [];
  let value = 180;
  
  for (let i = 0; i < 30; i++) {
    const change = (Math.random() - 0.45) * 3;
    value = Math.max(value + change, 170);
    value = Math.min(value, 190);
    
    data.push({
      date: new Date(2023, 8, i + 1).toISOString().split('T')[0],
      value: value,
    });
  }
  
  return data;
};

const StockDetail: React.FC = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const [timeRange, setTimeRange] = useState('1M');
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  
  // Handle fallback for unknown symbols
  const stock = symbol ? (stocksData[symbol] || stocksData.AAPL) : stocksData.AAPL;
  const chartData = generateChartData();
  const isPositiveChange = stock.change > 0;
  
  // Tabs for stock information
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data for different tabs
  const timeRanges = ['1D', '1W', '1M', '3M', '6M', 'YTD', '1Y', '5Y'];
  
  // Buy/Sell form states
  const [orderType, setOrderType] = useState('buy');
  const [quantity, setQuantity] = useState(1);
  const [orderTypeOptions] = useState(['Market', 'Limit', 'Stop']);
  const [selectedOrderType, setSelectedOrderType] = useState('Market');
  
  // Custom tooltip component for the chart
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-md border border-gray-200">
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-lg font-semibold text-gray-900">
            ${payload[0].value.toFixed(2)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Stock header */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">
                  {symbol} <span className="text-xl text-gray-500 font-normal ml-2">{stock.name}</span>
                </h1>
                <button
                  className={`ml-3 p-1 rounded-full ${
                    isInWatchlist
                      ? 'text-error-600 hover:text-error-700'
                      : 'text-gray-400 hover:text-gray-500'
                  }`}
                  onClick={() => setIsInWatchlist(!isInWatchlist)}
                >
                  <Heart size={20} fill={isInWatchlist ? 'currentColor' : 'none'} />
                </button>
              </div>
              <div className="flex flex-wrap items-center mt-2">
                <div className="mr-6">
                  <div className="text-3xl font-bold text-gray-900">
                    ${stock.price.toFixed(2)}
                  </div>
                  <div
                    className={`flex items-center mt-1 ${
                      isPositiveChange ? 'text-success-700' : 'text-error-700'
                    }`}
                  >
                    {isPositiveChange ? (
                      <ArrowUp size={16} />
                    ) : (
                      <ArrowDown size={16} />
                    )}
                    <span className="ml-1">
                      ${Math.abs(stock.change).toFixed(2)} (
                      {Math.abs(stock.changePercent).toFixed(2)}%)
                    </span>
                    <span className="ml-1 text-gray-500 text-sm">Today</span>
                  </div>
                </div>
                <div className="mt-2 sm:mt-0">
                  <div className="inline-flex shadow-sm rounded-md">
                    <button
                      className="inline-flex items-center px-4 py-2 rounded-l-md border border-transparent bg-primary-100 text-primary-700 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      <FilePlus size={16} className="mr-2" />
                      Add to List
                    </button>
                    <button
                      className="inline-flex items-center px-3 py-2 rounded-r-md border border-transparent bg-primary-100 text-primary-700 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-2">
              <button
                onClick={() => setOrderType('buy')}
                className="inline-flex items-center px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <TrendingUp size={18} className="mr-2" />
                Buy
              </button>
              <button
                onClick={() => setOrderType('sell')}
                className="inline-flex items-center px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <TrendingDown size={18} className="mr-2" />
                Sell
              </button>
            </div>
          </div>
        </div>

        {/* Stock Chart */}
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.getDate().toString();
                }}
              />
              <YAxis
                domain={['dataMin - 2', 'dataMax + 2']}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
                orientation="right"
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke={isPositiveChange ? '#16A34A' : '#DC2626'}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: isPositiveChange ? '#16A34A' : '#DC2626', stroke: 'white', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Time period selector */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
          <div className="flex space-x-2 overflow-x-auto">
            {timeRanges.map((period) => (
              <button
                key={period}
                onClick={() => setTimeRange(period)}
                className={`px-3 py-1 text-sm font-medium rounded-md ${
                  timeRange === period
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
          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                {['overview', 'statistics', 'financials', 'news', 'analysis'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                      activeTab === tab
                        ? 'border-primary-600 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900">About {stock.name}</h3>
                  <p className="mt-3 text-gray-600">{stock.about}</p>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Market Cap</h4>
                      <p className="mt-1 text-lg font-medium text-gray-900">{stock.marketCap}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">P/E Ratio</h4>
                      <p className="mt-1 text-lg font-medium text-gray-900">{stock.pe}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Dividend</h4>
                      <p className="mt-1 text-lg font-medium text-gray-900">{stock.dividend}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Volume</h4>
                      <p className="mt-1 text-lg font-medium text-gray-900">{stock.volume}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'news' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Recent News</h3>
                  <div className="mt-3 space-y-4">
                    {stock.news.map((item: any) => (
                      <div key={item.id} className="p-4 hover:bg-gray-50 rounded-lg">
                        <h4 className="text-base font-medium text-gray-900">{item.title}</h4>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <span>{item.source}</span>
                          <span className="mx-2">•</span>
                          <span>{item.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'statistics' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Key Statistics</h3>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Open</h4>
                      <p className="mt-1 text-base font-medium text-gray-900">${stock.open}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Previous Close</h4>
                      <p className="mt-1 text-base font-medium text-gray-900">${stock.prevClose}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Day High</h4>
                      <p className="mt-1 text-base font-medium text-gray-900">${stock.high}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Day Low</h4>
                      <p className="mt-1 text-base font-medium text-gray-900">${stock.low}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Volume</h4>
                      <p className="mt-1 text-base font-medium text-gray-900">{stock.volume}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Avg Volume</h4>
                      <p className="mt-1 text-base font-medium text-gray-900">{stock.avgVolume}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Market Cap</h4>
                      <p className="mt-1 text-base font-medium text-gray-900">{stock.marketCap}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">P/E Ratio</h4>
                      <p className="mt-1 text-base font-medium text-gray-900">{stock.pe}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'financials' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Financial Data</h3>
                  <p className="mt-2 text-gray-600">
                    Quarterly financial statements and key metrics will be displayed here.
                  </p>
                </div>
              )}

              {activeTab === 'analysis' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Analyst Ratings</h3>
                  <p className="mt-2 text-gray-600">
                    Analyst recommendations and price targets will be displayed here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right column (1/3 width on large screens) */}
        <div className="space-y-6">
          {/* Trade panel */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setOrderType('buy')}
                  className={`flex-1 py-3 text-center text-sm font-medium ${
                    orderType === 'buy'
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Buy {symbol}
                </button>
                <button
                  onClick={() => setOrderType('sell')}
                  className={`flex-1 py-3 text-center text-sm font-medium ${
                    orderType === 'sell'
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Sell {symbol}
                </button>
              </div>

              <div className="mt-4 space-y-4">
                <div>
                  <label htmlFor="order-type" className="block text-sm font-medium text-gray-700">
                    Order Type
                  </label>
                  <select
                    id="order-type"
                    name="order-type"
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                    value={selectedOrderType}
                    onChange={(e) => setSelectedOrderType(e.target.value)}
                  >
                    {orderTypeOptions.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                    Shares
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                      className="block w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Market Price</span>
                    <span>${stock.price.toFixed(2)}</span>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <span className="font-medium">Estimated Cost</span>
                    <span className="font-medium">
                      ${(stock.price * quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                      orderType === 'buy'
                        ? 'bg-primary-600 hover:bg-primary-700'
                        : 'bg-error-600 hover:bg-error-700'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                  >
                    {orderType === 'buy' ? 'Buy' : 'Sell'} {quantity} {quantity === 1 ? 'Share' : 'Shares'}
                  </button>
                </div>

                <div className="text-xs text-gray-500 flex items-start">
                  <Info size={14} className="mr-1 flex-shrink-0 mt-0.5" />
                  <span>
                    This is a simulated trading experience. No real money is involved.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Similar stocks */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Similar Stocks</h3>
              <div className="mt-4 space-y-3">
                {Object.entries(stocksData)
                  .filter(([key]) => key !== symbol)
                  .slice(0, 3)
                  .map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between py-2">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{key}</div>
                        <div className="text-xs text-gray-500">{value.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                          ${value.price.toFixed(2)}
                        </div>
                        <div
                          className={`flex items-center text-xs ${
                            value.change >= 0 ? 'text-success-700' : 'text-error-700'
                          }`}
                        >
                          {value.change >= 0 ? (
                            <ArrowUp size={12} />
                          ) : (
                            <ArrowDown size={12} />
                          )}
                          <span className="ml-1">{Math.abs(value.changePercent).toFixed(2)}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetail;