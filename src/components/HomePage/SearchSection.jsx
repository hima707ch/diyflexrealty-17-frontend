import React, { useState } from 'react';
import images from '../assets/images';

const SearchSection = ({ onSearch }) => {
  const [searchCriteria, setSearchCriteria] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: ''
  });

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchCriteria);
  };

  return (
    <section id="Search_1" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <form onSubmit={handleSearch} className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Location"
              className="border rounded-lg px-4 py-2"
              value={searchCriteria.location}
              onChange={(e) => setSearchCriteria({...searchCriteria, location: e.target.value})}
            />
            <input
              type="number"
              placeholder="Min Price"
              className="border rounded-lg px-4 py-2"
              value={searchCriteria.minPrice}
              onChange={(e) => setSearchCriteria({...searchCriteria, minPrice: e.target.value})}
            />
            <input
              type="number"
              placeholder="Max Price"
              className="border rounded-lg px-4 py-2"
              value={searchCriteria.maxPrice}
              onChange={(e) => setSearchCriteria({...searchCriteria, maxPrice: e.target.value})}
            />
            <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition duration-300">
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchSection;