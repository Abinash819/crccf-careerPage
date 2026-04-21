// Import React and hooks for managing internal state and responding to external changes
import React, { useEffect, useState } from 'react';
// Import icons for clear visual representation of job details
import { MapPin, Clock, Briefcase, ChevronRight, Search } from 'lucide-react';
// Import the centralized job API service to keep network logic separated from UI
import { jobApi } from '../services/api';
// Import motion for smooth, performant layout animations that enhance UX
import { motion } from 'framer-motion';
// Import the global store to reactive to search query changes from the Hero section
import { useJobStore } from '../store/useJobStore';

// Define the FeaturedJobs component
const FeaturedJobs = () => {
  // State to store the dynamic list of jobs fetched from the database
  const [jobs, setJobs] = useState<any[]>([]);
  // State to handle loading feedback such as spinners or skeleton screens
  const [loading, setLoading] = useState(true);
  // Subscribe to the search query from our global Zustand store
  const searchQuery = useJobStore((state) => state.searchQuery);

  /**
   * useEffect hook that triggers whenever the searchQuery changes.
   * This is what makes the "Search Jobs" button in the Hero section functional.
   */
  useEffect(() => {
    const fetchJobs = async () => {
      // Show loading indicator whenever a new search begins
      setLoading(true);
      try {
        // Fetch jobs from the backend API, passing the current global search query as a parameter
        const response = await jobApi.getJobs({ search: searchQuery });
        // Update the local state with the filtered search results from MongoDB
        setJobs(response.data);
      } catch (error) {
        // Log any API failures to the console for easier developer debugging
        console.error("Failed to fetch jobs:", error);
      } finally {
        // Ensure the loading state is turned off whether the request succeeded or failed
        setLoading(false);
      }
    };

    fetchJobs();
  }, [searchQuery]); // Dependency array: re-run this effect every time searchQuery changes

  // Display a loading state while fetching from the backend to prevent layout jumps
  if (loading) {
    return (
      <div className="py-24 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[--color-primary-blue]"></div>
      </div>
    );
  }

  return (
    // Section using clean design system spacing and background colors
    <section id="featured-jobs" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header: Provides context to the listings below */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[--color-text-heading] mb-4">
              {searchQuery ? `Openings matching "${searchQuery}"` : 'JOIN OUR MISSION'}
            </h2>
            <p className="text-[--color-text-body] max-w-xl font-medium">
              {searchQuery 
                ? `Explore roles at CR Cybercrime that match your search.` 
                : 'Accelerate your career at CR Cybercrime. Explore our current openings and help us build the next generation of security solutions.'}
            </p>
          </div>
          {/* Action button to reset search or browse more */}
          <button 
            onClick={() => window.location.reload()}
            className="bg-white border-2 border-[--color-primary-blue] text-[--color-primary-blue] px-6 py-2.5 rounded-xl font-bold hover:bg-[--color-primary-blue] hover:text-white transition-all"
          >
            Clear Search
          </button>
        </div>

        {/* Dynamic Jobs List: Renders based on the current search query and DB state */}
        <div className="space-y-6">
          {jobs.length > 0 ? (
            // Map over the job results. We limit to 4 for a clean "featured" look
            jobs.slice(0, 4).map((job, index) => (
              <motion.div
                key={job._id}
                // Interactive entry animations
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                // Holographic styling: Glassmorphism and floating
                className="animate-float group p-8 bg-white/40 backdrop-blur-xl border border-white/20 rounded-[2.5rem] flex flex-col md:flex-row md:items-center justify-between gap-8 hologram-glow hologram-scanlines hover:border-blue-400/50 transition-all cursor-pointer"
                // @ts-ignore
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                <div className="flex items-start md:items-center gap-8">
                   {/* Brand icon container with 3D feel */}
                   <div className="w-16 h-16 rounded-2xl bg-white shadow-inner flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <Briefcase size={28} />
                   </div>
                   
                   <div>
                      {/* Job Title and Company */}
                      <h3 className="text-2xl font-black text-[--color-text-heading] mb-4 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {job.title}
                      </h3>

                      {/* Metadata badges with translucent backgrounds */}
                      <div className="flex flex-wrap gap-3 text-xs font-bold uppercase tracking-tighter">
                        <span className="flex items-center gap-2 bg-blue-50/50 text-blue-700 px-4 py-2 rounded-full border border-blue-100/50">
                          <MapPin size={14} className="text-rose-500" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-2 bg-indigo-50/50 text-indigo-700 px-4 py-2 rounded-full border border-indigo-100/50">
                          <Clock size={14} className="text-blue-500" />
                          {job.jobType}
                        </span>
                      </div>
                   </div>
                </div>

                {/* Right side: Modern action button */}
                <div className="flex items-center justify-end gap-6 pt-6 md:pt-0">
                   <button className="bg-[#0F172A] text-white px-10 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl shadow-black/10">
                      Apply Now
                      <ChevronRight size={18} />
                   </button>
                </div>
              </motion.div>
            ))
          ) : (
            // Zero State feedback: important for UX to tell users that no results were found
            <div className="text-center py-20 bg-white border-2 border-dashed border-slate-200 rounded-[2rem]">
               <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                  <Search size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-600 mb-2">No jobs found matching your search</h3>
               <p className="text-slate-400 max-w-sm mx-auto">Try adjusting your filters or use different keywords to find what you are looking for.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

// Export the component for use in the landing page assembly
export default FeaturedJobs;
