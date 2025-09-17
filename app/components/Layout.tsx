'use client';
import { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CartSidebar from "./CartSidebar";
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [isSearchBar, setIsSearchBar] = useState(true);

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
      <Header toggleSidebar={toggleSidebar} searchBar={isSearchBar} />
      <div className="flex mt-16">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={`
            w-screen max-h-screen 
            overflow-y-scroll 
            transition-all 
            duration-300 
            [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          dark:[&::-webkit-scrollbar-track]:bg-gray-300
          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`}>
          <div className="flex-1">
            <div className="min-h-122">
              {children}
            </div>
            <Footer />
          </div>
          <CartSidebar />
        </main>
      </div>
    </div>
  );
}