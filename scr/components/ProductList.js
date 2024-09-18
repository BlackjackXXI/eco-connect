import React from 'react';

const products = [
  { id: 1, name: "Organic Cotton Shirt", rating: 4.5 },
  { id: 2, name: "Eco-Friendly Shoes", rating: 4.7 },
  { id: 3, name: "Reusable Water Bottle", rating: 5.0 },
];

const ProductList = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Eco-Friendly Products</h2>
      <ul className="space-y-4">
        {products.map(product => (
          <li
            key={product.id}
            className="p-4 bg-white shadow rounded-lg flex justify-between items-center"
          >
            <span className="font-semibold">{product.name}</span>
            <span className="text-green-600 font-bold">Rating: {product.rating}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
