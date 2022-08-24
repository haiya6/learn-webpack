import { isFunction, isUndefined } from '@my-webpack/shared'
import fs from 'fs-extra'

export interface Loader {
  (content: string): string
  pitch?: () => void | string
}

interface RunLoaderOptions {
  resrouce: string
  loaders: Loader[]
}

export async function runLoaders(options: RunLoaderOptions) {
  const { resrouce, loaders } = options

  let index = 0
  let content: string | void

  // picth
  for (; index < loaders.length; index += 1) {
    if (isFunction(loaders[index].pitch)) {
      content = loaders[index].pitch!()

      if (!isUndefined(content)) {
        break
      }
    }
  }

  if (isUndefined(content)) {
    content = await fs.readFile(resrouce, 'utf-8')
  }

  index -= 1

  for (; index >= 0; index -= 1) {
    content = loaders[index](content!)
  }

  return {
    result: content
  }
}
