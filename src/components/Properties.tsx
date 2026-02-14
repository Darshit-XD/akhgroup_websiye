import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { useState } from 'react';
import PropertyDetails from './PropertyDetails';

export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Villa Estate',
    location: 'Beverly Hills, CA',
    price: '$2,850,000',
    beds: 5,
    baths: 4,
    area: '4,500',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Luxury Penthouse',
    location: 'Manhattan, NY',
    price: '$3,200,000',
    beds: 4,
    baths: 3,
    area: '3,800',
    image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Beachfront Paradise',
    location: 'Miami Beach, FL',
    price: '$4,100,000',
    beds: 6,
    baths: 5,
    area: '5,200',
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Mountain Retreat',
    location: 'Aspen, CO',
    price: '$2,650,000',
    beds: 4,
    baths: 3,
    area: '3,900',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: 'Downtown Loft',
    location: 'Chicago, IL',
    price: '$1,850,000',
    beds: 3,
    baths: 2,
    area: '2,800',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    title: 'Garden Estate',
    location: 'San Francisco, CA',
    price: '$3,750,000',
    beds: 5,
    baths: 4,
    area: '4,200',
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
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
          <span className="bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium border border-yellow-400/20 inline-block mb-4">
            Featured Listings
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Exclusive Properties
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties in prime locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-gray-900/50 rounded-3xl overflow-hidden border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20 hover:scale-105"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-yellow-400 transition-all duration-300 group/btn"
                >
                  <Heart
                    size={20}
                    className={`${
                      favorites.includes(property.id)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-white group-hover/btn:text-black'
                    } transition-colors`}
                  />
                </button>
                <div className="absolute bottom-4 left-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-lg">
                  {property.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-400 mb-4">
                  <MapPin size={16} className="text-yellow-400 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-yellow-400/10">
                  <div className="flex items-center gap-2">
                    <Bed size={18} className="text-yellow-400" />
                    <span className="text-white font-medium">{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={18} className="text-yellow-400" />
                    <span className="text-white font-medium">{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square size={18} className="text-yellow-400" />
                    <span className="text-white font-medium text-sm">{property.area} sq ft</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProperty(property)}
                  className="w-full mt-6 bg-transparent border-2 border-yellow-400 text-yellow-400 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-400/50">
            View All Properties
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
