import { useState } from 'react';

const useHome = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchProperties = async (criteria) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/properties/search?${new URLSearchParams(criteria)}`);
      const data = await response.json();
      if (response.ok) {
        setSearchResults(data);
      }
    } catch (error) {
      console.error('Error searching properties:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    searchResults,
    loading,
    searchProperties
  };
};

export default useHome;