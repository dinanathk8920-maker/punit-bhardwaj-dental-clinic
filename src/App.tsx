import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Star, 
  MapPin, 
  PhoneCall, 
  ShieldCheck,
  Award,
  Users,
  Clock
} from 'lucide-react';
import * as Icons from 'lucide-react';
import { Layout } from './components/Layout';
import { AppointmentForm, ContactForm } from './components/Forms';
import { 
  SERVICES, 
  TEAM, 
  TESTIMONIALS, 
  BLOG_POSTS, 
  CLINIC_INFO 
} from './constants';

const FeatureCard = ({ icon: IconName, title, description, image, delay = 0 }: any) => {
  const Icon = (Icons as any)[IconName];
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white rounded-[40px] border border-gray-100 hover:border-teal-100 hover:shadow-2xl hover:shadow-teal-900/5 transition-all group overflow-hidden flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-md text-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
          <Icon size={24} strokeWidth={1.5} />
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow items-center text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3 font-display tracking-tight leading-tight">{title}</h3>
        <p className="text-gray-500 leading-relaxed mb-6 text-sm">{description}</p>
        <div className="mt-auto pt-4 border-t border-gray-50 w-full flex justify-center">
          <button className="flex items-center gap-2 text-teal-600 font-bold uppercase text-[10px] tracking-[0.2em] group-hover:gap-3 transition-all">
            Service Details <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const SectionHeader = ({ subtitle, title, description, light = false }: any) => (
  <div className="mb-16">
    <motion.span 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4 ${light ? 'bg-white/10 text-teal-300' : 'bg-teal-100 text-teal-700'}`}
    >
      {subtitle}
    </motion.span>
    <h2 className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight ${light ? 'text-white' : 'text-gray-900'}`}>
      {title}
    </h2>
    {description && (
      <p className={`max-w-2xl text-lg leading-relaxed ${light ? 'text-gray-400' : 'text-gray-500'}`}>
        {description}
      </p>
    )}
  </div>
);

export default function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30">
          <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> Trustpilot Rated 4.9/5
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-8">
                Bright <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Smiles</span> Start With You.
              </h1>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
                Modern dental care with a gentle touch. From routine checkups to complete smile transformations, we ensure a comfortable experience for your entire family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#contact" className="px-10 py-5 bg-teal-600 text-white rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all shadow-2xl shadow-teal-600/30 text-center active:scale-95">
                  Start Your Journey
                </a>
                <a href="#departments" className="px-10 py-5 bg-white text-gray-900 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all border border-gray-200 text-center active:scale-95">
                  Our Services
                </a>
              </div>
              <div className="flex items-center gap-8 border-t border-gray-100 pt-10">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="patient" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <div>
                  <p className="text-gray-900 font-bold">12,000+ Happy Patients</p>
                  <p className="text-gray-500 text-sm italic">"The care here is life-changing."</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px] group"
            >
              <div className="absolute inset-0 bg-teal-600/5 rounded-[60px] -rotate-3 transform-gpu"></div>
              <div className="w-full h-full p-4">
                <img 
                  src="/src/assets/images/regenerated_image_1778153013152.webp" 
                  alt="Professional Care" 
                  className="w-full h-full object-cover rounded-[50px] shadow-2xl relative z-10 border-4 border-white transition-all duration-700 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating clinic stat */}
              <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-2xl shadow-2xl flex items-center gap-4 border border-teal-50 z-20">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Sterilization</p>
                  <p className="text-gray-900 font-bold">100% Guaranteed</p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 p-6 bg-teal-600 text-white rounded-2xl shadow-2xl flex items-center gap-4 z-20">
                <Award size={24} />
                <div>
                  <p className="text-xs font-bold text-teal-100 uppercase tracking-wider">Top Rated</p>
                  <p className="font-bold text-sm">Clinic in Noida</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            subtitle="Our Environment"
            title="State-of-the-Art Dental Facility"
            description="We believe that a calm, clean, and advanced environment is essential for a positive dental experience."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[40px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Clinic Lobby" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-8">
                <p className="text-white font-bold text-xl uppercase tracking-wider">Patient Lounge</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:col-span-2 relative group overflow-hidden rounded-[40px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Modern Equipment" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative group overflow-hidden rounded-[40px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Sterilization Area" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative group overflow-hidden rounded-[40px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Consultation Room" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="departments" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            subtitle="Clinical Excellence"
            title="Comprehensive Care for Every Patient"
            description="Our specialized departments combine state-of-the-art technology with compassionate clinical methods."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <FeatureCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="relative z-10 w-full aspect-[4/5] overflow-hidden rounded-[100px] border-[12px] border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  alt="Clinic Interior"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-teal-50 rounded-full -z-0"></div>
              
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="absolute -bottom-6 -right-6 bg-gray-900 text-white p-8 rounded-[32px] z-20 shadow-2xl"
              >
                <p className="text-4xl font-bold mb-1 font-display leading-none">12+</p>
                <p className="text-teal-400 text-[10px] font-bold uppercase tracking-[0.2em]">Years of Excellence</p>
              </motion.div>
            </div>
            
            <div>
              <SectionHeader 
                subtitle="Legacy of Trust"
                title="Punit Bhardwaj Dental Clinic: Modernity Meets Compassion"
              />
              <div className="space-y-6">
                <p className="text-lg text-gray-500 leading-relaxed">
                  Located in the heart of Sector 137, Noida, we've build our reputation on one simple promise: to treat every patient like family. Under the leadership of Dr. Punit Bhardwaj, we integrate global dental standards with a local, personalized approach.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Our clinic is equipped with the latest digital x-rays, painless dentistry tools, and a strict sterilization protocol that exceeds international guidelines.
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Certified Experts</h4>
                      <p className="text-sm text-gray-500">Global training & standards</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Family Focused</h4>
                      <p className="text-sm text-gray-500">Care for all age groups</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale" 
            alt="background" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-teal-900/90"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,_#64d2ff_1px,_transparent_0)] bg-[length:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionHeader 
            light
            subtitle="Expert Clinicians"
            title="Meet the Minds Behind the Smiles"
            description="Our team of specialists works collaboratively to provide comprehensive solutions for even the most complex cases."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {TEAM.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group p-2"
              >
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-[40px] border border-white/10 group-hover:bg-white/10 transition-all hover:-translate-y-2">
                  <img src={member.image} alt={member.name} className="w-full aspect-square object-cover rounded-[32px] mb-8" referrerPolicy="no-referrer" />
                  <div className="px-4 pb-4">
                    <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">{member.name}</h3>
                    <p className="text-teal-400 font-bold mb-4 uppercase text-xs tracking-[0.2em]">{member.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                    <div className="flex justify-center gap-4">
                      <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors"><Icons.Linkedin size={14} /></a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors"><Icons.Mail size={14} /></a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <SectionHeader 
              subtitle="Patient Stories"
              title="Real Experiences from Our Community"
            />
            <div className="flex gap-4 pb-4">
              <div className="flex items-center gap-1 font-bold text-gray-900 border-r border-gray-200 pr-4 mr-4">
                <span className="text-3xl">4.9</span>
                <div className="flex text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-teal-600">Google Verified</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-gray-50 rounded-3xl relative"
              >
                <div className="mb-6 flex text-yellow-400">
                  {Array.from({ length: t.rating }).map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                </div>
                <p className="text-lg text-gray-700 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center font-bold text-teal-800">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-xs text-teal-600 font-bold uppercase tracking-widest">Verified Patient</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            subtitle="Dental Education"
            title="Insights for Your Oral Health"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {BLOG_POSTS.map((post) => (
              <motion.div 
                key={post.id} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[40px] mb-8">
                  <img src={post.image} alt={post.title} className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">{post.date}</div>
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-teal-600 transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">{post.excerpt}</p>
                <button className="flex items-center gap-2 font-bold text-teal-600 group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader 
            subtitle="Convenient Care"
            title="Ready to Transform Your Smile?"
            description="Book an express appointment or send us a detailed inquiry. We're here to help."
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <AppointmentForm />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-8 bg-teal-50 rounded-3xl border border-teal-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white text-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <PhoneCall size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">Direct Line</h4>
                  <p className="text-teal-600 font-bold text-lg">{CLINIC_INFO.phone}</p>
                </div>
                
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white text-gray-600 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">Visit Us</h4>
                  <p className="text-gray-500 text-sm">Shop BF 13 Paramount Plaza</p>
                </div>

                <div className="p-8 bg-gray-900 rounded-3xl text-white flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white/10 text-teal-400 rounded-xl flex items-center justify-center mb-4 backdrop-blur-md">
                    <Clock size={24} />
                  </div>
                  <h4 className="font-bold mb-1">Working Hours</h4>
                  <p className="text-teal-400 font-bold text-sm">Mon-Sat: 10am-8pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
