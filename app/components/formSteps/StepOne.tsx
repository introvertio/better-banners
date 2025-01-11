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
      <div>
        <label className="text-xs dark:text-white text-black font-bold">
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

        <div className="flex gap-2 items-center mt-6">
          <div>
            {/* placement */}
            <label className="text-xs  font-bold">Position</label>
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
                          field.value === item
                            ? "bg-main-blue"
                            : "bg-main-blue/30"
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

          <div className="">
            <label className="text-xs font-bold">Text Color</label>

            <div className="flex gap-2 ">
              <input
                type="color"
                {...register("color")}
                className="cursor-pointer h-[2.3rem] w-[5rem] "
              />
            </div>
          </div>
        </div>

        <div className="my-4 ">
          <label htmlFor="fontSize" className="text-sm font-bold ">
            Font Size
          </label>
          <div>
            <input
              type="range"
              {...register("fontSize")}
              min={20}
              max={34}
              className="before:dark:text-white after:dark:text-black relative before:content-['f'] before:absolute after:absolute before:top-4 after:top-4  after:-right-3 after:content-['F'] h-[4rem] w-[12rem] after:text-lg after:font-[monserrat] before:font-[monserrat] before:font-bold after:font-bold"
            />
          </div>
        </div>

        <p
          className="text-sm text-right cursor-pointer"
          onClick={() => handleEvent(2)}
        >
          Next {">"}
        </p>
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
