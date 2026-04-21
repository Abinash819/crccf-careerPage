// Import React to build the main page
import React from 'react';
// Import all the custom components built for the landing page
import Navbar from '../../components/Navbar';
import PartnerMarquee from '../../components/PartnerMarquee';
import HeroSection from '../../components/HeroSection';
import CareerOptionsGrid from '../../components/CareerOptionsGrid';
import CategorySection from '../../components/CategorySection';
import FeaturedJobs from '../../components/FeaturedJobs';
import ResumeCTA from '../../components/ResumeCTA';
import Footer from '../../components/Footer';

/**
 * The main Home component represents the root landing page.
 * It assembles all specialized components in a logical order to
 * provide a comprehensive user experience.
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Global Navigation Header - Fixed at top */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-20"> {/* Offset for h-20 fixed navbar */}
        
        {/* Government Partnership Indicator - Infinite Scrolling Marquee */}
        <PartnerMarquee />

        {/* Section 1: Hero area with search functionality and branding */}
        <HeroSection />

        {/* Section 2: Core feature grid as requested in the REQUIREMENTS */}
        <CareerOptionsGrid />

        {/* Section 3: Browse by job categories with opening counts */}
        <CategorySection />

        {/* Section 4: Dynamic job listings fetched from the backend */}
        <FeaturedJobs />

        {/* Section 5: Call to action for general resume submission */}
        <ResumeCTA />

      </main>

      {/* Global Footer with links and company information */}
      <Footer />
    </div>
  );
}
