module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/line-clamp"),
  ],
  daisyui: {
    themes: false,
  },
}
