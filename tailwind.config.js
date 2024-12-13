/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure to include all relevant file paths
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Roboto"],
        'sanss': ["Montserrat"]
      },
      screens: {
        xxl: { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        lx: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        gl: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        dm: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        ms: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        sx: { max: "479px" },
        // => @media (max-width: 479px) { ... }
      },
    },
  },
  plugins: [],
};
