// Import React and hooks for managing local state and global store connection
import React, { useState } from 'react';
// Import Search and other icons for the job search bar and visual aesthetics
import { Search, Briefcase, ArrowRight } from 'lucide-react';
// Import motion from framer-motion for smooth, interactive entry animations
import { motion } from 'framer-motion';
// Import the global job store to manage search state across components
import { useJobStore } from '../store/useJobStore';

// Define the HeroSection component
const HeroSection = () => {
  // Local state to track the text typed in the search input before clicking "Search"
  const [keyword, setKeyword] = useState('');
  // Access the setSearchQuery function from our Zustand store to update global state
  const setSearchQuery = useJobStore((state) => state.setSearchQuery);

  // Handle the search action when user clicks the button
  const handleSearch = () => {
    // Update the global store with the current keyword to filter the job list
    setSearchQuery(keyword);
  };

  return (
    // Section with section background color from design system
    // Reduced top padding (pt-10) to minimize the gap with the sticky Navbar
    <section className="bg-[--color-bg-section] pt-10 pb-20 lg:pt-16 lg:pb-32 overflow-hidden relative">
      
      {/* Decorative background blur effects for a modern, high-end SaaS aesthetic */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[--color-accent-blue]/10 rounded-full blur-3xl -mr-48 -mt-24" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[--color-primary-blue]/10 rounded-full blur-3xl -ml-48 -mb-24" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content - Left Side */}
          <motion.div 
            // Entry animation using framer-motion: fade in and slide up for a smooth reveal
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge highlight to draw attention to the platform's scale */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[--color-light-blue-badge] text-[--color-primary-blue] text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[--color-primary-blue] animate-pulse" />
              Over 500+ Active Openings
            </div>

            {/* Main Heading with dynamic text as requested by the user */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[--color-text-heading] leading-tight mb-6">
              Find the perfect <br />
              <span className="text-[--color-primary-blue]">career opportunity at CRCCF</span>
            </h1>
            
            <p className="text-lg text-[--color-text-body] mb-10 max-w-lg leading-relaxed">
              Explore thousands of job opportunities from top companies and take the next big step in your professional journey with HireWise.
            </p>

            {/* Job Search Bar - Refactored to handle keyword-only search as requested */}
            <div className="bg-white p-2 rounded-2xl shadow-xl flex flex-col md:flex-row gap-2 border border-slate-200">
              {/* Job Title/Keyword input field */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3">
                <Search className="text-[--color-accent-blue]" size={20} />
                <input 
                  type="text" 
                  placeholder="Job title or keyword"
                  value={keyword}
                  // Update local state as the user types
                  onChange={(e) => setKeyword(e.target.value)}
                  // Allow pressing "Enter" to trigger the search
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full bg-transparent outline-none text-sm text-[--color-text-heading] placeholder:text-[--color-text-muted]"
                />
              </div>
              
              {/* Search button with primary gradient and interactive scaling effects */}
              <button 
                onClick={handleSearch}
                className="bg-gradient-blue text-white px-10 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-500/20"
              >
                Search Jobs
              </button>
            </div>

            {/* Popular searches suggestions for quick filtering */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <span className="text-[--color-text-secondary]">Popular:</span>
              {['Design', 'Full-stack', 'Backend', 'Marketing'].map(tag => (
                <button 
                  key={tag} 
                  onClick={() => { setKeyword(tag); setSearchQuery(tag); }}
                  className="text-[--color-primary-blue] hover:underline font-medium"
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Visual Content - Right Side Image as requested by the user */}
          <motion.div 
            // Entry animation: fade in and slide in from the right for balance
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Hero Image Container with modern rounded corners and shadow */}
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img 
                src="/images/hero.jpg" 
                alt="Corporate Professional Environment" 
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-blue-900/5" />
            </div>

            {/* Floating Stats Cards to add visual interest and dynamic feel */}
            <div className="absolute -top-10 -right-8 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
              <div className="p-3 bg-green-100 text-green-600 rounded-full">
                <ArrowRight size={20} />
              </div>
              <div>
                <p className="text-xs text-[--color-text-muted] font-medium">Monthly Active Jobs</p>
                <p className="text-xl font-bold text-[--color-text-heading]">12,540+</p>
              </div>
            </div>

            {/* Floating Trust Indicator */}
            <div className="absolute -bottom-8 -left-8 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-500 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xl font-bold text-[--color-text-heading]">2k+</p>
                <p className="text-xs text-[--color-text-muted] font-medium">Success Hires</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Export the component as default for use in the Home page
export default HeroSection;
