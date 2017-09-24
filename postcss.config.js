module.exports = () => ({
  plugins: {
    'postcss-cssnext': {},
    'cssnano': {
      'autoprefixer': false
    }
  }
});