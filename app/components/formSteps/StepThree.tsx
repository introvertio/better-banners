/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Controller } from "react-hook-form";
import { StepProps } from "../../types/useType";
import { getToolsForProfession, Tool } from "../static/data";

export const StepThree = ({ control, register, watch }: StepProps) => {
  const PROFESSION_CATEGORIES = [
    "Development",
    "Design",
    "Data",
    "Infrastructure",
    "Management",
    "Content",
  ];

  return (
    <div className="overflow-y-auto">
      <div className="flex flex-col gap-2 my-3">
        <label className="text-xs  mt-8 font-semibold">
          Profession Category
        </label>
        <div className="flex gap-2 my-3">
          <Controller
            name="skills"
            defaultValue={["Design"]}
            control={control}
            render={({ field }) => (
              <div className="flex gap-2 flex-wrap">
                {PROFESSION_CATEGORIES.map((skill, index) => (
                  <button
                    {...register("skills", {
                      maxLength: {
                        value: 3,
                        message: "You can only select 3 skills",
                      },
                    })}
                    key={index}
                    type="button"
                    className={`p-2 ${
                      (field.value || []).includes(skill) // Safely check includes
                        ? "bg-main-blue"
                        : "bg-main-blue/30"
                    } text-white rounded-md text-xs border-white w-auto px-4 capitalize `}
                    onClick={() => {
                      const currentValue = field.value || []; // Handle undefined value
                      const updatedSkills = currentValue.includes(skill)
                        ? currentValue.filter((item: string) => item !== skill)
                        : [...currentValue, skill];
                      field.onChange(updatedSkills);
                    }}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            )}
          />
        </div>
      </div>
      <div>
        {/* placement */}
        <label className="text-xs  mt-8 font-semibold">Position</label>
        <div className="flex gap-2 my-3">
          <Controller
            name="iconAlignment"
            control={control}
            render={({ field }) => (
              <div className="flex gap-2">
                {["random", "top", "bottom"].map((item, index) => (
                  <button
                    {...register("iconAlignment")}
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
      <div>
        <div className="space-y-2 ">
          <label className="text-xs font-semibold">Tools & Technologies</label>
          <Controller
            name="tools"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <div className="flex flex-wrap gap-2 ">
                {getToolsForProfession(watch("skills"))?.map(
                  (tool: Tool, index: number) => (
                    <button
                      {...register("tools")}
                      type="button"
                      key={index}
                      className={`
                  flex items-center gap-2 px-4 py-2 rounded-md text-sm
                  transition-all duration-200
                  ${
                    (field.value || []).includes(tool)
                      ? "bg-main-blue text-white"
                      : "bg-main-blue/10 text-gray-700 hover:bg-main-blue/20"
                  }
                `}
                      onClick={() => {
                        const currentValue = field.value || [];
                        const updatedTools = currentValue.includes(tool)
                          ? currentValue.filter((item: any) => item !== tool)
                          : [...currentValue, tool];
                        field.onChange(updatedTools);
                      }}
                    >
                      {tool.icon && (
                        <tool.icon
                          className={`w-4 h-4 ${
                            (field.value || []).includes(tool)
                              ? "text-white"
                              : "text-gray-600"
                          }`}
                        />
                      )}
                      <span>{tool.name}</span>
                    </button>
                  )
                )}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};
