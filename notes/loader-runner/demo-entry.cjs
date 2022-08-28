const { runLoaders } = require('loader-runner')
const path = require('path')
const fs = require('fs')

runLoaders(
  {
    resource: path.resolve(__dirname, './input.txt'),
    loaders: [
      path.resolve(__dirname, './loader1.cjs'),
      path.resolve(__dirname, './loader2.cjs'),
      path.resolve(__dirname, './loader3.cjs'),
    ],
    readResource: fs.readFile.bind(fs)
  },
  (err, result) => {
    if (err) throw err
    console.log('result:', result.result)
  }
)
