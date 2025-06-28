import React, { useState } from 'react';
import images from '../assets/images';

const EventList = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleRSVP = (eventId) => {
    // Handle RSVP logic here
    console.log('RSVP for event:', eventId);
  };

  return (
    <div id="EventList_1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <div
          key={event.id}
          id={`EventList_card_${index}`}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
        >
          <img
            src={images[index % images.length]}
            alt={event.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.name}</h3>
            <p className="text-gray-600 mb-4">{event.date}</p>
            <p className="text-gray-700 mb-4">{event.description}</p>
            <div className="flex justify-between items-center">
              <button
                onClick={() => setSelectedEvent(event)}
                className="text-blue-600 hover:text-blue-800"
              >
                View Details
              </button>
              <button
                onClick={() => handleRSVP(event.id)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                RSVP
              </button>
            </div>
          </div>
        </div>
      ))}

      {selectedEvent && (
        <div id="EventList_modal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedEvent.name}</h2>
            <p className="text-gray-600 mb-2">{selectedEvent.date}</p>
            <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
              <button
                onClick={() => handleRSVP(selectedEvent.id)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                RSVP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventList;