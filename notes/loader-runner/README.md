# loader-runner

loader-runner 是一个 webpack 执行一系列 loader 的工具，下面是一个基本的使用方法

entry.cjs
```js
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
```

input.txt

```
Hello world
```

loader1.cjs

```js
function loader1(content) {
  console.log('loader1')
  return content + 'loader1'
}

loader1.pitch = function pitch() {
  console.log('loader1 pitch')
}

module.exports = loader1
```

loader2.cjs

```js
function loader2(content) {
  console.log('loader2')
  return content + 'loader2'
}

loader2.pitch = function pitch() {
  console.log('loader2 pitch')
}

module.exports = loader2
```

loader3.cjs

```js
function loader3(content) {
  console.log('loader3')
  return content + 'loader3'
}

loader3.pitch = function pitch() {
  console.log('loader3 pitch')
}

module.exports = loader3
```

执行 entry.cjs，会得到以下输出：

```
loader1 pitch
loader2 pitch
loader3 pitch
loader3
loader2
loader1
result: [ 'Hello world\r\nloader3loader2loader1' ]
```

可以看到，执行顺序为，先执行每个 loader 的 pitch 方法（如有），执行完成最后一个 pitch 方法后，读取文件内容，再反向执行 loader 函数本身，并将文件内容作为入参，最后 loader1 函数返回最终结果

但如果在 pitch 阶段有某个 loader.pitch 函数有返回值，则会在此中断执行后续的 loader picth 并立即开始反向执行 loader 函数，将 picth 函数的返回值作为 loader 的入参（不再去读取文件内容）

例如，将 loader2.cjs 修改为以下内容：

loader2.cjs

```js
function loader2(content) {
  console.log('loader2')
  return content + 'loader2'
}

loader2.pitch = function pitch() {
  console.log('loader2 pitch')
  // 添加了返回语句
  return 'loader2 pitch returned result'
}

module.exports = loader2
```

再次执行 entry.js，得到下面输出：

```
loader1 pitch
loader2 pitch
loader1
result: [ 'loader2 pitch returned resultloader1' ]
```
