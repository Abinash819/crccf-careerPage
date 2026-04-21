import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

/**
 * An infinite auto-sliding marquee component that showcases partnership with Indian States.
 * Designed to provide authority and trust to the CR Cybercrime brand.
 */
const PartnerMarquee = () => {
  // Comprehensive list of Indian States and Union Territories
  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu & Kashmir",
    "Ladakh", "Chandigarh", "Puducherry", "Andaman & Nicobar", "Lakshadweep"
  ];

  // Double the list to ensure a seamless infinite loop
  const totalItems = [...states, ...states];

  return (
    <div className="w-full bg-[#F5F6F8] border-y border-slate-200 overflow-hidden py-3">
      <div className="flex items-center">
        {/* Intro label that sticks or scrolls (User asked for the whole gap area to slide) */}
        <div className="flex-shrink-0 px-6 border-r border-slate-300 z-10 bg-[#F5F6F8] shadow-lg shadow-white">
           <p className="text-[10px] font-black tracking-[0.3em] text-[#0F172A] uppercase whitespace-nowrap">
             Protecting Our Partner
           </p>
        </div>

        {/* The Marquee Track */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex items-center whitespace-nowrap"
            // Slide Left to Right as requested
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {totalItems.map((state, index) => (
              <div 
                key={`${state}-${index}`} 
                className="flex items-center gap-3 px-10 border-r border-slate-200/50"
              >
                {/* Government Symbol Placeholder */}
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <ShieldCheck size={14} strokeWidth={3} />
                </div>
                {/* State Name */}
                <span className="text-[11px] font-bold text-slate-700 tracking-wider uppercase">
                  GOVT. OF {state}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartnerMarquee;
