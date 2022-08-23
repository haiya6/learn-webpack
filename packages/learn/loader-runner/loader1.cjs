function loader1(content) {
  console.log('loader1')
  return content + 'loader1'
}

loader1.pitch = function pitch() {
  console.log('loader1 pitch')
}

module.exports = loader1
