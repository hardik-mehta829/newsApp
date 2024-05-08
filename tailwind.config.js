/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        // Add any other box shadow sizes you need
      },
    },
  },
  plugins: [
    require('tailwindcss-shadow-outline-colors'), // If you are using the shadow-outline plugin
  ],
};
