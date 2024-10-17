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
      minHeight: {
        'screen-minus-16': 'calc(100vh - 12rem)',
      }
    },
  },
  plugins: [],
};

export default config;
