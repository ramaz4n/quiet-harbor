"use client";

import Image from "next/image";
import StudioSlider from "@/components/sliders/studio-slider/studio-slider";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Fragment } from "react";
import { cn } from "@/shared/utils/cn";

export default function ApartmentsGallery() {
  return (
    <div className="flex flex-col gap-[60px]">
      <div className="items-center gap-[60px] max-h-[520px] hidden md:flex">
        <Image
          width={520}
          height={520}
          alt="apartments"
          src="/images/apartments/1.png"
          className="flex-1 size-full object-cover object-center border-1 border-app-yellow rounded-[40px]"
        />
        <Image
          width={1200}
          height={800}
          alt="slider"
          src="/images/apartments/2.png"
          className="flex-[1.5] size-full object-cover object-center border-1 border-app-yellow rounded-[40px]"
        />
      </div>

      <div className="flex items-center gap-[60px]">
        <div className="hidden media-1400:flex flex-col gap-[60px] flex-1">
          <Image
            width={1200}
            height={800}
            alt="slider"
            src="/images/apartments/3.png"
            className="size-full object-cover object-center border-1 border-app-yellow rounded-[40px] row-start-2 row-end-3 col-start-1 col-end-2"
          />
          <Image
            width={1200}
            height={800}
            alt="slider"
            src="/images/apartments/4.png"
            className="size-full object-cover object-center border-1 border-app-yellow rounded-[40px] row-start-3 row-end-4 col-start-1 col-end-2"
          />
        </div>

        <div className="flex flex-col font-sans justify-start w-full media-1400:max-w-[780px] min-h-full">
          <div className="w-full h-full max-h-[200px] border-app-yellow border-1 rounded-[40px] py-[40px] px-[80px] hidden md:flex items-center justify-between">
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

          <TabGroup className="flex flex-col gap-y-[30px] md:gap-y-[60px] items-center mt-[20px] md:mt-[40px] xl:mt-[60px] ">
            <TabList className="w-full flex items-center max-w-[900px] gap-[20px] justify-between flex-wrap md:flex-nowrap">
              <Tab as={Fragment}>
                {({ hover, selected }) => (
                  <button
                    className={cn(
                      "media-500:flex-[1.3] w-[120px] md:w-[240px] h-[60px] md:h-[100px] flex items-center justify-center border-1 border-app-yellow text-[22px] md:text-[36px] font-bold duration-200 rounded-[50px] cursor-pointer outline-none",
                      selected && "bg-app-yellow",
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
                      "media-500:flex-1 w-[100px] md:w-[240px] h-[60px] md:h-[100px] flex items-center justify-center border-1 border-app-yellow text-[22px] md:text-[36px] font-bold duration-200 rounded-[50px] cursor-pointer outline-none",
                      selected && "bg-app-yellow",
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
                      "media-500:flex-1 w-[100px] md:w-[240px] h-[60px] md:h-[100px] flex items-center justify-center border-1 border-app-yellow text-[22px] md:text-[36px] font-bold duration-200 rounded-[50px] cursor-pointer outline-none",
                      selected && "bg-app-yellow",
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
                      "media-500:flex-1 w-[100px] md:w-[240px] h-[60px] md:h-[100px] flex items-center justify-center border-1 border-app-yellow text-[22px] md:text-[36px] font-bold duration-200 rounded-[50px] cursor-pointer outline-none",
                      selected && "bg-app-yellow",
                      hover && "border-3",
                    )}
                  >
                    3-к
                  </button>
                )}
              </Tab>
            </TabList>
            <TabPanels className="max-w-full">
              <TabPanel>
                <StudioSlider />
              </TabPanel>
              <TabPanel>панель 2</TabPanel>
              <TabPanel>панель 3</TabPanel>
              <TabPanel>панель 4</TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
}
