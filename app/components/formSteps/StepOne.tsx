/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Controller } from "react-hook-form";
interface StepOneProps {
  register: any;
  control: any;
}

export const StepOne = ({ control, register }: StepOneProps) => {
  return (
    <>
      <div>
        <label className="text-xs font-[montserrat] text-black ">
          Brand Name
        </label>
        <input
          type="text"
          className="border rounded-lg w-full p-3 outline-main-blue text-neutral-600 my-3"
          placeholder="Enter your name"
          {...register("BrandName", {
            required: "This field is required",
            maxLength: 30,
          })}
        />
      </div>
      <div>
        {/* placement */}
        <label className="text-xs font-[montserrat] mt-8">Position</label>
        <div className="flex gap-2 ">
          <Controller
            name="alignment"
            control={control}
            render={({ field }) => (
              <div className="flex gap-2">
                {["left", "center", "right"].map((item, index) => (
                  <button
                    {...register("alignment")}
                    key={index}
                    type="button"
                    className={`p-2 ${
                      field.value === item ? "bg-main-blue" : "bg-main-blue/30"
                    } text-white rounded-md text-xs border-white w-[5rem] capitalize`}
                    onClick={() => field.onChange(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-xs font-[montserrat] ">Text Color</label>
        <Controller
          name="color"
          control={control}
          render={({ field }) => (
            <div className="flex gap-8 ">
              {[
                "skyblue",
                "yellow",
                "deeppink",
                "indigo",
                "darkorange",
                "black",
              ].map((item, index) => (
                <div
                  {...register("color")}
                  key={index}
                  type="button"
                  className={`p-2 rounded-full h-10 w-10  text-white text-xs border-white cursor-pointer`}
                  onClick={() => field.onChange(item)}
                  style={{ backgroundColor: item }}
                >
                  {field.value === item && (
                    <span className="text-white inline-flex font-bold text-xl justify-center items-center ">
                      ✔
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        />
      </div>
      <div className="">
        <div className="relative my-6">
          <label htmlFor="fontSize" className="sr-only">
            fontSize
          </label>
          <input
            {...register("fontSize")}
            type="range"
            // value="1000"
            min="30"
            max="100"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
            aA
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            30px
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            70px
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
            aA
          </span>
        </div>
      </div>
    </>
  );
};
