'use client';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Groceries', href: '/groceries' },
  { name: 'Fruits & Vegetables', href: '/fruits-vegetables' },
  { name: 'Dairy & Chilled', href: '/dairy' },
  { name: 'Beverages', href: '/beverages' },
  { name: 'Snacks', href: '/snacks' },
  { name: 'Household', href: '/household' },
  { name: 'Personal Care', href: '/personal-care' },
  { name: 'Cleaning Service', href: '/cleaning-service' },
  { name: 'Health & Wellness', href: '/health-wellness' },
  { name: 'Stationary & Office', href: '/stationary-office' },
  { name: 'Toys & Sports', href: '/toys-sports' },
  { name: 'Fashion & Lifestyle', href: '/fashion-lifestyle' },
  { name: 'Beauty & Makeup', href: '/beauty-makeup' },
  // { name: '', href: '/' },
];

export default function Sidebar({
  isOpen,
  toggleSidebar
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`sidebar fixed lg:static top-10 left-0 h-full w-64 bg-white shadow-lg lg:shadow-none z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} mt-1`}
      >
        <nav className="p-2 overflow-y-auto h-[calc(100vh-4rem)]">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block px-2 py-.5 text-gray-700 hover:bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}