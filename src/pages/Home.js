// src/pages/Home.js
import React from 'react';
import banner from '../assets/banner.png';
import ServiceCard from '../components/ServiceCard';
import { Brush, Activity, Leaf } from 'lucide-react'; 

export default function Home() {
  return (
    <main className="bg-bodyBg">
      <div className="container mx-auto px-4 py-12">
        {/* 배너 섹션 */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <img
              src={banner}
              alt="Main Banner"
              className="w-full max-w-3xl rounded-lg shadow-lg"
            />
            {/* 오버레이 그라데이션 */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-black/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* 서비스 카드 */}
        <section className="grid gap-6 sm:grid-cols-3">
         <ServiceCard
           icon={Brush}
           title="Mineral Hair Coloring"
           description="Zero ammonia and parabens—our patented mineral formula delivers vibrant, long-lasting color."
  />
         <ServiceCard
           icon={Activity}
           title="Scalp & Hair-Loss Care"
           description="Scientific scalp analysis and tailored treatments fortify follicles from the root up."
  />
         <ServiceCard
           icon={Leaf}
           title="Emperor Cordyceps Wellness"
           description="Premium Cordyceps mushroom products to boost everyday energy and balance."
  />  
        </section>
      </div>
    </main>
  );
}
