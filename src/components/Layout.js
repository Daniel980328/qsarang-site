import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="mx-auto my-8 px-4 max-w-[theme('spacing.container')]">
        <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}