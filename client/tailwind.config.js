// add your custom configurations
module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx', 'public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['Raleway', 'serif'],
        body: ['Roboto', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
