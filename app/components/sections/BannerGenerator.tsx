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
      <div className="flex flex-col lg:flex-row gap-4 w-full justify-around px-2  md:px-8">
        <div className="flex items-center-justify-center relative basis-[50%] flex-col">
          {/* preview */}
          <div className="flex flex-col gap-1 rounded-md bg-main-blue p-2 md:p-4">
            <small className="font-bold text-white flex flex-row gap-1 items-center">
              <span>Live preview</span>
              <span className="size-4 bg-white rounded-full animate-pulse transition-all"></span>
            </small>
            <div className=" w-full flex flex-col items-center justify-start aspect-[820/310] bg-white p-2 rounded-sm">
              <h1
                className={` w-full ${
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
            </div>
          </div>

          <div className=" p-4 w-full">
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
