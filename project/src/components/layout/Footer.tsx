import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="font-serif text-2xl font-bold">
                Nidhi<span className="text-secondary-500">Sakhi</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Your trusted partner for financial assistance and loan eligibility assessment.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary-500 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/eligibility" className="text-gray-300 hover:text-secondary-500 transition-colors">Eligibility Checker</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary-500 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary-500 transition-colors">Personal Loans</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary-500 transition-colors">Home Loans</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary-500 transition-colors">Business Loans</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary-500 transition-colors">Education Loans</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary-500 transition-colors">Financial Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-secondary-500" />
                <p className="text-gray-300">123 Financial District, Mumbai, Maharashtra 400001, India</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-secondary-500" />
                <p className="text-gray-300">+91 1234567890</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-secondary-500" />
                <p className="text-gray-300">contact@nidhisakhi.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NidhiSakhi. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link to="/privacy" className="text-gray-300 hover:text-secondary-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-300 hover:text-secondary-500 transition-colors">Terms of Service</Link>
            <Link to="/faq" className="text-gray-300 hover:text-secondary-500 transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;