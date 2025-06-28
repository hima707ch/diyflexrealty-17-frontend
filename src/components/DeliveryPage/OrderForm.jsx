import React, { useState } from 'react';
import images from '../assets/images';

const OrderForm = ({ onSubmitOrder }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    items: '',
    instructions: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitOrder(formData);
    setFormData({
      name: '',
      address: '',
      phone: '',
      items: '',
      instructions: ''
    });
  };

  return (
    <div id="OrderForm_1" className="bg-white p-6 rounded-lg shadow-lg">
      <h2 id="OrderForm_2" className="text-2xl font-semibold mb-6">Place Your Order</h2>
      <form id="OrderForm_3" onSubmit={handleSubmit} className="space-y-4">
        <div id="OrderForm_4">
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div id="OrderForm_5">
          <label className="block text-gray-700 mb-2">Delivery Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div id="OrderForm_6">
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div id="OrderForm_7">
          <label className="block text-gray-700 mb-2">Order Items</label>
          <textarea
            name="items"
            value={formData.items}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Enter your items here..."
          />
        </div>
        <div id="OrderForm_8">
          <label className="block text-gray-700 mb-2">Special Instructions</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
