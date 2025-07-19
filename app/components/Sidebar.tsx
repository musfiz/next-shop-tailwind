'use client';
import { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface MenuItem {
  id: number;
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  isExpend?: boolean;
  isActive?: boolean;
}


export default function Sidebar({ isOpen, toggleSidebar }: any) {

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 1,
      icon: 'food.png',
      label: 'Groceries',
      href: '/groceries',
      isExpend: false,
      isActive: false,
      children: [
        {
          id: 1,
          label: 'Fruits & Vegitable',
          href: '/fruits-vegitable',
          isActive: false
        },
        {
          id: 2,
          label: 'Meet & Fish',
          href: '/meet-fish',
          isActive: false
        },
        {
          id: 3,
          label: 'Cooking',
          href: '/cooking',
          isActive: false
        }
      ]
    },
    { id: 2, icon: 'personal.png', label: 'Personal Care', href: '/personal-care', isActive: false },
    { id: 3, icon: 'toys.png', label: 'Toys & Sports', href: '/toys-sports', isActive: false },
  ]);


  const extendParent = (index: number) => {
    setMenuItems(prevItems =>
      prevItems.map((item, i) =>
        i === index ? { ...item, isExpend: true, isActive: true } : { ...item, isExpend: false, isActive: false }
      )
    );
  }

  useEffect(() => {
    if (isOpen) {
      // document.body.style.overflow = 'hidden';
    } else {
      // document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`sidebar fixed lg:static top-10 left-0 h-full w-78 bg-white shadow-lg lg:shadow-none z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} mt-1`}
      >
        <nav className="p-2 overflow-y-auto h-[calc(100vh-4rem)]">
          <ul className="space-y-0">
            {menuItems.map((parent, parentIndex) => (
              <li key={parentIndex}>
                <Link
                  href={parent.href}
                  className={`flex justify-between items-center px-2 ${parent.isActive ? 'font-bold text-green-400' : 'text-gray-700'} hover:bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 hover:text-white`}
                  onClick={() => { extendParent(parentIndex) }}
                >
                  <div className="flex items-center p-1">
                    {parent.icon && <img src={`/sidebar/${parent.icon}`} alt="No Icon" className='w-6 h-6 mr-2' />}
                    <span className="text-[14px]">{parent.label}</span>
                  </div>
                  {parent.children ? (
                    parent.isExpend ? (
                      <ChevronDownIcon className="w-4 h-4" />
                    ) : (
                      <ChevronRightIcon className="w-4 h-4" />
                    )
                  ) : ''}
                </Link>
                <ul className={`${parent.isExpend ? 'block' : 'hidden'} ml-6 border-l border-gray-400 border-dotted pl-4 transform transition-transform duration-700 ease-in-out`}>
                  {parent.children?.map((child, childIndex) => (
                    <li key={childIndex} className="flex justify-between items-center py-0 text-gray-700 hover:bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 hover:text-white">
                      <Link href={child.href}>
                        <div className="flex items-center p-1">
                          <span className="text-[14px]">{child.label}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}