/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#88dd71",
          "secondary": "#eab627",
          "accent": "#82c9f2",
          "neutral": "#1f212d",
          "base-100": "#f4f3f6",
          "info": "#608edc",
          "success": "#188146",
          "warning": "#ebb105",
          "error": "#e1565d",
          body: {
            "background-color": "#e3e6e6"
          },
          },
        },
      ],
    },
  plugins: [require("daisyui"), require("@headlessui/tailwindcss")],
};
