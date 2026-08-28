# Hikari Website — Decision Log

Captures the **reasoning, findings, and decisions** from work sessions — the "why" behind the work.
`CHANGELOG.md` records what changed; this file records discussions and conclusions so context isn't lost between sessions.

Format: newest first. Link measurements to `SPECS.md`; link resume state to `README.md` § Pick up here.

---

## 2026-08-20 — Remove retired SSH identity documentation

**Decision:** Document only the active `arcos33` GitHub SSH identity.

**Why:** The prior automation-specific key was revoked and removed during the legacy-agent decommission, so retaining it in workflow documentation would direct future setup toward a nonexistent credential.

---

## 2026-06-07 — Project quartet adopted

**Decision:** Adopt workspace standard: README (+ § Pick up here), CHANGELOG, DECISION-LOG, SPECS.

**Why:** Uniform layout across Hikari/Lumen projects — no hunting for where why/what/now/specs live.
