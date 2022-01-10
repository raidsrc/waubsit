import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    port: 3001,
  },
  build: {
    minify: 'terser', // the reason this is false is because tailwind 3.0 and this minifier don't get along. the minifier will delete the --tw-drop-shadow variable and a ton of other variables because they are empty, but tailwind needs those variables to stay in order to make my raid icon drop shadow effect work. also my hover and active effects on that icon. find a way to minify in order to save space and improve performance while having that effect stay. there might not be a way currently. if not, raise an issue on github.
    // update: using terser to bundle, telling terser not to delete stuff 
    terserOptions: {
      parse: {
        // parse options
      },
      compress: {
        // compress options
      },
      mangle: {
        // mangle options

        properties: {
          // mangle property options
        }
      },
      format: {
        // format options (can also use `output` for backwards compatibility)
      },
      sourceMap: {
        // source map options
      },
      ecma: 5, // specify one of: 5, 2015, 2016, etc.
      keep_classnames: true,
      keep_fnames: true,
      ie8: false,
      module: false,
      nameCache: null, // or specify a name cache object
      safari10: false,
      toplevel: false,
    },
    rollupOptions: {
      external: [
        /index_compiled.css/
      ]
    }

  }
})
