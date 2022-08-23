function loader2(content) {
  console.log('loader2')
  return content + 'loader2'
}

loader2.pitch = function pitch() {
  console.log('loader2 pitch')
  return 'loader2 pitch returned result'
}

module.exports = loader2