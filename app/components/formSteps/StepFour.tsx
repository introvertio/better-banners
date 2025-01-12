"use client";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { StepProps } from "../../types/useType";

export const StepFour = ({ control, register }: StepProps) => {

  const BackgroundGradientType = [
    "",
    "linear",
    "radial",
    "conic",
    "repeating-linear",
    "repeating-radial",
  ];
  const PatternType =[
    
  ]
  return (
    <div className="font-[montserrat]">
      <div className="flex gap-5 w-full justify-between">
        <p>Custom Design</p>
      </div>
     
        <div>
          {/* Background Color */}
          <div>
            {/* Background Gradient Type */}
            <div>
              <label htmlFor="selectedGradientType">
                Background Gradient Type
              </label>
              <select
                {...register("selectedGradientType")}
                className="w-full px-2 py-4  bg-main-blue/40 rounded-lg"
              >
                {BackgroundGradientType.map((value, index) => (
                  <option value={value} key={index}>
                    {value === "" ? "Select Gradient Type" : value}
                  </option>
                ))}
              </select>
            </div>

            {/* Gradient Color Picker */}
            <div className="flex flex-col gap-2 mt-4 w-full">
              <label> Gradient Color Picker</label>
              <div className="flex lg:flex-row flex-col gap-4 w-full">
                <div className="w-full">
                  <label>Start</label>
                  <input
                    defaultValue="#ffff"
                    type="color"
                    {...register("colorStart")}
                    className="w-full h-12 rounded-sm"
                  />
                </div>
                <div className="w-full">
                  <label>End</label>
                  <input
                    defaultValue="#252525"
                    type="color"
                    {...register("colorEnd")}
                    className="w-full h-12 rounded-sm"
                  />
                </div>
              </div>
            </div>
            {/* background pattern */}
            <div>

            </div>
          </div>
        </div>
      
    
    </div>
  );
};
