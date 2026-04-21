// Import React and hooks for managing 3D motion states
import React, { useRef } from 'react';
// Import icons from lucide-react for the specific career options
import { 
  Briefcase, 
  ShieldCheck, 
  PlusCircle, 
  Globe, 
  Megaphone, 
  CheckCircle, 
  FileText 
} from 'lucide-react';
// Import motion and hooks from framer-motion for high-end 3D interactions
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * sub-component for a single card to handle its own 3D rotation logic
 */
const TiltCard = ({ option, index }: { option: any; index: number }) => {
  // Motion values to track mouse position relative to card center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to prevent jerky movements
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Map mouse position to rotation values (-15 to 15 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  /**
   * Updates motion values based on mouse position within the card
   */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  /**
   * Resets the card to center when the mouse leaves
   */
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link to={option.href} className="block perspective-1000">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          // @ts-ignore
          animationDelay: `${index * 0.5}s`,
        }}
        // Entry animation with stagger and reveal
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        // Holographic styling: Glassmorphism, glow, and floating class
        className="animate-float group relative p-8 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/20 hologram-glow hologram-scanlines hover:border-cyan-400/50 transition-all cursor-pointer overflow-hidden"
      >
        {/* Holographic light reflection overlay that moves with hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Badge with glowing pulse effect */}
        {option.badge && (
          <span className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-blue-600/90 text-white text-[10px] font-black tracking-[0.2em] shadow-[0_0_15px_rgba(37,99,235,0.4)] animate-pulse">
            {option.badge}
          </span>
        )}

        {/* Card Icon container with 3D offset */}
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="w-16 h-16 rounded-2xl bg-white/80 shadow-inner flex items-center justify-center mb-8 group-hover:scale-110 transition-transform"
        >
          {option.icon}
        </div>

        {/* Title with 3D offset and neon color shift on hover */}
        <h3 
          style={{ transform: "translateZ(30px)" }}
          className="text-2xl font-bold text-[--color-text-heading] mb-4 group-hover:text-blue-600 transition-colors"
        >
          {option.title}
        </h3>

        {/* Description with enhanced legibility */}
        <p 
          style={{ transform: "translateZ(20px)" }}
          className="text-slate-600 text-sm leading-relaxed mb-8 font-medium"
        >
          {option.description}
        </p>

        {/* Interactive "Explore Now" button with digital arrow animation */}
        <div 
          style={{ transform: "translateZ(40px)" }}
          className="flex items-center gap-3 text-sm font-black text-blue-600 uppercase tracking-widest"
        >
          Explore Now
          <motion.span
            animate={{ x: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            →
          </motion.span>
        </div>
      </motion.div>
    </Link>
  );
};

// Main Grid Component
const CareerOptionsGrid = () => {
  const options = [
    {
      icon: <Briefcase className="text-blue-600" size={32} />,
      title: "Job Vacancy",
      description: "Explore the latest job openings across various departments and domains.",
      badge: "NEW",
      href: "/jobs"
    },
    {
      icon: <ShieldCheck className="text-indigo-600" size={32} />,
      title: "Recruitment Rules",
      description: "Understand our company policies and recruitment guidelines for candidates.",
      href: "/policies"
    },
    {
      icon: <PlusCircle className="text-purple-600" size={32} />,
      title: "Post Vacancy",
      description: "Members only section to post new career opportunities within the company.",
      href: "/members/post-job"
    },
    {
      icon: <Globe className="text-cyan-600" size={32} />,
      title: "Online Application",
      description: "Access our centralized portal to apply for multiple roles simultaneously.",
      href: "/apply"
    },
    {
      icon: <Megaphone className="text-orange-600" size={32} />,
      title: "Recruitment Ads",
      description: "Official advertisements and media releases regarding hiring drives.",
      href: "/ads"
    },
    {
      icon: <CheckCircle className="text-emerald-600" size={32} />,
      title: "Application Status",
      description: "Track your submitted applications and view real-time updates.",
      href: "/status"
    },
    {
      icon: <FileText className="text-rose-600" size={32} />,
      title: "Submit Resume",
      description: "Directly upload your resume for future consideration by our HR team.",
      href: "/apply"
    }
  ];

  return (
    <section className="py-32 bg-slate-50/50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {options.map((option, index) => (
            <TiltCard key={option.title} option={option} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerOptionsGrid;
