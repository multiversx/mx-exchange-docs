const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },

  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roobert", "system-ui", ...fontFamily.sans],
      },
      colors: {
        primary: {
          '50': '#dcf5fe',
          '100': '#c8edfe',
          '200': '#a5e6fe',
          '300': '#77dcfd',
          '400': '#3bc5fc',
          '500': '#13a6fb',
          '600': '#0486f1',
          '700': '#007bff',
          DEFAULT: '#007cff',
          '800': '#053c7f',
          '900': '#072f5a',
          '950': '#05111f',
          "1000": '#03070C',
        },
        neutral: {
          // 650: "#4A4A4A",
          // 750: "#2E2E2E",
          // 850: "#212121",
          25: "#f6f7f9",
          50: "#eeeef1",
          100: "#e1e2e8",
          200: "#cdd0db",
          300: "#9195a3",
          400: "#757985",
          500: "#60626d",
          600: "#4f515a",
          650: "#464853",
          700: "#3b3d48",
          750: "#2a2c34",
          800: "#23242b",
          850: "#1e1f25",
          900: "#14151a",
          950: "#0E0E12",
        },
      },
    },
  },
};
