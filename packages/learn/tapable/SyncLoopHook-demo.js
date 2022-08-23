/* eslint-disable no-console */
import { SyncLoopHook } from 'tapable'

const hook = new SyncLoopHook(['name', 'age'])

hook.tap('tap1', (name, age) => {
  console.log('tap1', name, age)
})

hook.tap('tap2', (name, age) => {
  console.log('tap2', name, age)
  return Math.random() < 0.3 ? undefined : 'hello world'
})

hook.tap('tap3', (name, age) => {
  console.log('tap3', name, age)
})

hook.call('zhangsan', 15)
