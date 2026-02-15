import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImg from "@assets/IMG-20260215-WA0002_1771173199477.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="AKH GROUP" className="h-12 w-auto" />
            <span className="text-2xl font-serif font-bold text-red-700 tracking-tight">AKH</span>
            <span className="text-2xl font-serif font-light text-white tracking-widest">GROUP</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium nav-link-effect"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('properties')}
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium nav-link-effect"
              >
                Properties
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium nav-link-effect"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-yellow-400 text-black px-6 py-2.5 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-400/50"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/98 border-t border-yellow-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-yellow-400 block px-3 py-3 w-full text-left transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('properties')}
              className="text-white hover:text-yellow-400 block px-3 py-3 w-full text-left transition-colors"
            >
              Properties
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-yellow-400 block px-3 py-3 w-full text-left transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all mx-3 mt-2 w-[calc(100%-1.5rem)]"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
