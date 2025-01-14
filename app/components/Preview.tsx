/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {  JSX } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface PreviewProps {
  width: number;
  height: number;
  gradientStyles: any;
  selectedGradientTypes: string;
  patternList: any;
  watch: any;
  color: string;
  alignment: string;
  descriptionAlignment: string;
  descriptionColor: string;
}

export const Preview = ({
  width,
  height,
  gradientStyles,
  selectedGradientTypes,
  patternList,
  watch,
  alignment,
  color,
  descriptionAlignment,
  descriptionColor,
}: PreviewProps) => {
  return (
    <div
      className="flex  relative  overflow-hidden"
      // style={{ width: `${width / 2}px`, height: `${height / 2}px` }}
    >
      {/* preview */}
      <div
        id="banner-preview"
        style={{
          background: gradientStyles[selectedGradientTypes],
          width: `${width}px`,
          height: `${height}px`,
        }}
        className={clsx(
          "  bg-white basis-auto text-black p-8 rounded border dark:border-none dark:bg-gray-50 relative shadow-lg overflow-hidden"
        )}
      >
        <span className="absolute -left-5 top-2 px-4 font-[montserrat] text-sm -rotate-45 bg-main-blue dark:bg-main-blue/30 text-white z-0">
          Preview
        </span>
        <div
          className={` flex flex-col mt-4 text-4xl font-black capitalize text-balance  text-black z-10 w-full justify-center items-center`}
        >
          {patternList && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              {(Array.isArray(patternList) ? patternList : [patternList]).map(
                (patternClass, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "absolute inset-0 opacity-50",
                      patternClass
                    )}
                  />
                )
              )}

              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
          )}
          <div className="w-full relative h-full">
            <h1
              style={{ fontSize: `${watch("fontSize")}rem` }}
              className={twMerge(
                clsx(
                  "mt-4 w-full z-10 leading-[3rem]",
                  {
                    "text-left justify-start": alignment === "left",
                    "text-right justify-end": alignment === "right",
                    "text-center justify-center":
                      !alignment || alignment === "center",
                  },
                  {
                    "text-sky-500": color === "skyblue",
                    "text-yellow-500": color === "yellow",
                    "text-pink-600": color === "deeppink",
                    "text-indigo-500": color === "indigo",
                    "text-orange-600": color === "darkorange",
                    "text-white": color === "whitesmoke",
                    "text-black": !color,
                  }
                )
              )}
            >
              {watch("BrandName")}
            </h1>

            <div
              style={{
                fontSize: `${watch("descriptionSize")}rem`,
                marginTop: `${watch("fontHeight")}rem`,
              }}
              className={twMerge(
                clsx(
                  "text-sm w-full leading-snug flex flex-col ",
                  {
                    "text-left justify-start items-left":
                      descriptionAlignment === "left",
                    "text-right justify-end items-right":
                      descriptionAlignment === "right",
                    "text-center justify-center items-center":
                      !descriptionAlignment ||
                      descriptionAlignment === "center",
                  },
                  {
                    "text-sky-500": descriptionColor === "skyblue",
                    "text-yellow-500": descriptionColor === "yellow",
                    "text-pink-600": descriptionColor === "deeppink",
                    "text-indigo-500": descriptionColor === "indigo",
                    "text-orange-600": descriptionColor === "darkorange",
                    "text-white ": descriptionColor === "whitesmoke",
                    "text-black": !descriptionColor,
                  }
                )
              )}
            >
              {watch("description")}
              {/* <span className="text-sm">
                      {Array.isArray(watch("skills"))
                        ? watch("skills").join(" ")
                        : typeof watch("skills") === "string"
                        ? watch("skills")
                        : "No skills listed"}
                    </span> */}
              <span className="inline-flex gap-3 my-4">
                {watch("tools")?.map((IconComponent: JSX.Element[], index:number) => (
                  <span key={index} className="w-8 h-8 text-main-blue">
                    {IconComponent}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>{/* banner-size  */}</div>
    </div>
  );
};
