import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navbarClasses = `fixed w-full z-30 transition-all duration-300 ${
    scrolled 
      ? 'bg-white shadow-md py-2' 
      : 'bg-transparent py-4'
  }`;

  const textColor = scrolled || isOpen ? 'text-primary-700' : 'text-white';
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Eligibility', path: '/eligibility' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className={`font-serif text-3xl font-bold ${textColor}`}>
              Nidhi<span className="text-secondary-500">Sakhi</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${textColor} hover:text-secondary-500 font-medium transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/dashboard" 
                  className="flex items-center text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-md transition-colors"
                >
                  <User size={18} className="mr-2" />
                  Dashboard
                </Link>
                <button 
                  onClick={logout}
                  className="flex items-center text-primary-700 hover:text-primary-800 transition-colors"
                >
                  <LogOut size={18} className="mr-1" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/login" 
                  className="flex items-center text-primary-700 hover:text-primary-800 transition-colors"
                >
                  <LogIn size={18} className="mr-1" />
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="flex items-center text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-md transition-colors"
                >
                  <User size={18} className="mr-2" />
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColor} focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-700 hover:text-secondary-500 py-2 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="flex items-center text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-md transition-colors w-full justify-center mt-2"
                  >
                    <User size={18} className="mr-2" />
                    Dashboard
                  </Link>
                  <button 
                    onClick={logout}
                    className="flex items-center text-primary-700 hover:text-primary-800 transition-colors w-full justify-center mt-2"
                  >
                    <LogOut size={18} className="mr-1" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="flex items-center text-primary-700 hover:text-primary-800 transition-colors w-full justify-center mt-2"
                  >
                    <LogIn size={18} className="mr-1" />
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="flex items-center text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-md transition-colors w-full justify-center mt-2"
                  >
                    <User size={18} className="mr-2" />
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;