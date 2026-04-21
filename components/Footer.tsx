// Import React and icons for social/contact links
import React from 'react';
import { Briefcase, Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define the Footer component
const Footer = () => {
  return (
    // Footer with "Graphite White" background and dark text for a professional clean look
    <footer className="bg-[#F5F6F8] text-[#0F172A] pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Branding and Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-[--color-primary-blue] rounded-xl group-hover:rotate-6 transition-transform">
                <Briefcase size={22} className="text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#0F172A]">CR Cybercrime</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              Empowering professionals to build the next generation of security solutions. Your future in cyber excellence starts here.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <button key={i} className="p-2.5 bg-slate-200/50 hover:bg-[--color-primary-blue] rounded-full transition-all text-slate-600 hover:text-white border border-slate-300/50">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-wider text-[#0F172A]">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li><Link to="/jobs" className="hover:text-blue-600 transition-colors">Browse Openings</Link></li>
              <li><Link to="/apply" className="hover:text-blue-600 transition-colors">Apply Online</Link></li>
              <li><Link to="/status" className="hover:text-blue-600 transition-colors">Application Status</Link></li>
              <li><Link to="/members/post-job" className="hover:text-blue-600 transition-colors">Member Area</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-wider text-[#0F172A]">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li><Link to="/policies" className="hover:text-blue-600 transition-colors">Recruitment Rules</Link></li>
              <li><Link to="/faq" className="hover:text-blue-600 transition-colors">Help Center</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-wider text-[#0F172A]">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-600 shrink-0" />
                <span>123 Security Blvd, Cyber City, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <span>+1 (555) 732-8748</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <span>careers@crcybercrime.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 font-black tracking-[0.2em] uppercase">
          <p>© 2026 CR Cybercrime Career Portal. All rights reserved.</p>
          <div className="flex gap-8">
            <button className="hover:text-blue-600 transition-colors">Cookie Settings</button>
            <button className="hover:text-blue-600 transition-colors">Sitemap</button>
          </div>
        </div>

      </div>
    </footer>
  );
};

// Export the Footer component
export default Footer;
