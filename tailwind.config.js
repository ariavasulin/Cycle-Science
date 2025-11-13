/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1',
          dark: '#4F46E5',
          light: '#818CF8',
        },
        secondary: '#8B5CF6',
        accent: '#EC4899',
        success: '#10B981',
      },
      fontFamily: {
        primary: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'custom-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'custom-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'custom-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
