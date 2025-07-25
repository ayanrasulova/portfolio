/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'grid-gradient': 'linear-gradient(to right top, #121111, #161113, #191216, #1a131a, #18151f, #161620, #131621, #111721, #11161e, #11161b, #111519, #121416)',
        },
    },
  },
    plugins: [],
  }

  
