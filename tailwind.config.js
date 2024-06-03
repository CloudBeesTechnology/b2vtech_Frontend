/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      colors: {
        primary: "#1e40af",
        secondary: "#333333",
        black: "rgba(0, 0, 0, 0.54)",
        liteblack: "rgba(28, 27, 27, 0.37)",
        white: "#ffffff",
        mediumgrey: "#64748b",
        litegrey: "#9ca3af",
        skyBlue: "#38bdf8",
      },
      extend: {},
    },
    variants: {
      display: ["group-hover"],
    },
    plugins: [
    ],
  };

