import React from 'react';
import EventList from './EventList';
import useEvents from './useEvents';

const Body = () => {
  const { events, loading, error } = useEvents();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-7xl mx-auto">
        <h1 id="Body_3" className="text-4xl font-bold text-center text-gray-900 mb-12">Upcoming Events</h1>
        {loading && <div id="Body_4" className="text-center">Loading events...</div>}
        {error && <div id="Body_5" className="text-center text-red-600">{error}</div>}
        {!loading && !error && <EventList events={events} />}
      </div>
    </div>
  );
};

export default Body;