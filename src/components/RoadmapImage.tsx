import React from 'react';

const RoadmapImage: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto relative">
      {/* NIKJOY Header */}
      <div className="bg-gradient-to-r from-purple-300 to-purple-400 rounded-t-3xl p-6 text-center">
        <h1 className="text-4xl font-bold text-black mb-2">NIKJOY</h1>
        <p className="text-lg font-semibold text-black italic">Our Journey</p>
      </div>
      
      {/* Road Path Container */}
      <div className="bg-gradient-to-b from-purple-100 to-blue-100 p-8 rounded-b-3xl relative min-h-[600px]">
        {/* Curved Road Path */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 600" preserveAspectRatio="none">
          <path
            d="M150 50 Q50 150 150 250 Q250 350 150 450 Q50 550 150 600"
            stroke="#2d3748"
            strokeWidth="40"
            fill="none"
            strokeDasharray="10,5"
            strokeLinecap="round"
          />
        </svg>
        
        {/* Milestone 1 - Best Friend */}
        <div className="absolute top-8 right-4 flex items-center">
          <img
            src="/api/placeholder/80/80"
            alt="Best Friend"
            className="w-16 h-16 rounded-lg object-cover shadow-lg border-2 border-white"
          />
          <div className="ml-4">
            <h3 className="font-bold text-lg">BEST FRIEND</h3>
          </div>
          <div className="ml-4 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white shadow-lg">
            1
          </div>
        </div>
        
        {/* Milestone 2 - My Birthday */}
        <div className="absolute top-32 left-4 flex items-center">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white shadow-lg mr-4">
            2
          </div>
          <div className="mr-4">
            <h3 className="font-bold text-lg text-right">MY BIRTHDAY</h3>
          </div>
          <img
            src="/api/placeholder/80/80"
            alt="My Birthday"
            className="w-16 h-16 rounded-lg object-cover shadow-lg border-2 border-white"
          />
        </div>
        
        {/* Milestone 3 - 28 October */}
        <div className="absolute top-56 right-4 flex items-center">
          <img
            src="/api/placeholder/80/80"
            alt="28 October"
            className="w-16 h-16 rounded-lg object-cover shadow-lg border-2 border-white"
          />
          <div className="ml-4">
            <h3 className="font-bold text-lg">28,OCTOBER</h3>
          </div>
          <div className="ml-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white shadow-lg">
            3
          </div>
        </div>
        
        {/* Milestone 4 - 29 October */}
        <div className="absolute top-80 left-4 flex items-center">
          <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white shadow-lg mr-4">
            4
          </div>
          <div className="mr-4">
            <h3 className="font-bold text-lg text-right">29,OCTOBER</h3>
          </div>
          <img
            src="/api/placeholder/80/80"
            alt="29 October"
            className="w-16 h-16 rounded-lg object-cover shadow-lg border-2 border-white"
          />
        </div>
        
        {/* Milestone 5 - 31 October */}
        <div className="absolute bottom-32 right-4 flex items-center">
          <img
            src="/api/placeholder/80/80"
            alt="31 October"
            className="w-16 h-16 rounded-lg object-cover shadow-lg border-2 border-white"
          />
          <div className="ml-4">
            <h3 className="font-bold text-lg">31,OCTOBER</h3>
            <p className="text-sm text-gray-600">some coming in life with<br />first diwali</p>
          </div>
          <div className="ml-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white shadow-lg">
            5
          </div>
        </div>
        
        {/* Milestone 6 - First New Year */}
        <div className="absolute bottom-8 left-4 flex items-center">
          <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white shadow-lg mr-4">
            6
          </div>
          <div className="mr-4">
            <h3 className="font-bold text-lg text-right">FIRST NEW YEAR</h3>
          </div>
          <img
            src="/api/placeholder/80/80"
            alt="First New Year"
            className="w-16 h-16 rounded-lg object-cover shadow-lg border-2 border-white"
          />
        </div>
        
        {/* Arrow pointing down */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[30px] border-l-transparent border-r-transparent border-t-black"></div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapImage;
