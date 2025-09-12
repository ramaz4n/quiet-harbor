"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function StudioSlider() {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".studio-slider-button-next",
          prevEl: ".studio-slider-button-prev",
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="w-full h-full max-w-[775px]"
      >
        <SwiperSlide className="w-full h-full border-1 border-[#D4AF37] rounded-[30px] overflow-hidden bg-white">
          <Image
            width={780}
            height={540}
            alt="studio-image"
            src="/images/studio-slider/main.png"
            className="object-cover object-center max-w-[780px] w-full max-h-[540px] h-full"
          />

          <div className="flex flex-col text-[#0F2545] py-[50px] px-[80px] font-roboto">
            <p className="text-[50px]">Студия</p>
            <span className="text-[20px] font-light mt-[10px]">1 корпус</span>

            <span className="text-[32px] mt-[10px]">22 кв.м.</span>

            <span className="text-[32px] mt-[10px]">
              от 120 900 руб. за кв.м.
            </span>

            <button className="max-w-[400px] w-full h-[60px] text-[28px] font-light flex items-center justify-center border-1 border-[#D4AF37] rounded-[30px] mt-[30px] cursor-pointer hover:bg-[#D4AF37] duration-200">
              Забронировать
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full h-full border-1 border-[#D4AF37] rounded-[30px] overflow-hidden bg-white">
          <Image
            width={780}
            height={540}
            alt="studio-image"
            src="/images/studio-slider/main.png"
            className="object-cover object-center max-w-[780px] w-full max-h-[540px] h-full"
          />

          <div className="flex flex-col text-[#0F2545] py-[50px] px-[80px] font-roboto">
            <p className="text-[50px]">Студия</p>
            <span className="text-[20px] font-light mt-[10px]">1 корпус</span>

            <span className="text-[32px] mt-[10px]">22 кв.м.</span>

            <span className="text-[32px] mt-[10px]">
              от 120 900 руб. за кв.м.
            </span>

            <button className="max-w-[400px] w-full h-[60px] text-[28px] font-light flex items-center justify-center border-1 border-[#D4AF37] rounded-[30px] mt-[30px] cursor-pointer hover:bg-[#D4AF37] duration-200">
              Забронировать
            </button>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="studio-slider-button-prev absolute top-1/2 left-5 z-10 size-[80px] rounded-[50%] bg-transparent border-1 border-[#D4AF37] hover:bg-[#D4AF37] duration-150 cursor-pointer">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.376 40.4005C25.1352 40.1615 25 39.8377 25 39.5C25 39.1623 25.1352 38.8385 25.376 38.5995L35.6621 28.4056C35.7798 28.2804 35.9218 28.18 36.0795 28.1103C36.2372 28.0407 36.4075 28.0032 36.5801 28.0002C36.7528 27.9972 36.9242 28.0287 37.0843 28.0927C37.2444 28.1568 37.3899 28.2522 37.512 28.3732C37.6341 28.4942 37.7303 28.6384 37.795 28.797C37.8597 28.9557 37.8914 29.1256 37.8884 29.2967C37.8853 29.4678 37.8475 29.6366 37.7773 29.7929C37.707 29.9492 37.6057 30.0898 37.4793 30.2065L29.3876 38.2258H53.7142C54.0552 38.2258 54.3823 38.36 54.6234 38.599C54.8645 38.8379 55 39.162 55 39.5C55 39.838 54.8645 40.1621 54.6234 40.401C54.3823 40.64 54.0552 40.7742 53.7142 40.7742H29.3876L37.4793 48.7935C37.6057 48.9102 37.707 49.0508 37.7773 49.2071C37.8475 49.3634 37.8853 49.5322 37.8884 49.7033C37.8914 49.8744 37.8597 50.0443 37.795 50.203C37.7303 50.3616 37.6341 50.5058 37.512 50.6268C37.3899 50.7478 37.2444 50.8432 37.0843 50.9073C36.9242 50.9713 36.7528 51.0028 36.5801 50.9998C36.4075 50.9968 36.2372 50.9593 36.0795 50.8897C35.9218 50.82 35.7798 50.7196 35.6621 50.5944L25.376 40.4005Z"
            fill="#162A4D"
          />
        </svg>
      </div>

      <div className="studio-slider-button-next absolute top-1/2 right-5 z-10 size-[80px] rounded-[50%] bg-transparent border-1 border-[#D4AF37] hover:bg-[#D4AF37] duration-150 cursor-pointer">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.376 40.4005C25.1352 40.1615 25 39.8377 25 39.5C25 39.1623 25.1352 38.8385 25.376 38.5995L35.6621 28.4056C35.7798 28.2804 35.9218 28.18 36.0795 28.1103C36.2372 28.0407 36.4075 28.0032 36.5801 28.0002C36.7528 27.9972 36.9242 28.0287 37.0843 28.0927C37.2444 28.1568 37.3899 28.2522 37.512 28.3732C37.6341 28.4942 37.7303 28.6384 37.795 28.797C37.8597 28.9557 37.8914 29.1256 37.8884 29.2967C37.8853 29.4678 37.8475 29.6366 37.7773 29.7929C37.707 29.9492 37.6057 30.0898 37.4793 30.2065L29.3876 38.2258H53.7142C54.0552 38.2258 54.3823 38.36 54.6234 38.599C54.8645 38.8379 55 39.162 55 39.5C55 39.838 54.8645 40.1621 54.6234 40.401C54.3823 40.64 54.0552 40.7742 53.7142 40.7742H29.3876L37.4793 48.7935C37.6057 48.9102 37.707 49.0508 37.7773 49.2071C37.8475 49.3634 37.8853 49.5322 37.8884 49.7033C37.8914 49.8744 37.8597 50.0443 37.795 50.203C37.7303 50.3616 37.6341 50.5058 37.512 50.6268C37.3899 50.7478 37.2444 50.8432 37.0843 50.9073C36.9242 50.9713 36.7528 51.0028 36.5801 50.9998C36.4075 50.9968 36.2372 50.9593 36.0795 50.8897C35.9218 50.82 35.7798 50.7196 35.6621 50.5944L25.376 40.4005Z"
            fill="#162A4D"
          />
        </svg>
      </div>
    </div>
  );
}
