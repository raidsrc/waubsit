const fs = require("fs")
let filesToMinify = fs.readdirSync("dist/assets").filter(item => item.endsWith(".js") || item.endsWith(".css"))
filesToMinify = filesToMinify.map(item => "dist/assets/" + item)

require('esbuild').build({
  entryPoints: [...filesToMinify],
  minify: true,
  outdir: 'dist/assets',
  allowOverwrite: true,
}).catch(() => process.exit(1))

