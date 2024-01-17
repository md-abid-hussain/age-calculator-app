/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'customPoppins' : ['CustomPoppins', 'sans-serif']
      },
      colors:{
        'customPurple':'#854dff',
        'lightRed':'#ff5757',
        'offWhite':'#f0f0f0',
        'lightGray':'#dbdbdb',
        'smokeGray':'#716f6f',
        'offBlack':'#141414'
      }
    },
  },
  plugins: [],
}

