/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue1": "#001835",
        "blue2": "#007AFF",
        "blue3": "#EDF6FF",
        "fa1": "#2148C0",
        "fa2": "#264ECA",
      }
    },
  },
  plugins: [require("daisyui")],
}

