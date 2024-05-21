/** @type {import('tailwindcss').Config} */
import preline from "preline/plugin";
import forms from '@tailwindcss/forms'
export default {
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
    './node_modules/preline/preline.js'
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xl: "85rem"
        }
      }
    },
  },
  plugins: [forms, preline],
};