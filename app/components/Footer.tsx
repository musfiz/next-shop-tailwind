'use client';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer({ }) {
  return (
    <>
      <footer className=" text-white pt-8" >
        <div className="container mx-auto px-4 bg-gray-300">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">

            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-teal-600">YourBrand</h3>
              <p className="text-gray-600">
                Building innovative solutions for the modern web.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-white transition">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-white transition">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-white transition">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-white transition">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-white transition">
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-600">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-white transition">Home</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-white transition">About Us</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-white transition">Services</Link></li>
                <li><Link href="/portfolio" className="text-gray-600 hover:text-white transition">Portfolio</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-white transition">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-600">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services/web-development" className="text-gray-600 hover:text-white transition">Web Development</Link></li>
                <li><Link href="/services/mobile-apps" className="text-gray-600 hover:text-white transition">Mobile Apps</Link></li>
                <li><Link href="/services/ui-ux" className="text-gray-600 hover:text-white transition">UI/UX Design</Link></li>
                <li><Link href="/services/seo" className="text-gray-600 hover:text-white transition">SEO Optimization</Link></li>
                <li><Link href="/services/consulting" className="text-gray-600 hover:text-white transition">Consulting</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-600">Newsletter </h4>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded text-gray-800 bg-gray-100 border border-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-teal-400"></div>
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white h-15 mb-16 px-10">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} আমাদের বাজার. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-white text-sm transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}