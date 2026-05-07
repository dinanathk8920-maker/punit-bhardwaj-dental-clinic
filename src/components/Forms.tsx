import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  User, 
  Phone, 
  MessageSquare, 
  CheckCircle2,
  Clock,
  ChevronRight
} from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../constants';

export const AppointmentForm = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    date: '',
    time: '10:00 AM',
    department: ''
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = '10-digit phone number is required';
    }
    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date must be today or in the future';
      }
    }
    if (!formData.department || formData.department === 'Select Department') {
      newErrors.department = 'Please select a department';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-3xl shadow-xl text-center flex flex-col items-center border border-teal-100"
      >
        <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
        <p className="text-gray-600 mb-8 max-w-xs">
          Our team will call you shortly to confirm your appointment at PB Dental.
        </p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', phone: '', date: '', time: '10:00 AM', department: '' });
          }}
          className="text-teal-600 font-bold hover:underline"
        >
          Book another appointment
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-teal-900/5 relative overflow-hidden group border border-teal-50">
      <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Book an Appointment</h3>
        <p className="text-gray-500 text-sm">Fast, easy and professional consultation</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1">
          <div className={`relative transition-all ${errors.name ? 'ring-2 ring-red-400 rounded-xl' : ''}`}>
            <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input 
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text" 
              placeholder="Your Full Name" 
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-teal-500 transition-all outline-none"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs pl-1">{errors.name}</p>}
        </div>
        
        <div className="space-y-1">
          <div className={`relative transition-all ${errors.phone ? 'ring-2 ring-red-400 rounded-xl' : ''}`}>
            <Phone className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel" 
              placeholder="10-digit Phone Number" 
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-teal-500 transition-all outline-none"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs pl-1">{errors.phone}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className={`relative transition-all ${errors.date ? 'ring-2 ring-red-400 rounded-xl' : ''}`}>
              <Calendar className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input 
                name="date"
                value={formData.date}
                onChange={handleChange}
                type="date" 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-teal-500 transition-all outline-none text-gray-600 text-sm"
              />
            </div>
            {errors.date && <p className="text-red-500 text-xs pl-1">{errors.date}</p>}
          </div>
          <div className="relative">
            <Clock className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <select 
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-teal-500 transition-all outline-none text-gray-600 appearance-none text-sm"
            >
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>12:00 PM</option>
              <option>04:00 PM</option>
              <option>06:00 PM</option>
            </select>
          </div>
        </div>

        <div className="space-y-1">
          <div className={`relative transition-all ${errors.department ? 'ring-2 ring-red-400 rounded-xl' : ''}`}>
            <MessageSquare className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <select 
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-teal-500 transition-all outline-none text-gray-600 appearance-none text-sm"
            >
              <option value="">Select Department</option>
              {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
            </select>
          </div>
          {errors.department && <p className="text-red-500 text-xs pl-1">{errors.department}</p>}
        </div>

        <button 
          type="submit"
          className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/30 flex items-center justify-center gap-2 group active:scale-95"
        >
          Confirm Booking
          <ChevronRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
      
      <p className="mt-6 text-center text-[10px] uppercase tracking-widest text-gray-400">
        Confidential & Secure
      </p>
    </div>
  );
};

export const ContactForm = () => {
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
      {status === 'success' ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} />
          </div>
          <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
          <p className="text-gray-500">We will get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                required
                type="email" 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
              placeholder="Inquiry about Orthodontics"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
            <textarea 
              required
              rows={4}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button 
            disabled={status === 'sending'}
            type="submit"
            className="w-full md:w-auto px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
};
