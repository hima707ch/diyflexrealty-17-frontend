import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20">
      <div className="absolute inset-0">
        <svg className="absolute left-0 top-0 opacity-20" viewBox="0 0 200 200">
          <path fill="#FFFFFF" d="M45,-78C58.2,-70.2,68.7,-56.7,75.3,-41.9C81.8,-27.1,84.5,-11,82.4,4.2C80.4,19.4,73.6,33.7,64.2,45.9C54.8,58.1,42.8,68.2,28.7,73.6C14.6,79,-1.6,79.7,-17.7,76.5C-33.8,73.3,-49.9,66.2,-62.4,54.7C-74.9,43.2,-83.8,27.3,-86.5,10.2C-89.2,-6.9,-85.7,-25.2,-76.8,-40.1C-67.9,-55,-53.6,-66.5,-38.5,-73.2C-23.4,-79.9,-7.4,-81.8,4.3,-78.8C16,-75.8,31.8,-85.8,45,-78Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 id="Hero_2" className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Find Your Dream
                <span className="animate-slideUp block">Home</span>
              </span>
            </h1>
            <p id="Hero_3" className="text-blue-100 text-lg mb-8">Discover the perfect property that matches your lifestyle and dreams. Expert guidance every step of the way.</p>
            <button id="Hero_4" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">Get Started</button>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={images[0] || 'https://via.placeholder.com/600x400'} alt="Modern home" className="rounded-lg shadow-2xl animate-float" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;