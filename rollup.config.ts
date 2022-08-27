/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'
// import dts from 'rollup-plugin-dts'

export default defineConfig([
  {
    input: 'packages/my-webpack/src/index.ts',
    output: {
      file: 'dist/index.mjs',
      format: 'esm'
    },
    external: ['fs-extra', 'tapable'],
    plugins: [
      typescript()
    ]
  }
  // {
  //   input: 'packages/my-webpack/src/index.ts',
  //   output: {
  //     file: 'dist/index.d.ts'
  //   },
  //   plugins: [
  //     dts()
  //   ]
  // }
])
