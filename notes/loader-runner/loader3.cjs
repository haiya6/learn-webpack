function loader3(content) {
  console.log('loader3')
  return content + 'loader3'
}

loader3.pitch = function pitch() {
  console.log('loader3 pitch')
}

module.exports = loader3