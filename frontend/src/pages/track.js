import React, { useState } from 'react';
import axios from 'axios';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const handleTrack = async () => {
    const response = await axios.get(`http://localhost:5000/api/orders/${orderId}`);
    setOrderStatus(response.data);
  };

  return (
    <div>
      <h2>Track Your Order</h2>
      <input type="text" value={orderId} onChange={(e) => set OrderId(e.target.value)} placeholder="Enter Order ID" />
      <button onClick={handleTrack}>Track Order</button>
      {orderStatus && (
        <div>
          <h3>Order Status</h3>
          <p>Status: {orderStatus.status}</p>
          <p>Delivery Details: {JSON.stringify(orderStatus.deliveryDetails)}</p>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;