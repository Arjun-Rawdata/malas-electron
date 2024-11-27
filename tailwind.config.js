import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#01468B",
          white: "#FFF7E6",
          blue: "#01468B",
        },
        secondary: {
          green: "#21A675",
        },
        semantic: {
          yellow: "#FFB531",
          red: "#D92546",
          orange: "#FF6A00",
          green: "#91B235",
        },
      },
      borderRadius: {
        "custom-small": "24px",
        "custom-large": "40px",
        "custom-x-large": "64px",
      },
      boxShadow: {
        "custom-shadow":
          "0 10px 15px -3px rgba(1, 53, 105, 0.5), 0 4px 6px -2px rgba(1, 53, 105, 0.5)",
        light: "3px 3px 60px -1px #2B2B2B1A",
        "strawberry-filter": "inset -2px 6px 59.4px -1px #B50808",
        "fruit-filter": "inset -2px 6px 59.4px -11px #00000040",
        "filter-btn": "0px 10px 50px 0px #5946318A",
      },
      fontSize: {
        sm: "36px",
        base: "48px",
        lg: "64px",
        xl: "96px",
        "2xl": "128px",
        "3xl": "176px",
      },
      fontFamily: {
        afacadFlux: ["var(--font-afacadflux)", "sans-serif"],
        notoSerif: ['"Noto Serif"', ...defaultTheme.fontFamily.serif],
        serenity: ['"Serenity"', ...defaultTheme.fontFamily.sans],
        "serenity-thin": ['"Serenity-Thin"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "strawberry-btn":
          "linear-gradient(180deg, #FFE1E1 0.01%, #DC4444 100%)",
        "mango-btn": "linear-gradient(180deg, #F4E2A0 0.01%, #FEA100 100%)",
        "kiwi-btn":
          "linear-gradient(180deg, #FFE2C8 0%, #C7D467 0.01%, #526700 85.42%)",
        "orange-btn": "linear-gradient(180deg, #FBC9A1 0%, #FB9743 85.42%)",
        "straw-border": "linear-gradient(180deg, #FF7D7D 0%, #B41F1F 100%)",
        "kiwi-border": "linear-gradient(180deg, #4B6001 0%, #526700 100%)",
        "mango-border":
          "linear-gradient(180deg, #FDB233 0%, #F0A82B 16.5%, #B17307 100%)",
        "orange-border": "linear-gradient(180deg, #FB8800 0%, #B06106 100%)",
      },
      height: {
        screen: "1920px",
      },
      width: {
        base: "1080px",
      },
    },
  },
};

export default config;
