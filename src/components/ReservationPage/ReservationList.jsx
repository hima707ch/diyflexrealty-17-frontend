import React from 'react';
import images from '../assets/images';

const ReservationList = ({ reservations, onEdit, onCancel }) => {
  return (
    <div id="ReservationList_1" className="bg-white p-6 rounded-lg shadow-lg">
      <h2 id="ReservationList_2" className="text-2xl font-semibold mb-6">Your Reservations</h2>
      {reservations.length === 0 ? (
        <p id="ReservationList_3" className="text-gray-500 text-center">No reservations found</p>
      ) : (
        <div id="ReservationList_4" className="space-y-4">
          {reservations.map((reservation) => (
            <div
              key={reservation.id}
              id={`ReservationList_5_${reservation.id}`}
              className="border p-4 rounded-md"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">Date: {reservation.date}</p>
                  <p>Time: {reservation.time}</p>
                  <p>Guests: {reservation.guests}</p>
                  {reservation.specialRequests && (
                    <p>Special Requests: {reservation.specialRequests}</p>
                  )}
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => onEdit(reservation)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onCancel(reservation.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReservationList;
