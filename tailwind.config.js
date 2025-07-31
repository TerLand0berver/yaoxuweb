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
        // Professional warm white and yellow-gray color palette
        background: '#FFFBF5', // Warm white background
        surface: '#FFFFFF',   // Clean white surface for cards
        surface_alt: '#FAF7F0', // Warm off-white alternative surface
        
        text: {
          primary: '#2C2416',   // Deep warm gray for primary text
          secondary: '#5C4B3A', // Medium warm gray for secondary text
          muted: '#8B7355',     // Lighter warm gray for subtle text
        },
        
        accent: {
          DEFAULT: '#C19A6B', // Warm gold/bronze accent
          hover: '#A67C52',   // Darker warm gold for hover
          light: '#F5E6D3',   // Light warm gold for backgrounds
        },

        border: '#E8DFD1', // Light warm border color
        border_alt: '#D4C4B0', // Alternative warm border color
        
        // Professional warm gradients
        gradient: {
          primary: 'linear-gradient(135deg, #C19A6B 0%, #A67C52 100%)',
          accent: 'linear-gradient(135deg, #D4A574 0%, #C19A6B 100%)',
          subtle: 'linear-gradient(135deg, rgba(193, 154, 107, 0.1) 0%, rgba(166, 124, 82, 0.1) 100%)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(44, 36, 22, 0.1)',
        'medium': '0 4px 6px rgba(44, 36, 22, 0.15)',
        'strong': '0 10px 25px rgba(44, 36, 22, 0.2)',
        'colored': '0 4px 14px rgba(193, 154, 107, 0.3)',
        'glow': '0 0 20px rgba(193, 154, 107, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}