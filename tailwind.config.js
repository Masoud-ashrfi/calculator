/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "-8px -8px 15px rgba(255,255,255,0.1), 5px 5px 15px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
