import React from 'react';
import images from '../assets/images';

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    'All',
    'Appetizers',
    'Main Course',
    'Desserts',
    'Beverages',
    'Specials'
  ];

  return (
    <div id="CategoryList_1" className="md:w-1/4">
      <div id="CategoryList_2" className="bg-white rounded-lg shadow-md p-4">
        <h2 id="CategoryList_3" className="text-xl font-semibold mb-4">Categories</h2>
        <ul id="CategoryList_4" className="space-y-2">
          {categories.map((category, index) => (
            <li
              key={index}
              id={`CategoryList_${index + 5}`}
              className={`cursor-pointer p-2 rounded-md transition-colors ${selectedCategory === category ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;