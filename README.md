# My personal website/blog `edoardob.blog`

[![Netlify Status](https://api.netlify.com/api/v1/badges/90a71f9d-d0b1-458c-a202-73928b6b40b0/deploy-status)](https://app.netlify.com/sites/blogedoardobim/deploys)

Built with [Astro](https://astro.build).

### Configure production and preview deployments

A note to properly deploy production and preview builds on Netlify (or Vercel).

Astro's config requires the `site` keyword to be a valid URL.
If it's set to the **production** URL, any deploy preview built from PR or deploy branches **won't work** because Astro redirects everything to the current value of `site`.

The proper way to fix it is to use environment variables.
Define `site` as follows ([valid for Netlify](https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata), need to double-check for Vercel):

```mjs
// Astro config
export default defineConfig({
    site:
        process.env.CONTEXT === 'production'
            ? 'https://your-production-url.something/'
            : process.env.DEPLOY_PRIME_URL || 'http://localhost'
    // ... rest of the config
})
```
