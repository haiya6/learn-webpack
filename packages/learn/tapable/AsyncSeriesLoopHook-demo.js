/* eslint-disable no-console */
import { AsyncSeriesLoopHook } from 'tapable'

const hook = new AsyncSeriesLoopHook(['name'])

hook.tap('tap1', (name) => {
  console.log('tap1', name)
})

hook.tapAsync('tap2', (name, callback) => {
  console.log('tap2', name)
  setTimeout(() => callback(Math.random() < 0.7 ? null : 'tap2 error', 'tap result'), 0)
})

hook.tapPromise('tap3', (name) => {
  console.log('tap3', name)
  return Promise.resolve(Math.random() < 0.3 ? undefined : 'tap3 reuslt')
})

hook.callAsync('zhangsan', (err, ...args) => {
  console.log('callAsync error', err)
  console.log('callAsync result', args)
})

// hook.promise('lishi').then((...args) => console.log('then', args)).catch(err => console.log('catch', err))
