/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, JSX } from "react";
import { useForm } from "react-hook-form";
import { StepOne } from "../formSteps/StepOne";
import { StepTwo } from "../formSteps/StepTwo";
import { StepThree } from "../formSteps/StepThree";
// import { bannerSizes } from "../static/data";
import { Modal } from "../Modal";
import { StepFour } from "../formSteps/StepFour";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Button } from "../Button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDownload } from "../../hooks/useDownload";
import { Preview } from "../previews/Preview";

export default function BannerGenerator() {
  const { control, register, handleSubmit, watch } = useForm({
    defaultValues: {
      BrandName: "Enter your brand name",
      alignment: "center",
      fontSize: 2,
      fontHeight: 0,
      color: "#000000",
      backgroundColor: "#ffffff",
      description: "Description",
      descriptionSize: 2,
      descriptionAlignment: "center",
      descriptionColor: "#ffffff",
      skills: ["Design"],
      colorStart: "",
      colorEnd: "",
      selectedGradientType: "linear",
      patterns: "bg-dot-black",
      selectedBanner: "aspect-linkedin-cover",
      tools: [] as JSX.Element[],
    },
  });
  const { downloadElementAsImage } = useDownload();
  const alignment = watch("alignment");
  const descriptionAlignment = watch("descriptionAlignment");
  const descriptionColor = watch("descriptionColor");
  const color = watch("color");
  const patternList = Array.isArray(watch("patterns"))
    ? watch("patterns")
    : [watch("patterns")];
  const colorStart = watch("colorStart");
  const colorEnd = watch("colorEnd");
  const [swiper, setSwiper] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setdata] = useState<any>();
  const [modalState, setModalState] = useState<boolean>(false);
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
  // type stepProps = {
  //   text: string;
  // };
  // const StepTitle = ({ text }: stepProps) => {
  //   return <p className="text-center">{text}</p>;
  // };

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

  const handleDownload = async () => {
    try {
      await downloadElementAsImage("banner-preview", {
        fileName: watch("BrandName"),
        format: "png",
        quality: 1,
      });
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  
  return (
    <>
      {modalState && (
        <Modal
          handleEvent={() => setModalState(!modalState)}
          data={data}
          className={` max-2xl flex-col flex gap-4 w-fit`}
        >
          <Preview
            gradientStyles={gradientStyles}
            selectedGradientTypes={selectedGradientTypes}
            patternList={patternList}
            watch={watch}
            color={color}
            descriptionColor={descriptionColor}
            alignment={alignment}
            descriptionAlignment={descriptionAlignment}
            bannerPreview={watch("selectedBanner")}
          />
          <Button
            type="button"
            className={`px-6 py-2 bg-main-blue text-white rounded-md hover:bg-main-blue/90 transition-all hover:cursor-pointer cursor-pointer pt-4`}
            text="Download Banner"
            handleClick={handleDownload}
          />
        </Modal>
      )}
      <section className="h-[101svh] flex flex-col gap-1 items-center justify-center snap-start w-full relative lg:px-8 px-4">
        <div className="flex flex-col lg:flex-row gap-6 w-full justify-around items-center">
          <div className="flex  relative basis-[50%] overflow-hidden">
            {/* <Swiper
              className="lg:w-[40svw] lg:h-[35svw] lg:mx-8 relative z-10 w-[90svw]"
              modules={[Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ type: "bullets" }}
              onSwiper={(swiper) => {
                setValue(
                  "selectedBanner",
                  bannerSizes[swiper.activeIndex]?.name
                );
              }}
              onSlideChange={(swiper) => {
                setValue(
                  "selectedBanner",
                  bannerSizes[swiper.activeIndex]?.name
                );
              }}
            > */}

            {/* {bannerSizes.map((val) => ( */}
            {/* <div  className="relative"> */}
            <Preview
              gradientStyles={gradientStyles}
              selectedGradientTypes={selectedGradientTypes}
              patternList={patternList}
              watch={watch}
              color={color}
              descriptionColor={descriptionColor}
              alignment={alignment}
              descriptionAlignment={descriptionAlignment}
              bannerPreview={watch("selectedBanner")}
            />
            {/* </div> */}
            {/* ))} */}

            {/* </Swiper> */}
          </div>
          <form
            className="basis-[50%]"
            onSubmit={handleSubmit(
              (data) => {
                setdata(data);
                setModalState(!modalState);
              },
              (error) => {
                console.log(error);
              }
            )}
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
                  {/* <StepTitle text="Brand" /> */}
                  <div className="">
                    <StepOne control={control} register={register} />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {/* <StepTitle text="Description" /> */}
                  <StepTwo control={control} register={register} />
                </SwiperSlide>

                <SwiperSlide>
                  {/* <StepTitle text="Technology" /> */}

                  <StepThree
                    control={control}
                    register={register}
                    watch={watch}
                  />
                </SwiperSlide>

                <SwiperSlide>
                  {/* <StepTitle text="Background" /> */}
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
    </>
  );
}
