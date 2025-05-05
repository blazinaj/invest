import React from 'react';

const UserAvatar: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="hidden md:block">
        <span className="text-sm font-medium text-gray-700 mr-2">John Doe</span>
      </div>
      <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-semibold text-sm">
        JD
      </div>
    </div>
  );
};

export default UserAvatar;