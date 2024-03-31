import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {

      ui: '/src/components/UI',
      components: '/src/components',
      constants: '/src/constants',
      containers: '/src/containers',
      hoc: '/src/hoc',
      layouts: '/src/layouts',
      routes: '/src/routes',
      services: '/src/services',
      static: '/src/static',
      utils: '/src/utils',
      hooks: '/src/hooks',
      store: '/src/store',
      context: '/src/context',
      header: '/src/header',
      routes: '/src/routes',
      hooks: '/src/hooks',
      Ui: '/src/components/Ui',
      store: '/src/store',
      Context:'/src/Context/'
      // peoplepage: '/src/containers'
    },
  },
  plugins: [react()],
})
