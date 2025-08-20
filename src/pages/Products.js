import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/productsData.js';

console.log('▶︎ Loaded products:', products);
console.log('▶︎ Is Array?', Array.isArray(products));

export default function Products() {
  return (
    <>
      <h1 className="text-2xl font-bold w-full">Our Products</h1>
      <div className="w-full card-wrap grid gap-[1.15rem] auto-rows-fr"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
        {console.log('Products import:', products)}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}