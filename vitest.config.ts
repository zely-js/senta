import { join } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8', // or 'v8'
    },
    setupFiles: [join(process.cwd(), './setup.ts')],
    isolate: false,
  },
});
