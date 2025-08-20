// src/pages/Home.js
import React from 'react';
import banner from '../assets/banner.png';
import ServiceCard from '../components/ServiceCard';
import { Brush, Activity, Leaf } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-bodyBg">
      <div className="container mx-auto py-12">
        {/* 배너 섹션 */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full h-[180px] sm:h-[320px] md:h-[400px] rounded-lg overflow-hidden ">
            <img
              src={banner}
              alt="Main Banner"
              className="w-full h-full object-contain"
            />

            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>
        </div>

        {/* 서비스 카드 */}
        <section className="grid gap-6 sm:grid-cols-3">
          <ServiceCard
            icon={Brush}
            title="• Natural Hair Coloring"
            description="Ammonia-free and paraben-free mineral-based formula for vibrant and lasting hair color."
          />
          <ServiceCard
            icon={Activity}
            title="• Scalp & Hair Care"
            description="Mild scalp cleansing and conditioning solutions for everyday care."
          />
          <ServiceCard
            icon={Leaf}
            title="• Emperor Cordyceps Culinary"
            description="Carefully cultivated cordyceps mushrooms for use in teas, soups, and a variety of cooking applications."
          />
        </section>
      </div>
    </main>
  );
}
