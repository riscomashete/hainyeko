import React, { useState } from 'react';
import { Menu, X, GraduationCap, Lock } from 'lucide-react';
import { NavItem, PageView } from '../types';

interface HeaderProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', view: 'home' },
    { label: 'About Us', view: 'about' },
    { label: 'Academics', view: 'academics' },
    { label: 'Calendar', view: 'calendar' },
    { label: 'Admissions', view: 'admissions' },
    { label: 'Contact', view: 'contact' },
    { label: 'Portals', view: 'portals' },
  ];

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-md">
      {/* Top Bar - Green */}
      <div className="bg-school-darkGreen text-white py-2 px-4 text-xs md:text-sm flex justify-between items-center">
        <span className="opacity-90 hidden sm:inline">Opening Minds • Touching Hearts • Building Futures</span>
        <span className="opacity-90 sm:hidden">Tobias Hainyeko CS</span>
        <div className="flex items-center gap-4">
          <span className="opacity-90">+264 61 123 4567</span>
          <button 
            onClick={() => handleNavClick('portals')}
            className="flex items-center gap-1 bg-school-green px-2 py-0.5 rounded text-xs hover:bg-green-600 transition-colors"
          >
            <Lock size={10} /> Login
          </button>
        </div>
      </div>

      {/* Main Nav - White & Yellow accents */}
      <div className="bg-white border-b-4 border-school-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Area */}
            <div 
              className="flex items-center cursor-pointer group" 
              onClick={() => handleNavClick('home')}
            >
              <div className="bg-school-green p-2 rounded-lg mr-3 group-hover:bg-school-darkGreen transition-colors">
                <GraduationCap className="text-school-yellow h-8 w-8" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-serif font-bold text-school-darkGreen leading-tight">
                  Tobias Hainyeko
                </h1>
                <p className="text-xs text-school-green font-medium tracking-wider uppercase">
                  Combined School
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-200 pb-1 border-b-2 
                    ${currentView === item.view 
                      ? 'text-school-darkGreen border-school-yellow' 
                      : 'text-gray-600 border-transparent hover:text-school-green hover:border-school-green'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-school-darkGreen hover:text-school-green focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium
                  ${currentView === item.view
                    ? 'bg-school-green text-white'
                    : 'text-gray-700 hover:bg-school-lightYellow hover:text-school-darkGreen'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};