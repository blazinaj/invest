import React from 'react';
import { ArrowRight, TrendingUp, TrendingDown, DollarSign, CreditCard } from 'lucide-react';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'buy',
      symbol: 'AAPL',
      shares: 5,
      price: 187.32,
      date: '2023-09-15T10:30:00Z',
      icon: <TrendingUp className="h-5 w-5 text-success-500" />,
    },
    {
      id: 2,
      type: 'sell',
      symbol: 'GOOGL',
      shares: 2,
      price: 158.75,
      date: '2023-09-10T14:45:00Z',
      icon: <TrendingDown className="h-5 w-5 text-error-500" />,
    },
    {
      id: 3,
      type: 'deposit',
      amount: 1000,
      date: '2023-09-05T09:15:00Z',
      icon: <DollarSign className="h-5 w-5 text-primary-500" />,
    },
    {
      id: 4,
      type: 'dividend',
      symbol: 'MSFT',
      amount: 12.50,
      date: '2023-09-01T08:00:00Z',
      icon: <CreditCard className="h-5 w-5 text-accent-500" />,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getActivityDescription = (activity: any) => {
    switch (activity.type) {
      case 'buy':
        return `Bought ${activity.shares} shares of ${activity.symbol} at $${activity.price.toFixed(2)}`;
      case 'sell':
        return `Sold ${activity.shares} shares of ${activity.symbol} at $${activity.price.toFixed(2)}`;
      case 'deposit':
        return `Deposited $${activity.amount.toFixed(2)} to your account`;
      case 'dividend':
        return `Received $${activity.amount.toFixed(2)} dividend from ${activity.symbol}`;
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            See all
            <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="mt-4">
          <ul className="divide-y divide-gray-200">
            {activities.map((activity) => (
              <li key={activity.id} className="py-4 flex items-start">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    {activity.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {getActivityDescription(activity)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {formatDate(activity.date)}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <button className="text-sm font-medium text-primary-600 hover:text-primary-700">
                    View
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;