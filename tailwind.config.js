/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: " 'Poppins', sans-serif ",
        sfPro: "SF Pro Display",
      },
      colors: {
        primaryColor: "#F33",
      },
      screens: {
        sm: "360px",
        md: "480px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
