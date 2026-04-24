module.exports = {
  corePlugins: {
    preflight: false, // Prevents Tailwind from resetting existing CSS
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // Requested primary color
          dark: '#1d4ed8',
        }
      }
    },
  },
  plugins: [],
}
