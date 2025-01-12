/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StepOne } from "../formSteps/StepOne";
import { StepTwo } from "../formSteps/StepTwo";
import { StepThree } from "../formSteps/StepThree";
// import { getToolsForProfession } from "../static/data";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { StepFour } from "../formSteps/StepFour";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Button } from "../Button";
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
      fontHeight: 10,
      color: "#000000",
      backgroundColor: "#ffffff",
      description: "Description",
      descriptionSize: 20,
      descriptionAlignment: "center",
      descriptionColor: "#fffff",
      skills: ["Design"],
      colorStart: "",
      colorEnd: "",
      selectedGradientType: "linear",
    },
  });

  const alignment = watch("alignment");
  const descriptionAlignment = watch("descriptionAlignment");
  const descriptionColor = watch("descriptionColor");
  const color = watch("color");
  const colorStart = watch("colorStart");
  const colorEnd = watch("colorEnd");
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
  type stepProps = {
    text: string;
  };
  const StepTitle = ({ text }: stepProps) => {
    return <p className="text-center">{text}</p>;
  };

  type GradientType =
    | "linear"
    | "radial"
    | "conic"
    | "repeating-linear"
    | "repeating-radial";
  const selectedGradientTypes = watch("selectedGradientType") as GradientType;

  const gradientStyles: Record<GradientType, string> = {
    linear: `linear-gradient(to right, ${colorStart}, ${colorEnd})`,
    radial: `radial-gradient(circle, ${colorStart}, ${colorEnd})`,
    conic: `conic-gradient(from 0deg, ${colorStart}, ${colorEnd})`,
    "repeating-linear": `repeating-linear-gradient(45deg, ${colorStart}, ${colorEnd} 10%, ${colorStart} 20%)`,
    "repeating-radial": `repeating-radial-gradient(circle, ${colorStart}, ${colorEnd} 10%, ${colorStart} 20%)`,
  };

  console.log(gradientStyles.linear);

  //  <div
  //    style={{
  //      background: gradientStyles[selectedGradientType],
  //      height: "200px",
  //      width: "100%",
  //    }}
  //  />;

  return (
    <section className="h-[101svh] flex flex-col gap-1 items-center justify-center snap-start w-full relative">
      {/* <h1 className="text-2xl font-black text-white">
        Start Generating Better Banners
      </h1> */}
      <div className="flex flex-col lg:flex-row gap-6 w-full justify-around lg:px-8 px-4 items-center">
        <div className="flex items-center-justify-center relative basis-[50%]">
          {/* preview */}
          <div
            style={{ background: gradientStyles[selectedGradientTypes] }}
            className=" w-full h-64 bg-white basis-auto text-black p-8 rounded border dark:border-none dark:bg-gray-50 relative shadow-lg overflow-hidden"
          >
            <span className="absolute -left-5 top-2 px-4 font-[montserrat] text-sm -rotate-45 bg-main-blue dark:bg-main-blue/30 text-white z-0">
              Preview
            </span>
            <div
              className={` flex flex-col mt-4 text-4xl font-black capitalize text-balance  text-black z-10 w-full justify-center items-center`}
            >
              <div></div>
              <div className="w-full relative h-full">
                <h1
                  style={{ fontSize: `${watch("fontSize")}rem` }}
                  className={twMerge(
                    clsx(
                      "mt-4 w-full z-10 leading-[2.8rem]",
                      {
                        "text-left justify-start": alignment === "left",
                        "text-right justify-end": alignment === "right",
                        "text-center justify-center":
                          !alignment || alignment === "center",
                      },
                      {
                        "text-sky-500": color === "skyblue",
                        "text-yellow-500": color === "yellow",
                        "text-pink-600": color === "deeppink",
                        "text-indigo-500": color === "indigo",
                        "text-orange-600": color === "darkorange",
                        "text-black": !color,
                      }
                    )
                  )}
                >
                  {watch("BrandName")}
                </h1>

                <p
                  className={twMerge(
                    clsx(
                      "text-sm w-full leading-snug flex flex-col",
                      {
                        "text-left justify-start":
                          descriptionAlignment === "left",
                        "text-right justify-end":
                          descriptionAlignment === "right",
                        "text-center justify-center":
                          !descriptionAlignment ||
                          descriptionAlignment === "center",
                      },
                      {
                        "text-sky-500": descriptionColor === "skyblue",
                        "text-yellow-500": descriptionColor === "yellow",
                        "text-pink-600": descriptionColor === "deeppink",
                        "text-indigo-500": descriptionColor === "indigo",
                        "text-orange-600": descriptionColor === "darkorange",
                        "text-black": !descriptionColor,
                      }
                    )
                  )}
                >
                  {watch("description")}
                  <span className="text-sm">
                    {Array.isArray(watch("skills"))
                      ? watch("skills").join(" ")
                      : typeof watch("skills") === "string"
                      ? watch("skills")
                      : "No skills listed"}
                  </span>
                </p>
              </div>
              <div></div>
            </div>
          </div>

          <div>{/* banner-size  */}</div>
        </div>
        <form
          className="basis-[50%] "
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <Swiper
            className="lg:w-[40svw] lg:h-[35svw] lg:mx-8 relative z-10 w-[90svw] "
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
            <div className="relative">
              <SwiperSlide>
                <StepTitle text="Brand" />
                <div className="">
                  <StepOne control={control} register={register} />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <StepTitle text="Description" />
                <StepTwo control={control} register={register} />
              </SwiperSlide>

              <SwiperSlide>
                <StepTitle text="Technology" />

                <StepThree
                  control={control}
                  register={register}
                  watch={watch}
                />
              </SwiperSlide>

              <SwiperSlide>
                <StepTitle text="Background" />
                <StepFour control={control} register={register} />
              </SwiperSlide>
            </div>

            <div className="flex justify-between  px-4 z-20  lg:absolute lg:bottom-0  w-full ">
              <div>
                <Button
                  type="button"
                  text="Back"
                  className={`
            px-6 py-2 rounded-md transition-all
            ${
              currentStep === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-main-blue border-2 border-main-blue hover:bg-main-blue/10 hover:cursor-pointer"
            }
          `}
                  handleClick={handlePrev}
                  disabled={currentStep === 0}
                />
              </div>

              <div>
                {currentStep === totalSteps - 1 ? (
                  <Button
                    type="submit"
                    className={`px-6 py-2 bg-main-blue text-white rounded-md hover:bg-main-blue/90 transition-all hover:cursor-pointer cursor-pointer`}
                    text="Generate Banner"
                  />
                ) : (
                  <Button
                    type="button"
                    handleClick={handleNext}
                    className={`px-6 py-2 bg-main-blue text-white rounded-md hover:bg-main-blue/90 hover:cursor-pointer transition-all cursor-pointer`}
                    text="Next"
                  />
                )}
              </div>
            </div>
          </Swiper>
          <div className="swiper-pagination" />
        </form>
      </div>
    </section>
  );
}
