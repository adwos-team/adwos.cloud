/** @type {import('tailwindcss').Config} */
import preline from "preline/plugin";
export default {
  content: ["./node_modules/preline/preline.js"],
  theme: {
    extend: {},
  },
  plugins: [preline],
};
