import Compiler, { WebpackOptions } from './Compiler'
import NodeEnvironmentPlugin from './node/NodeEnvironmentPlugin'

function createCompiler(options?: WebpackOptions) {
  const compiler = new Compiler(options)
  new NodeEnvironmentPlugin().apply(compiler)
  return compiler
}

export function webpack(options?: WebpackOptions) {
  return createCompiler(options)
}
