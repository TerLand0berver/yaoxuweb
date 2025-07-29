/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7FAFC', // Off-white background
        surface: '#FFFFFF', // Card and surface background
        
        text: {
          primary: '#1A202C',   // For headings
          secondary: '#4A5568', // For body text
        },
        
        accent: {
          DEFAULT: '#3182CE', // A sophisticated, calming Slate Blue
          hover: '#2B6CB0',   // A slightly darker shade for hover
        },

        border: '#E2E8F0', // Light gray for borders
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
    },
  },
  plugins: [],
}