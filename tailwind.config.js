/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#CFDBD5",
        secondary: "#E8EDDF",
        accent: "#F5CB5C",
        dark: "#242423",
        darker: "#333533",
      },
    }
  },
  plugins: [],
}
