// src/pages/Home.js
import React from 'react';
import banner from '../assets/banner.png';
import ServiceCard from '../components/ServiceCard';
import { Brush, Activity, Leaf } from 'lucide-react';
import { Banner } from "../components/banner"; // 배너 컴포넌트

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <Banner src={banner} />
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
    </>
  );
}
