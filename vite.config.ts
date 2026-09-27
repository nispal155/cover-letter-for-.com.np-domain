import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// @ts-ignore
import prerender from '@prerenderer/rollup-plugin'
// @ts-ignore
import Renderer from '@prerenderer/renderer-puppeteer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // @ts-ignore
    prerender({
      routes: [
        '/',
        '/generate',
        '/compress',
        '/about',
        '/contact',
        '/privacy',
        '/terms'
      ],
      // @ts-ignore
      renderer: new Renderer({
        headless: true,
        renderAfterDocumentEvent: 'custom-render-trigger'
      }),
      postProcess(renderedRoute: any) {
        renderedRoute.html = renderedRoute.html.replace(
          /<script (.*?)>/g,
          `<script $1 defer>`
        )
      }
    })
  ],
})
