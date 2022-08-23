import { describe, it, expect } from 'vitest'
import path from 'path'
import { fileURLToPath } from 'url'
import { runLoader, Loader } from '../src'

const dirname = path.dirname(fileURLToPath(import.meta.url))

describe('runLoader', () => {
  it('loaders', async () => {
    const loader1: Loader = (content) => `${content}1`
    const loader2: Loader = (content) => `${content}2`

    const result = await runLoader({
      resrouce: path.resolve(dirname, './input.txt'),
      loaders: [
        loader1,
        loader2
      ]
    })

    expect(result.result).toBe('Hello world21')
  })

  it('pitch', async () => {
    const loader1: Loader = (content) => `${content}1`

    const loader2: Loader = (content) => `${content}2`
    loader2.pitch = () => 'loader2 picth'

    const result = await runLoader({
      resrouce: path.resolve(dirname, './input.txt'),
      loaders: [
        loader1,
        loader2
      ]
    })

    expect(result.result).toBe('loader2 picth1')
  })
})
