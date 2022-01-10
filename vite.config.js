import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    port: 3001,
  },
  build: {
    minify: false,
  },
  // so it's rollup that does the bundling. rollup is what's deleting my --tw-drop-shadow and other empty tailwind variables. if i tell vite build not to minify, everything will be fine. 'cept my end result will be larger and performance will be slightly worse. but that barely matters to me. 
  // so i should minify the css first, then? maybe. then what do I do about the javascript? 
  // shit. i'll figure this out later. or maybe never. i should go to sleep. i got school tomorrow 

})
