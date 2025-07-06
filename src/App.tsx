import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle } from 'lucide-react';

function App() {
  const [stage, setStage] = useState<'initial' | 'love-message' | 'redirect'>('initial');
  const [showHearts, setShowHearts] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Fade in animation on mount
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    if (stage === 'initial') {
      setStage('love-message');
      setShowHearts(true);
    } else if (stage === 'love-message') {
      // Redirect to WhatsApp
      const phoneNumber = '+918460395732';
      const message = encodeURIComponent('Hey Nikki! Just saw your beautiful gift website ❤️');
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-rose-200 to-red-300 opacity-90"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_70%)] animate-pulse"></div>
      </div>

      {/* Falling Hearts Animation */}
      {showHearts && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-500 animate-fall opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                fontSize: `${12 + Math.random() * 8}px`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className={`relative z-10 min-h-screen flex items-center justify-center transition-all duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Initial Stage */}
        {stage === 'initial' && (
          <div className="text-center px-6 max-w-lg mx-auto">
            <div className="mb-8 animate-bounce">
              <Heart className="w-16 h-16 mx-auto text-red-500 fill-current animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-dancing text-rose-800 mb-4 animate-fade-in-up">
              For Nikki 💖
            </h1>
            
            <p className="text-lg md:text-xl text-rose-700 mb-8 font-poppins animate-fade-in-up animation-delay-200">
              A special message is waiting for you...
            </p>
            
            <button
              onClick={handleButtonClick}
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-heartbeat"
            >
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 fill-current group-hover:animate-pulse" />
                Click to open your message
                <Heart className="w-5 h-5 fill-current group-hover:animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            </button>
          </div>
        )}

        {/* Love Message Stage */}
        {stage === 'love-message' && (
          <div className="text-center px-6 max-w-2xl mx-auto">
            <div className="mb-8 animate-scale-in">
              <Heart className="w-24 h-24 mx-auto text-red-500 fill-current animate-pulse" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-dancing text-rose-800 mb-8 animate-glow">
              I Love You Nikki 💖
            </h1>
            
            <p className="text-xl md:text-2xl text-rose-700 mb-8 font-poppins animate-fade-in-up">
              You mean the world to me, and I wanted to create something special just for you.
            </p>
            
            <button
              onClick={handleButtonClick}
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-bounce"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                Send me a message
                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            </button>
          </div>
        )}
      </div>

      {/* Floating Hearts Decoration */}
      <div className="absolute bottom-10 left-10 animate-float">
        <Heart className="w-8 h-8 text-pink-400 fill-current opacity-60" />
      </div>
      <div className="absolute top-20 right-10 animate-float animation-delay-1000">
        <Heart className="w-6 h-6 text-rose-400 fill-current opacity-60" />
      </div>
      <div className="absolute bottom-20 right-20 animate-float animation-delay-2000">
        <Heart className="w-10 h-10 text-red-400 fill-current opacity-60" />
      </div>
      <div className="absolute top-1/3 left-10 animate-float animation-delay-1500">
        <Heart className="w-4 h-4 text-pink-500 fill-current opacity-60" />
      </div>
    </div>
  );
}

export default App;