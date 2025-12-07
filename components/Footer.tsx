import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-school-darkGreen text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-school-yellow">Tobias Hainyeko CS</h3>
            <p className="text-green-100 text-sm leading-relaxed mb-4">
              Dedicated to fostering an environment of academic excellence, discipline, and holistic growth for every learner.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-school-yellow transition"><Facebook size={20} /></a>
              <a href="#" className="text-green-200 hover:text-school-yellow transition"><Twitter size={20} /></a>
              <a href="#" className="text-green-200 hover:text-school-yellow transition"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3 text-sm text-green-100">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-school-yellow shrink-0" />
                <span>Tobias Hainyeko Street,<br/>Windhoek, Namibia</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-school-yellow shrink-0" />
                <span>+264 61 123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-school-yellow shrink-0" />
                <span>enquiries@tobiashainyeko.edu.na</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-green-100">
              <li>
                <button onClick={() => onNavigate('portals')} className="hover:text-school-yellow transition text-left">
                  Staff Portal
                </button>
              </li>
              <li><button onClick={() => onNavigate('portals')} className="hover:text-school-yellow transition text-left">Learner Portal</button></li>
              <li><a href="#" className="hover:text-school-yellow transition">Alumni Association</a></li>
              <li><a href="#" className="hover:text-school-yellow transition">School Policies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-800 pt-6 text-center text-xs text-green-300">
          <p>&copy; {new Date().getFullYear()} Tobias Hainyeko Combined School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};