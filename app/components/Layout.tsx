'use client';
import { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CartSidebar from "./CartSidebar";
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true); // Sidebar open by default on desktop
      } else {
        setSidebarOpen(false); // Sidebar closed by default on mobile
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-gray-50">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex mt-16">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={`w-screen h-screen overflow-y-scroll transition-all duration-300`}>
          <div className="flex-1">
            {children}
          </div>
          <CartSidebar />
          <Footer />
        </main>
      </div>
    </div>
  );
}