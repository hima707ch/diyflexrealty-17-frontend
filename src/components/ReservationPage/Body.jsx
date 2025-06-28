import React from 'react';
import ReservationForm from './ReservationForm';
import ReservationList from './ReservationList';
import images from '../assets/images';
import { useReservation } from './useReservation';

const Body = () => {
  const { reservations, handleSubmit, handleEdit, handleCancel } = useReservation();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-3xl font-bold text-gray-800 mb-8">Manage Your Reservations</h1>
      <div id="Body_3" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ReservationForm onSubmit={handleSubmit} />
        <ReservationList 
          reservations={reservations}
          onEdit={handleEdit}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default Body;
