/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Controller } from "react-hook-form";
interface StepOneProps {
  register: any;
  control: any;
  handleEvent: (e: number) => void;
}

export const StepOne = ({ control, register, handleEvent }: StepOneProps) => {
  return (
    <>
      <div className="flex flex-col w-full items-center justify-center gap-4">
        <input
          type="text"
          className="rounded-lg w-full p-3 outline-none bg-black bg-opacity-20 font-semibold text-black placeholder:text-white placeholder:text-opacity-50"
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

        <div className="mx-auto flex flex-col items-center justify-center gap-3 w-full">
          {/* placement */}

          <div className="flex flex-col items-center justify-center gap-1 w-full ">
            <label className="text-xs  font-bold mr-auto">Text Alignment</label>
            <Controller
              name="alignment"
              control={control}
              render={({ field }) => (
                <div className="flex flex-row gap-2 w-full">
                  {["left", "center", "right"].map((item, index) => (
                    <button
                      {...register("alignment")}
                      key={index}
                      type="button"
                      className={`p-2 ${
                        field.value === item
                          ? "bg-main-blue"
                          : "bg-main-blue/30"
                      } text-white rounded-md text-sm border-white capitalize w-full h-10`}
                      onClick={() => field.onChange(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            />
          </div>

          <div className="flex flex-col w-full items-center gap-1 justify-center">
            <label className="text-xs font-bold mr-auto">Text Color</label>
            <input
              type="color"
              {...register("color")}
              className=" w-full h-10 rounded-md transition-all"
            />
          </div>
          <div className="flex flex-col gap-1 w-full items-center justify-center">
            <p className="text-xs font-bold  mr-auto">Font Size</p>
            <div className="flex flex-row gap-1 items-center justify-between w-full">
              <div className="rounded-full size-10 bg-black bg-opacity-20 flex items-center justify-center">
                <p className="text-sm font-bold">F</p>
              </div>
              <input
                type="range"
                {...register("fontSize")}
                min={20}
                max={34}
                className=" w-[70%] h-10 rounded-md"
              />
              <div className="rounded-full size-10 bg-black bg-opacity-20 flex items-center justify-center">
                <p className="text-3xl font-bold">F</p>
              </div>
            </div>
          </div>
        </div>

        <button
          className=" font-bold bg-main-blue text-lg w-1/2 h-12 ml-auto text-white text-right p-2 rounded-md pr-8 transition-all active:scale-90"
          onClick={() => handleEvent(2)}
        >
          Next
        </button>
        {/* <div className="mt-4">
          

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
        </div> */}
      </div>
    </>
  );
};
