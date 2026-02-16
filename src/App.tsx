import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Properties from './components/Properties';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import logoImg from "@assets/IMG-20260215-WA0002_1771173199477.jpg";

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3300);

    const mouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setDotPos({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    window.addEventListener('mousemove', mouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white animate-slide-up">
          <div className="text-center animate-logo-in">
            <div className="mb-6 inline-block">
              <img src={logoImg} alt="AKH GROUP" className="w-32 h-auto" />
            </div>
            <div className="flex items-center justify-center">
              <span className="text-4xl font-serif font-bold text-red-700 tracking-tight">AKH</span>
              <span className="text-4xl font-serif font-light text-gray-800 ml-2 tracking-widest">GROUP</span>
            </div>
            <div className="mt-4 h-1 w-48 bg-gray-100 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-red-700 animate-[loading_2.5s_ease-in-out_forwards]"></div>
            </div>
          </div>
        </div>
      )}

      <div className="custom-cursor hidden md:block" style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, transform: 'translate(-50%, -50%)' }} />
      <div className="custom-cursor-dot hidden md:block" style={{ left: `${dotPos.x}px`, top: `${dotPos.y}px`, transform: 'translate(-50%, -50%)' }} />

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
