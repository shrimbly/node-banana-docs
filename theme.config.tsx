import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img src="/images/banana_icon.png" alt="Node Banana" width={28} height={28} />
      <span style={{ fontWeight: 600 }}>Node Banana</span>
    </div>
  ),
  project: {
    link: 'https://github.com/yourusername/node-banana',
  },
  docsRepositoryBase: 'https://github.com/yourusername/node-banana-docs/tree/main',
  footer: {
    content: (
      <span>
        {new Date().getFullYear()} © Node Banana. Built with Nextra.
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Node Banana - Visual workflow editor for AI image generation" />
      <meta name="og:title" content="Node Banana Documentation" />
      <link rel="icon" href="/images/banana_icon.png" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Node Banana'
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    content: 'Edit this page on GitHub →'
  },
  feedback: {
    content: null,
  },
  navigation: {
    prev: true,
    next: true,
  },
  darkMode: true,
}

export default config
