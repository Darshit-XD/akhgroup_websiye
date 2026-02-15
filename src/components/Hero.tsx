import { ChevronRight, Home, Award, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-black to-black"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium border border-yellow-400/20">
                Premium Real Estate Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Your Dream
              <span className="text-yellow-400 block mt-2">Home Awaits</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Discover exceptional properties curated by AKH GROUP. We turn your real estate dreams into reality with premium locations and unmatched quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-400/50 flex items-center justify-center gap-2"
              >
                Explore Properties
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-yellow-400/10 p-3 rounded-full">
                    <Home className="text-yellow-400" size={24} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-gray-400 text-sm">Properties</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-yellow-400/10 p-3 rounded-full">
                    <Users className="text-yellow-400" size={24} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-yellow-400/10 p-3 rounded-full">
                    <Award className="text-yellow-400" size={24} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-gray-400 text-sm">Years</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Luxury Property"
                className="relative rounded-3xl shadow-2xl shadow-yellow-400/20 w-full h-[600px] object-cover border border-yellow-400/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
