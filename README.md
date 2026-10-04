# Node Banana Documentation

This repository contains the [Node Banana documentation site](https://node-banana-docs.vercel.app/).
It uses Nextra 2, Next.js 13, React 18, and pnpm.
The app source lives in [shrimbly/node-banana](https://github.com/shrimbly/node-banana).

## Work on the docs

```bash
pnpm install --frozen-lockfile
pnpm build
```

The build compiles MDX pages and checks types.
This repository has no separate test or lint script.
In a main checkout, `pnpm dev` starts the preview on port 3000.
Do not start a dev server or run browser tests from a linked worktree.

## Files

- `pages/*.mdx`: introductory guides, canvas concepts, nodes, desktop, and changelog.
- `pages/guides/*.mdx`: Agent, Assets, model, ComfyUI, workflow, and troubleshooting guides.
- `pages/_meta.json` and `pages/guides/_meta.json`: sidebar titles and order.
- `theme.config.tsx`: site theme and repository links.
- `public/images/`: existing site images.

Use the app's `develop` source to check behavior before you change a page.
Follow [CLAUDE.md](./CLAUDE.md) for writing and verification rules.
