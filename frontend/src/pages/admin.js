import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get('http://localhost:5000/api/orders');
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  const updateOrderStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/orders/${id}`, { status });
    setOrders(orders.map(order => (order.id === id ? { ...order, status } : order)));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Orders</h3>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Order ID: {order.id} - Status: {order.status}
            <button onClick={() => updateOrderStatus(order.id, 'In Progress')}>Mark as In Progress</button>
            <button onClick={() => updateOrderStatus(order.id, 'Delivered')}>Mark as Delivered</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;