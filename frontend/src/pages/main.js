import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import OrderForm from '../components/OrderForm';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <h1>Bulk Vegetable/Fruit Order Application</h1>
      <ProductList onSelect={setSelectedProduct} />
      {selectedProduct && <OrderForm selectedProduct={selectedProduct} />}
    </div>
  );
};

export default Home;