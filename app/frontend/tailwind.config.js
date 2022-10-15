module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        148: "35rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["valentine"],
  },
};
