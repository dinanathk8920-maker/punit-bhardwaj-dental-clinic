import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Clock
} from 'lucide-react';
import { CLINIC_INFO } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Departments', href: '#departments' },
    { name: 'Team', href: '#team' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-teal-600/20 group-hover:rotate-12 transition-transform">P</div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-gray-900 tracking-tight leading-none mb-1">
                Punit Bhardwaj
              </span>
              <span className="text-teal-600 font-bold text-xs uppercase tracking-[0.2em] leading-none">Dental Clinic</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="px-4 py-2 text-gray-600 hover:text-teal-600 font-medium transition-all rounded-full hover:bg-teal-50"
              >
                {link.name}
              </a>
            ))}
            <div className="ml-6 pl-6 border-l border-gray-200">
              <a href="#contact" className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-teal-600 transition-all shadow-lg shadow-gray-900/10 active:scale-95 text-sm uppercase tracking-wider">
                Book Now
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 p-2 focus:outline-none">
              <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-2xl"
        >
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block text-gray-600 px-4 py-4 rounded-2xl hover:bg-teal-50 hover:text-teal-600 font-bold"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-4">
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="block bg-teal-600 text-white py-4 rounded-2xl text-center font-bold shadow-xl shadow-teal-600/20"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold italic">P</div>
              <span className="font-sans font-bold text-xl text-white">PB Dental</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Providing world-class dental care with a personal touch in Noida. Your smile is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#departments" className="hover:text-teal-400 transition-colors">Departments</a></li>
              <li><a href="#team" className="hover:text-teal-400 transition-colors">Our Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Operations</h4>
            <ul className="space-y-4">
              {CLINIC_INFO.openingHours.map((item, id) => (
                <li key={id}>
                  <p className="text-teal-500 text-sm font-medium uppercase tracking-wider">{item.day}</p>
                  <p className="text-gray-400">{item.hours}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="text-teal-500 shrink-0 mt-1" size={20} />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-teal-500 shrink-0" size={20} />
                <span>{CLINIC_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-teal-500 shrink-0" size={20} />
                <span>{CLINIC_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2026 Punit Bhardwaj Dental Clinic. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
