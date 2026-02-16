import { ChevronRight, Home, Award, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-white"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium border border-red-200">
                Premium Real Estate Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight">
              Building Future
              <span className="text-red-700 block mt-2">Creating Legacies</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Discover exceptional landmark projects curated by AKH GROUP. We turn your real estate dreams into reality with premium locations and unmatched quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-red-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-800 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-700/30 flex items-center justify-center gap-2"
              >
                Explore Projects
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white border-2 border-red-700 text-red-700 px-8 py-4 rounded-full font-semibold hover:bg-red-50 transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-red-50 p-3 rounded-full">
                    <Home className="text-red-700" size={24} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-gray-500 text-sm">Landmark Projects</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-red-50 p-3 rounded-full">
                    <Users className="text-red-700" size={24} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">5000+</div>
                <div className="text-gray-500 text-sm">Happy Families</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-red-50 p-3 rounded-full">
                    <Award className="text-red-700" size={24} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-gray-500 text-sm">Years Excellence</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-red-100/50 rounded-3xl blur-3xl"></div>
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Luxury Property"
                className="relative rounded-3xl shadow-2xl shadow-red-200/50 w-full h-[600px] object-cover border border-red-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
