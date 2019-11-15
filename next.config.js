const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = {
  webpack (config, options) {
    config.resolve.alias['data'] = path.join(__dirname, 'data')
    return config
  }
}
module.exports = withSass({
  cssModules: true,
  localsConvention: 'dashes'
})