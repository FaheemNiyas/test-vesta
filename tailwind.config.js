/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to top left, #05F691 -160%, #152743 50%, #05F691 360%)",
      },
      colors: {
        // Primary palette
        primary: "#05F691",
        secondary: "#152743",
      },
    },
    plugins: [],
  },
};
