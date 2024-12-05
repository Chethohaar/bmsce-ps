import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Leaf } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';
import ThemeToggle from '../ThemeToggle';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Solutions',
    href: '#',
    dropdownItems: [
      { label: 'Solar Energy', href: '/solutions/solar' },
      { label: 'Wind Power', href: '/solutions/wind' },
      { label: 'Hydroelectric', href: '/solutions/hydro' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
  },
  {
    label: 'CFC',
    href: '/calculator',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isDarkMode } = useThemeStore();

  const handleDropdownClick = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-500" />
            <span className="font-bold text-xl">EcoTech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative dropdown-container">
                <div
                  className="flex items-center space-x-1 cursor-pointer"
                  onClick={() => item.dropdownItems && handleDropdownClick(item.label)}
                >
                  {item.dropdownItems ? (
                    <button className="hover:text-green-500 transition-colors flex items-center space-x-1">
                      <span>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="hover:text-green-500 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
                {item.dropdownItems && activeDropdown === item.label && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-green-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdownItems && (
                  <div className="pl-4">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.href}
                        className="block px-3 py-2 text-sm hover:text-green-500"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;