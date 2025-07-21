'use client';
import { MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

export default function Page() {
  return (
    <>
      <div className="w-full">
        <div className="banner bg-[url('/homepage.png')] h-100 bg-cover bg-center">
          <div className="h-full flex justify-center items-center">
            <div className="relative md:w-100 lg:w-120 xl:w-150">
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
        <div className="ms-4 mb-10">
          <div className="slider mt-3">
            <Swiper
              cssMode={true}
              spaceBetween={20}
              slidesPerView={3}
              modules={[Autoplay, Navigation]}
              // loop={true}
              autoplay={{
                delay: 6000,
                pauseOnMouseEnter: false,
              }}
              navigation={true}
              className="bg-gray-50 cursor-pointer"
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swipper) => console.log(swipper)}>
              <SwiperSlide><img src="./img/swiper-slider/1.png" alt="Not Found" /></SwiperSlide>
              <SwiperSlide><img src="./img/swiper-slider/2.png" alt="Not Found" /></SwiperSlide>
              <SwiperSlide><img src="./img/swiper-slider/3.png" alt="Not Found" /></SwiperSlide>
              <SwiperSlide><img src="./img/swiper-slider/4.png" alt="Not Found" /></SwiperSlide>
              <SwiperSlide><img src="./img/swiper-slider/5.png" alt="Not Found" /></SwiperSlide>
            </Swiper>
          </div>

          <div className="popular-category mt-6">
            <div className="text-center text-xl mb-5">Popular Caregories</div>
            <Swiper
              cssMode={true}
              spaceBetween={40}
              slidesPerView={8}
              modules={[Autoplay]}
              // loop={true}
              autoplay={{
                delay: 2000,
                pauseOnMouseEnter: false,
              }}
              className="bg-gray-50 cursor-pointer"
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swipper) => console.log(swipper)}>


              <div className="flex justify-start items-center">
                <SwiperSlide>
                  <div className="items-center w-50 h-50 bg-white rounded-lg border border-gray-200"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="items-center w-50 h-50 bg-white rounded-lg border border-gray-200"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="items-center w-50 h-50 bg-white rounded-lg border border-gray-200"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="items-center w-50 h-50 bg-white rounded-lg border border-gray-200"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="items-center w-50 h-50 bg-white rounded-lg border border-gray-200"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="items-center w-50 h-50 bg-white rounded-lg border border-gray-200"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="items-center w-50 h-50 bg-white rounded-lg border border-gray-200"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="items-center w-50 h-50 bg-white rounded-lg border border-gray-200"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="items-center w-50 h-50 bg-white rounded-lg border border-gray-200"></div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="new-product mt-6">
            <div className="text-center text-xl mb-5">New Products</div>
            <div className="flex justify-center items-center flex-wrap">
              <div className="w-50 h-60 rounded-sm shadow-xl border border-gray-200 bg-white me-4 mt-2"></div>
              <div className="w-50 h-60 rounded-sm shadow-xl border border-gray-200 bg-white me-4 mt-2"></div>
              <div className="w-50 h-60 rounded-sm shadow-xl border border-gray-200 bg-white me-4 mt-2"></div>
              <div className="w-50 h-60 rounded-sm shadow-xl border border-gray-200 bg-white me-4 mt-2"></div>
              <div className="w-50 h-60 rounded-sm shadow-xl border border-gray-200 bg-white me-4 mt-2"></div>
              <div className="w-50 h-60 rounded-sm shadow-xl border border-gray-200 bg-white me-4 mt-2"></div>
              <div className="w-50 h-60 rounded-sm shadow-xl border border-gray-200 bg-white me-4 mt-2"></div>
              <div className="w-50 h-60 rounded-sm shadow-xl border border-gray-200 bg-white me-4 mt-2"></div>
              <div className="w-50 h-60 rounded-sm shadow-xl border border-gray-200 bg-white me-4 mt-2"></div>
              <div className="w-50 h-60 rounded-sm shadow-xl border border-gray-200 bg-white me-4 mt-2"></div>
              <div className="w-50 h-60 rounded-sm shadow-xl border border-gray-200 bg-white me-4 mt-2"></div>
              <div className="w-50 h-60 rounded-sm shadow-xl border border-gray-200 bg-white me-4 mt-2"></div>
              <div className="w-50 h-60 rounded-sm shadow-xl border border-gray-200 bg-white me-4 mt-2"></div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}