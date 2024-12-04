import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Home from './pages/Home';
import CarbonCalculator from './components/Calculator/CarbonCalculator';
import { useThemeStore } from './store/themeStore';

function App() {
  const { isDarkMode } = useThemeStore();

  return (
    <Router>
      <div className={isDarkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<CarbonCalculator />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;