"use client";
import React, { useState } from "react";
import { useUpdateEffect } from "react-haiku";
import { UserChoiceProps } from "../types/useType";

export default function BannerGenerator() {
  const [Brand, setBrand] = useState<UserChoiceProps>({
    Brand: "",
    userChoice: {
      BrandName: "",
      BrandPosition: "",
      BrandFonts: "",
      BrandColor: "",
      BrandSize: "",
    },
  });
  const [userChoice, setUserChoice] = useState<UserChoiceProps>();

  useUpdateEffect(() => {
    setUserChoice({
      ...Brand,
      userChoice: {
        BrandName: Brand.userChoice.BrandName,
        BrandPosition: "",
        BrandFonts: "",
        BrandColor: "",
        BrandSize: "",
      },
    });
  }, [Brand]);
  return (
    <section className="h-[101svh] flex flex-col gap-1 items-center justify-center snap-start w-full relative">
      {/* <h1 className="text-2xl font-black text-white">
        Start Generating Better Banners
      </h1> */}
      <div className="flex flex-col lg:flex-row gap-4 w-full justify-around">
        <div className="flex items-center-justify-center">
          {/* preview */}
          <div className="w-[30rem] h-64 bg-white basis-auto text-black p-8 rounded">
            <h1>Preview</h1>
            <div className={`text-4xl font-black capitalize  my-6 w-full`}>
              {userChoice?.userChoice.BrandName}
            </div>
          </div>

          <div>{/* banner-size  */}</div>
        </div>
        <div className="basis-1/3">
          {/* form  */}
          <div>
            <div>
              <label className="text-xs font-[montserrat]">Brand Name</label>
              <input
                type="text"
                className="w-full p-3 outline-main-blue text-neutral-600"
                placeholder="Enter your name"
                onChange={(e) => setBrand({ ...Brand, userChoice: { ...Brand.userChoice, BrandName: e.target.value } })}
              />
            </div>
            <div>
              {/* placement */}
              <label className="text-xs font-[montserrat] mt-8">Position</label>
              <div className="flex gap-2 ">
                {["left", "center", "right"].map((item, index) => (
                  <button
                    key={index}
                    className="p-2 bg-main-blue text-white rounded-md text-xs border-white w-[5rem] capitalize  hover:bg-main-blue/30"
                    onClick={() => console.log(item)}
                  >
                    {" "}
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
