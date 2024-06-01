/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors: {
      primary: '#0292b7',
      secondary: '#000000',
      third: '#69695f'
    }},
  },
  plugins: [],
};
