/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        "primary-orange": "hsl(26, 100%, 55%)",
        "orange-accent": "#ff903c",
        "pale-orange": " hsl(25, 100%, 94%)",
        "very-very-blue": "hsl(220, 13%, 13%)",
        "dark-grayish-blue": "hsl(219, 9%, 45%)",
        "grayish-blue": "hsl(220, 14%, 75%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
      },
      maxWidth: {
        "4xl": "940px",
      },
      boxShadow: {
        "orange-lg": "0px 15px 20px hsla(26, 100%, 55%, 0.401)",
        "orange-sm": "0px 8px 15px hsla(26, 100%, 55%, 0.401)",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1220px",
      xxl: "1440px",
    },
  },
  plugins: [],
};
