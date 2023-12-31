import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig(() => {
  return {
    server: {
      open: true,
      port: 3000
    },
    build: {
      outDir: 'build',
    },
    plugins: [react(), envCompatible()],
    base:"/todolist_react_useState_hook/"
  };
});
