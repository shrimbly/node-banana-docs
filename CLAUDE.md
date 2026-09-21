# Node Banana Documentation

This site uses Nextra 2 on Next.js 13 with the pages router.
Use the app's `develop` source to check every behavior claim.
State when a guide includes changes after the latest release.

## Content

- Keep top-level guides in `pages/` and topic guides in `pages/guides/`.
- Add each new page to the matching `_meta.json` sidebar file.
- Use one H1 title, no frontmatter, and root-relative links between pages.
- Put Nextra imports directly after the title, before prose and components.
- Use plain English, active voice, and sentences of at most 25 words.
- Use numbered steps for procedures and tables for settings, shortcuts, and models.
- Define technical terms before use. Call node connections noodles after defining the term.
- Keep the home page's AI-generated warning and the app's verified Discord invite.
- Give each node a purpose, inputs, outputs, settings table, and tips.

## Changelog

Use `## X.Y.Z — YYYY-MM-DD` for dated releases.
Use Added, Changed, Fixed, or Removed subsections and separate releases with `---`.
Write one entry per line and retain a PR link when the source identifies one.
Use Unreleased only for changes after the latest app release.
Take release dates and boundaries from the app changelog or published release notes.
Do not invent dates for undated releases.

## Verification

Run `pnpm install --frozen-lockfile` once, then `pnpm build` after each content batch.
Check internal links, sidebar coverage, node and shortcut coverage, and sentence length.
Check new external links and record failures.
Do not start a dev server or run browser tests in a linked worktree.
Report browser verification as unavailable there.
