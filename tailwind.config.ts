import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideLg: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // Adjust for larger screens
        },
      },
      animation: {
        slide: 'slide 15s linear infinite',
        slideLg: 'slideLg 10s linear infinite',
      },
      colors: {
        primary: '#32A0CE',
        primaryLight: '#BCE4F4E5',
        primaryThick: '#369DD1',
        primaryDark: '#023044',
      },
    },
  },
  plugins: [],
} satisfies Config;
