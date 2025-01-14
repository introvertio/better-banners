"use client";
import React from "react";
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
  const PatternType = [
    "bg-grid-black",
    "bg-triangles-black",
    "bg-dot-black",
    "bg-diagonal-lines-black",
    "bg-cross-black",
    "bg-honeycomb-black",
    "bg-circuit-black",
    "bg-microchip-black",
    "bg-matrix-black",
    "bg-crosshatch-black",
  ];
  return (
    <div className="">
      <div className="flex gap-5 w-full justify-between">
        <p>Custom Design</p>
      </div>

      <div>
        {/* Background Color */}
        <div>
          {/* Background Gradient Type */}
          <div>
            <label
              htmlFor="selectedGradientType"
              className="text-sm font-semibold"
            >
              Background Gradient Type
            </label>
            <select
              {...register("selectedGradientType")}
              className="w-full px-2 py-4  bg-main-blue/10 rounded-lg text-gray-700"
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
            <label className="text-sm font-semibold">
              {" "}
              Gradient Color Picker
            </label>
            <div className="flex lg:flex-row flex-col gap-4 w-full text-xs">
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
            <label className="text-xs  mt-8 font-semibold">
              Background Pattern
            </label>
            <div className="flex gap-2 my-3">
              <Controller
                name="patterns"
                control={control}
                render={({ field }) => (
                  <div className="flex gap-2 flex-wrap">
                    {PatternType.map((patterns, index) => (
                      <button
                        {...register("patterns")}
                        key={index}
                        type="button"
                        className={`p-2 ${
                          (field.value || []).includes(patterns)
                            ? "bg-main-blue text-white"
                            : "bg-main-blue/10 hover:bg-main-blue/20"
                        } text-gray-700 rounded-md text-xs border-white w-auto px-4 capitalize`}
                        onClick={() => {
                          const currentValue = field.value || [];
                          const updatedPatterns = currentValue.includes(
                            patterns
                          )
                            ? currentValue.filter(
                                (item: string) => item !== patterns
                              )
                            : [...currentValue, patterns];
                          field.onChange(updatedPatterns);
                        }}
                      >
                        {patterns}
                      </button>
                    ))}
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
