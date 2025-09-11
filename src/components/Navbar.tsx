// Navbar.tsx

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PromoNavBar from './PromoNavBar';
import Logo from './Logo';
 import BulkEnquiryPopup from './BulkEnquiryPopup';
import ZohoFormModal from './ZohoFormModal';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    if (id === 'top') {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: 'top' } });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setIsMenuOpen(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const scrollToElement = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      };
      scrollToElement();
      setTimeout(scrollToElement, 150); // mimic double scroll
    }

    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', to: '#top' },
    { label: 'About Us', to: '#about-us' },
    { label: 'Meal Plans', to: '#meal-plans' },
    { label: 'Bulk Enquiry', action: () => setIsPopupOpen(true) },
    { label: 'FAQs', to: '/faq' },
    { label: 'Contact', to: '#contact' },
    { label: 'Admin', action: () => navigate('/admin') },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/0'
        }`}
      >
        <PromoNavBar />

        <div
          className={`container mx-auto px-4 md:px-6 transition-all duration-300 ${
            scrolled ? 'py-2' : 'py-2'
          }`}
        >
          <div className="flex justify-between items-center">
            <button onClick={() => handleScrollToSection('top')}>
              <Logo scrolled={scrolled} />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(({ label, to, action }) =>
                action ? (
                  <button
                    key={label}
                    onClick={action}
                    className={`font-medium text-sm transition-colors duration-200 hover:text-primary-500 ${
                      scrolled ? 'text-neutral-700' : 'text-white'
                    }`}
                  >
                    {label}
                  </button>
                ) : to?.startsWith('#') ? (
                  <button
                    key={label}
                    onClick={() => handleScrollToSection(to.substring(1))}
                    className={`font-medium text-sm transition-colors duration-200 hover:text-primary-500 ${
                      scrolled ? 'text-neutral-700' : 'text-white'
                    }`}
                  >
                    {label}
                  </button>
                ) : (
                  <Link
                    key={label}
                    to={to}
                    className={`font-medium text-sm transition-colors duration-200 hover:text-primary-500 ${
                      scrolled ? 'text-neutral-700' : 'text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                )
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className={scrolled ? 'text-neutral-800' : 'text-white'} size={24} />
              ) : (
                <Menu className={scrolled ? 'text-neutral-800' : 'text-white'} size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-slide-down">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map(({ label, to, action }) =>
                  action ? (
                    <button
                      key={label}
                      onClick={() => {
                        action();
                        toggleMenu();
                      }}
                      className="font-medium text-neutral-800 hover:text-primary-600 py-2 text-left"
                    >
                      {label}
                    </button>
                  ) : to?.startsWith('#') ? (
                    <button
                      key={label}
                      onClick={() => handleScrollToSection(to.substring(1))}
                      className="font-medium text-neutral-800 hover:text-primary-600 py-2 text-left"
                    >
                      {label}
                    </button>
                  ) : (
                    <Link
                      key={label}
                      to={to}
                      onClick={toggleMenu}
                      className="font-medium text-neutral-800 hover:text-primary-600 py-2"
                    >
                      {label}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Popup */}
      <BulkEnquiryPopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      {/* <ZohoFormModal isOpen={showModal} onClose={() => setShowModal(false)} /> */}

    </>
  );
};

export default Navbar;
