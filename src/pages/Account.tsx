import React from 'react';
import { User, CreditCard, Bell, Shield, Link, Mail, ChevronRight } from 'lucide-react';

const Account: React.FC = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    joinDate: 'March 2023',
    accountType: 'Personal Investment',
    twoFactorEnabled: true,
  };

  // Sample account settings sections
  const sections = [
    {
      id: 'profile',
      title: 'Profile Information',
      icon: <User size={20} className="text-primary-600" />,
      items: [
        { id: 'personal', name: 'Personal Information', description: 'Update your personal details' },
        { id: 'contact', name: 'Contact Information', description: 'Manage your contact preferences' },
        { id: 'preferences', name: 'Preferences', description: 'Set your app preferences' },
      ],
    },
    {
      id: 'security',
      title: 'Security',
      icon: <Shield size={20} className="text-primary-600" />,
      items: [
        { id: 'password', name: 'Password', description: 'Update your password' },
        { id: 'twoFactor', name: 'Two-Factor Authentication', description: 'Enhance your account security' },
        { id: 'sessions', name: 'Active Sessions', description: 'Manage your active sessions' },
      ],
    },
    {
      id: 'payment',
      title: 'Payment Methods',
      icon: <CreditCard size={20} className="text-primary-600" />,
      items: [
        { id: 'cards', name: 'Payment Cards', description: 'Manage your payment methods' },
        { id: 'bank', name: 'Bank Accounts', description: 'Connect and manage bank accounts' },
        { id: 'billing', name: 'Billing History', description: 'View your past transactions' },
      ],
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: <Bell size={20} className="text-primary-600" />,
      items: [
        { id: 'email', name: 'Email Notifications', description: 'Manage email alerts' },
        { id: 'push', name: 'Push Notifications', description: 'Configure mobile notifications' },
        { id: 'marketing', name: 'Marketing Preferences', description: 'Update your marketing preferences' },
      ],
    },
    {
      id: 'connected',
      title: 'Connected Accounts',
      icon: <Link size={20} className="text-primary-600" />,
      items: [
        { id: 'social', name: 'Social Accounts', description: 'Connect your social media accounts' },
        { id: 'external', name: 'External Brokerages', description: 'Link external investment accounts' },
      ],
    },
  ];

  // Sample account activity
  const accountActivity = [
    { id: 1, action: 'Password Changed', date: '2023-09-15T10:30:00Z', ipAddress: '198.51.100.42' },
    { id: 2, action: 'Login', date: '2023-09-14T08:45:00Z', ipAddress: '198.51.100.42' },
    { id: 3, action: 'Profile Updated', date: '2023-09-10T14:22:00Z', ipAddress: '198.51.100.42' },
    { id: 4, action: 'Login', date: '2023-09-08T09:15:00Z', ipAddress: '203.0.113.29' },
  ];

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account information and preferences
        </p>
      </div>

      {/* Account summary */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Account Summary</h2>
        </div>
        <div className="px-6 py-5">
          <div className="flex items-center">
            <div className="h-16 w-16 rounded-full bg-primary-600 flex items-center justify-center text-white text-xl font-bold">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
              <div className="mt-1 text-sm text-gray-500 flex items-center">
                <Mail size={16} className="mr-1" /> {user.email}
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Account Type</h4>
              <p className="mt-1 text-sm text-gray-900">{user.accountType}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Member Since</h4>
              <p className="mt-1 text-sm text-gray-900">{user.joinDate}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Phone Number</h4>
              <p className="mt-1 text-sm text-gray-900">{user.phone}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Two-Factor Authentication</h4>
              <p className="mt-1 text-sm text-gray-900">
                {user.twoFactorEnabled ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                    Enabled
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-error-100 text-error-800">
                    Disabled
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Settings sections */}
      {sections.map((section) => (
        <div key={section.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <div className="flex items-center">
              <div className="mr-3">
                {section.icon}
              </div>
              <h2 className="text-lg font-medium text-gray-900">{section.title}</h2>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {section.items.map((item) => (
              <div key={item.id} className="px-6 py-5 flex items-center justify-between hover:bg-gray-50">
                <div>
                  <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                </div>
                <button className="text-primary-600 hover:text-primary-800">
                  <ChevronRight size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Recent account activity */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Account Activity</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {accountActivity.map((activity) => (
            <div key={activity.id} className="px-6 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="mt-1 text-xs text-gray-500">
                    {formatDate(activity.date)} • IP: {activity.ipAddress}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="px-6 py-4 text-center">
            <button className="text-sm font-medium text-primary-600 hover:text-primary-700">
              View All Activity
            </button>
          </div>
        </div>
      </div>

      {/* Danger zone */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-error-200">
        <div className="px-6 py-5 border-b border-error-200 bg-error-50">
          <h2 className="text-lg font-medium text-error-800">Danger Zone</h2>
        </div>
        <div className="px-6 py-5">
          <h3 className="text-base font-medium text-gray-900">Delete Account</h3>
          <p className="mt-1 text-sm text-gray-500">
            Once you delete your account, there is no going back. All of your data will be permanently removed.
          </p>
          <div className="mt-4">
            <button className="inline-flex items-center px-4 py-2 border border-error-300 shadow-sm text-sm font-medium rounded-md text-error-700 bg-white hover:bg-error-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-error-500">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;