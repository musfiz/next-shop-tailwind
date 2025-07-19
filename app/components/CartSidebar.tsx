// components/CartSidebar.tsx
"use client";
import { useState } from 'react';
import { XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const CartSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 15, quantity: 1 },
  ]);

  const toggleCart = () => setIsOpen(!isOpen);
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Cart Toggle Button (fixed on right side) */}
      <div
        onClick={toggleCart}
        className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 flex items-center cursor-pointer shadow-xl/20"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="bg-gray-400 text-white flex flex-col items-center">
            <img src="/bag.png" alt="No Image" className="w-8 h-10  mt-1 mx-1" />
            <div className="text-sm px-2 text-amber-200">{cartItems.length} ITEMS</div>
          </div>
          <div className="bg-white text-black">
            ৳ 0
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-10 bg-gray bg-opacity-200 z-30"
          onClick={toggleCart}
        ></div>
      )}

      {/* Cart Sidebar */}
      <div className={`fixed top-17 right-0 min-h-full w-full sm:w-90 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex justify-between items-center px-3 py-[.5] bg-lime-100 border-b border-solid border-lime-300">
          <img src="/bag-1.png" alt="No Icon" className="w-10" />
          <h2 className="text-lg font-bold text-gray-800">Shopping Cart </h2>
          <button onClick={toggleCart} className="bg-gray-400 text-white hover:bg-rose-400 cursor-pointer px-2">
            Close
          </button>
        </div>

        {/* Cart Items */}
        <div className="overflow-y-auto h-[calc(100%-180px)] p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              Your cart is empty
            </div>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center pb-3">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">${item.price} × {item.quantity}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium mr-4">${item.price * item.quantity}</span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-lime-300 bg-white">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total:</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;