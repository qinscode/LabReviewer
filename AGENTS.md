# Repository Guidelines

Use this guide to extend LabReviewer confidently.

## Project Structure & Module Organization
- `src/` contains the browser UI entry in `index.ts`; add new UI modules under `src/components/`.
- `dist/` and `build/` are generated bundles; never edit them manually.
- `src-tauri/` houses the Rust shell. `src-tauri/src/main.rs` wires plugins, while `lib.rs` should hold new commands and shared logic.
- `docs/` stores shipped reference material—commit artefacts here instead of bundling them.

## Build, Test, and Development Commands
- `pnpm install` installs dependencies; stick with pnpm 9 to keep the lockfile valid.
- `pnpm dev` serves the static front end at `http://localhost:3000`; pair it with `pnpm tauri dev` for desktop debugging.
- `pnpm tauri dev` runs the Tauri shell with hot reload; `pnpm tauri build` produces production installers.
- `pnpm build` compiles TypeScript and copies static assets.
- From `src-tauri/`, use `cargo test` for Rust unit tests and `cargo run` for quick smoke checks.

## Coding Style & Naming Conventions
- TypeScript uses 2-space indentation, `const` by default, and camelCase identifiers (`generateComment`). Components stay PascalCase.
- Rust code follows `cargo fmt` with 4-space indents; functions and commands stay snake_case (`summarize_report`).
- Run `pnpm exec tsc --noEmit` for type safety, then `cargo fmt` and `cargo clippy --all-targets` before opening a PR.

## Testing Guidelines
- Keep Rust tests alongside features in `src-tauri/src/lib.rs` via `#[cfg(test)]` modules; prefer names like `logs_pdf_export`.
- For UI behaviour, add DOM-focused checks under `src/__tests__/` and mock Tauri bridges as needed.
- Cover edge scenarios such as empty rubrics, malformed CSV uploads, and large comment batches; note assumptions at the top of each test file.

## Commit & Pull Request Guidelines
- Follow Conventional Commits (`feat(ui): add rubric parser`) as seen in history, and separate TypeScript/Rust work when practical.
- Bundle related changes only, and run the build plus key tests before pushing.
- PRs must include a concise summary, testing evidence, and screenshots or GIFs for UI tweaks. Link issues and call out migration steps.

## Agent-Specific Notes
- Keep secrets out of version control. Review `src-tauri/tauri.conf.json` before modifying packaging details, and use `.env` for local overrides.
- When touching icons or binaries, update `src-tauri/icons/` and regenerate assets through `pnpm tauri build`.
