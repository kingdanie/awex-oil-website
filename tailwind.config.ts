import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#0a070e',
        accent: '#aa3219',
        'awex-grey': '#8d888e',
        'primary-light': '#aa3219de',
      },
    },
       fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '2.563rem',
      '3xl': '2.953rem',
      '4xl': '3.441rem',
      '5xl': '4.052rem',
      '6xl': '5.052rem',
    }
  },
  plugins: [],
};
export default config;
