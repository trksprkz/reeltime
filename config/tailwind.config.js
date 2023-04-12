const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.{js,jsx,ts,tsx}',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    colors: {
      'darkNavy': '#212841',
      'navy': '#3538a4',
      "normalBlue": '#0f63e4',
      "lightBlue": '#A8DADC',
      "White": '#F1FAEE',
      "black": '#3538a4',
      "gray": '#272c44'
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Allura', 'serif'],
    },
      extend: {
        padding: {
          'vh': '20vh',
        }
      },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
