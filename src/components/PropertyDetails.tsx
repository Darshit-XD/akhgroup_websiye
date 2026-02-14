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
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-300 transition-all duration-300 z-10"
        >
          <X size={24} />
        </button>

        <div className="bg-black border border-yellow-400/20 rounded-3xl overflow-hidden">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="relative overflow-hidden rounded-2xl h-96 bg-gray-900">
                <img
                  src={mainImage}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
                  {property.price}
                </div>
              </div>
              <div className="flex gap-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className={`w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      mainImage === img ? 'border-yellow-400' : 'border-yellow-400/20 hover:border-yellow-400/50'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{property.title}</h1>
                <div className="flex items-center text-yellow-400 mb-4">
                  <MapPin size={18} className="mr-2" />
                  <span className="text-gray-300">{property.location}</span>
                </div>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-2xl border border-yellow-400/10 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Bedrooms</div>
                    <div className="flex items-center gap-2">
                      <Bed className="text-yellow-400" size={20} />
                      <span className="text-white text-lg font-bold">{property.beds}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Bathrooms</div>
                    <div className="flex items-center gap-2">
                      <Bath className="text-yellow-400" size={20} />
                      <span className="text-white text-lg font-bold">{property.baths}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Area</div>
                  <div className="flex items-center gap-2">
                    <Square className="text-yellow-400" size={20} />
                    <span className="text-white text-lg font-bold">{property.area} sq ft</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => document.getElementById('contact-form-' + property.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-yellow-400 text-black py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-400/50"
              >
                Schedule Viewing
              </button>
            </div>
          </div>

          {/* Description Section */}
          <div className="px-8 py-6 border-t border-yellow-400/10">
            <h2 className="text-2xl font-bold text-white mb-4">Property Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              This stunning {property.title.toLowerCase()} is perfectly situated in the heart of {property.location}.
              Featuring {property.beds} spacious bedrooms and {property.baths} luxurious bathrooms, this property spans
              {property.area} square feet of elegantly designed living space. The home showcases premium finishes,
              state-of-the-art amenities, and breathtaking views that make it an exceptional choice for discerning buyers.
            </p>
          </div>

          {/* Amenities */}
          <div className="px-8 py-6 border-t border-yellow-400/10">
            <h2 className="text-2xl font-bold text-white mb-6">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {amenities.map((amenity, idx) => (
                <div key={idx} className="bg-gray-900/50 p-4 rounded-xl border border-yellow-400/10 flex items-center gap-3 hover:border-yellow-400/30 transition-all">
                  <amenity.icon className="text-yellow-400" size={24} />
                  <span className="text-white font-medium">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="px-8 py-8 bg-gradient-to-b from-gray-900/20 to-transparent border-t border-yellow-400/10">
            <div id={`contact-form-${property.id}`} className="max-w-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Interested? Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-black/50 border border-yellow-400/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-black/50 border border-yellow-400/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full bg-black/50 border border-yellow-400/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    rows={3}
                    className="w-full bg-black/50 border border-yellow-400/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                    placeholder="Tell us about your interest..."
                  ></textarea>
                </div>

                {submitted ? (
                  <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-6 py-3 rounded-xl text-center font-medium">
                    Thank you! Our agent will contact you shortly.
                  </div>
                ) : (
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
                    >
                      Submit Inquiry
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 bg-transparent border-2 border-yellow-400 text-yellow-400 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
                    >
                      Close
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
