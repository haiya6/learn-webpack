/* eslint-disable no-console */
import { AsyncSeriesHook } from 'tapable'

const hook = new AsyncSeriesHook(['name'])

hook.tap('tap1', (name) => {
  console.log('tap1', name)
})

hook.tapAsync('tap2', (name, callback) => {
  console.log('tap2', name)
  setTimeout(() => callback('tap error', 'tap2 result'), 0)
})

hook.tapPromise('tap3', (name) => {
  console.log('tap3', name)
  return Promise.resolve('tap3 result')
})

hook.callAsync('zhangsan', (err, ...args) => {
  console.log('callAsync error', err)
  console.log('callAsync result', args)
})

hook.promise('lishi').then((...args) => console.log('then', args)).catch((err) => console.log('catch', err))
