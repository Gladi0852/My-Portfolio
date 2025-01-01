/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0 100px 15px #1788ae",
        "6xl": "0 -1px 20px 1px #1788ae",
        "5xl": "0 -120px 200px 30px #1788ae",
        "4xl": "0 0 20px 3px #1788ae",
      },
    },
  },
  plugins: [],
};
