// Import React and styling libraries
import React from 'react';
// Import icons for different job categories
import { 
  Laptop, 
  BarChart3, 
  PenTool, 
  Headphones, 
  Database, 
  Smartphone 
} from 'lucide-react';
// Import framer-motion for entry animations
import { motion } from 'framer-motion';

// Define the CategorySection component
const CategorySection = () => {
  // Define a static list of categories as requested in the README
  // Each category has an icon, name, and number of openings
  const categories = [
    { name: 'Technology', icon: <Laptop size={24} />, openings: 124 },
    { name: 'Marketing', icon: <BarChart3 size={24} />, openings: 85 },
    { name: 'Design', icon: <PenTool size={24} />, openings: 43 },
    { name: 'Customer Support', icon: <Headphones size={24} />, openings: 62 },
    { name: 'Data Science', icon: <Database size={24} />, openings: 29 },
    { name: 'Mobile Dev', icon: <Smartphone size={24} />, openings: 51 },
  ];

  return (
    // Section with light gray background to separate from other white sections
    <section className="py-24 bg-[--color-bg-section]">
      <div className="container mx-auto px-6">
        
        {/* Section header with centered text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-text-heading] mb-4">
              Explore by <span className="text-[--color-primary-blue]">Category</span>
            </h2>
            <p className="text-[--color-text-body] max-w-xl">
              Find openings tailored to your specific field of expertise. We have dozens of categories ready for you to explore.
            </p>
          </div>
          {/* Button to view all categories */}
          <button className="text-[--color-primary-blue] font-bold text-sm tracking-wide uppercase hover:underline">
            View All Categories →
          </button>
        </div>

        {/* Categories Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              // Entry animation: slide up and fade in with stagger
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              // Interactive hover scaling effect
              whileHover={{ y: -10, scale: 1.02 }}
              // Holographic styling: Glassmorphism and floating
              className="animate-float p-8 bg-white/50 backdrop-blur-lg rounded-[2rem] flex flex-col items-start gap-6 border border-white/20 hologram-glow hologram-scanlines hover:border-blue-400/40 transition-all cursor-pointer group"
              // @ts-ignore
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Icon container with background that highlights on hover */}
              <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-inner">
                {cat.icon}
              </div>
              
              <div>
                {/* Category title */}
                <h3 className="text-xl font-bold text-[--color-text-heading] mb-2 group-hover:text-blue-600 transition-colors">
                  {cat.name}
                </h3>
                {/* Number of active openings in this category */}
                <p className="text-sm text-slate-500 font-medium tracking-wide">
                  <span className="text-blue-600 font-black">{cat.openings}+</span> POSITIONS
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Export the component for use in the main page
export default CategorySection;
