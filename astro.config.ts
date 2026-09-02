import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import { siteConfig } from './src/config/site.config'

// add the base path for the gh pages project
const isGithubPagesProjectSite = process.env.GITHUB_ACTIONS === 'true'
const base = isGithubPagesProjectSite ? '/qiskitfallfestbristol' : '/'

export default defineConfig({
  site: siteConfig.seo.siteUrl,
  base,
  integrations: [sitemap()],
})
