// src/pages/ProductDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/productsData';; // 제왕충초 제품 사진

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

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

  const imgSrc = product.img;

  return (
    <main className="pt-16 pb-12 bg-bodyBg">
      <div className="container mx-auto px-4 space-y-12">

        {/* 1. Hero */}
        <section className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src={imgSrc}
            alt={product.name}
            className="w-full lg:w-1/3 rounded-lg shadow-lg object-cover"
          />
          <div className="lg:flex-1">
            <h1 className="text-4xl font-bold text-brandPurple mb-4">
              Emperor Cordyceps  
              <span className="block text-lg font-medium text-gray-600">
                Premium Culinary Cordyceps Mushroom
              </span>
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Carefully cultivated cordyceps with a deep, earthy flavor to enrich
              your favorite dishes and beverages.
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
              <li> If you are pregnant, nursing, taking any medications, 
                or have a medical condition, consult your doctor before use.</li>
              <li>Discontinue use and consult a healthcare professional if any adverse reactions occur.</li>
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
        <section className="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-semibold text-brandPurple">Product Details</h2>
          <p className="text-gray-700"><strong>Net Wt.</strong> 5.29 oz (150 g)</p>
          <p className="text-gray-700">
            <strong>Distributed by</strong> Q KOREA PURIMULSAN CO. INC<br/>
            124-125 Gyeongchung-daero 2003 beon-gil, Daewol-myeon, Icheon-si, Gyeonggi-do<br/>
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
  {/* 화살표 아이콘 */}
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
       viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
  </svg>
  Back to Products
</Link>
        </div>
      </div>
    </main>
  );
}
