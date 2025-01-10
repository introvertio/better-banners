"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { StepOne } from "../formSteps/StepOne";
import { StepTwo } from "../formSteps/StepTwo";
import { StepThree } from "../formSteps/StepThree";
import { StepFour } from "../formSteps/StepFour";
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
  const steps = 1;
  const brandName = watch("BrandName");
  const alignment = watch("alignment");
  console.log(brandName, alignment);

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
              className={` flex flex-col mt-4 text-4xl font-black capitalize  my-6 text-balance  text-black z-10 w-full`}
            >
              <div></div>
              <h1
                className={`${
                  alignment == "left"
                    ? "text-left justify-start"
                    : alignment == "right"
                    ? "text-right justify-end"
                    : "text-center justify-center"
                } text-red-800 text-left`}
              >
                {brandName}
              </h1>
              <div></div>
            </div>
          </div>

          <div>{/* banner-size  */}</div>
        </div>
        <div className="basis-1/3">
          {/* form  */}
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            {steps == 1 ? (
              <StepOne control={control} register={register} />
            ) : steps == 2 ? (
              <StepTwo />
            ) : steps == 3 ? (
              <StepThree />
            ) : steps == 4 ? (
              <StepFour />
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
