import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <div className="text-8xl font-bold text-gray-800 mb-4">404</div>
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">Oops! Page not found</h1>
        <p className="text-gray-600 mb-6">
          We can't seem to find the page you're looking for.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}