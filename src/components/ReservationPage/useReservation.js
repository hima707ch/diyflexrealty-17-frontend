import { useState, useEffect } from 'react';

export const useReservation = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Fetch existing reservations
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/reservations');
      const data = await response.json();
      setReservations(data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setReservations([...reservations, data]);
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  const handleEdit = async (reservation) => {
    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch(`/api/reservations/${reservation.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservation),
      });
      const data = await response.json();
      setReservations(reservations.map(r => r.id === data.id ? data : r));
    } catch (error) {
      console.error('Error updating reservation:', error);
    }
  };

  const handleCancel = async (id) => {
    try {
      // TODO: Replace with actual API endpoint
      await fetch(`/api/reservations/${id}`, {
        method: 'DELETE',
      });
      setReservations(reservations.filter(r => r.id !== id));
    } catch (error) {
      console.error('Error canceling reservation:', error);
    }
  };

  return {
    reservations,
    handleSubmit,
    handleEdit,
    handleCancel,
  };
};
