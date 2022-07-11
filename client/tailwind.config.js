//const {ColorSchemaName} = require('./src/utils/enum');
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  content: [
    './src/components/header/**/*.{html,js,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        SOLINK_GREEN: '#114B5F',
        SOLINK_BLUE: '#456990',
        SOLINK_NYANZA: '#E4FDE1',
        SOLINK_ROSE: '#F45B69',
        SOLINK_WINE: '#6B2737',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
