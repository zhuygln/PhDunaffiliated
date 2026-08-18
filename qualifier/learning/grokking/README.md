# Grokking

Notes on grokking — delayed generalization where a network first memorizes, then abruptly generalizes long after training loss has converged. First reported by Power et al. 2022 on small algorithmic datasets.

## Starting point: a reproduction chain

Entry path into the literature: one paper, its published replication (with code), and the field review that frames why grokking matters.

### 1. Original paper — Liu et al. 2022

*Towards Understanding Grokking: An Effective Theory of Representation Learning* — Liu, Kitouni, Nolte, Michaud, Tegmark, Williams. NeurIPS 2022. [arXiv:2205.10343](https://arxiv.org/abs/2205.10343)

- Thesis: training lands in one of **four phases — comprehension, grokking, memorization, confusion** — depending on hyperparameters. Grokking is delayed generalization in a "Goldilocks zone" between comprehension and memorization.
- Evidence: phase diagrams over (learning rate × weight decay), first on a toy non-modular addition task, then on **MNIST** — arguing grokking is not restricted to algorithmic datasets.
- MNIST only groks with two tricks: MSE loss on one-hot targets and initial weights scaled ×9.

### 2. Replication — Shabalin, Sadrtdinov & Shabalin 2023

*[Re] "Towards Understanding Grokking"* — MLRC 2022, ReScience C 9.2 #42. [OpenReview](https://openreview.net/forum?id=Vz9VLcJqKS) · [PDF (Zenodo)](https://zenodo.org/record/8173755/files/article.pdf) · Code: [grokking-reproduction](https://github.com/isadrtdinov/grokking-reproduction)

Setup (re-implemented from scratch; original paper had no public code):

- **Toy model:** p=10 addition, (i,j) → i+j, 45/10 train/val split; 1-D embeddings summed into a 200-200 MLP decoder (Tanh); classification and regression variants. AdamW, embedding lr fixed 1e-3; 21×21 grid over decoder lr (1e-5→1e-2, log) × decoder weight decay (0→20, linear). Phase rule: reach 90% train and val accuracy within 10⁵ iters; `T_val − T_train ≥ 1000` → grokking, `< 1000` → comprehension; train-only → memorization; neither → confusion.
- **MNIST:** 1000-image train subset, 784-200-200-10 ReLU MLP, MSE one-hot loss, ×9 init scale, 60% accuracy threshold, log grids over decoder lr × global weight decay.

Findings — all three original claims broadly reproduced, with substantial caveats:

- **Unstated hyperparameters were make-or-break.** The toy model's Tanh activation wasn't in the paper; with ReLU/LeakyReLU the diagrams change completely (large weight-decay regions collapse into confusion). Required emailing the authors.
- **Phase diagrams are seed-fragile.** The data-split seed heavily changes phase presence/proportions — for some seeds grokking is unobservable anywhere on the grid. Model-init seed only shifts borders.
- **MNIST "memorization" is really more-delayed grokking.** Training 1.5× longer converted the memorization corner into generalization, so on MNIST grokking isn't actually sandwiched between comprehension and memorization (inaccuracy in Claim 2). True memorization (sharp-minimum overfitting) may not exist on datasets with negligible train/val shift. A new "memorization" region at very high lr is an unstable local minimum the model gets kicked out of — closer to confusion.
- **Smooth phase diagrams** (plotting `T_val − T_train` continuously instead of thresholded labels): toy-model phase boundaries are blurred continua; MNIST phases are genuinely well-separated.
- Embedding-trajectory view: comprehension/grokking/confusion all sort the embeddings early; converged grokking embeddings have markedly larger magnitude than comprehension — embedding magnitude as a possible phase witness.

### 3. Field context — Sharkey et al. 2025

*Open Problems in Mechanistic Interpretability* — Sharkey, Chughtai, et al. [arXiv:2501.16496](https://arxiv.org/abs/2501.16496)

- **Not a grokking survey** — an 82-page field-wide mech-interp review. Grokking appears only via citations:
  - Nanda et al., *Progress measures for grokking via mechanistic interpretability* (ICLR 2023) — used as the flagship example of a fully reverse-engineered circuit (the modular-addition Fourier algorithm).
  - Stander et al., *Grokking group multiplication with cosets* — cited in the discussion of validating competing circuit-level explanations of the same model.
- Why it matters here: grokked models are among the best-understood case studies in interpretability; grokking research and circuit reverse-engineering are intertwined.
- TODO: find a grokking-specific review (candidates: Nanda et al. 2023 progress measures; recent grokking surveys).

## Notes

