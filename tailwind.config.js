/** @type {import('tailwindcss').Config} */
module.exports = {
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
      height: {
        '450': '450px',
      },
      width: {
        'wx': '30%',
      },
      aspectRatio: {
        'ar': '3 / 3.5',
      },
      backgroundSize: {
        'h1': '100% 100%',
        'h2': '105% 105%',
        's1': '70% 70%',
      },
      padding: {
        '10p': '10%',
      }
    },
    fontSize: {
      sm: '0.8rem',
      smm: '0.9rem',
      base: '1rem',
      xl: '1.25rem',
      '1.5xl': '1.31rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '4.5xl': '2.651rem',
    }
  },
  plugins: [],
}
