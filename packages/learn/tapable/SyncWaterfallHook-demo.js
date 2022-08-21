import { SyncWaterfallHook } from 'tapable'

// 需要指定形参
const hook = new SyncWaterfallHook(['name', 'age'])

hook.tap('tap1', (name, age) => {
  console.log(name, age)
  return 'lishi'
})

hook.tap('tap2', (name, age) => {
  console.log(name, age)
})

hook.tap('tap3', (name, age) => {
  console.log(name, age)
})

hook.call('zhangsan', 15)