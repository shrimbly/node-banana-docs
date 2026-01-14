# Node Banana Documentation Site Plan

## Overview
Standalone Nextra documentation site for Node Banana - a node-based visual workflow editor for AI image generation.

**Target Audience**: End users who want to learn how to use Node Banana
**Focus**: User-focused tutorials and guides
**Content Format**: Static documentation with videos/screenshots

## Documentation Structure

```
/pages/
├── index.mdx                      # Documentation home / landing page
├── _meta.json                     # Top-level navigation config
│
├── getting-started/
│   ├── _meta.json
│   ├── introduction.mdx           # What is Node Banana?
│   ├── installation.mdx           # Setup & installation
│   └── first-workflow.mdx         # Your first workflow tutorial
│
├── core-concepts.mdx              # Single page with sections:
│                                  # - Nodes and edges
│                                  # - Workflow execution
│                                  # - Handle types (image, text, reference)
│                                  # - Keyboard shortcuts
│
├── nodes.mdx                      # Single page covering all node types:
│                                  # - Overview
│                                  # - Image Input
│                                  # - Prompt
│                                  # - Nano Banana (AI generation)
│                                  # - LLM Generate
│                                  # - Annotation
│                                  # - Split Grid
│                                  # - Output
│                                  # - Groups
│
├── guides/
│   ├── _meta.json
│   ├── ai-quickstart.mdx          # Using AI to build workflows
│   ├── models-pricing.mdx         # Model comparison & pricing
│   ├── best-practices.mdx         # Workflow optimization tips
│   └── troubleshooting.mdx        # Common issues & solutions
│
└── changelog.mdx                  # Version history
```

## Key Content Pages

### Phase 1 - Core Documentation (Priority):
1. **index.mdx** - Landing page with overview and quick links
2. **getting-started/introduction.mdx** - What is Node Banana, key features, use cases
3. **getting-started/installation.mdx** - Setup, environment variables, first run
4. **getting-started/first-workflow.mdx** - Step-by-step tutorial with screenshots
5. **core-concepts.mdx** - Comprehensive single page with all core concepts
6. **nodes.mdx** - Complete reference for all 7+ node types

### Phase 2 - Guides:
7. **guides/ai-quickstart.mdx** - Using templates and AI workflow generation
8. **guides/models-pricing.mdx** - Model comparison, pricing table, cost tracking
9. **guides/best-practices.mdx** - Workflow optimization, tips, patterns
10. **guides/troubleshooting.mdx** - Common issues, FAQ, solutions

### Phase 3 - Maintenance:
11. **changelog.mdx** - Version history (can link to main repo CHANGELOG.md)

## Visual Assets Needed

Copy/create from main repo:
- Node Banana logo and icon (`/public/images/`)
- Screenshots of main interface
- Each node type screenshot
- Workflow execution demo GIFs/videos
- Connection types diagram
- Example workflow screenshots
- Sample images (or reference from main repo)

## Technology Stack

- **Framework**: Next.js 15+
- **Documentation**: Nextra 4.6+ with nextra-theme-docs
- **Language**: TypeScript
- **Styling**: Built-in Nextra theme (minimal custom CSS)

## Configuration Files

### package.json
- Next.js 15.1.0
- Nextra 4.6.1
- nextra-theme-docs 4.6.1
- React 19
- TypeScript 5.7

### theme.config.tsx
Configure:
- Node Banana branding (logo, site name, colors)
- Navigation structure
- Footer with links to main repo
- Social links (GitHub, etc.)
- Search configuration (built-in Flexsearch)
- Dark mode toggle
- Edit page on GitHub link

### _meta.json files
Define navigation order and titles for each section:
- Top level: Getting Started, Core Concepts, Nodes, Guides, Changelog
- Getting Started: Introduction, Installation, First Workflow
- Guides: AI Quickstart, Models & Pricing, Best Practices, Troubleshooting

## Development Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
```

## Deployment Options

**Recommended: Vercel**
- Push to GitHub
- Import repo to Vercel
- Automatic deployments on push
- Free for open source

**Alternative: GitHub Pages**
- Use `next export` for static export
- Deploy to gh-pages branch
- Available at `username.github.io/node-banana-docs`

**Alternative: Netlify**
- Similar to Vercel
- Connect GitHub repo
- Automatic deployments

## Benefits of Separate Repo

- ✅ Clean separation - Docs and app are independent
- ✅ No build bloat - Main app stays lightweight
- ✅ Independent deployment - Update docs without touching app
- ✅ Easy contribution - Contributors only need Node.js, not full app setup
- ✅ Version flexibility - Can maintain docs for multiple versions
- ✅ Faster iteration - Quick docs updates without full app rebuild
- ✅ Public by default - Easy to make docs public while keeping main repo private
- ✅ Custom domain ready - `docs.nodebanana.com`

## Maintenance Strategy

- Update docs when new features are added to main app
- Keep screenshots current with latest UI
- Update changelog with each release
- Monitor search terms to improve content
- Accept community contributions via PRs

## Navigation Structure (theme.config.tsx)

```
Home
├── Getting Started
│   ├── Introduction
│   ├── Installation
│   └── First Workflow
├── Core Concepts (single page)
├── Nodes (single page)
├── Guides
│   ├── AI Quickstart
│   ├── Models & Pricing
│   ├── Best Practices
│   └── Troubleshooting
└── Changelog
```

## Content Style Guide

- Write in second person ("you can", not "users can")
- Use clear, concise language
- Include code examples and screenshots liberally
- Step-by-step tutorials with numbered steps
- Use callouts for tips, warnings, and notes
- Link between related pages
- Keep video/GIF file sizes optimized

## Node Banana Feature Coverage

### Core Features to Document:
1. **Visual Node Editor** - Canvas, minimap, zoom, pan
2. **Node Types** - All 7+ types with examples
3. **Workflow Execution** - Run, pause, resume, node status
4. **AI Quickstart** - Templates and custom generation
5. **Image Annotation** - Drawing tools and editor
6. **Split Grid** - Contact sheet splitting
7. **Cost Tracking** - Understanding and managing costs
8. **Workflow Management** - Save, load, auto-save
9. **Keyboard Shortcuts** - Complete reference
10. **Node Grouping** - Creating and locking groups
11. **Copy/Paste** - Multi-node operations
12. **Image History** - Global and per-node history

### AI Models to Document:
- **Image Generation**: nano-banana, nano-banana-pro
- **LLM**: Gemini models, OpenAI models
- Pricing for each model
- Resolution options
- Feature differences (Google Search, etc.)

## Success Metrics

- Clear learning path from beginner to advanced
- Users can complete first workflow in < 10 minutes
- Common questions answered in troubleshooting
- Search functionality finds relevant content quickly
- Mobile-friendly reading experience
- Fast page load times
