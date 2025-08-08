import React from 'react';
import ProductCard from '../components/ProductCard';
import products  from '../data/productsData.js';

console.log('▶︎ Loaded products:', products);
console.log('▶︎ Is Array?', Array.isArray(products));

export default function Products() {
  return (
    <main className="pt-[50px] px-8 pb-8"> 
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <div className="card-wrap grid gap-[1.15rem] auto-rows-fr" 
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
        {console.log('Products import:', products)}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}