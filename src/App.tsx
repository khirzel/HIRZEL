/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X, ChevronRight, Home, ShoppingBag, Building2, MapPin } from 'lucide-react';

// --- Types ---
type Page = 'home' | 'products' | 'properties' | 'short-stay' | 'long-stay' | 'about' | 'contact';

// --- Data ---
const PRODUCTS = [
  {
    id: 1,
    name: 'Urquiola Side Table',
    category: 'Furniture',
    description: 'A sculptural piece featuring interlocking geometric volumes in volcanic basalt.',
    price: '€1,850',
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Parisian Velvet Chair',
    category: 'Furniture',
    description: 'Plush velvet upholstery meets a minimalist steel frame. A study in contrasts.',
    price: '€2,400',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Brushed Brass Vessel',
    category: 'Accessories',
    description: 'Hand-spun brass with a unique patina. Ideal for grand floral arrangements.',
    price: '€420',
    image: 'https://images.unsplash.com/photo-1616489953149-8134958f368f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Minimalist Floor Lamp',
    category: 'Lighting',
    description: 'Ultra-thin vertical profile with adjustable warm LED light. Architectural precision.',
    price: '€980',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed60516952?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Monolith Sconce',
    category: 'Lighting',
    description: 'Cast concrete housing with hidden light source for dramatic wall washing.',
    price: '€650',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629275?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Travertine Bowl',
    category: 'Accessories',
    description: 'Carved from a single block of Italian travertine. Raw beauty.',
    price: '€310',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1200&auto=format&fit=crop',
  },
];

const PROPERTIES_SHORT = [
  {
    id: 1,
    title: 'Saint-Germain Duplex',
    location: 'Paris, 6th Arr.',
    surface: '85 m²',
    rooms: '2 BR',
    price: '€450 / night',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Marais Atelier',
    location: 'Paris, 4th Arr.',
    surface: '45 m²',
    rooms: 'Studio',
    price: '€320 / night',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Place des Vosges Suite',
    location: 'Paris, 4th Arr.',
    surface: '120 m²',
    rooms: '3 BR',
    price: '€850 / night',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Montmartre View Loft',
    location: 'Paris, 18th Arr.',
    surface: '65 m²',
    rooms: '1 BR',
    price: '€280 / night',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop',
  }
];

const PROPERTIES_LONG = [
  {
    id: 1,
    title: 'Haussmannian Residence',
    location: 'Paris, 16th Arr.',
    surface: '240 m²',
    rooms: '4 BR',
    price: '€5,800 / month',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Ile Saint-Louis Loft',
    location: 'Paris, 4th Arr.',
    surface: '110 m²',
    rooms: '2 BR',
    price: '€4,200 / month',
    image: 'https://images.unsplash.com/photo-1600607687940-c52fb072975b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Passy Garden Mansion',
    location: 'Paris, 16th Arr.',
    surface: '450 m²',
    rooms: '6 BR',
    price: 'On Request',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Invalides Penthouse',
    location: 'Paris, 7th Arr.',
    surface: '180 m²',
    rooms: '3 BR',
    price: '€7,500 / month',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200&auto=format&fit=crop',
  }
];

// --- Components ---

const Navigation = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm px-[60px] py-[40px] flex justify-between items-baseline border-b border-black/5">
      <div>
        <h1 
          onClick={() => setPage('home')}
          className="text-[48px] font-black tracking-[0.15em] cursor-pointer hover:opacity-70 transition-opacity"
        >
          HIRZEL
        </h1>
        <p className="serif-normal mt-[5px] text-[14px] opacity-100">
          Agency of Architecture & Living — Paris
        </p>
      </div>
      <nav className="hidden lg:flex items-center space-x-12 font-sans text-[12px] font-bold tracking-[0.15em] uppercase">
        <button 
          onClick={() => setPage('properties')}
          className={`hover:opacity-60 transition-opacity ${currentPage === 'properties' ? 'opacity-100 border-b border-black' : 'opacity-40'}`}
        >
          Properties
        </button>
        <button 
          onClick={() => setPage('products')}
          className={`hover:opacity-60 transition-opacity ${currentPage === 'products' ? 'opacity-100 border-b border-black' : 'opacity-40'}`}
        >
          Products
        </button>
        <button 
          onClick={() => setPage('about')}
          className={`hover:opacity-60 transition-opacity ${currentPage === 'about' ? 'opacity-100 border-b border-black' : 'opacity-40'}`}
        >
          About
        </button>
        <button 
          onClick={() => setPage('contact')}
          className={`hover:opacity-60 transition-opacity ${currentPage === 'contact' ? 'opacity-100 border-b border-black' : 'opacity-40'}`}
        >
          Contact
        </button>
      </nav>
      <div className="font-sans text-[12px] font-bold tracking-[0.1em] opacity-100 hidden lg:block">
        EST. 2024
      </div>
    </header>
  );
};

const HomePage = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="pt-[180px] pb-[100px]">
    <div className="grid grid-cols-12 gap-5 px-[60px] h-auto lg:h-[600px]">
      {/* 01 - Curated Goods */}
      <div className="col-span-12 lg:col-span-4 flex flex-col">
        <span className="section-label">01 — Curated Goods</span>
        <div className="h-[380px] overflow-hidden group cursor-pointer" onClick={() => setPage('products')}>
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800" 
            className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
            alt="Furniture Piece"
          />
        </div>
        <button 
          onClick={() => setPage('products')}
          className="text-[24px] font-black uppercase mt-[15px] text-left hover:opacity-60 transition-opacity"
        >
          PRODUCTS
        </button>
        <div className="mt-2 text-[14px] leading-relaxed serif-normal opacity-70">
          <p>Furniture & Accessories<br />Wholesale Distribution</p>
        </div>
        <div className="mt-10 font-serif">
          <p className="text-[13px] leading-snug">A collection of contemporary masterworks curated for professional interior applications.</p>
        </div>
      </div>

      {/* Separator Line */}
      <div className="hidden lg:flex lg:col-span-1 justify-center">
        <div className="v-line" />
      </div>

      {/* 02 - Living Spaces */}
      <div className="col-span-12 lg:col-span-7 flex flex-col">
        <span className="section-label">02 — Living Spaces</span>
        <div className="h-auto lg:h-[380px] grid grid-cols-1 lg:grid-cols-2 gap-5 mb-4 lg:mb-0">
          <div className="relative group cursor-pointer overflow-hidden" onClick={() => setPage('short-stay')}>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover hover:scale-105 transition-all duration-700" 
              alt="Luxury Apartment"
            />
            <div className="absolute bottom-[15px] left-[15px] bg-white px-2.5 py-1.25 text-[10px] font-bold uppercase tracking-widest">PARIS VII</div>
          </div>
          <div className="relative group cursor-pointer overflow-hidden" onClick={() => setPage('long-stay')}>
            <img 
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover hover:scale-105 transition-all duration-700" 
              alt="Modern Residence"
            />
            <div className="absolute bottom-[15px] left-[15px] bg-white px-2.5 py-1.25 text-[10px] font-bold uppercase tracking-widest">LE MARAIS</div>
          </div>
        </div>
        <button 
          onClick={() => setPage('properties')}
          className="text-[24px] font-black uppercase mt-[15px] text-left hover:opacity-60 transition-opacity"
        >
          PROPERTIES
        </button>
        <div className="mt-4 flex flex-col sm:flex-row gap-10">
          <div className="cursor-pointer group" onClick={() => setPage('short-stay')}>
            <span className="serif-normal font-bold text-sm block mb-1 group-hover:opacity-60 transition-opacity">Short Stay</span>
            <p className="text-[12px] opacity-50 uppercase tracking-widest leading-tight">Hotel and high-end<br />apartment opportunities.</p>
          </div>
          <div className="cursor-pointer group" onClick={() => setPage('long-stay')}>
            <span className="serif-normal font-bold text-sm block mb-1 group-hover:opacity-60 transition-opacity">Long Stay</span>
            <p className="text-[12px] opacity-50 uppercase tracking-widest leading-tight">Real estate mediation<br />& residential tenure.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="pt-[180px] pb-[100px] px-[60px]">
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-12 lg:col-span-12 mb-16">
        <span className="section-label">Identity / Heritage</span>
        <h2 className="text-7xl lg:text-9xl">THE AGENCY</h2>
      </div>
      
      <div className="col-span-12 lg:col-span-5">
        <div className="aspect-[4/5] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551632432-09d8fb74a73c?q=80&w=1200&auto=format&fit=crop" 
            alt="Parisian Office" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
        <div className="max-w-xl">
          <h3 className="text-3xl mb-8 serif-normal">Founded in Paris with a commitment to the geometry of human existence.</h3>
          <p className="font-serif text-lg text-black/70 mb-8">
            HIRZEL is a specialized boutique agency operating at the intersection of high-end real estate mediation and curated product selection. Based on the Rue du Faubourg Saint-Honoré, we serve as a vital link between the architectural heritage of Paris and contemporary living requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 pt-12 border-t border-black/10">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest block mb-4">Core Principles</span>
              <ul className="serif-normal space-y-2 opacity-80">
                <li>Material Integrity</li>
                <li>Minimalist Restraint</li>
                <li>Architectural Logic</li>
                <li>Timeless Value</li>
              </ul>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest block mb-4">Primary Services</span>
              <ul className="serif-normal space-y-2 opacity-80">
                <li>Residential Mediation</li>
                <li>Hospitality Sourcing</li>
                <li>Wholesale Distribution</li>
                <li>Interior Curation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-[180px] pb-[100px] px-[60px]">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 mb-16">
          <span className="section-label">Inquiry / Access</span>
          <h2 className="text-7xl lg:text-9xl">CONTACT</h2>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <p className="text-2xl serif-normal mb-12 opacity-80">Whether you are seeking a short-stay landmark or looking to acquire curated inventory, our team is ready to facilitate.</p>
          
          <div className="space-y-8">
            <div>
              <span className="section-label mb-2">Location</span>
              <p className="serif-normal">128 Rue du Faubourg Saint-Honoré<br />75008 Paris, France</p>
            </div>
            <div>
              <span className="section-label mb-2">Digital</span>
              <p className="serif-normal">inquiries@hirzel.com<br />+33 (0) 1 42 56 00 00</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col border-b border-black pb-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest mb-1">Full Name</label>
                    <input type="text" required className="bg-transparent outline-none serif-normal placeholder:opacity-20" placeholder="Jean-Luc Godard" />
                  </div>
                  <div className="flex flex-col border-b border-black pb-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest mb-1">Email Address</label>
                    <input type="email" required className="bg-transparent outline-none serif-normal placeholder:opacity-20" placeholder="jean-luc@example.com" />
                  </div>
                </div>
                <div className="flex flex-col border-b border-black pb-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest mb-1">Phone (Optional)</label>
                  <input type="tel" className="bg-transparent outline-none serif-normal placeholder:opacity-20" placeholder="+33 00 00 00 00" />
                </div>
                <div className="flex flex-col border-b border-black pb-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest mb-1">Message</label>
                  <textarea rows={4} required className="bg-transparent outline-none serif-normal placeholder:opacity-20 resize-none" placeholder="Details of your inquiry..."></textarea>
                </div>
                <button type="submit" className="w-full py-6 bg-black text-white text-[12px] font-bold tracking-[0.3em] uppercase hover:bg-black/80 transition-all">
                  TRANSMIT INQUIRY
                </button>
              </motion.form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col justify-center items-center text-center p-12 border border-black"
              >
                <h3 className="text-4xl mb-4">SUBMITTED</h3>
                <p className="serif-normal opacity-60">Your transmission has been received. Our concierge team will reach out within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-[10px] font-bold tracking-widest underline uppercase">New Inquiry</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const categories = ['Furniture', 'Lighting', 'Accessories'];

  return (
    <div className="pt-[180px] pb-20 px-[60px]">
      <div className="mb-20">
        <span className="section-label">Wholesale / Curation</span>
        <h2 className="text-7xl lg:text-9xl mb-8">INTERIOR<br />PIECES</h2>
      </div>

      {categories.map((cat) => (
        <div key={cat} className="mb-32">
          <div className="flex items-baseline justify-between border-b border-black/10 pb-4 mb-12">
            <h3 className="text-4xl font-black">{cat}</h3>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Section / {cat}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {PRODUCTS.filter(p => p.category === cat).map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-[14px] font-black tracking-[0.2em] uppercase">{product.name}</h4>
                    <span className="text-[14px] font-bold tracking-widest">{product.price}</span>
                  </div>
                  <p className="serif-normal text-sm opacity-60 mb-6">{product.description}</p>
                  <button className="w-fit text-[10px] font-bold tracking-widest uppercase border-b border-black pb-1 hover:opacity-50 transition-opacity">
                    Request Info
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const PropertiesDashboard = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="pt-[180px] pb-20 px-[60px] h-screen flex flex-col">
    <div className="mb-12">
      <span className="section-label">Mediation / Housing</span>
      <h2 className="text-7xl lg:text-9xl">PARISIAN<br />LIVING</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-grow py-12">
      <div 
        onClick={() => setPage('short-stay')}
        className="group relative flex flex-col justify-center items-center text-center p-12 border border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-500 overflow-hidden"
      >
        <div className="relative z-10">
          <h2 className="text-4xl lg:text-6xl mb-6">SHORT STAY</h2>
          <p className="serif-normal text-lg opacity-60 group-hover:opacity-80 max-w-xs mx-auto">
            Hotel-standard apartments and boutique stays for the modern traveller.
          </p>
        </div>
        <div className="absolute bottom-12 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center font-sans text-[10px] tracking-[0.3em] font-bold">
          VIEW BOUTIQUE APARTMENTS <ChevronRight size={14} className="ml-2" />
        </div>
      </div>

      <div 
        onClick={() => setPage('long-stay')}
        className="group relative flex flex-col justify-center items-center text-center p-12 border border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-500 overflow-hidden"
      >
        <div className="relative z-10">
          <h2 className="text-4xl lg:text-6xl mb-6">LONG STAY</h2>
          <p className="serif-normal text-lg opacity-60 group-hover:opacity-80 max-w-xs mx-auto">
            Exclusive real estate mediation and long-term residential leasing in Paris.
          </p>
        </div>
        <div className="absolute bottom-12 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center font-sans text-[10px] tracking-[0.3em] font-bold">
          VIEW RESIDENTIAL LISTINGS <ChevronRight size={14} className="ml-2" />
        </div>
      </div>
    </div>
  </div>
);

const PropertyListing = ({ type, data, onBack }: { type: 'short' | 'long', data: any[], onBack: () => void }) => (
  <div className="pt-[180px] pb-20 px-[60px]">
    <div className="max-w-7xl">
      <button onClick={onBack} className="flex items-center text-[10px] tracking-[0.3em] font-bold uppercase opacity-40 hover:opacity-100 mb-12 transition-opacity">
        <ChevronRight size={14} className="rotate-180 mr-2" /> BACK TO DASHBOARD
      </button>

      <div className="mb-20">
        <span className="section-label">{type === 'short' ? 'Boutique & Travel' : 'Residential & Estate'}</span>
        <h2 className="text-7xl lg:text-9xl mb-8">{type === 'short' ? 'SHORT' : 'LONG'}<br />STAYS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {data.map((property) => (
          <motion.div 
            key={property.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="group cursor-pointer border-b border-black pb-8"
          >
            <div className="aspect-[16/9] overflow-hidden mb-8">
              <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
            </div>
            <div className="flex justify-between items-end">
              <div className="flex-grow">
                <h3 className="text-4xl uppercase font-black mb-2">{property.title}</h3>
                <div className="flex items-center space-x-4 opacity-50 font-serif text-[10px] font-bold tracking-[0.2em] uppercase">
                  <span>{property.location}</span>
                  <span className="w-1 h-1 bg-black rounded-full opacity-30" />
                  <span>{property.surface}</span>
                  <span className="w-1 h-1 bg-black rounded-full opacity-30" />
                  <span>{property.rooms}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-serif text-[12px] font-bold tracking-widest block mb-2">{property.price}</span>
                <button className="flex items-center text-[10px] font-bold tracking-[0.2em] uppercase hover:opacity-60 transition-opacity">
                  DETAILS <ChevronRight size={12} className="ml-1" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<Page>('home');

  const renderPage = () => {
    switch (page) {
      case 'products':
        return <ProductsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'properties':
        return <PropertiesDashboard setPage={setPage} />;
      case 'short-stay':
        return <PropertyListing type="short" data={PROPERTIES_SHORT} onBack={() => setPage('properties')} />;
      case 'long-stay':
        return <PropertyListing type="long" data={PROPERTIES_LONG} onBack={() => setPage('properties')} />;
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="relative min-h-screen">
      <Navigation currentPage={page} setPage={setPage} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>

      <footer className="mt-20 border-t border-black pt-5 pb-10 px-[60px] flex flex-col sm:flex-row justify-between items-start sm:items-end">
        <div className="serif-normal text-[12px] opacity-100 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-12">
          <span>Mediation. Curation. Hospitality.</span>
          <div className="flex space-x-6 text-[10px] font-bold uppercase tracking-widest opacity-40">
            <button onClick={() => setPage('about')} className="hover:opacity-100 transition-opacity">Identity</button>
            <button onClick={() => setPage('contact')} className="hover:opacity-100 transition-opacity">Access</button>
            <button onClick={() => setPage('products')} className="hover:opacity-100 transition-opacity">Wholesale</button>
          </div>
        </div>
        <div className="text-left sm:text-right mt-12 sm:mt-0">
          <div className="text-[10px] font-bold tracking-[0.2em] mb-1 uppercase">CONTACT</div>
          <div className="serif-normal text-[12px]">rue du Faubourg Saint-Honoré, Paris</div>
        </div>
      </footer>
    </div>
  );
}

