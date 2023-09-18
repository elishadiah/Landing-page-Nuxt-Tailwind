/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    backgroundColor: theme => ({
      'primary': '#03090D',
      'ellipse-primary': 'rgba(255, 213, 39, 0.15)',
      'ellipse-secondary': 'rgba(212, 176, 56, 0.25)',
      'ellipse-third': 'rgba(242, 116, 5, 0.25)',
      'menuItem': '#D4B038',
      'black': '#000000',
      'card': 'rgba(255, 255, 255, 0.5)'
    }),
    colors: theme => ({
      'primary': '#D4B038',
      'white': '#FFFFFF',
      'black': '#000000',
    }),
    fontFamily: theme => ({
      'sans': ['Poppins', ...defaultTheme.fontFamily.sans]
    }),
    flex: theme => ({
      'mh-l': '1 1 60%',
      'mh-r': '1 1 40%',
    }),
    fontSize: theme => ({
      'mh-h-size': '65px',
      'mh-m-size': '30px',
    }),
    width: theme => ({
      'mh-lg': '588px',
    })
  },
  plugins: [],
}

