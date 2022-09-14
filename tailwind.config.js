module.exports = {
  content: ['./src/**/*.vue'],
  theme: {
    colors: {
      primary: '#DB2F20',
      primaryLight: '#C7B3DD',
      secondary: 'white',
      accent: '#5F259F',
      alt: '#2B2B2B',
      danger: '#F04242',
    },
    extend: {
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      fontFamily: {
        'inter': ['inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};
