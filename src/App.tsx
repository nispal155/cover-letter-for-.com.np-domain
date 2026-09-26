import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import Home from "./pages/Home";
import Generator from "./pages/Generator";
import ImageCompressor from "./pages/ImageCompressor";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const scrollable = documentHeight - windowHeight;
      if (scrollable > 0) {
        const scrolled = (scrollTop / scrollable) * 100;
        setProgress(scrolled);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-[3px] bg-blue-600 z-[100] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(37,99,235,0.8)]" 
      style={{ width: `${progress}%` }} 
    />
  );
}

function App() {
  return (
    <Router>
      <ScrollProgress />
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generate" element={<Generator />} />
            <Route path="/compress" element={<ImageCompressor />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
