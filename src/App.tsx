import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Dashboard from './pages/Dashboard';
import Discover from './pages/Discover';
import StockDetail from './pages/StockDetail';
import Watchlist from './pages/Watchlist';
import Learn from './pages/Learn';
import Account from './pages/Account';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="discover" element={<Discover />} />
          <Route path="stocks/:symbol" element={<StockDetail />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="learn" element={<Learn />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;