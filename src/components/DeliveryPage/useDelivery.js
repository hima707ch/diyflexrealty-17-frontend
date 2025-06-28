import { useState, useEffect } from 'react';

const useDelivery = () => {
  const [orders, setOrders] = useState([
    {
      id: '1',
      items: 'Pizza, Burger, Fries',
      status: 'Preparing',
      address: '123 Main St',
      customer: 'John Doe'
    },
    {
      id: '2',
      items: 'Salad, Sandwich',
      status: 'Out for Delivery',
      address: '456 Oak Ave',
      customer: 'Jane Smith'
    }
  ]);

  const submitOrder = async (orderData) => {
    try {
      // Simulating API call
      const newOrder = {
        id: String(orders.length + 1),
        items: orderData.items,
        status: 'Pending',
        address: orderData.address,
        customer: orderData.name
      };
      setOrders([...orders, newOrder]);
      return true;
    } catch (error) {
      console.error('Error submitting order:', error);
      return false;
    }
  };

  const trackOrder = async (orderId) => {
    try {
      // Simulating API call
      const order = orders.find(o => o.id === orderId);
      return order;
    } catch (error) {
      console.error('Error tracking order:', error);
      return null;
    }
  };

  return {
    orders,
    submitOrder,
    trackOrder
  };
};

export default useDelivery;
