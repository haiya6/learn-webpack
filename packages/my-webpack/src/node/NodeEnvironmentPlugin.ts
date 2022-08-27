import fs from 'fs-extra'
import Compiler from '../Compiler'

class NodeEnvironmentPlugin {
  apply(compiler: Compiler) {
    compiler.inputFileSystem = fs
    compiler.outputFileSystem = fs
  }
}

export default NodeEnvironmentPlugin
