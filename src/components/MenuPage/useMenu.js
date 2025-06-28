import { useState, useEffect } from 'react';

const useMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch('/api/properties/search');
        if (!response.ok) throw new Error('Failed to fetch menu');
        const data = await response.json();
        
        // Transform property data to dish format
        const transformedData = data.map(item => ({
          name: item.title || 'Unnamed Dish',
          description: item.description || 'No description available',
          price: item.price || 0,
          category: item.type || 'Main Course',
          image: item.image
        }));
        
        setDishes(transformedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDishes();
  }, []);

  return {
    selectedCategory,
    setSelectedCategory,
    dishes,
    loading,
    error
  };
};

export default useMenu;