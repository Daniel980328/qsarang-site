import React from 'react';
import { Link } from 'react-router-dom';


export default function ProductCard({ product }) {
  // public 폴더에 있는 이미지 경로를 계산
  const imgSrc = product.img;

  return (
    <Link
      to={`/products/${product.id}`}
      className="block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:border-brandGreen"
    >
      <img
       src={imgSrc}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-brandPurple">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600">{product.shortDesc}</p>
      </div>
    </Link>
  );
}
