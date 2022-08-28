# webpack 方法

1. 创建 Compiler 对象
2. 应用 NodeEnvironmentPlugin 插件，
  + 给 compiler 挂载 infrastructureLogger 
  + 给 compiler 挂载 inputFileSystem
  + 给 compiler 挂载 inputFileSystem `new CachedInputFileSystem(fs, 60000) const CachedInputFileSystem = require("enhanced-resolve/lib/CachedInputFileSystem");`
  + 给 compiler 挂载 outputFileSystem `const fs = require("graceful-fs");`
  + 给 compiler 挂载 intermediateFileSystem `const fs = require("graceful-fs");`
  + 给 compiler 挂载 watchFileSystem （待补充）
  + NodeEnvironmentPlugin 插件 订阅同步事件 beforeRun
3. 引用用户插件
4. compiler 触发 environment 和 afterEnvironment 钩子，`compiler.hooks.environment.call();compiler.hooks.afterEnvironment.call();`
5. new WebpackOptionsApply 居多初始化工作
6. compiler 触发 initialize 钩子，`compiler.hooks.initialize.call();`