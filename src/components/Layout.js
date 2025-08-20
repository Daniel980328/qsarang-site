import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center">
        <div className="max-w-4xl w-full px-8 pt-8 flex flex-col items-center gap-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}