module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        88: "22rem",
        148: "38rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["valentine"],
  },
};
