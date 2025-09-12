"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import { cn } from "@/shared/utils/cn";
import { Fragment } from "react";
import StudioSlider from "@/components/sliders/studio-slider/studio-slider";

export default function ApartmentsGallery() {
  return (
    <div className="grid grid-cols-[2fr_3fr] grid-rows-[2fr_3fr_2fr] gap-[60px]">
      <Image
        width={1200}
        height={800}
        alt="apartments"
        src="/images/apartments/1.png"
        className="size-full object-cover object-center border-1 border-[#D4AF37] rounded-[40px] row-start-1 row-end-2 col-start-1 col-end-2"
      />
      <Image
        width={1200}
        height={800}
        alt="slider"
        src="/images/apartments/2.png"
        className="size-full object-cover object-center border-1 border-[#D4AF37] rounded-[40px] row-start-1 row-end-2 col-start-2 col-end-3"
      />
      <Image
        width={1200}
        height={800}
        alt="slider"
        src="/images/apartments/3.png"
        className="size-full object-cover object-center border-1 border-[#D4AF37] rounded-[40px] row-start-2 row-end-3 col-start-1 col-end-2"
      />
      <Image
        width={1200}
        height={800}
        alt="slider"
        src="/images/apartments/4.png"
        className="size-full object-cover object-center border-1 border-[#D4AF37] rounded-[40px] row-start-3 row-end-4 col-start-1 col-end-2"
      />

      <div className="row-start-2 row-end-4 col-start-2 col-end-3 font-sans">
        <div className="w-full h-[200px] border-[#D4AF37] border-1 rounded-[40px] py-[40px] px-[80px] flex items-center justify-between">
          <div className="flex flex-col gap-y-1 items-center">
            <p className="text-6xl font-bold">150</p>
            <span className="text-xl">Количество квартир</span>
          </div>

          <div className="flex flex-col gap-y-1 items-center">
            <p className="text-6xl font-bold">
              до 3,3 <span className="text-[40px]">м</span>
            </p>
            <span className="text-xl">Высота потолков</span>
          </div>
        </div>

        <TabGroup className="flex flex-col gap-y-[60px] items-center mt-[60px]">
          <TabList className="w-full flex items-center gap-x-[20px] justify-between">
            <Tab as={Fragment}>
              {({ hover, selected }) => (
                <button
                  className={cn(
                    " w-[240px] h-[100px] flex items-center justify-center border-1 border-[#D4AF37] text-[36px] font-bold duration-200 rounded-[50px] cursor-pointer outline-none",
                    selected && "bg-[#D4AF37]",
                    hover && "border-3",
                  )}
                >
                  Студия
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ hover, selected }) => (
                <button
                  className={cn(
                    " w-[140px] h-[100px] flex items-center justify-center border-1 border-[#D4AF37] text-[36px] font-bold duration-200 rounded-[50px] cursor-pointer outline-none",
                    selected && "bg-[#D4AF37]",
                    hover && "border-3",
                  )}
                >
                  1-к
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ hover, selected }) => (
                <button
                  className={cn(
                    " w-[140px] h-[100px] flex items-center justify-center border-1 border-[#D4AF37] text-[36px] font-bold duration-200 rounded-[50px] cursor-pointer outline-none",
                    selected && "bg-[#D4AF37]",
                    hover && "border-3",
                  )}
                >
                  2-к
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ hover, selected }) => (
                <button
                  className={cn(
                    " w-[140px] h-[100px] flex items-center justify-center border-1 border-[#D4AF37] text-[36px] font-bold duration-200 rounded-[50px] cursor-pointer outline-none",
                    selected && "bg-[#D4AF37]",
                    hover && "border-3",
                  )}
                >
                  3-к
                </button>
              )}
            </Tab>
          </TabList>
          <TabPanels className="size-full">
            <TabPanel className="size-full">
              <StudioSlider />
            </TabPanel>
            <TabPanel>панель 2</TabPanel>
            <TabPanel>панель 3</TabPanel>
            <TabPanel>панель 4</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
