# Reading List

Papers worth reading for fundamentals. Not yet filed as full paper notes in `qualifier/papers/` — promote them there (as `YYYY-AuthorKeyword.md`) once read properly.

## To read

### Simon et al. 2026 — *There Will Be a Scientific Theory of Deep Learning*

[arXiv:2604.21691](https://arxiv.org/abs/2604.21691) · [PDF](https://arxiv.org/pdf/2604.21691) · Submitted 2026-04-23
Jamie Simon, Daniel Kunin, Alexander Atanasov, Enric Boix-Adserà, Blake Bordelon, Jeremy Cohen, Nikhil Ghosh, Florentin Guth, Arthur Jacot, Mason Kamb, Dhruva Karkada, Eric J. Michaud, Berkan Ottlik, Joseph Turnbull

- Position paper: deep learning theory is crystallizing into a coherent science. Organizes it around **"learning mechanics"** — training dynamics and aggregate statistics with testable predictions, complementing statistical and information-theoretic views.
- Five directions it names: (a) solvable idealized settings, (b) tractable limits, (c) simple mathematical laws for macroscopic observables, (d) theories of hyperparameters, (e) universal behaviors that clarify which phenomena need explaining.
- Why read: a map of the field, plus an explicit link to mechanistic interpretability. Eric J. Michaud is a co-author of the grokking work in [grokking/](grokking/README.md) — phase diagrams and delayed generalization are exactly the "solvable idealized setting" this frames.

### Liu & Tegmark 2020 — *AI Poincaré: Machine Learning Conservation Laws from Trajectories*

[arXiv:2011.04698](https://arxiv.org/abs/2011.04698) · [PDF](https://arxiv.org/pdf/2011.04698) · Submitted 2020-11-09
Ziming Liu, Max Tegmark (MIT)

- Algorithm that auto-discovers conserved quantities from trajectory data of an unknown dynamical system, without knowing its equations.
- Tested on five Hamiltonian systems including the gravitational three-body problem: recovers all exactly conserved quantities, and additionally surfaces periodic orbits, phase transitions, and breakdown timescales for *approximately* conserved ones.
- Why read: same Liu–Tegmark line as the grokking effective-theory paper — physics-style analysis (conservation laws, phase transitions) applied to learning systems.
