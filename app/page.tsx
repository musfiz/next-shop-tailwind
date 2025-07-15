import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <>
      <div className="banner w-full">
        <div className="bg-[url('/homepage.png')] h-90 bg-cover bg-center">
          <div className="h-full flex justify-center items-center">
            <div className="relative w-150">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-900 hover:text-green-600">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}