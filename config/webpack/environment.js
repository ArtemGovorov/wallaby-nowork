const { environment } = require('@rails/webpacker')
// Allows node to read .env file
require('dotenv').config()

environment.loaders.append('tests', {
  test: /\.test.(js|jsx)$/,
  use: 'null-loader',
})

// ignore markdown files
environment.loaders.append('markdown', {
  test: /\.md$/,
  use: 'null-loader',
})

module.exports = environment
