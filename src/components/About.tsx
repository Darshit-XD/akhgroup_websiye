import { Target, Eye, Award, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-red-100/50 rounded-3xl blur-3xl"></div>
            <img
              src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="AKH GROUP Office"
              className="relative rounded-3xl shadow-2xl shadow-red-200/20 w-full h-[500px] object-cover border border-red-100"
            />
          </div>

          <div className="space-y-8">
            <div>
              <span className="bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium border border-red-200 inline-block mb-4">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Building Dreams,
                <span className="text-red-700 block mt-2">Creating Legacies</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                AKH GROUP has been at the forefront of premium real estate for over 15 years. We specialize in identifying, developing, and delivering exceptional projects like Royal Apartment, Upwan Residence, and Parth Square.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our commitment to quality, integrity, and customer satisfaction has made us a trusted name in the real estate industry. Every property we handle is a testament to our dedication to excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-red-100 hover:border-red-700/30 transition-all duration-300 hover:scale-105">
                <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Target className="text-red-700" size={24} />
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-2">Our Mission</h3>
                <p className="text-gray-500 text-sm">
                  To deliver exceptional real estate solutions that transform lives
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-red-100 hover:border-red-700/30 transition-all duration-300 hover:scale-105">
                <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Eye className="text-red-700" size={24} />
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-2">Our Vision</h3>
                <p className="text-gray-500 text-sm">
                  To be the most trusted real estate partner globally
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-red-100 hover:border-red-700/30 transition-all duration-300 hover:scale-105">
                <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-red-700" size={24} />
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-2">Excellence</h3>
                <p className="text-gray-500 text-sm">
                  Award-winning service and unmatched quality
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-red-100 hover:border-red-700/30 transition-all duration-300 hover:scale-105">
                <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="text-red-700" size={24} />
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-2">Growth</h3>
                <p className="text-gray-500 text-sm">
                  Continuous innovation and market leadership
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
