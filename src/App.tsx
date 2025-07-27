import React, { useState, useEffect, useRef } from 'react';
import { Heart, MessageCircle, Gift, Sparkles, Calendar, Camera, Star, MapPin, Image } from 'lucide-react';

// Import images
import image1 from './assets/images/Snapchat-1384867210.jpg';
import image2 from './assets/images/Snapchat-1366539203.jpg';
import image3 from './assets/images/Snapchat-1314694173.jpg';
import image4 from './assets/images/Snapchat-1289877029.jpg';
import image5 from './assets/images/Snapchat-1260641920.jpg';
import bestFriendImage from './assets/images/best friend.jpg';

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface MemoryPhoto {
  id: number;
  src: string;
  title: string;
  description: string;
}

function App() {
  const [currentSection, setCurrentSection] = useState<'landing' | 'message' | 'journey' | 'memories' | 'surprise'>('landing');
  const [showHearts, setShowHearts] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<MemoryPhoto | null>(null);

  const memoryPhotos: MemoryPhoto[] = [
    {
      id: 1,
      src: bestFriendImage,
      title: "Best Friends Forever",
      description: "The moment our beautiful friendship began - you and me, ready to take on the world together! 💕"
    },
    {
      id: 2,
      src: image1,
      title: "Perfect Moments",
      description: "Just us being our amazing selves! Every photo with you tells a story of joy and laughter. 📸"
    },
    {
      id: 3,
      src: image2,
      title: "Celebration Time",
      description: "Making memories and celebrating life together - these are the moments I treasure most! 🎉"
    },
    {
      id: 4,
      src: image3,
      title: "Our Adventures",
      description: "Every adventure is better with you by my side. From silly selfies to precious moments! 🌟"
    },
    {
      id: 5,
      src: image4,
      title: "Happy Times",
      description: "Your smile lights up every photo and every moment we share together! ✨"
    },
    {
      id: 6,
      src: image5,
      title: "Beautiful Memories",
      description: "Each picture captures a piece of our journey and the bond we share! 💖"
    }
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      title: "Best Friend",
      date: "The Beginning",
      description: "When our beautiful friendship began and I knew you were someone special",
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-400 to-rose-500"
    },
    {
      id: 2,
      title: "My Birthday",
      date: "October 28th",
      description: "A special day made even more special because you're in my life",
      icon: <Gift className="w-6 h-6" />,
      color: "from-orange-400 to-yellow-500"
    },
    {
      id: 3,
      title: "October 28th",
      date: "Celebration",
      description: "Another year of life, another year of having you as my precious friend",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-purple-400 to-indigo-500"
    },
    {
      id: 4,
      title: "October 29th",
      date: "Day After",
      description: "The joy continues, creating more beautiful memories together",
      icon: <Camera className="w-6 h-6" />,
      color: "from-emerald-400 to-teal-500"
    },
    {
      id: 5,
      title: "October 31st",
      date: "First Diwali",
      description: "Some coming in life with first diwali - celebrating the festival of lights together",
      icon: <Star className="w-6 h-6" />,
      color: "from-red-400 to-pink-500"
    },
    {
      id: 6,
      title: "First New Year",
      date: "New Beginnings",
      description: "Starting a new year with hope, dreams, and your friendship lighting the way",
      icon: <MapPin className="w-6 h-6" />,
      color: "from-cyan-400 to-blue-500"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGiftClick = () => {
    setCurrentSection('message');
    setShowHearts(true);
    scrollToSection('message-section');
  };

  const handleJourneyClick = () => {
    setCurrentSection('journey');
    scrollToSection('journey-section');
  };

  const handleMemoriesClick = () => {
    setCurrentSection('memories');
    scrollToSection('memories-section');
  };

  const handleSurpriseClick = () => {
    setCurrentSection('surprise');
    setShowAnimation(true);
    scrollToSection('surprise-section');
    
    // Use Web Speech API for birthday message
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance('Happy Birthday Nikki! Hope your day is as amazing as you are!');
      utterance.rate = 0.8;
      utterance.pitch = 1.2;
      utterance.volume = 0.8;
      
      // Try to use a female voice if available
      const voices = speechSynthesis.getVoices();
      const femaleVoice = voices.find(voice => 
        voice.name.toLowerCase().includes('female') || 
        voice.name.toLowerCase().includes('woman') ||
        voice.gender === 'female'
      );
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }
      
      speechSynthesis.speak(utterance);
      setIsPlaying(true);
      
      utterance.onend = () => {
        setIsPlaying(false);
      };
    }

    // Stop animation after 15 seconds
    setTimeout(() => {
      setShowAnimation(false);
      setIsPlaying(false);
    }, 15000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-200 via-rose-100 to-orange-100"></div>
      
      {/* Floating Balloons */}
      {showAnimation && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(15)].map((_, i) => (
            <div
              key={`balloon-${i}`}
              className="absolute animate-float-up"
              style={{
                left: `${Math.random() * 90}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            >
              <div className={`w-12 h-16 rounded-full bg-gradient-to-b ${
                ['from-red-400 to-red-600', 'from-blue-400 to-blue-600', 'from-green-400 to-green-600', 
                 'from-yellow-400 to-yellow-600', 'from-purple-400 to-purple-600'][i % 5]
              } shadow-lg`}></div>
              <div className="w-0.5 h-8 bg-gray-600 mx-auto"></div>
            </div>
          ))}
        </div>
      )}

      {/* Confetti Animation */}
      {showAnimation && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {[...Array(50)].map((_, i) => (
            <div
              key={`confetti-${i}`}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <div className={`w-2 h-2 ${
                ['bg-pink-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-red-500'][i % 6]
              } transform rotate-45`}></div>
            </div>
          ))}
        </div>
      )}

      {/* Heart Animation */}
      {(showHearts || showAnimation) && (
        <div className="fixed inset-0 pointer-events-none z-30">
          {[...Array(showAnimation ? 40 : 20)].map((_, i) => (
            <Heart
              key={`heart-${i}`}
              className={`absolute text-pink-500 ${showAnimation ? 'animate-heart-burst' : 'animate-fall'} opacity-70`}
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

      {/* Landing Section */}
      <section id="landing-section" className="min-h-screen flex items-center justify-center relative z-10">
        <div className={`text-center px-6 max-w-2xl mx-auto transition-all duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-8 animate-bounce">
            <Gift className="w-20 h-20 mx-auto text-pink-600 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-dancing bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 bg-clip-text text-transparent mb-6 animate-glow">
            NIKJOY
          </h1>
          
          <p className="text-2xl md:text-3xl font-dancing text-rose-800 mb-4">
            Our Journey
          </p>
          
          <p className="text-lg md:text-xl text-rose-700 mb-12 font-poppins animate-fade-in-up">
            A special birthday celebration created just for you, Nikki ✨
          </p>
          
          <button
            onClick={handleGiftClick}
            className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-heartbeat"
          >
            <div className="flex items-center gap-3">
              <Gift className="w-6 h-6 group-hover:animate-spin" />
              Open Your Gift
              <Sparkles className="w-6 h-6 group-hover:animate-pulse" />
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Message Section */}
      <section id="message-section" className="min-h-screen flex items-center justify-center relative z-10 py-20">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <div className="mb-12 animate-scale-in">
            <Heart className="w-24 h-24 mx-auto text-rose-500 fill-current animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-dancing bg-gradient-to-r from-rose-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-8 animate-glow">
            Happy Birthday, Beautiful Nikki! 🎂
          </h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-200 animate-fade-in-up">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-poppins">
              My dearest Nikki,
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-poppins">
              Today is such a special day because it's the day we celebrate YOU! 🌟 As I sit here thinking about all the wonderful moments we've shared, I can't help but smile at how blessed I am to have you in my life.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-poppins">
              From our beautiful friendship that started as the foundation of everything wonderful between us, to all the laughter, adventures, and precious memories we've created together - every moment with you has been a gift.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-poppins">
              You have this incredible ability to light up any room you walk into, and your smile has the power to make even the most ordinary day feel magical. Your kindness, your humor, your beautiful heart - everything about you makes my world brighter.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-poppins">
              On this special day, I want you to know how much you mean to me. You're not just someone special in my life - you're my person, my joy, my everything. I'm so grateful for every shared laugh, every inside joke, every quiet moment, and every adventure we've been on together.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-poppins">
              So here's to you, beautiful - may this new year of your life be filled with all the happiness, love, and magic that you bring into my world every single day. 💖
            </p>
            
            <p className="text-xl md:text-2xl font-dancing text-rose-600 mb-8">
              With all my love and warmest birthday wishes,<br />
              Forever yours ❤️
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <button
              onClick={handleJourneyClick}
              className="group relative px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-heartbeat"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 group-hover:animate-spin" />
                Our Journey Together
                <Heart className="w-6 h-6 group-hover:animate-pulse" />
              </div>
            </button>
            
            <button
              onClick={handleMemoriesClick}
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-heartbeat"
            >
              <div className="flex items-center gap-3">
                <Image className="w-6 h-6 group-hover:animate-spin" />
                Our Memories
                <Camera className="w-6 h-6 group-hover:animate-pulse" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Journey/Roadmap Section */}
      <section id="journey-section" className="min-h-screen flex items-center justify-center relative z-10 py-20">
        <div className="w-full max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-dancing text-center bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent mb-16 animate-glow">
            Our Beautiful Journey 💕
          </h2>
          
          <div className="relative">
            {/* Timeline Path */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-300 via-rose-400 to-orange-400 h-full rounded-full"></div>
            
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Event Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-lg font-semibold text-rose-600 mb-3">{event.date}</p>
                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 flex items-center justify-center shadow-lg border-4 border-white hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {event.icon}
                  </div>
                </div>
                
                {/* Milestone Number */}
                <div className={`w-5/12 flex ${index % 2 === 0 ? 'justify-start pl-8' : 'justify-end pr-8'}`}>
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-white hover:scale-110 transition-transform duration-300`}>
                    {event.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section id="memories-section" className="min-h-screen flex items-center justify-center relative z-10 py-20">
        <div className="w-full max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-dancing text-center bg-gradient-to-r from-cyan-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent mb-16 animate-glow">
            Our Beautiful Memories 📸
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 stagger-children">
            {memoryPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-pink-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer photo-hover"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="w-5 h-5 text-gray-700" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {photo.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {photo.description}
                </p>
              </div>
            ))}
          </div>

          {/* Photo Modal */}
          {selectedPhoto && (
            <div
              className="fixed inset-0 bg-black/80 modal-backdrop z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl p-6 animate-scale-in">
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors duration-300 z-10"
                >
                  <span className="text-2xl text-gray-600">×</span>
                </button>
                
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-2xl mb-6"
                />
                
                <div className="text-center">
                  <h3 className="text-3xl font-dancing text-gray-800 mb-4">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {selectedPhoto.description}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <div className="text-center">
            <button
              onClick={handleSurpriseClick}
              className="group relative px-12 py-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-bold rounded-full text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-heartbeat"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 group-hover:animate-spin" />
                One More Surprise!
                <Gift className="w-8 h-8 group-hover:animate-bounce" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Surprise Section */}
      <section id="surprise-section" className="min-h-screen flex items-center justify-center relative z-10 py-20">
        <div className="text-center px-6 max-w-4xl mx-auto">
          {!showAnimation ? (
            <>
              <div className="mb-12 animate-scale-in">
                <Sparkles className="w-32 h-32 mx-auto text-yellow-500 animate-pulse" />
              </div>
              
              <h2 className="text-5xl md:text-7xl font-dancing bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-8 animate-glow">
                Ready for Magic? ✨
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-12 font-poppins">
                Click the button below for a special birthday surprise just for you!
              </p>
              
              <button
                onClick={handleSurpriseClick}
                className="group relative px-16 py-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white font-bold rounded-full text-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse-glow"
              >
                <div className="flex items-center gap-4">
                  <Star className="w-10 h-10 group-hover:animate-spin" />
                  Click for Magic!
                  <Star className="w-10 h-10 group-hover:animate-spin" />
                </div>
              </button>
            </>
          ) : (
            <div className="animate-scale-in">
              <h1 className="text-6xl md:text-8xl font-dancing bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-8 animate-glow">
                🎉 HAPPY BIRTHDAY NIKKI! 🎂
              </h1>
              
              <p className="text-3xl md:text-4xl font-dancing text-rose-600 mb-8 animate-bounce">
                Hope your day is as amazing as you are! 💖
              </p>
              
              <div className="text-6xl animate-heartbeat">
                🎈🎂🎁🌟💕
              </div>
              
              {isPlaying && (
                <p className="text-xl text-gray-600 mt-8 animate-fade-in-up">
                  🎵 Playing: "Happy Birthday Nikki" 🎵
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Floating Decorative Hearts */}
      <div className="fixed bottom-10 left-10 animate-float z-20">
        <Heart className="w-8 h-8 text-pink-400 fill-current opacity-60" />
      </div>
      <div className="fixed top-20 right-10 animate-float animation-delay-1000 z-20">
        <Heart className="w-6 h-6 text-rose-400 fill-current opacity-60" />
      </div>
      <div className="fixed bottom-20 right-20 animate-float animation-delay-2000 z-20">
        <Heart className="w-10 h-10 text-red-400 fill-current opacity-60" />
      </div>
      <div className="fixed top-1/3 left-10 animate-float animation-delay-1500 z-20">
        <Heart className="w-4 h-4 text-pink-500 fill-current opacity-60" />
      </div>
    </div>
  );
}

export default App;