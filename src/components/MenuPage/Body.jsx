import React from 'react';
import CategoryList from './CategoryList';
import DishList from './DishList';
import images from '../assets/images';
import useMenu from './useMenu';

const Body = () => {
  const { selectedCategory, setSelectedCategory, dishes, loading, error } = useMenu();

  if (loading) return <div id="Body_1" className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center min-h-screen">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <h1 id="Body_4" className="text-4xl font-bold text-center mb-8">Our Menu</h1>
      <div id="Body_5" className="flex flex-col md:flex-row gap-8">
        <CategoryList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <DishList
          dishes={dishes}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
};

export default Body;