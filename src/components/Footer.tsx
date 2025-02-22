import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ethos | Pathos | Logos</h3>
            <p className="text-gray-300">
              Empowering businesses with innovative solutions for a sustainable future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-brand-orange">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-brand-orange">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-brand-orange">Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-brand-orange">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-brand-orange">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>111 N Orange Ave</li>
              <li>STE 800</li>
              <li>Orlando, FL</li>
              <li>info@epl.solutions</li>
              <li>(334) 544-0484</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100090558291876" className="text-gray-300 hover:text-brand-orange">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/consult_epl/" className="text-gray-300 hover:text-brand-orange">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/epl-solutions-inc/" className="text-gray-300                 hover:text-brand-orange">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} EPL Solutions Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;