# Node Banana Documentation Site

This is the documentation site for Node Banana, a visual workflow editor for AI image generation.

## Project Structure
- `pages/` - All documentation pages (MDX format using Nextra)
- `pages/changelog.mdx` - Version changelog
- `pages/getting-started/` - Installation and first steps
- `pages/guides/` - How-to guides and best practices
- `pages/core-concepts.mdx` - Core concepts explanation
- `pages/nodes.mdx` - Node reference guide

## Changelog Format
The changelog follows "Keep a Changelog" format. Add entries under "Unreleased":

- **Added** - New features
- **Changed** - Changes to existing functionality
- **Fixed** - Bug fixes
- **Removed** - Removed features

Example entry:
```
### Added
- New feature description ([#123](pr-url))
```

## When to Update Documentation
| Change Type | Changelog | Pages |
|-------------|-----------|-------|
| New feature | Yes | Add to relevant guide |
| Bug fix | Yes | Only if workaround was documented |
| Breaking change | Yes | Update affected pages |
| Performance | Yes | No |
| API change | No | No |
| Internal refactor | No | No |
| CI/tooling | No | No |

## Writing Style
- Use clear, concise language
- Include code examples where helpful
- Follow existing page patterns and formatting
