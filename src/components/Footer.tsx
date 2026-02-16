import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logoImg from "@assets/IMG-20260215-WA0002_1771173199477.jpg";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4 gap-3">
              <img src={logoImg} alt="AKH GROUP" className="h-10 w-auto" />
              <span className="text-2xl font-serif font-bold text-red-700 tracking-tight">AKH</span>
              <span className="text-2xl font-serif font-light text-gray-800 tracking-widest">GROUP</span>
            </div>
            <p className="text-gray-600 mb-4">
              Building dreams and creating legacies through premium real estate solutions.
            </p>
            <div className="flex gap-3">
              <button className="bg-red-50 p-2 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300 text-red-700">
                <Facebook size={20} />
              </button>
              <button className="bg-red-50 p-2 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300 text-red-700">
                <Twitter size={20} />
              </button>
              <button className="bg-red-50 p-2 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300 text-red-700">
                <Instagram size={20} />
              </button>
              <button className="bg-red-50 p-2 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300 text-red-700">
                <Linkedin size={20} />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-red-700 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-red-700 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-red-700 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-red-700 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-red-700 transition-colors cursor-pointer">Property Sales</li>
              <li className="hover:text-red-700 transition-colors cursor-pointer">Property Rentals</li>
              <li className="hover:text-red-700 transition-colors cursor-pointer">Real Estate Consulting</li>
              <li className="hover:text-red-700 transition-colors cursor-pointer">Investment Advisory</li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin size={18} className="text-red-700 mt-1 flex-shrink-0" />
                <span>123 Business Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Phone size={18} className="text-red-700 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail size={18} className="text-red-700 flex-shrink-0" />
                <span>info@akhgroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AKH GROUP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
