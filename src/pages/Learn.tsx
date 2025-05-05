import React from 'react';
import { BookOpen, TrendingUp, BarChart2, DollarSign, Lock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Learn: React.FC = () => {
  // Sample categories
  const categories = [
    { id: 'basics', name: 'Investing Basics', icon: <BookOpen size={20} /> },
    { id: 'strategies', name: 'Investment Strategies', icon: <TrendingUp size={20} /> },
    { id: 'analysis', name: 'Market Analysis', icon: <BarChart2 size={20} /> },
    { id: 'advanced', name: 'Advanced Concepts', icon: <DollarSign size={20} /> },
  ];

  // Sample articles
  const articles = [
    {
      id: 1,
      title: 'Getting Started with Investing',
      description: 'Learn the fundamental concepts of investing and how to build your first portfolio.',
      category: 'basics',
      readTime: '5 min read',
      premium: false,
    },
    {
      id: 2,
      title: 'Understanding Stock Market Indices',
      description: 'An introduction to major market indices and what they tell us about the economy.',
      category: 'basics',
      readTime: '7 min read',
      premium: false,
    },
    {
      id: 3,
      title: 'Fundamental vs. Technical Analysis',
      description: 'Explore the two major approaches to analyzing investment opportunities.',
      category: 'analysis',
      readTime: '10 min read',
      premium: true,
    },
    {
      id: 4,
      title: 'Building a Diversified Portfolio',
      description: 'Strategies for creating a balanced investment portfolio to manage risk.',
      category: 'strategies',
      readTime: '8 min read',
      premium: false,
    },
    {
      id: 5,
      title: 'Tax-Efficient Investing',
      description: 'Learn how to optimize your investments for tax efficiency and maximize returns.',
      category: 'advanced',
      readTime: '12 min read',
      premium: true,
    },
    {
      id: 6,
      title: 'Introduction to ETFs',
      description: 'Understand what ETFs are and how they can be used in your investment strategy.',
      category: 'basics',
      readTime: '6 min read',
      premium: false,
    },
  ];

  // Featured courses
  const courses = [
    {
      id: 1,
      title: 'Investing 101',
      description: 'A comprehensive introduction to investing for beginners.',
      lessons: 8,
      image: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'Stock Market Strategies',
      description: 'Learn practical strategies for stock market investing.',
      lessons: 12,
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'Retirement Planning',
      description: 'Plan for a secure financial future with retirement investing.',
      lessons: 10,
      image: 'https://images.pexels.com/photos/7876398/pexels-photo-7876398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Learning Center</h1>
        <p className="mt-1 text-sm text-gray-500">
          Enhance your investment knowledge with educational resources
        </p>
      </div>

      {/* Hero banner */}
      <div className="bg-primary-800 rounded-xl overflow-hidden shadow-lg">
        <div className="relative">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:py-20 z-10 relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              <span className="block">Become a Better Investor</span>
              <span className="block">With Our Educational Resources</span>
            </h2>
            <p className="mt-4 text-lg text-primary-100 max-w-xl">
              Access expert-led courses, articles, and tutorials designed to help you make more informed investment decisions.
            </p>
            <div className="mt-8">
              <Link
                to="#"
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-800 bg-white hover:bg-primary-50 shadow-sm"
              >
                Start Learning
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-800 via-primary-700 to-transparent opacity-90"></div>
        </div>
      </div>

      {/* Category blocks */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Browse by Topic</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`#${category.id}`}
              className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-primary-300"
            >
              <div className="h-12 w-12 rounded-full flex items-center justify-center bg-primary-100 text-primary-600 group-hover:bg-primary-200">
                {category.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured courses */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Featured Courses</h2>
          <Link
            to="#"
            className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center"
          >
            View All Courses <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 transition-all hover:shadow-md">
              <div className="h-40 w-full overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {course.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{course.lessons} lessons</span>
                  <button className="text-sm font-medium text-primary-600 hover:text-primary-700">
                    Start Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Articles */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Latest Articles</h2>
          <Link
            to="#"
            className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center"
          >
            View All Articles <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <ul className="divide-y divide-gray-200">
            {articles.map((article) => (
              <li key={article.id}>
                <Link to="#" className="block hover:bg-gray-50">
                  <div className="px-6 py-5">
                    <div className="flex justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                            {categories.find(cat => cat.id === article.category)?.name}
                          </span>
                          {article.premium && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
                              <Lock size={12} className="mr-1" /> Premium
                            </span>
                          )}
                        </div>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">
                          {article.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {article.description}
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0 flex items-center">
                        <div className="inline-flex text-sm text-gray-500">{article.readTime}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Membership banner */}
      <div className="bg-gradient-to-r from-accent-500 to-amber-500 rounded-xl overflow-hidden shadow-lg">
        <div className="px-6 py-8 sm:px-12 sm:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Upgrade to Premium
              </h2>
              <p className="mt-2 text-lg text-white opacity-80 max-w-2xl">
                Get unlimited access to all courses, premium articles, and exclusive webinars.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-amber-600 bg-white hover:bg-amber-50">
                <Star size={18} className="mr-2" />
                Join Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;