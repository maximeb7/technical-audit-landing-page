/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        cal: ["Cal Sans", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
      backgroundSize: {
        "300%": "300%",
      },
      colors: {
        brand: {
          // fallback/primary use (you can pick midpoint)
          900: "#0f1a3f",
          800: "#213072",
          700: "#2b3fa0",
          600: "#3170FF",
          500: "#5b8cff",
          400: "#85a8ff",
          300: "#b6d0ff",
        },
      },
    },
  },
  plugins: [],
};
