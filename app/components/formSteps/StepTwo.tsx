"use client";
import { Controller } from "react-hook-form";
import { StepProps } from "../../types/useType";
// import { Profession } from "../static/data";

export const StepTwo = ({ control, register }: StepProps) => {
  return (
    <div className="font-[montserrat]">
      <div>
        <label className="text-xs  text-black font-semibold">
          Description &nbsp;(optional)
        </label>
        <input
          type="text"
          className="border rounded-lg w-full p-3 outline-main-blue text-neutral-600 my-3"
          placeholder="Description"
          defaultValue=""
          {...register("description", {
            required: "This field is required",
            maxLength: 30,
          })}
        />
      </div>
      <div>
        {/* placement */}
        <label className="text-xs  mt-8 font-semibold">
          Description Position
        </label>
        <div className="flex gap-2 ">
          <Controller
            name="descriptionAlignment"
            control={control}
            render={({ field }) => (
              <div className="flex gap-2">
                {["left", "center", "right"].map((item, index) => (
                  <button
                    {...register("descriptionAlignment")}
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
        <label className="text-xs  font-semibold">Text Color</label>
        <Controller
          name="descriptionColor"
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
                  {...register("descriptionColor")}
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
          <label htmlFor="descriptionSize" className="text-xs font-semibold">
            Font Size
          </label>
          <input
            {...register("descriptionSize")}
            type="range"
            min="30"
            max="100"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer my-3"
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
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6 font-semibold">
            aA
          </span>
        </div>
        <div className="relative my-6">
          <label htmlFor="fontHeight" className="text-xs font-semibold">
            Font height
          </label>
          <input
            {...register("fontHeight")}
            type="range"
            min="30"
            max="100"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer my-3"
          />
          
        </div>
      </div>
    </div>
  );
};
