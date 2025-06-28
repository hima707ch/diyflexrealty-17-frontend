import { useState, useEffect } from 'react';

const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/properties/search');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        
        // Transform property data into event format
        const transformedEvents = data.map(property => ({
          id: property.id,
          name: property.title || 'Property Viewing Event',
          date: new Date().toLocaleDateString(),
          description: property.description || 'Join us for a property viewing event!'
        }));
        
        setEvents(transformedEvents);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { events, loading, error };
};

export default useEvents;