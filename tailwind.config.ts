/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";

import svgToDataUri from "mini-svg-data-uri";

// import colors from "tailwindcss/colors";

import {
  default as flattenColorPalette,
} from "tailwindcss/lib/util/flattenColorPalette";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "#011ea0ff",
      },
      aspectRatio: {
        "facebook-cover": "851 / 315", // Facebook Cover Photo
        "twitter-cover": "1500 / 500", // Twitter Cover Photo
        "instagram-square": "1 / 1", // Instagram Square Post
        "instagram-portrait": "4 / 5", // Instagram Portrait Post
        "instagram-story": "9 / 16", // Instagram Story
        "youtube-thumbnail": "16 / 9", // YouTube Thumbnail
        "linkedin-cover": "1128 / 191", // LinkedIn Cover Photo
        "pinterest-pin": "2 / 3", // Pinterest Pin
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
          "bg-diagonal-lines": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 0L32 32M-8 8L24 40M8 -8L40 24"/></svg>`
            )}")`,
          }),
          "bg-cross": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="${value}"><path d="M8 0V16M0 8H16"/></svg>`
            )}")`,
          }),
          "bg-honeycomb": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="${value}">
        <path d="M24 8 L38 16 L38 32 L24 40 L10 32 L10 16 Z" stroke-width="0.5"/>
        <path d="M24 -24 L38 -16 L38 0 L24 8 L10 0 L10 -16 Z" stroke-width="0.5"/>
        <path d="M52 0 L66 8 L66 24 L52 32 L38 24 L38 8 Z" stroke-width="0.5"/>
        <path d="M-4 0 L10 8 L10 24 L-4 32 L-18 24 L-18 8 Z" stroke-width="0.5"/>
      </svg>`
            )}")`,
          }),

          "bg-circuit": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}">
        <path d="M0 16h8m16 0h8M16 0v8m0 16v8m-8-16h16M8 8l16 16m0-16L8 24" stroke-width="0.5"/>
        <circle cx="16" cy="16" r="2" fill="${value}"/>
      </svg>`
            )}")`,
          }),
          "bg-matrix": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}">
        <path d="M4 4h2m4 0h2m4 0h2m4 0h2m4 0h2M4 8h2m4 0h2m4 0h2m4 0h2m4 0h2M4 12h2m4 0h2m4 0h2m4 0h2m4 0h2" stroke-width="0.5"/>
        <path d="M4 16h2m4 0h2m4 0h2m4 0h2m4 0h2M4 20h2m4 0h2m4 0h2m4 0h2m4 0h2M4 24h2m4 0h2m4 0h2m4 0h2m4 0h2" stroke-width="0.5"/>
        <circle cx="6" cy="28" r="1" fill="${value}"/>
        <circle cx="22" cy="28" r="1" fill="${value}"/>
        <circle cx="14" cy="28" r="1" fill="${value}"/>
      </svg>`
            )}")`,
          }),

          "bg-microchip": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}">
        <rect x="8" y="8" width="16" height="16" stroke-width="0.5"/>
        <path d="M16 4v4m0 16v4m12-16h-4m-16 0H4" stroke-width="0.5"/>
        <rect x="12" y="12" width="8" height="8" stroke-width="0.5"/>
        <path d="M10 0v4m12-4v4M0 10h4m24-0h4M0 22h4m24-0h4M10 28v4m12-4v4" stroke-width="0.5"/>
      </svg>`
            )}")`,
          }),

          "bg-crosshatch": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="${value}">
        <path d="M0 0l32 32M32 0L0 32M16 0v32M0 16h32" stroke-width="0.5"/>
      </svg>`
            )}")`,
          }),

          "bg-triangles": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}">
        <path d="M16 0L32 32H0z" stroke-width="0.5"/>
        <path d="M16 32L32 0H0z" stroke-width="0.5"/>
      </svg>`
            )}")`,
          }),

          "bg-squares": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}">
        <rect x="4" y="4" width="8" height="8" transform="rotate(45 8 8)" stroke-width="0.5"/>
        <rect x="20" y="4" width="8" height="8" transform="rotate(45 24 8)" stroke-width="0.5"/>
        <rect x="4" y="20" width="8" height="8" transform="rotate(45 8 24)" stroke-width="0.5"/>
        <rect x="20" y="20" width="8" height="8" transform="rotate(45 24 24)" stroke-width="0.5"/>
      </svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;


function addVariablesForColors({ addBase, theme }: any) {
  const  allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}