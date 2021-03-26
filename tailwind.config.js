module.exports = {
  theme: {
    minHeight: {
      '0': '0',
      '400': '400px',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%'
    },
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(345, 100%, 50%)',
          default: 'hsl(345, 100%, 40%)',
          darker: 'hsl(345, 100%, 30%)'
        },
        secondary: {
          lighter: '	hsl(280, 60%, 65%)',
          default: '	hsl(280, 60%, 50%)',
          darker: '	hsl(280, 60%, 35%)'
        },
        tertiary: {
          lighter: '	hsl(195, 100%, 75%)',
          default: '	hsl(195, 100%, 60%)',
          darker: '	hsl(195, 100%, 45%)'
        }
      }
    }
  },
  variants: {},
  plugins: []
};
