/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      keyframes: {
        blink: {
          "50%": { opacity: 0 },
        },
      },
      colors: {
        PrimaryBG: "#f5e5d0",
        SecondaryBG: "#4F6547",
        textColor: "#F7CFB4",
      },
      animation: {
        blink: "blink 1s infinite",
      },

      fontFamily: {
        Koulen: ["Koulen", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
