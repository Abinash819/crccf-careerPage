// Import React and hooks for managing file upload interactions
import React, { useRef } from 'react';
import { Upload, ChevronRight } from 'lucide-react';
// Import motion for smooth animations
import { motion } from 'framer-motion';

// Define the ResumeCTA component
const ResumeCTA = () => {
  // Create a reference to the hidden file input element
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Function to handle the click on the visual "Upload" button
  const handleUploadClick = () => {
    // Programmatically trigger the click event on the hidden file input
    fileInputRef.current?.click();
  };

  // Function to handle the file selection once a file is chosen
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // In a real application, you would handle the file upload here (e.g., send to API)
      alert(`Selected file: ${file.name}`);
    }
  };

  return (
    // Section with white background and large vertical padding
    <section className="py-24 bg-white px-6">
      <div className="container mx-auto">
        <motion.div 
          // Entry animation: slide up and fade in
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-blue rounded-[3rem] p-8 md:p-16 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/40"
        >
          {/* Decorative floating icons in background */}
          <Upload className="absolute top-10 right-10 text-white/5 w-64 h-64 -rotate-12" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Header section of the CTA */}
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Don&apos;t see the right role? <br />
              <span className="text-blue-200">Submit your resume anyway.</span>
            </h2>
            
            {/* Supporting text */}
            <p className="text-lg text-blue-100/80 mb-10 leading-relaxed">
              Our recruitment team often scouts our internal talent pool before posting public jobs. 
              Upload your CV and we&apos;ll reach out when we have a match.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Hidden file input element dedicated to opening the file dialog */}
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept=".pdf,.doc,.docx"
              />

              {/* Primary action: Upload button with black text for maximum visibility as requested */}
              <button 
                onClick={handleUploadClick}
                className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20"
              >
                <Upload size={24} className="text-[--color-primary-blue]" />
                Upload Resume
              </button>
              
              {/* Secondary action: More info link */}
              <button className="text-white/80 hover:text-white font-bold text-lg flex items-center gap-2 group">
                Learn about hiring process
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Export the component for inclusion in the landing page
export default ResumeCTA;
