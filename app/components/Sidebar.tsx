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
];

export default function Sidebar({
  isOpen,
  toggleSidebar,
  isMobile,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
  isMobile: boolean;
}) {
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, isMobile]);

  return (
    <>
      {/* Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full w-64 bg-white shadow-lg lg:shadow-none z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          {isMobile && (
            <button
              onClick={toggleSidebar}
              className="p-1 rounded-md text-gray-500 hover:bg-gray-100"
              aria-label="Close sidebar"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <nav className="p-2 overflow-y-auto h-[calc(100vh-4rem)]">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={isMobile ? toggleSidebar : undefined}
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