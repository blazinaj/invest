import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Bell, Search, Sun } from 'lucide-react';
import UserAvatar from '../ui/UserAvatar';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className="bg-white border-b border-gray-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side */}
          <div className="flex items-center">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden"
              onClick={onMenuClick}
            >
              <Menu size={24} />
            </button>
            <Link to="/" className="flex-shrink-0 flex items-center ml-4 lg:ml-0">
              <h1 className="text-primary-800 text-xl font-bold">Invest</h1>
            </Link>
          </div>

          {/* Center - Search */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Search stocks, ETFs, crypto..."
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Sun size={20} />
            </button>
            <button
              type="button"
              className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Bell size={20} />
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-error-500 ring-2 ring-white"></span>
            </button>
            <div className="ml-3 relative">
              <UserAvatar />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;