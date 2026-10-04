import React from 'react'
import Link from 'next/link'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span className="nb-logo">
      <img src="/images/banana_icon.png" alt="" width={22} height={22} />
      <span className="nb-wordmark">Node Banana</span>
    </span>
  ),
  project: {
    link: 'https://github.com/shrimbly/node-banana',
  },
  chat: {
    link: 'https://discord.com/invite/89Nr6EKkTf',
  },
  docsRepositoryBase: 'https://github.com/shrimbly/node-banana-docs/tree/main',
  primaryHue: { dark: 217, light: 221 },
  primarySaturation: { dark: 91, light: 83 },
  nextThemes: {
    defaultTheme: 'dark',
  },
  footer: {
    text: (
      <div className="nb-footer">
        <p>Free · Open source · Bring your own key</p>
        <p className="nb-footer__links">
          <Link href="/installation">Install</Link>
          <a href="https://discord.com/invite/89Nr6EKkTf">Discord</a>
          <a href="https://github.com/shrimbly/node-banana">GitHub</a>
        </p>
        <p>© {new Date().getFullYear()} Node Banana</p>
      </div>
    ),
  },
  head: (
    <>
      <meta name="description" content="Free, open source, bring your own key. A visual workflow editor for AI images, video, audio, text, and 3D models." />
      <meta property="og:description" content="Free, open source, bring your own key. A visual workflow editor for AI images, video, audio, text, and 3D models." />
      <meta key="theme-color-dark" name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
      <meta key="theme-color-light" name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)" />
      <link rel="icon" type="image/png" href="/images/banana_icon.png" />
      <link rel="apple-touch-icon" href="/images/banana_icon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
      />
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
    text: 'Edit this page on GitHub →'
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
