'use client';
import { Bars3Icon, MagnifyingGlassIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Header({
  toggleSidebar
}: {
  toggleSidebar: () => void;
}) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-3">
      <div className="px-4 py-3">
        <div className="flex items-center">
          {/* Left section - Hamburger and Logo */}
          <div className="flex items-center w-84">
            <button
              onClick={toggleSidebar}
              className="m-1 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle sidebar"
            >
              <Bars3Icon className="w-8 h-6" />
            </button>

            <Link href="/" className="text-xl font-bold text-green-600 pt-[3]">
              আমাদের বাজার
            </Link>
          </div>

          {/* Middle section - Search */}
          <div className="flex w-full xs:hidden">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-600">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right section - Auth and Cart */}
          <div className="flex items-center justify-center space-x-4 flex-shrink-0 ms-6">
            <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-green-600">
              <UserIcon className="h-5 w-5" />
              <span>Log In</span>
            </button>

            <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600">
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="hidden md:inline">Cart</span>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="flex flex-column mt-3 lg:hidden">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-600">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}