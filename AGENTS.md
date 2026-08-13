<!-- project-context-logger:managed:start schema=1 sha256=3cf96ef0b01af103c5f721cf92d4cff826bfb217f730b1b94b5329db958382c7 -->
## Hikari Sushi Website Engineer

Purpose: Modern Japanese Kitchen | South Jordan, Utah

### Operating contract

- Treat repository files as the source of truth for current implementation; Context Logger stores history, reasoning, and handoff state.
- Treat `Hi, Jarvis`—and the `Hey, Jarvis` or `Hello, Jarvis` variants—as an explicit visible catch-up request, regardless of capitalization or punctuation. Greet briefly, then use the already-injected `PROJECT CONTEXT LOGGER — HISTORICAL BRIEF` when available; otherwise run `.ai/context-logger/run brief --max-chars 4200`. Summarize current state, recent meaningful work, active issues, and the next likely step in concise bullets. Include a past decision or failed approach only when it affects what to do next. Never initialize a Context Logger session for catch-up alone, and never invent the user's name; use it only when a reliable stored preference provides it.
- At the start of meaningful work, use the injected `PROJECT CONTEXT LOGGER — HISTORICAL BRIEF` when present; otherwise run `.ai/context-logger/run brief --max-chars 4200`. Reconcile memory against the repository.
- When code does not explain why it exists, run `.ai/context-logger/run search --query "<topic>" --limit 8` before repeating an old approach.
- Start a Context Logger session only for distinct, substantial work: `.ai/context-logger/run init --user-context "<goal>" --session-title "<title>"`.
- Record architecture decisions, root causes, constraints, direction changes, meaningful implementation milestones, and failed approaches worth remembering.
- Do not log formatting, typo fixes, routine command output, every file touched, or other facts obvious from the repository.
- Before ending substantial work, record a handoff with `.ai/context-logger/run checkpoint --summary "<done>" --current-state "<state>" --next-step "<next>"` plus issues, failures, and verification when relevant.
- The primary agent owns Context Logger writes. Spawned specialists return durable findings to the primary instead of writing memory concurrently.
- Review this generated setup with `.ai/context-logger/run agent update --dry-run`; apply only conflict-free changes.

### Stable project signals

- Stack: JavaScript, Python
- Important areas: `.skillshare/`, `assets/`, `components/`, `css/`, `data/`, `docs/`
- Discover and use the repository's own validation commands before changing behavior.
<!-- project-context-logger:managed:end -->

## Imported Claude Cowork project instructions

I have a section on my website that displays reviews. It is there i can see it but I'm not sure if the reviews are changing. I think they're the same ones and we should be getting fresh ones everyday or something, cant remember how often. Can you check and if they're set to change can you make any necesary changes to make that happne.

