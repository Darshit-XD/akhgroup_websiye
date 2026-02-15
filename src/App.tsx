import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Properties from './components/Properties';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
    <div className="min-h-screen bg-black">
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black animate-slide-up">
          <div className="text-center animate-logo-in">
            <div className="bg-yellow-400 p-4 rounded-2xl mb-6 inline-block shadow-2xl shadow-yellow-400/20">
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-black fill-current">
                <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v13a2 2 0 01-2 2zM7 19h2v-2H7v2zm4 0h2v-2h11v2zm4 0h2v-2h-2v2zm-8-4h2v-2H7v2zm4 0h2v-2h11v2zm4 0h2v-2h-2v2zm-8-4h2v-2H7v2zm4 0h2v-2h11v2zm4 0h2v-2h-2v2z" />
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-4xl font-bold text-yellow-400 tracking-wider">AKH</span>
              <span className="text-4xl font-light text-white ml-2 tracking-widest">GROUP</span>
            </div>
            <div className="mt-4 h-1 w-48 bg-gray-800 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-yellow-400 animate-[loading_2.5s_ease-in-out_forwards]"></div>
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
