import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, Home, Compass, LineChart, BookOpen, Heart, Settings } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <Home size={20} /> },
    { name: 'Discover', path: '/discover', icon: <Compass size={20} /> },
    { name: 'Watchlist', path: '/watchlist', icon: <Heart size={20} /> },
    { name: 'Learn', path: '/learn', icon: <BookOpen size={20} /> },
    { name: 'Account', path: '/account', icon: <Settings size={20} /> },
  ];

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />
      
      <div className="absolute inset-0 flex z-50">
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={onClose}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <LineChart className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Invest</span>
            </div>
            
            <nav className="mt-5 px-2 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    } group flex items-center px-4 py-3 text-base font-medium rounded-md`
                  }
                  onClick={onClose}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
          
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-lg font-medium text-white">JD</span>
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">John Doe</p>
                  <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                    View profile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;