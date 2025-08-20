// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="w-full bg-[#7C427C] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* 좌측: 로고 */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="QLove Logo" className="h-8" />
        </Link>

        {/* 우측: 네비게이션 */}
        <nav className="flex gap-8 text-white">

          <Link
            to="/about"
            className="transition hover:text-brandGreen"
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="transition hover:text-brandGreen"
          >
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
}
