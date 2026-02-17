import { MapPin, Bed, Bath, Square, Heart, ChevronRight } from 'lucide-react';
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
  subProperties?: Property[];
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
    subProperties: [
      { id: 101, title: 'Royal 3BHK Elite', location: 'Wing A', price: '₹85 L', beds: 3, baths: 3, area: '1850', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { id: 102, title: 'Royal 4BHK Grand', location: 'Wing B', price: '₹1.2 Cr', beds: 4, baths: 4, area: '2400', image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ]
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
    subProperties: [
      { id: 201, title: 'Upwan 2BHK Classic', location: 'Block 1', price: '₹65 L', beds: 2, baths: 2, area: '1250', image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { id: 202, title: 'Upwan 3BHK Premium', location: 'Block 2', price: '₹82 L', beds: 3, baths: 3, area: '1600', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ]
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
    subProperties: [
      { id: 301, title: 'Parth Studio', location: 'Tower A', price: '₹55 L', beds: 1, baths: 1, area: '800', image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { id: 302, title: 'Parth 2BHK', location: 'Tower B', price: '₹72 L', beds: 2, baths: 2, area: '1100', image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ]
  },
];

export default function Properties() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [viewMode, setViewMode] = useState<'projects' | 'subProperties'>('projects');
  const [currentProject, setCurrentProject] = useState<Property | null>(null);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const handleProjectClick = (project: Property) => {
    setCurrentProject(project);
    setViewMode('subProperties');
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeProperties = viewMode === 'projects' ? properties : (currentProject?.subProperties || []);

  return (
    <section id="properties" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium border border-red-200 inline-block mb-4">
            {viewMode === 'projects' ? 'Our Landmark Projects' : `${currentProject?.title} Variants`}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            {viewMode === 'projects' ? 'Current Projects' : 'Available Units'}
          </h2>
          {viewMode === 'subProperties' && (
            <button 
              onClick={() => setViewMode('projects')}
              className="group relative bg-red-700 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-red-700/30 hover:bg-red-800 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 mx-auto mt-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Project Selection</span>
            </button>
          )}
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${viewMode === 'subProperties' ? 'animate-in fade-in slide-in-from-bottom-10' : ''}`}>
          {activeProperties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-red-700/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-700/10 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {property.projectLogo && viewMode === 'projects' && (
                  <div className="absolute top-4 left-4 bg-white/95 p-2 rounded-xl shadow-lg">
                    <img src={property.projectLogo} alt="Project Logo" className="h-10 w-auto object-contain" />
                  </div>
                )}
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 bg-white/50 backdrop-blur-sm p-3 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300"
                >
                  <Heart
                    size={20}
                    className={favorites.includes(property.id) ? 'fill-red-700 text-red-700' : 'text-gray-900'}
                  />
                </button>
                <div className="absolute bottom-4 left-4 bg-red-700 text-white px-4 py-2 rounded-full font-bold text-lg">
                  {property.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin size={16} className="text-red-700 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-2">
                    <Bed size={18} className="text-red-700" />
                    <span className="text-gray-900 font-medium">{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={18} className="text-red-700" />
                    <span className="text-gray-900 font-medium">{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square size={18} className="text-red-700" />
                    <span className="text-gray-900 font-medium text-sm">{property.area} sq ft</span>
                  </div>
                </div>

                <button
                  onClick={() => viewMode === 'projects' ? handleProjectClick(property) : setSelectedProperty(property)}
                  className="w-full mt-6 bg-transparent border-2 border-red-700 text-red-700 py-3 rounded-full font-semibold hover:bg-red-700 hover:text-white transition-all duration-300"
                >
                  {viewMode === 'projects' ? 'View Property Units' : 'View Details'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {viewMode === 'projects' && (
          <div className="text-center mt-12">
            <button 
              onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-700 text-white px-10 py-4 rounded-full font-semibold hover:bg-red-800 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-700/30"
            >
              Explore All Projects
            </button>
          </div>
        )}
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
