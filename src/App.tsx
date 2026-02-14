import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Properties from './components/Properties';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Properties />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
