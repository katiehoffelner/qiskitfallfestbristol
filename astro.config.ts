import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import { siteConfig } from './src/config/site.config'

const base = '/'

export default defineConfig({
  site: siteConfig.seo.siteUrl,
  base,
  integrations: [sitemap()],
})
