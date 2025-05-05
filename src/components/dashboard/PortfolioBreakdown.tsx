import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const PortfolioBreakdown: React.FC = () => {
  // Sample data for portfolio breakdown
  const data = [
    { name: 'Stocks', value: 14790.45, color: '#3B82F6' },
    { name: 'ETFs', value: 7395.22, color: '#10B981' },
    { name: 'Crypto', value: 1232.54, color: '#F59E0B' },
    { name: 'Cash', value: 1232.54, color: '#6B7280' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Portfolio Breakdown</h3>
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            See all
            <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chart */}
          <div className="flex items-center justify-center">
            <div className="w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Legend & stats */}
          <div>
            <ul className="space-y-3">
              {data.map((item, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: item.color }}
                    ></span>
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    ${item.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Total Value</span>
                <span className="text-base font-semibold text-gray-900">
                  $24,650.75
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBreakdown;