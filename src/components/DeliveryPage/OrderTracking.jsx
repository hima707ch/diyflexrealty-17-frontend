import React from 'react';
import images from '../assets/images';

const OrderTracking = ({ orders, onTrackOrder }) => {
  return (
    <div id="OrderTracking_1" className="bg-white p-6 rounded-lg shadow-lg">
      <h2 id="OrderTracking_2" className="text-2xl font-semibold mb-6">Track Your Orders</h2>
      <div id="OrderTracking_3" className="space-y-4">
        {orders.length === 0 ? (
          <p id="OrderTracking_4" className="text-gray-500 text-center">No active orders to track</p>
        ) : (
          orders.map((order, index) => (
            <div
              key={order.id}
              id={`OrderTracking_5_${index}`}
              className="border p-4 rounded-md hover:shadow-md transition duration-300"
            >
              <div id={`OrderTracking_6_${index}`} className="flex justify-between items-center">
                <div id={`OrderTracking_7_${index}`}>
                  <h3 className="font-semibold">Order #{order.id}</h3>
                  <p className="text-sm text-gray-600">{order.items}</p>
                </div>
                <div id={`OrderTracking_8_${index}`}>
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>
              <div id={`OrderTracking_9_${index}`} className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${getProgressPercentage(order.status)}%` }}
                  ></div>
                </div>
              </div>
              <button
                onClick={() => onTrackOrder(order.id)}
                className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View Details
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const getStatusColor = (status) => {
  const colors = {
    'Pending': 'bg-yellow-100 text-yellow-800',
    'Preparing': 'bg-blue-100 text-blue-800',
    'Out for Delivery': 'bg-purple-100 text-purple-800',
    'Delivered': 'bg-green-100 text-green-800'
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
};

const getProgressPercentage = (status) => {
  const stages = {
    'Pending': 25,
    'Preparing': 50,
    'Out for Delivery': 75,
    'Delivered': 100
  };
  return stages[status] || 0;
};

export default OrderTracking;
