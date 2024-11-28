import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = ({ onSelect }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product Catalogue</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => onSelect(product)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;