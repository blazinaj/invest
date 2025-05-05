import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const PortfolioChart: React.FC = () => {
  // Sample data for the chart
  const data = [
    { name: 'Jan', value: 20000 },
    { name: 'Feb', value: 21200 },
    { name: 'Mar', value: 20800 },
    { name: 'Apr', value: 22400 },
    { name: 'May', value: 21900 },
    { name: 'Jun', value: 23100 },
    { name: 'Jul', value: 24800 },
    { name: 'Aug', value: 24300 },
    { name: 'Sep', value: 24650 },
  ];

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-md border border-gray-200">
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-lg font-semibold text-gray-900">
            ${payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
          />
          <YAxis 
            domain={['dataMin - 1000', 'dataMax + 1000']}
            hide={true}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563EB"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, fill: '#2563EB', stroke: 'white', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PortfolioChart;