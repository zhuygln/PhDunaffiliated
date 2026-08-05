# Publications Tracker

Tracks every paper being led or co-authored. Link code repos directly in the table.

| Title | Venue | Status | Deadline | Co-authors | Code Repo | Notes |
|-------|-------|--------|----------|------------|-----------|-------|
| DICE-SASPy: Convergence-Controlled Agents for Repository-Level SAS-to-Python Migration | DL4C @ ICML 2026 | **Rejected** | 2026-05-14 | — | [dice-engine](https://github.com/zhuygln/dice-engine) | Qualifier track paper #1; first author. Rejected (workshop). Pivoting to a full empirical paper — see plan below. |
| DICE-SASPy (full paper, empirical) | FSE 2027 (primary) / ICSE 2027 SEIP (backup) | Idea | 2026-10-02 | — | [dice-engine](https://github.com/zhuygln/dice-engine) | Keep DICE architecture; rebuild Section 5 around a real benchmark. See **Rejection & Pivot Plan**. KDD 2026 cycle missed (deadline 2026-07-24). Verification-planner design doc added 2026-08-05. |

**Status values:** Idea / Drafting / Submitted / Under Review / Accepted / Published / Rejected

## Rejection & Pivot Plan — DICE-SASPy

**2026-06-18.** DL4C @ ICML 2026 workshop submission *"DICE-SASPy: Convergence-Controlled Agents for Repository-Level SAS-to-Python Migration"* was **rejected**.

Likely weaknesses (reviewer read, inferred):
- Not enough empirical evidence.
- Artifact / prototype not convincing enough.
- SAS-to-Python framed too niche — needs tying to broader data-science migration.
- Reads as an architecture proposal rather than a validated method.
- Missing clear comparison against existing coding agents / repair systems.

**Decision:** Keep the DICE architecture, but turn the workshop design paper into a full empirical paper. Rebuild Section 5 around a small benchmark:
- 10–20 SAS-to-Python migration tasks.
- 3–4 baselines (whole-file translation, fixed-block translation, execution-feedback repair agent, + DICE).
- Real output-divergence metrics (schema, values, distributions, downstream metrics).

**Two candidate framings for the full paper (pick one):**
1. *Benchmark direction* — Introduce a benchmark and evaluator for legacy data-science pipeline migration, where correctness depends on schemas, values, distributions, and downstream metrics.
2. *Systems direction* — Show that convergence-controlled migration improves output parity and reduces silent drift vs. whole-file translation, fixed-block translation, and execution-feedback repair agents.

## Qualifier Track Requirements

- [ ] Paper 1 — first author · dice-engine (WIP)
- [ ] Paper 2 — new collaborator lead · distinct topic
- [ ] Paper 3 — distinct topic

## Anonymous Code Sharing

For double-blind submissions, share code via [anonymous.4open.science](https://anonymous.4open.science/) instead of linking the public GitHub repo. Strips author identity from the repo URL while preserving browsability for reviewers.
