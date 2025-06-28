import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="Header_1" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" id="Header_2">
            <img src={images[0]} alt="Logo" className="h-12 w-auto" id="Header_3"/>
            <span className="text-2xl font-bold text-amber-600 ml-2" id="Header_4">FoodieHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" id="Header_5">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-amber-600' : 'text-gray-700'} hover:text-amber-600 transition-colors`} id="Header_6">Home</Link>
            <Link to="/menupage" className={`nav-link ${location.pathname === '/menupage' ? 'text-amber-600' : 'text-gray-700'} hover:text-amber-600 transition-colors`} id="Header_7">Menu</Link>
            <Link to="/reservationpage" className={`nav-link ${location.pathname === '/reservationpage' ? 'text-amber-600' : 'text-gray-700'} hover:text-amber-600 transition-colors`} id="Header_8">Reservations</Link>
            <Link to="/eventspage" className={`nav-link ${location.pathname === '/eventspage' ? 'text-amber-600' : 'text-gray-700'} hover:text-amber-600 transition-colors`} id="Header_9">Events</Link>
            <Link to="/deliverypage" className={`nav-link ${location.pathname === '/deliverypage' ? 'text-amber-600' : 'text-gray-700'} hover:text-amber-600 transition-colors`} id="Header_10">Delivery</Link>
            
            <div className="flex items-center space-x-4" id="Header_11">
              <Link to="/loginpage" className="px-4 py-2 text-gray-700 hover:text-amber-600 transition-colors" id="Header_12">Login</Link>
              <Link to="/registerpage" className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors" id="Header_13">Register</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" id="Header_14">
            <svg className="w-6 h-6 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4" id="Header_15">
            <div className="flex flex-col space-y-4">
              <Link to="/" className={`${location.pathname === '/' ? 'text-amber-600' : 'text-gray-700'} hover:text-amber-600 transition-colors`} id="Header_16">Home</Link>
              <Link to="/menupage" className={`${location.pathname === '/menupage' ? 'text-amber-600' : 'text-gray-700'} hover:text-amber-600 transition-colors`} id="Header_17">Menu</Link>
              <Link to="/reservationpage" className={`${location.pathname === '/reservationpage' ? 'text-amber-600' : 'text-gray-700'} hover:text-amber-600 transition-colors`} id="Header_18">Reservations</Link>
              <Link to="/eventspage" className={`${location.pathname === '/eventspage' ? 'text-amber-600' : 'text-gray-700'} hover:text-amber-600 transition-colors`} id="Header_19">Events</Link>
              <Link to="/deliverypage" className={`${location.pathname === '/deliverypage' ? 'text-amber-600' : 'text-gray-700'} hover:text-amber-600 transition-colors`} id="Header_20">Delivery</Link>
              <Link to="/loginpage" className="text-gray-700 hover:text-amber-600 transition-colors" id="Header_21">Login</Link>
              <Link to="/registerpage" className="bg-amber-600 text-white rounded-full px-4 py-2 text-center hover:bg-amber-700 transition-colors" id="Header_22">Register</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;