/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors:{
        brand : "#85586F"
      },
      backgroundImage:{
        banner: `url('../public/images/banner.jpg')`
      }
    },
  },
  plugins: [],
}
