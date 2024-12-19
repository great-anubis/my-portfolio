/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans all relevant files
  ],
  darkMode: 'class', // Enable dark mode based on a CSS class
  theme: {
    extend: {
      // Custom breakpoints
      screens: {
        xs: '480px',    // Extra-small screens
        sm: '640px',    // Small screens
        md: '768px',    // Medium screens
        lg: '1024px',   // Large screens
        xl: '1280px',   // Extra-large screens
        '2xl': '1536px',// Ultra-large screens
      },
      // Custom widths
      width: {
        '70': '17.5rem',      // 280px
        '90': '22.5rem',      // 360px
        'screen-90': '90vw',  // 90% of the viewport width
      },
      // Custom heights
      height: {
        'screen-75': '75vh',  // 75% of the viewport height
      },
      // Custom spacing
      spacing: {
        '72': '18rem', // 288px
        '84': '21rem', // 336px
        '96': '24rem', // 384px
      },
      // Custom colors
      colors: {
        primary: '#1a73e8',   // Custom primary color
        secondary: '#ff7043', // Custom secondary color
        accent: '#4caf50',    // Custom accent color
      },
      // Custom font sizes with line heights
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [], // Add any Tailwind plugins here
};
