import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#131117',
        darker: '#2A262F',
        mid: '#B9B4C7',
        foreground: '#FAF0E6',
      },
    },
  },
  plugins: [],
};

export default config;
