const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  async redirects() {
    return [
      { source: '/introduction', destination: '/core-concepts', permanent: true },
      { source: '/desktop', destination: '/guides/desktop', permanent: true },
      { source: '/guides/ai-quickstart', destination: '/guides/agent', permanent: true },
    ]
  },
})
