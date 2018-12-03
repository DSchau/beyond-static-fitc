const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.DefinePlugin(
      Object.keys(process.env)
        .reduce((merged, key) => {
          const mergedKey = `process.env.${key}`
          let value = process.env[key]
          if (value === 'true' || value === 'false') {
            merged[mergedKey] = JSON.parse(value)
          } else {
            merged[mergedKey] = JSON.stringify(process.env[key])
          }
          return merged
       }, {})
    )
  ]
}
