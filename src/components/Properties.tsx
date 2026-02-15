import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { useState } from 'react';
import PropertyDetails from './PropertyDetails';
import royalLogo from "@assets/IMG-20260215-WA0013_1771173295946.jpg";
import parthLogo from "@assets/IMG-20260215-WA0012_1771173308132.jpg";
import upwanLogo from "@assets/IMG-20260215-WA0001_1771173452705.jpg";

export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  projectLogo?: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: 'Royal Apartment',
    location: 'Premium Sector, Noida',
    price: 'Starting ₹85 L*',
    beds: 3,
    baths: 3,
    area: '1,850',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    projectLogo: royalLogo,
  },
  {
    id: 2,
    title: 'Upwan Residence',
    location: 'Green Valley, Noida Extension',
    price: 'Starting ₹65 L*',
    beds: 2,
    baths: 2,
    area: '1,250',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    projectLogo: upwanLogo,
  },
  {
    id: 3,
    title: 'Parth Square',
    location: 'Noida Phase-II',
    price: 'Starting ₹55 L*',
    beds: 2,
    baths: 2,
    area: '1,100',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    projectLogo: parthLogo,
  },
];

export default function Properties() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <section id="properties" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-red-800/10 text-red-700 px-4 py-2 rounded-full text-sm font-medium border border-red-800/20 inline-block mb-4">
            Our Landmark Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Current Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our signature residential developments designed for luxury and comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-gray-900/50 rounded-3xl overflow-hidden border border-red-800/10 hover:border-red-700/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-800/20 hover:scale-105"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                />
                {property.projectLogo && (
                  <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-xl">
                    <img src={property.projectLogo} alt="Project Logo" className="h-10 w-auto object-contain" />
                  </div>
                )}
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-red-800 transition-all duration-300 group/btn"
                >
                  <Heart
                    size={20}
                    className={`${
                      favorites.includes(property.id)
                        ? 'fill-red-700 text-red-700'
                        : 'text-white group-hover/btn:text-white'
                    } transition-colors`}
                  />
                </button>
                <div className="absolute bottom-4 left-4 bg-red-800 text-white px-4 py-2 rounded-full font-bold text-lg">
                  {property.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-700 transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-400 mb-4">
                  <MapPin size={16} className="text-red-700 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-red-800/10">
                  <div className="flex items-center gap-2">
                    <Bed size={18} className="text-red-700" />
                    <span className="text-white font-medium">{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={18} className="text-red-700" />
                    <span className="text-white font-medium">{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square size={18} className="text-red-700" />
                    <span className="text-white font-medium text-sm">{property.area} sq ft</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProperty(property)}
                  className="w-full mt-6 bg-transparent border-2 border-red-800 text-red-700 py-3 rounded-full font-semibold hover:bg-red-800 hover:text-white transition-all duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-800 text-white px-10 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-800/50">
            View All Projects
          </button>
        </div>
      </div>

      {selectedProperty && (
        <PropertyDetails
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </section>
  );
}
