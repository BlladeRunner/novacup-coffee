module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      colors: {
        brown: {
          600: "#6b3e26",
          700: "#5a2f1d",
          800: "#4a2417",
          900: "#3b1b12",
        },
      },
    },
  },
  plugins: [],
};
