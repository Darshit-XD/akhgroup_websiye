import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
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
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium border border-red-200 inline-block mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Let's Start Your Journey
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to find your dream property? Contact us today and let our experts guide you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-3xl border border-red-100 shadow-xl shadow-red-900/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 text-gray-900 focus:outline-none focus:border-red-700 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 text-gray-900 focus:outline-none focus:border-red-700 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 text-gray-900 focus:outline-none focus:border-red-700 transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 text-gray-900 focus:outline-none focus:border-red-700 transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-2xl text-center font-medium">
                  Thank you! We'll get back to you soon.
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-red-700 text-white py-4 rounded-full font-semibold hover:bg-red-800 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-700/20 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-red-700 p-8 rounded-3xl text-white shadow-xl shadow-red-900/20 hover:scale-[1.02] transition-transform">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-xl mb-2">Phone</h3>
              <p className="text-white/90 font-medium">+1 (555) 123-4567</p>
              <p className="text-white/70 text-sm">Mon-Fri, 9AM-6PM</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-900/5 hover:scale-[1.02] transition-transform">
              <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-red-700" size={24} />
              </div>
              <h3 className="text-gray-900 font-bold text-xl mb-2">Email</h3>
              <p className="text-gray-600">info@akhgroup.com</p>
              <p className="text-gray-600">support@akhgroup.com</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-900/5 hover:scale-[1.02] transition-transform">
              <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-red-700" size={24} />
              </div>
              <h3 className="text-gray-900 font-bold text-xl mb-2">Office</h3>
              <p className="text-gray-600">123 Business Avenue</p>
              <p className="text-gray-600">New York, NY 10001</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
