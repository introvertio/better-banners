/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { StepOne } from "../formSteps/StepOne";
import { StepTwo } from "../formSteps/StepTwo";
import { StepThree } from "../formSteps/StepThree";
import { StepFour } from "../formSteps/StepFour";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function BannerGenerator() {
  const { control, register, handleSubmit, watch } = useForm({
    defaultValues: {
      BrandName: "Enter your brand name",
      alignment: "center",
      fontSize: 20,
      color: "#000000",
      backgroundColor: "#ffffff",
    },
  });
  const brandName = watch("BrandName");
  const alignment = watch("alignment");
  const color = watch("color");
  console.log(brandName, alignment, color);
  const [swiper, setSwiper] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 4;

  const handleNext = () => {
    if (swiper && currentStep < totalSteps - 1) {
      swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper && currentStep > 0) {
      swiper.slidePrev();
    }
  };
  return (
    <section className="h-[101svh] flex flex-col gap-1 items-center justify-center snap-start w-full relative">
      {/* <h1 className="text-2xl font-black text-white">
        Start Generating Better Banners
      </h1> */}
      <div className="flex flex-col lg:flex-row gap-4 w-full justify-around px-8">
        <div className="flex items-center-justify-center relative basis-[50%]">
          {/* preview */}
          <div className=" w-full h-64 bg-white basis-auto text-black p-8 rounded border dark:border-none dark:bg-gray-50 relative shadow-lg overflow-hidden">
            <span className="absolute -left-5 top-2 px-4 font-[montserrat] text-sm -rotate-45 bg-main-blue dark:bg-main-blue/30 text-white z-0">
              Preview
            </span>
            <div
              className={` flex flex-col mt-4 text-4xl font-black capitalize  my-6 text-balance  text-black z-10 w-full justify-center items-center`}
            >
              <div></div>
              <h1
                style={{ fontSize: `${watch("fontSize")}px` }}
                className={` 
                  ${
                    alignment == "left"
                      ? "text-left justify-start"
                      : alignment == "right"
                      ? "text-right justify-end"
                      : "text-center justify-center"
                  } w-full  z-10  ${
                  color == "skyblue"
                    ? "text-sky-500"
                    : color === "yellow"
                    ? "text-yellow-500"
                    : color === "deeppink"
                    ? "text-pink-600"
                    : color === "indigo"
                    ? "text-indigo-500"
                    : color === "darkorange"
                    ? "text-orange-600"
                    : "text-black"
                } leading-normal`}
              >
                {brandName}
              </h1>
              <div></div>
            </div>
          </div>

          <div>{/* banner-size  */}</div>
        </div>
        <div className="basis-1/3">
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Swiper
            className="lg:w-[42svw] lg:h-[30svw] p-4 relative"
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              type: "progressbar",
              el: ".swiper-pagination",
            }}
            onSwiper={(swiper: any) => setSwiper(swiper)}
            onSlideChange={(s) => setCurrentStep(s.activeIndex)}
          >
            <form
              onSubmit={handleSubmit((data) => console.log(data))}
              className="relative"
            >
              <SwiperSlide>
                <div className="">
                  <StepOne control={control} register={register} />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <StepTwo />
              </SwiperSlide>

              <SwiperSlide>
                <StepThree />
              </SwiperSlide>

              <SwiperSlide>
                <StepFour />
              </SwiperSlide>

              <div className="flex justify-between lg:-mt-6 px-4">
                <button
                  type="button"
                  onClick={() => handlePrev}
                  className={`
            px-6 py-2 rounded-md transition-all
            ${
              currentStep === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-main-blue border-2 border-main-blue hover:bg-main-blue/10"
            }
          `}
                  disabled={currentStep === 0}
                >
                  Back
                </button>

                {currentStep === totalSteps - 1 ? (
                  <button
                    type="submit"
                    className="px-6 py-2 bg-main-blue text-white rounded-md hover:bg-main-blue/90 transition-all"
                  >
                    Generate Banner
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleNext}
                    className="px-6 py-2 bg-main-blue text-white rounded-md hover:bg-main-blue/90 transition-all"
                  >
                    Next
                  </button>
                )}
              </div>
            </form>
          </Swiper>
          <div className="swiper-pagination" />
          {/* form  */}
          {/* </Suspense> */}
        </div>
      </div>
    </section>
  );
}
