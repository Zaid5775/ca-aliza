module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Dancing Script", "cursive"],
        body: ["Quicksand", "sans-serif"],
      },
      colors: {
        primary: "#D34E4E", // your new main color
      },
    },
  },
  plugins: [],
};
