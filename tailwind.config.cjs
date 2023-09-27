/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Mindset', 'helvetica', 'arial', 'sans-serif'],
        body: ['Franklin Gothic Book', 'helvetica', 'arial', 'sans-serif'],
        button: ['Franklin Gothic Md', 'helvetica', 'arial', 'sans-serif'],
        secondary: ['Colby', 'helvetica', 'arial', 'sans-serif']
      },
      colors: {
        primary: 'var(--color-primary)',
        bg: 'var(--color-bg)',
        'sky-blue': 'var(--color-sky-blue)'

        // primary: {
        //   50: '#F2F2F2',
        //   100: '#E0E0E0',
        //   200: '#C8C8C8',
        //   300: '#A8A8A8',
        //   400: '#8A8A8A',
        //   500: '#707070',
        //   600: '#525252',
        //   700: '#333333',
        //   800: '#141414',
        //   900: '#000000'
        // },
      },
      transitionTimingFunction: {
        announcement: 'cubic-bezier(0.46, 0.01, 0.32, 1)'
      },
      gap: {
        15: '1.5rem'
      },
      screens: {
        xs: '374px'
      },
      fontSize: {
        6: ['6rem'],
        11: ['11rem'],
        13: ['13rem']
        // subtitle: [
        //   '2.4rem',
        //   {
        //     lineHeight: '2.8rem',
        //     letterSpacing: '0rem',
        //     fontWeight: '400'
        //   }
        // ]
      }
    }
  },
  plugins: []
}
