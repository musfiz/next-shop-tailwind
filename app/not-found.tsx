import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Error Code */}
      <h1 className="text-8xl md:text-9xl font-bold text-red-600 mb-4">404</h1>

      {/* Error Message */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 text-base md:text-lg mb-6 text-center px-4">
        Sorry, we couldn't find the page you were looking for. Check the URL or go back home.
      </p>

      {/* Back to Home Button */}
      <Link href="/" className="bg-pink-600 hover:bg-pink-700 text-white py-1 px-4 rounded-md shadow-md transition duration-300">
        Back to Home
      </Link>
    </div>
  );
}