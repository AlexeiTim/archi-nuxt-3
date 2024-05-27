/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        main: 'rgba(68, 68, 68, 0.9)',
        sub: '#333333',
        dark_green: '#425A20',
        light_green: '#597D4E' ,
        text_bg: '#4A6424',
        light: '#444444',
        dark: '#222222',
        bg_button: '#597D4E'
      },
      backgroundOpacity: {
        '38': '0.38'
      }
    },
  },
  plugins: [],
}

