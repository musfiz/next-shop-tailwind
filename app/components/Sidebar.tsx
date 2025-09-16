'use client';
import { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
  id: number;
  label: string;
  href: string;
  icon?: React.ReactNode;
  isExpend?: boolean;
  children?: MenuItem[];
}


export default function Sidebar({ isOpen, toggleSidebar }: any) {

  const path = usePathname();

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 1,
      icon: 'food.png',
      label: 'Groceries',
      href: '/groceries',
      isExpend: false,
      children: [
        {
          id: 1,
          label: 'Fruits & Vegetable',
          href: '/fruits-vegetable',
          isExpend: false,

          children: [
            {
              id: 1,
              label: 'Fresh Vegetables',
              href: '/fresh-vegetables',

            },
            {
              id: 2,
              label: 'Fresh Fruits',
              href: '/fresh-fruits',

            }
          ]
        },
        {
          id: 2,
          label: 'Meet & Fish',
          href: '/meet-fish',
        },
        {
          id: 3,
          label: 'Cooking',
          href: '/cooking',
        }
      ]
    },
    {
      id: 2,
      icon: 'personal.png',
      label: 'Personal Care',
      href: '/personal-care',
      isExpend: false,
      children: [
        {
          id: 1,
          label: "Women's Care",
          href: '/womens-care',
        },
        {
          id: 2,
          label: "Men's Care",
          href: '/men-care',
        }
      ]
    },
    { id: 3, icon: 'electric.png', label: 'Electric & Electronics', href: '/electronics', },
  ]);

  const extendParent = (index: number) => {
    setMenuItems(parentItems =>
      parentItems.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            isExpend: true,
            children: item.children?.map((child) => {
              return { ...child, isExpend: false };
            })
          }
        } else {
          return {
            ...item,
            isExpend: false,
            children: item.children?.map((child) => {
              return { ...child, isExpend: false };
            })
          }
        }
      })
    );
  }

  const extendChild = (parentIndex: number, childIndex: number) => {
    setMenuItems(parentItems =>
      parentItems.map((item, pIndex) => {
        if (pIndex === parentIndex && item.children && item.children.length > 0) {
          return {
            ...item,
            isExpend: true,
            children: item.children.map((child, cIndex) => {
              if (cIndex === childIndex) {
                return { ...child, isExpend: true };
              } else {
                return { ...child, isExpend: false };
              }
            })
          };
        } else {
          return {
            ...item,
            isExpend: false,
            children: item.children?.map((child) => {
              return { ...child, isExpend: false };
            })
          }
        }
      })
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
        className={`sidebar fixed lg:static top-10 left-0 h-screen w-78 border-r border-gray-200 bg-white shadow-lg lg:shadow-none z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} mt-1`}
      >
        <nav className="p-2 overflow-y-auto h-[calc(100vh-4rem)]">
          {/* sidebar parent item */}
          <ul className="space-y-0">
            {menuItems.map((parent, parentIndex) => (
              <li key={parentIndex}>
                <Link
                  href={parent.href}
                  className={`flex justify-between items-center px-2 ${path == parent.href ? 'font-bold text-teal-400' : 'text-gray-700'} hover:bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 hover:text-white`}
                  onClick={() => { extendParent(parentIndex) }}
                >
                  <div className="flex items-center p-1">
                    {parent.icon && <img src={`/sidebar/${parent.icon}`} alt="No Icon" className='w-6 h-6 mr-2' />}
                    <span className="text-[13px]">{parent.label}</span>
                  </div>
                  {parent.children ? (
                    parent.isExpend ? (
                      <ChevronDownIcon className="w-4 h-4" />
                    ) : (
                      <ChevronRightIcon className="w-4 h-4" />
                    )
                  ) : ''}
                </Link>
                {/* sidebar child item */}
                <ul className={`${parent.isExpend ? 'block' : 'hidden'} ml-6 border-l border-gray-400 border-dotted pl-2 transform transition-transform duration-300 ease-in-out`}>
                  {parent.children?.map((child, childIndex) => (
                    <li key={childIndex}>
                      <Link
                        href={child.href}
                        className={`flex justify-between items-center px-2 ${path == child.href ? 'font-bold text-teal-400' : 'text-gray-700'} hover:bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 hover:text-white`}
                        onClick={() => { extendChild(parentIndex, childIndex) }}>
                        <div className="flex items-center p-1">
                          {child.icon && <img src={`/sidebar/${child.icon}`} alt="No Icon" className='w-6 h-6 mr-2' />}
                          <span className="text-[13px]">{child.label}</span>
                        </div>
                        {child.children ? (
                          child.isExpend ? (
                            <ChevronDownIcon className="w-4 h-4" />
                          ) : (
                            <ChevronRightIcon className="w-4 h-4" />
                          )
                        ) : ''}
                      </Link>
                      <ul className={`${child.isExpend ? 'block' : 'hidden'} ml-[13.5] border-l border-gray-400 border-dotted pl-2 transform transition-transform duration-300 ease-in-out`}>
                        {child.children?.map((grandChild, grandChildIndex) => (
                          <li key={grandChildIndex}>
                            <Link
                              href={grandChild.href}
                              className={`flex justify-between items-center px-2 ${path == grandChild.href ? 'font-bold text-teal-400' : 'text-gray-700'} hover:bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 hover:text-white`}>
                              <div className="flex items-center p-1">
                                <span className="text-[13px]">{grandChild.label}</span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
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