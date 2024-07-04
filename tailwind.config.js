/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      gridColumn: {
        "span-1-5": "span 1.5 / span 1.5",
      },
      backgroundColor: {
        "linear-grad":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.10) 100%)",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      colors: {
        // light mode
        lightBackgroundColor: "#f9f9fb",
        lightInvoiceColor: "#ffffff",
        alabaster: "#fbfbfb",
        "cornflower-blue": "#775ef7",
        "burnt-sienna": "#e75a4d",
        cinder: "#191221",
        "shady-lady": "#b7a1ae",
        "polo-blue": "#98b1db",
        lavender: "#bb67d5",
        "link-water": "#cae4f0",
        "beauty-bush": "#f4cdcc",
        "light-wisteria": "#cea7d7",

        // dark mode
        lilac: "#caa3c5",
        mirage: "#171a2e",
        " royal-blue": "#6865e6",
        "ebony-clay": "#232c44",
        ferra: "#6e4952",
        "san-juan": "#32426f",
        tundora: " #423f42",
        "te-papa-green": "#20343b",
        "ocean-green": "#36a978",
        "green-pea": "#266643",
      },

      boxShadow: {
        top: "20px 20px 20px 20px lightgray",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
};
