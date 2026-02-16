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
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-red-700/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="AKH GROUP" className="h-12 w-auto" />
            <span className="text-2xl font-serif font-bold text-red-700 tracking-tight">AKH</span>
            <span className="text-2xl font-serif font-light text-gray-800 ml-1 tracking-widest">GROUP</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-800 hover:text-red-700 transition-colors duration-300 font-medium nav-link-effect"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('properties')}
                className="text-gray-800 hover:text-red-700 transition-colors duration-300 font-medium nav-link-effect"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-800 hover:text-red-700 transition-colors duration-300 font-medium nav-link-effect"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-red-700 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-800 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-700/20"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-red-700 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-red-700/10 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-800 hover:text-red-700 block px-3 py-3 w-full text-left transition-colors font-medium border-b border-gray-50"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('properties')}
              className="text-gray-800 hover:text-red-700 block px-3 py-3 w-full text-left transition-colors font-medium border-b border-gray-50"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-800 hover:text-red-700 block px-3 py-3 w-full text-left transition-colors font-medium border-b border-gray-50"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-red-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 transition-all mx-3 mt-4 w-[calc(100%-1.5rem)] text-center block shadow-lg shadow-red-700/20"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
