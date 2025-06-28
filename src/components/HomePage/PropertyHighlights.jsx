import React from 'react';
import images from '../assets/images';

const PropertyHighlights = () => {
  return (
    <section id="PropertyHighlights_1" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 id="PropertyHighlights_2" className="text-4xl font-bold text-center mb-12 text-gray-900">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img src={images[item] || 'https://via.placeholder.com/400x300'} alt="Property" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Luxury Villa {item}</h3>
                <p className="text-gray-600 mb-4">Beautiful property with modern amenities and scenic views.</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-900 font-bold">$750,000</span>
                  <button className="text-blue-900 hover:text-blue-700">View Details →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyHighlights;