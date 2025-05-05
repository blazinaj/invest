import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, LineChart, BookOpen, Heart, Settings } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <Home size={20} /> },
    { name: 'Discover', path: '/discover', icon: <Compass size={20} /> },
    { name: 'Watchlist', path: '/watchlist', icon: <Heart size={20} /> },
    { name: 'Learn', path: '/learn', icon: <BookOpen size={20} /> },
    { name: 'Account', path: '/account', icon: <Settings size={20} /> },
  ];

  return (
    <aside
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-40 lg:translate-x-0 transform transition-transform duration-300 ease-in-out lg:relative lg:inset-0 w-64 bg-white border-r border-gray-200 lg:block`}
    >
      <div className="h-full flex flex-col">
        {/* Sidebar header */}
        <div className="h-16 flex items-center justify-center border-b border-gray-200">
          <div className="flex items-center">
            <LineChart className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Invest</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-2 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                } group flex items-center px-4 py-3 text-sm font-medium rounded-md transition-all`
              }
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="mt-auto p-4 border-t border-gray-200">
          <div className="bg-primary-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-primary-800">Upgrade to Pro</h3>
            <p className="mt-1 text-xs text-gray-500">
              Get advanced features and commission-free trades
            </p>
            <button className="mt-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;