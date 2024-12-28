import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D1729', // Dark background color
        purple: '#B68AD3',  // Purple color for buttons and borders
        lightPurple: '#5C0B91 ', // Light purple for hover effects
        grayText: '#B0A7A7' // Text color for subheadings
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
      },
    },
  
  },
  plugins: [],
};
export default config;
