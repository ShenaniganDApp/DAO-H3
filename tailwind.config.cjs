const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        extraDark: "#1d1d1d",
        backgroundOrange: "#FBA714",
        backgroundBlue: "#16C4DB",
        backgroundRed: "#F81F3F",
      },
      backgroundImage: {
        retroHasher: "url('/assets/retroHasher.svg')",
        background: "url('/assets/background.svg')",
        liability: "url('/assets/liability.svg')",
        safe: "url('/assets/safe.svg')",
        anonymous: "url('/assets/anonymous.svg')",
        donations: "url('/assets/donations.svg')",
      },

      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        dmSans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        uncial: ["Uncial Antiqua", ...defaultTheme.fontFamily.sans],
      },
      backgroundSize: {
        "50%": "50%",
        "33%": "33%",
      },
      flex: {
        2: "2 2 0%",
      },
    },
  },
  plugins: [],
};
