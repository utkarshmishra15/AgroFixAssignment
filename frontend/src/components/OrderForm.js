import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = ({ selectedProduct }) => {
  const [quantity, setQuantity] = useState(1);
  const [deliveryDetails, setDeliveryDetails] = useState({ name: '', contact: '', address: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      items: [{ productId: selectedProduct.id, quantity }],
      deliveryDetails,
    };
    await axios.post('http://localhost:5000/api/orders', order);
    alert('Order placed successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Order Form</h2>
      <p>Product: {selectedProduct.name}</p>
      <p>Price: ${selectedProduct.price}</p>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />
      </label>
      <h3>Delivery Details</h3>
      <label>
        Name:
        <input type="text" value={deliveryDetails.name} onChange={(e) => setDeliveryDetails({ ...deliveryDetails, name: e.target.value })} required />
      </label>
      <label>
        Contact:
        <input type="text" value={deliveryDetails.contact} onChange={(e) => setDeliveryDetails({ ...deliveryDetails, contact: e.target.value })} required />
      </label>
      <label>
        Address:
        <input type="text" value={deliveryDetails.address} onChange={(e) => setDeliveryDetails({ ...deliveryDetails, address: e.target.value })} required />
      </label>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;