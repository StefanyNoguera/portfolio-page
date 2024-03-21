import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'gray' : "#2F2F2E",
      'beige' : "#E4E1D8",
      'pink' : "#CA1F3F"
    },
    fontSize: {
      '9xl': '200px',
      '8xl': '150px',
      '7xl': '140px',
      '6xl': '96px',
      '5xl': '64px',
      '4xl': '48px',
      '3xl': '40px',
      '2xl': '32px',
      xl: '24px',
      lg: '20px',
      sm: '16px',
      xs: '15px'
    },
    extend: {
      fontFamily: {
        'leagueGothic': ['League Gothic', 'sans-serif'],
        'dmSans': ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
