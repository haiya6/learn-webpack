import fs from 'fs-extra'
import { AsyncSeriesHook, SyncHook } from 'tapable'

export interface WebpackPluginInstance {
  apply: (compiler: Compiler) => void;
  [k: string]: any;
}

export interface WebpackOptions {
  plugins?: WebpackPluginInstance[]
}

class Compiler {
  inputFileSystem!: typeof fs

  outputFileSystem!: typeof fs

  hooks = {
    initialize: new SyncHook(),

    beforeRun: new AsyncSeriesHook(['compiler']),

    environment: new SyncHook(),
    afterEnvironment: new SyncHook()
  }

  constructor(public options?: WebpackOptions) {}
}

export default Compiler
