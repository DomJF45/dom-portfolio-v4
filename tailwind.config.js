/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        bg: "hsl(var(--color-bg) / <alpha-value>)",
        text: "hsl(var(--color-text) / <alpha-value>)",
        "text-alt": "hsl(var(--color-text-alt) / <alpha-value>)",
        accent: "hsl(var(--color-accent) / <alpha-value>)",
      },
      textColor: "hsl(var(--color-text) / <alpha-value>)",
    },
  },
  darkMode: ['data-theme="dark"'],
  plugins: [],
};
