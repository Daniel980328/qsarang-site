// src/pages/ProductDetail.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/productsData';

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(product?.img);

  if (!product || productId !== 'emperor-cordyceps') {
    return (
      <main className="pt-16 p-8 text-center">
        <p className="text-gray-600">Product not found.</p>
        <Link to="/products" className="text-brandGreen hover:underline">
          ← Back to Products
        </Link>
      </main>
    );
  }

  return (
    <>
      {/* 1. Hero Section */}
      <section className="flex flex-wrap justify-between gap-8">
        {/* 왼쪽 이미지 갤러리 */}
        <div className="flex flex-col gap-2 items-center max-w-[350px] overflow-hidden">
          {/* 고정 비율 이미지 박스 */}

          <img
            src={selectedImage}
            alt={product.name}
            className="w-full max-w-[350px] max-h-[480px] min-h-[480px] object-contain rounded-lg bg-white overflow-hidden"
          />

          {/* 썸네일 가로 슬라이더 */}
          <div className="w-full p-2 flex gap-2 overflow-x-auto scrollbar-hide">
            {product.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 flex-shrink-0 object-cover rounded cursor-pointer transition hover:opacity-75 ${img === selectedImage ? 'border-2' : 'border-0'
                  }`}
                alt={`Thumbnail ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 오른쪽 텍스트 설명 */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-brandPurple mb-4">
            {product.name}
            <span className="block text-lg font-medium text-gray-600">
              Premium Culinary Cordyceps Mushroom
            </span>
          </h1>
          <p className="text-gray-700 leading-relaxed">
            {product.description}
          </p>
        </div>
      </section>

      {/* 2. How to Use */}
      <section>
        <h2 className="text-2xl font-semibold text-brandPurple mb-4">How to Use</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-1">▶ Cordyceps Tea</h3>
            <p className="ml-4 text-gray-700">
              Steep 2–3 pieces of whole cordyceps (or 1 teaspoon of powder) in
              a cup of hot water for 5 minutes. You may add honey or ginger to adjust the flavor.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">▶ Smoothies &amp; Yogurt</h3>
            <p className="ml-4 text-gray-700">
              Blend 1 teaspoon of powder into your morning smoothie or stir into
              yogurt to add a mild, earthy taste to your daily meal.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">▶ Cooking Ingredient</h3>
            <p className="ml-4 text-gray-700">
              Add to soups, stews, broths, or rice for a natural umami flavor. Often used
              in traditional chicken soup.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">▶ Coffee Blend</h3>
            <p className="ml-4 text-gray-700">
              Mix ½ teaspoon of powder into your coffee for a smooth and balanced taste.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Caution & Storage */}
      <section className="grid gap-8 sm:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-red-600 mb-3">⚠️ Caution</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Keep out of reach of children.</li>
            <li>Do not use if the package is damaged.</li>
            <li>In case of allergic reaction, stop consumption immediately.</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-brandGreen mb-3">📦 Storage</h2>
          <p className="text-gray-700">
            Store in a cool, dry place away from direct sunlight.
          </p>
        </div>
      </section>

      {/* 4. Product Details */}
      <section className="w-full bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-2xl font-semibold text-brandPurple">Product Details</h2>
        <p className="text-gray-700"><strong>Net Wt.</strong> 5.29 oz (150 g)</p>
        <p className="text-gray-700">
          <strong>Distributed by</strong> Q KOREA PURIMULSAN CO. INC<br />
          124-125 Gyeongchung-daero 2003 beon-gil, Daewol-myeon, Icheon-si, Gyeonggi-do<br />
          Tel. 82-031-632-6163
        </p>
        <p className="text-gray-700"><strong>Product of</strong> South Korea</p>
      </section>

      {/* 5. Back Link */}
      <div>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-4 py-2
              border border-brandGreen rounded-full
              text-brandGreen font-semibold
              transition-colors duration-200
              hover:bg-brandGreen hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </Link>
      </div>
    </ >
  );
}
