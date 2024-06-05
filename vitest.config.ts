import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environmentMatchGlobs: [
      ['src/test/integration/**', 'jsdom']
    ],
    setupFiles: [
      'src/test/integration/setup.ts'
    ]
  },
})