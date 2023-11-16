module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f9fbff",
          300: "#e0e0e0",
          900: "#0d1624",
          "50_02": "#fafcff",
          "50_01": "#f8f9fa",
          "600_19": "#7e7e7e19",
        },
        blue_gray: {
          50: "#eaecf0",
          100: "#d6dae2",
          200: "#bac1ce",
          300: "#9ea8ba",
          400: "#74839d",
          700: "#424c5d",
          900: "#262b35",
          "900_7f": "#3333337f",
        },
        black: { 900: "#000000", "900_66": "#00000066" },
        white: { A700_0c: "#ffffff0c", A700: "#ffffff", A700_87: "#ffffff87" },
        blue: {
          50: "#e0ebff",
          400: "#3a96dd",
          600: "#378fd3",
          A700_01: "#0a58ff",
          A700: "#0061ff",
        },
        light_blue: { 400: "#1ba9ff", A700: "#0086ed", A100: "#67d7fd" },
        indigo: { 50: "#e9eef8" },
        red: { 700: "#d03329" },
        colors: "#74839dff",
        green: { 600: "#349765" },
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#00000066,#00000066)",
        gradient1: "linear-gradient(90deg ,#378fd3,#3a96dd,#3a96dd)",
      },
      fontFamily: {
        gilroy: "Gilroy",
        poppins: "Poppins",
        opensans: "Open Sans",
        roboto: "Roboto",
      },
      boxShadow: { bs: "0px 12px  31px 0px #7e7e7e19" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
