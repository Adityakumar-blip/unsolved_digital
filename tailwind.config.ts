import type { Config } from 'tailwindcss'

const primaryText = "#641BA9";
const secondaryText = "#FFF";
const accentText = "#494949";


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': primaryText,
        'secondary': secondaryText,
        'accent': accentText,
      },
      backgroundColor: {
        'primary': "black"
      },
      fontSize: {
        '8xl': '96px',
        '7xl': "64px",
        '6xl': '54px',
        '5xl': '48px',
        '4xl': '36px',
        '3xl': '32px',
        '2xl': '30px',
        'xl': '24px',
        'lg': '20px',
        'base': '16px',
        'sm': '15px',
        'xs': '14px',
      }
    },
  },
  plugins: [],
  important:true
}
export default config
