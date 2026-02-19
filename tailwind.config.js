// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         heading: ["'Poltawski Nowy'", "serif"],
//         body: ["Poppins", "sans-serif"],
//         jost: ["Jost", "sans-serif"],
//       },
//       animation: {
//         "spin-slow": "spin 12s linear infinite",
//         marquee: "marquee 25s linear infinite",
//       },
//       keyframes: {
//         marquee: {
//           "0%": { transform: "translateX(0%)" },
//           "100%": { transform: "translateX(-50%)" },
//         },
//       },
//     },
//   },

//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Poltawski Nowy'", "serif"],
        body: ["Poppins", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        marquee: "marquee 25s linear infinite",
          verticalMarquee: "verticalMarquee 25s linear infinite",

      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        verticalMarquee: {
    "0%": { transform: "translateY(0%)" },
    "100%": { transform: "translateY(-50%)" },
  },
      },
    },
  },

  plugins: [],
};
