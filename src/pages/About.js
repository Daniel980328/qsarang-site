// src/pages/About.js
import React from 'react';
import bannerImg from '../assets/banner.png';       // 메인 배너
import chairmanImg from '../assets/chairman.png';  // 회장님 사진
import { Banner } from "../components/banner"; // 배너 컴포넌트 

const milestones = [
  { year: 2014, text: 'Opened first QLove™' },
  { year: 2017, text: 'Surpassed 1,000 franchises nationwide' },
  { year: 2020, text: 'Developed patented hair-coloring formula' },
  { year: 2025, text: 'Surpassed 4,000 franchises nationwide' },
];

export default function About() {
  return (
    <>
      {/* Banner Section */}
      <Banner src={bannerImg} />

      {/* Headquarters */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={chairmanImg}
            alt="Chairman"
            className="w-48 h-48 object-cover rounded-full shadow-md"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-2">Headquarter</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>QLove™ | Q Korea Co., Ltd.</strong><br />
              1345 Soha-dong, Gwangmyeong-si, Gyeonggi-do<br />
              Technopark Building E, Room 915<br />
              Tel. +82-2-2038-2166
            </p>
          </div>
        </div>
      </section>

      {/* Nationwide Network */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#7C427C] to-brandGreen text-white p-10 rounded-lg text-center shadow-lg">
          <div className="text-6xl font-extrabold">4,000+</div>
          <div className="mt-2 text-xl">Franchise Locations (as of 2025)</div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6">Core Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-5xl mb-2">🛡️</div>
            <h3 className="text-xl font-semibold mb-1">Safe Ingredients</h3>
            <p className="text-gray-600">
              Ammonia- and paraben-free, low-irritation, natural mineral–based coloring solutions
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-5xl mb-2">🔬</div>
            <h3 className="text-xl font-semibold mb-1">Scientific Care</h3>
            <p className="text-gray-600">
              Standardized protocols from our research lab & functional home-care line
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-5xl mb-2">🎓</div>
            <h3 className="text-xl font-semibold mb-1">Franchise Success</h3>
            <p className="text-gray-600">
              Startup briefings, training, feedback sessions & ongoing seminars
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-5xl mb-2">🤝</div>
            <h3 className="text-xl font-semibold mb-1">Co-growth</h3>
            <p className="text-gray-600">
              Transparent marketing & cost structure for win-win partnership
            </p>
          </div>
        </div>
      </section>

      {/* Major Milestones: flex + items-center로 라인 정렬 */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Major Milestones</h2>
        <ul className="border-l-4 border-[#7C427C] pl-6">
          {milestones.map(({ year, text }) => (
            <li key={year} className="flex items-center mb-8">
              <div className="flex-shrink-0 w-10 h-10 bg-[#7C427C] text-white rounded-full flex items-center justify-center">
                {year}
              </div>
              <p className="ml-6 text-gray-700">{text}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
