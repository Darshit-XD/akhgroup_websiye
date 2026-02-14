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
    <section id="contact" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium border border-yellow-400/20 inline-block mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Start Your Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to find your dream property? Contact us today and let our experts guide you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-900/50 p-8 rounded-3xl border border-yellow-400/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/50 border border-yellow-400/20 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/50 border border-yellow-400/20 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-black/50 border border-yellow-400/20 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-black/50 border border-yellow-400/20 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-6 py-4 rounded-2xl text-center font-medium">
                  Thank you! We'll get back to you soon.
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-400/50 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-3xl border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-400/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Phone</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
              <p className="text-gray-400">Mon-Fri, 9AM-6PM</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-3xl border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-400/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Email</h3>
              <p className="text-gray-400">info@akhdeveloper.com</p>
              <p className="text-gray-400">support@akhdeveloper.com</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-3xl border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-400/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Office</h3>
              <p className="text-gray-400">123 Business Avenue</p>
              <p className="text-gray-400">New York, NY 10001</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
