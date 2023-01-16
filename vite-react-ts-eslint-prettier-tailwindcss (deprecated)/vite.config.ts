import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { UserConfig } from 'vite'
import { join } from 'path'

const config: UserConfig = {
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      '~': join(__dirname, 'src'),
      '~/public': join(__dirname, 'public'),
    },
  },
}

export default config
