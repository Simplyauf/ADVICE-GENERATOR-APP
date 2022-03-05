module.exports = {
  content: ["./doc/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        NeonGreen: "hsl(150, 100%, 66%)",
        LightCyan: "hsl(193, 38%, 86%)",
        DarkGrayBlue: "hsl(217, 19%, 24%)",
        DarkBlue: "hsl(218, 23%, 16%)",
      },
      fontFamily: {
        Manrope: ["Manrope", "san-serif"],
      },
      screens: {
        laptop: "1440px",
        tablet: { min: "480px", max: "767px" },
      },
    },
  },
  plugins: [],
};
