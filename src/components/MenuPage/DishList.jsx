import React from 'react';
import images from '../assets/images';

const DishList = ({ dishes, selectedCategory }) => {
  const filteredDishes = selectedCategory === 'All'
    ? dishes
    : dishes.filter(dish => dish.category === selectedCategory);

  return (
    <div id="DishList_1" className="md:w-3/4">
      <div id="DishList_2" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDishes.map((dish, index) => (
          <div
            key={index}
            id={`DishList_${index + 3}`}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={dish.image || images[0]}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
              <p className="text-gray-600 mb-2">{dish.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-500 font-bold">${dish.price}</span>
                <span className="text-sm text-gray-500">{dish.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishList;