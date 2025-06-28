import React from 'react';
import OrderForm from './OrderForm';
import OrderTracking from './OrderTracking';
import useDelivery from './useDelivery';
import images from '../assets/images';

const Body = () => {
  const { orders, submitOrder, trackOrder } = useDelivery();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <div id="Body_2" className="text-center mb-12">
        <h1 id="Body_3" className="text-4xl font-bold text-gray-800 mb-4">Online Delivery Service</h1>
        <p id="Body_4" className="text-lg text-gray-600">Fast and reliable delivery to your doorstep</p>
      </div>
      
      <div id="Body_5" className="grid md:grid-cols-2 gap-8">
        <OrderForm onSubmitOrder={submitOrder} />
        <OrderTracking orders={orders} onTrackOrder={trackOrder} />
      </div>
    </div>
  );
};

export default Body;
