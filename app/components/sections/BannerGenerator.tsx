"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StepOne } from "../formSteps/StepOne";
import { StepTwo } from "../formSteps/StepTwo";
import { StepThree } from "../formSteps/StepThree";
import { StepFour } from "../formSteps/StepFour";
export default function BannerGenerator() {
  const [formStep, setFormStep] = useState<number>(1);
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
  const fontSize = watch("fontSize");
  console.log(brandName, alignment, color, fontSize);

  return (
    <section className="h-[101svh] flex flex-col gap-1 items-center justify-center snap-start w-full relative">
      {/* <h1 className="text-2xl font-black text-white">
        Start Generating Better Banners
      </h1> */}
      <div className="flex flex-col lg:flex-row gap-4 w-full justify-around px-8">
        <div className="flex items-center-justify-center relative basis-[50%] flex-col">
          {/* preview */}
          <div className=" w-full aspect-[820/310] bg-white basis-auto text-black p-8 rounded border dark:border-none dark:bg-gray-50 relative shadow-lg overflow-hidden">
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
                }`}
                style={{ color: color, fontSize: `${fontSize}px` }}
              >
                {brandName}
              </h1>
              <div></div>
            </div>
          </div>

          <div className="my-4 p-4 dark:text-white w-full">
            {/* banner-size  */}
            <label htmlFor="resize">resize</label>
            <br />
            <select
              name=""
              id=""
              className="w-full text-black border-none dark:outline-none  p-2"
            >
              <option value="">Facebook</option>
              <option value="">Twitter</option>
              <option value="">LinkedIn</option>
              <option value="">Instagram</option>
            </select>
          </div>
        </div>
        <div className="basis-1/3">
          {/* form  */}
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            {formStep == 1 ? (
              <StepOne
                control={control}
                register={register}
                handleEvent={setFormStep}
              />
            ) : formStep == 2 ? (
              <StepTwo />
            ) : formStep == 3 ? (
              <StepThree />
            ) : formStep == 4 ? (
              <StepFour />
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
