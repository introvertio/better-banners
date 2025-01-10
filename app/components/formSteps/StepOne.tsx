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
        <label className="text-xs font-[montserrat] dark:text-white text-black ">
          Brand Name
        </label>
        <input
          type="text"
          className="border dark:border-none rounded-lg w-full p-3 outline-main-blue text-neutral-600 my-3"
          placeholder="Enter your name"
          {...register("BrandName", {
            required: "This field is required",
            maxLength: {
              value: 20,
              message: "Max length is 20",
            },
          })}
          maxLength={20}
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
    </>
  );
};
