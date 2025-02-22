import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/epl_sublogo.png" 
                alt="EPL Solutions Inc" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray hover:text-brand-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-brand-gray hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="text-brand-gray hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </Link>
              <Link to="/services" className="text-brand-gray hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link to="/blog" className="text-brand-gray hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium">
                Blog
              </Link>
              <Link to="/contact" className="bg-brand-orange text-white hover:bg-opacity-90 px-4 py-2 rounded-md text-sm font-medium">
                Contact Us
              </Link>
              {user && location.pathname === '/admin' && (
                <button
                  onClick={logout}
                  className="flex items-center text-brand-gray hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-brand-gray hover:text-brand-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-brand-gray hover:text-brand-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-brand-gray hover:text-brand-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="text-brand-gray hover:text-brand-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="bg-brand-orange text-white hover:bg-opacity-90 block px-4 py-2 rounded-md text-base font-medium mt-4"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            {user && location.pathname === '/admin' && (
              <button
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
                className="flex items-center text-brand-gray hover:text-brand-blue px-3 py-2 rounded-md text-base font-medium w-full mt-4"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;