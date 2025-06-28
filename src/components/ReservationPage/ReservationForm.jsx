import React, { useState } from 'react';
import images from '../assets/images';

const ReservationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    specialRequests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ date: '', time: '', guests: 1, specialRequests: '' });
  };

  return (
    <div id="ReservationForm_1" className="bg-white p-6 rounded-lg shadow-lg">
      <h2 id="ReservationForm_2" className="text-2xl font-semibold mb-6">Make a Reservation</h2>
      <form id="ReservationForm_3" onSubmit={handleSubmit} className="space-y-4">
        <div id="ReservationForm_4">
          <label className="block text-gray-700 mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div id="ReservationForm_5">
          <label className="block text-gray-700 mb-2">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div id="ReservationForm_6">
          <label className="block text-gray-700 mb-2">Number of Guests</label>
          <input
            type="number"
            name="guests"
            min="1"
            value={formData.guests}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div id="ReservationForm_7">
          <label className="block text-gray-700 mb-2">Special Requests</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit Reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
