/* eslint-disable no-console */
import { SyncHook } from 'tapable'

const hook = new SyncHook(['name', 'age'])

hook.tap('tap1', (name, age) => {
  console.log('tap1', name, age)
})

hook.tap('tap2', (name, age) => {
  console.log('tap2', name, age)
})

hook.call('zhangsan', 15)
