Fix failing CI by making `npm test` pass.

Rules:
- Do NOT modify files under `__tests__/`
- Do NOT modify `jest.config.js`
- Prefer minimal diffs
- Keep the existing exported function names

Steps:
1) Run `npm test`
2) Read the failures and find the root cause
3) Patch only application code under `src/`
4) Re-run `npm test` until all tests pass
5) Run `npm run check`

When done:
- Summarize what changed
- List the commands you ran
