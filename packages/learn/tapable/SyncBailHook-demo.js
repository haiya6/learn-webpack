/* eslint-disable no-console */
import { SyncBailHook } from 'tapable'

const hook = new SyncBailHook(['name', 'age'])

hook.tap('tap1', (name, age) => {
  console.log('tap1', name, age)
})

hook.tap('tap2', (name, age) => {
  console.log('tap2', name, age)
})

hook.tap('tap3', (name, age) => {
  console.log('tap3', name, age)
})

hook.call('zhangsan', 15)
