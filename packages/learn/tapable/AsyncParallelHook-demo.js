import { AsyncParallelHook } from 'tapable'

const hook = new AsyncParallelHook(['name'])

// 注册方式1
hook.tap('tap1', name => {
  console.log('tap1', name)
  return 'tap1 result'
})

// 注册方式2
// 1、在使用 callAsync 触发时，这里的 callback 指的就是 callAsync 第二个参数
// 2、在使用 promise 触发时，callback 遵守 Node 中错误传递机制，若第一个参数有值，则会走 Promise.prototype.catch
hook.tapAsync('tap2', (name, callback) => {
  console.log('tap2', name)
  setTimeout(() => callback('tap2 error', 'tap2 result'), 0);
})

// 注册方式3
hook.tapPromise('tap3', name => {
  console.log('tap3', name)
  return Promise.reject('tap3 error')
})

hook.callAsync('zhangsan', (err, ...args) => {
  console.log('callback err', err)
  console.log('callback args', args)
})

hook.promise('lishi').then((...args) => console.log('then', args)).catch(err => console.log('catch', err))
