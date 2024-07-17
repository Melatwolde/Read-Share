/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        linen: {
          "100": "#f3ece6",
          "200": "#ede5da",
          "300": "rgba(237, 229, 218, 0.5)",
          "400": "rgba(239, 232, 223, 0.5)",
        },
        snow: "#fcf8f5",
        white: "#fff",
        black: "#000",
        gray: "#202020",
        darkslategray: "#343434",
        dimgray: {
          "100": "#595959",
          "200": "#545454",
          "300": "#4e4e4e",
          "400": "rgba(89, 89, 89, 0.09)",
        },
        "filter-text": "#403f3f",
        gainsboro: "#d9d9d9",
        lightsteelblue: {
          "100": "#cbcbe9",
          "200": "rgba(204, 203, 233, 0.5)",
        },
        lightgray: {
          "100": "#d9d4cc",
          "200": "rgba(214, 207, 199, 0.5)",
        },
        whitesmoke: "#f1eeee",
        "normal-search-txt": "#353535",
        antiquewhite: "#e3d7c9",
        thistle: "#cabceb",
      },
      spacing: {},
      fontFamily: {
        "authore-name": "Inter",
      },
      borderRadius: {
        "16xl": "35px",
        mini: "15px",
        xl: "20px",
        "4xl": "23px",
        "8xs": "5px",
        "11xl": "30px",
        "81xl": "100px",
        "6xl": "25px",
      },
    },
    fontSize: {
      "5xs": "8px",
      base: "16px",
      lgi: "19px",
      "5xl": "24px",
      xl: "20px",
      "3xl": "22px",
      lg: "18px",
      "41xl": "60px",
      "17xl": "36px",
      "29xl": "48px",
      mini: "15px",
      sm: "14px",
      "3xs": "10px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
