import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Home from './pages/Home';
import CarbonCalculator from './components/Calculator/CarbonCalculator';
import { useThemeStore } from './store/themeStore';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Toaster } from 'react-hot-toast';
import { Resources } from './components/Resources/Resources';
import { WindPower } from './components/Solutions/WindPower';
import { SolarEnergy } from './components/Solutions/SolarEnergy';
import { Hydroelectric } from './components/Solutions/Hydroelectric';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const { isDarkMode } = useThemeStore();

  return (
    <Router>
      <div className={isDarkMode ? 'dark' : ''}>
        <Toaster position="top-right" />
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<CarbonCalculator />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/solutions/wind" element={<WindPower />} />
            <Route path="/solutions/solar" element={<SolarEnergy />} />
            <Route path="/solutions/hydro" element={<Hydroelectric />} />
          </Routes>
        </div>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;