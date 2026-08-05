# Roadmap

## Phase Overview

| Phase | Status | Target | Description |
|-------|--------|--------|-------------|
| Qualifier | **Active** | TBD | Fundamentals, area exploration, early projects, networking |
| Preliminary Exam | Future | TBD | Research proposal, deep literature review, defined questions |
| Defense | Future | TBD | Execute research, produce outputs, independent review |

---

## Qualifier Phase Gates

To exit qualifier and enter the preliminary phase, I need to:

- [ ] Survey at least 2–3 candidate research areas with documented overviews
- [ ] Complete foundational learning in relevant AI subfields
- [ ] Read and annotate 20+ papers across candidate areas
- [ ] Make at least one exploratory research attempt (documented in `qualifier/projects/`)
- [ ] Build initial network (10+ tracked researchers, some contact made)
- [ ] Choose a research direction — record decision in Decision Log below

---

## Decision Log

Significant direction choices and the reasoning behind them.

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-06-18 | Pivot DICE-SASPy from DL4C workshop design paper to a full empirical paper | Workshop submission rejected for thin empirical evidence / unconvincing artifact / reads as architecture proposal. Keep the architecture; rebuild around a 10–20 task SAS-to-Python benchmark with 3–4 baselines and output-divergence metrics. See `publications/tracker.md`. |
| 2026-08-05 | Adopt tiered Verification Planner (tiers V0–V6) as the DICE Validation Engine design; retire the "SASaiPy" working name in favor of DICE / DICE-SASPy. Design-doc first, implementation deferred | Reconciles the standalone formal-verification plan with dice-engine; verification certificates + the tier ladder become Paper B's differentiator after the DL4C rejection. Spec: dice-engine `docs/verification_planner_design.md`; KB note: `qualifier/projects/dice/formal_verification_plan.md`. |

---

## Notes

- Timeline is self-set and flexible; adjust phase gates as understanding deepens.
- GitHub Projects tracks granular tasks. This file tracks milestones and decisions.
