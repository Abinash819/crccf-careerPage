// Import React and Link from react-router-dom for navigation
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import icons from lucide-react for visual elements
import { Briefcase, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the Navbar component
const Navbar = () => {
  // State to track mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links for the header
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Jobs', href: '/jobs' },
    { name: 'Apply', href: '/apply' },
    { name: 'Status', href: '/status' },
  ];

  return (
    // Navbar with light blue background (#DBEAFE) as requested
    <nav className="h-20 bg-[#DBEAFE] text-[#0F172A] flex items-center sticky top-0 z-50 shadow-md border-b border-blue-200/50 transition-all">
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        
        {/* Branding/Logo section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-[--color-primary-blue] rounded-xl group-hover:rotate-6 transition-transform">
            <Briefcase size={22} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[--color-text-heading]">CR Cybercrime</span>
        </Link>

        {/* Desktop Navigation links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-[--color-primary-blue] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[--color-primary-blue] transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Action buttons section */}
        <div className="flex items-center gap-4">
          {/* Main login button - hidden on base mobile, hidden when menu is open on larger-than-mobile */}
          <button className={`${isOpen ? 'hidden' : 'hidden sm:flex'} items-center gap-2 px-6 py-2.5 rounded-full bg-[#0F172A] hover:bg-[#1e293b] transition-all text-sm font-bold text-white shadow-lg shadow-black/10`}>
            <User size={16} className="text-blue-400" />
            Login/Signup
          </button>
          
          {/* Mobile menu toggle btn - Functional */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-800 hover:text-[--color-primary-blue] transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-[#DBEAFE] border-b border-blue-200 shadow-xl md:hidden overflow-hidden z-40"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-slate-800 hover:text-[--color-primary-blue] transition-all flex items-center justify-between group"
                >
                  {link.name}
                  <span className="w-2 h-2 rounded-full bg-[--color-primary-blue] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
              <hr className="border-blue-200" />
              <button className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#0F172A] text-white font-bold shadow-lg">
                <User size={20} className="text-blue-400" />
                Login/Signup
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
