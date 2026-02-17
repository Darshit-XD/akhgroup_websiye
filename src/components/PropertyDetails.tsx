import { X, MapPin, Bed, Bath, Square, Home, Wifi, Zap, Droplets, TreePine, Phone, Mail, Calendar } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
}

interface PropertyDetailsProps {
  property: Property;
  onClose: () => void;
}

export default function PropertyDetails({ property, onClose }: PropertyDetailsProps) {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactForm({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const amenities = [
    { icon: Home, label: 'Modern Design' },
    { icon: Wifi, label: 'Smart Home' },
    { icon: Zap, label: 'Solar Power' },
    { icon: Droplets, label: 'Water Feature' },
    { icon: TreePine, label: 'Garden' },
    { icon: Calendar, label: 'Recently Renovated' },
  ];

  const images = [
    property.image,
    'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1142681/pexels-photo-1142681.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 overflow-y-auto animate-in fade-in zoom-in duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onClose}
          className="fixed top-6 right-6 bg-red-700 text-white p-3 rounded-full hover:bg-red-800 transition-all duration-300 z-[60] shadow-lg shadow-red-700/20"
        >
          <X size={24} />
        </button>

        <div className="bg-white border border-red-100 rounded-3xl overflow-hidden shadow-2xl shadow-red-900/10">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="relative overflow-hidden rounded-2xl h-[500px] bg-gray-50 group">
                <img
                  src={mainImage}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 bg-red-700 text-white px-6 py-3 rounded-full font-bold text-xl shadow-xl">
                  {property.price}
                </div>
              </div>
              <div className="flex gap-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className={`w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      mainImage === img ? 'border-red-700 scale-105 shadow-lg shadow-red-700/20' : 'border-gray-100 hover:border-red-700/50'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">{property.title}</h1>
                <div className="flex items-center text-red-700 mb-6 bg-red-50 p-4 rounded-2xl border border-red-100">
                  <MapPin size={22} className="mr-3" />
                  <span className="text-gray-800 font-medium">{property.location}</span>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-red-50 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-xl border border-red-50">
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Bedrooms</div>
                    <div className="flex items-center gap-3">
                      <Bed className="text-red-700" size={24} />
                      <span className="text-gray-900 text-xl font-bold">{property.beds}</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-red-50">
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Bathrooms</div>
                    <div className="flex items-center gap-3">
                      <Bath className="text-red-700" size={24} />
                      <span className="text-gray-900 text-xl font-bold">{property.baths}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-red-50">
                  <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Total Area</div>
                  <div className="flex items-center gap-3">
                    <Square className="text-red-700" size={24} />
                    <span className="text-gray-900 text-xl font-bold">{property.area} sq ft</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => document.getElementById('contact-form-' + property.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-red-700 text-white py-4 rounded-full font-bold text-lg hover:bg-red-800 transition-all duration-300 hover:scale-105 shadow-xl shadow-red-700/20"
              >
                Schedule Site Visit
              </button>
            </div>
          </div>

          {/* Description Section */}
          <div className="px-8 py-10 border-t border-gray-100 bg-gray-50/50">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Property Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
              This stunning {property.title.toLowerCase()} is perfectly situated in the heart of {property.location}.
              Featuring {property.beds} spacious bedrooms and {property.baths} luxurious bathrooms, this property spans
              {property.area} square feet of elegantly designed living space. The home showcases premium finishes,
              state-of-the-art amenities, and breathtaking views that make it an exceptional choice for discerning buyers.
            </p>
          </div>

          {/* Amenities */}
          <div className="px-8 py-10 border-t border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Premium Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {amenities.map((amenity, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4 hover:border-red-700/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="bg-red-50 p-3 rounded-full group-hover:bg-red-700 transition-colors">
                    <amenity.icon className="text-red-700 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <span className="text-gray-800 font-bold">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="px-8 py-12 bg-red-50/30 border-t border-gray-100">
            <div id={`contact-form-${property.id}`} className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Express Your Interest</h2>
                <p className="text-gray-600">Fill in your details below and our property expert will get back to you within 24 hours.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-red-700 focus:ring-4 focus:ring-red-700/5 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-red-700 focus:ring-4 focus:ring-red-700/5 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-red-700 focus:ring-4 focus:ring-red-700/5 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Message (Optional)</label>
                  <textarea
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    rows={4}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-red-700 focus:ring-4 focus:ring-red-700/5 transition-all resize-none"
                    placeholder="I am interested in this property and would like to know more..."
                  ></textarea>
                </div>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-8 py-5 rounded-2xl text-center font-bold animate-in fade-in zoom-in duration-300">
                    Thank you! Our relationship manager will contact you shortly.
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-red-700 text-white py-5 rounded-2xl font-bold text-lg hover:bg-red-800 transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-red-700/20"
                    >
                      Confirm Interest
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 bg-white border-2 border-red-700 text-red-700 py-5 rounded-2xl font-bold text-lg hover:bg-red-50 transition-all duration-300"
                    >
                      Back to Gallery
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* Agent Info */}
            <div className="mt-8 pt-8 border-t border-yellow-400/10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 p-6 rounded-2xl border border-yellow-400/10">
                <h3 className="text-white font-bold text-lg mb-3">Agent Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="text-yellow-400" size={20} />
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-yellow-400" size={20} />
                    <span className="text-gray-300">agent@akhdeveloper.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-2xl border border-yellow-400/10">
                <h3 className="text-white font-bold text-lg mb-3">Property Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Property ID:</span>
                    <span className="text-white font-medium">AKH-{String(property.id).padStart(5, '0')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-yellow-400 font-medium">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
