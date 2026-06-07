# ts4agent

## Directional Ideas

Our work builds on this reliability perspective but shifts from post-hoc evaluation to online control: instead of only measuring reliability degradation after an episode, we forecast execution-metric trajectories during the episode and use those forecasts to guide interventions such as continuation, replanning, escalation, or early termination.

We formulate long-horizon agent supervision as a model-predictive control problem, where the controlled process is the agent workflow, the observed variables are execution metrics, and the controller uses forecasted metric trajectories to decide whether to continue, repair, replan, escalate, or terminate.

Long-horizon agent execution can be treated as a controllable process, and execution metrics can be forecasted to guide online intervention.

MPC-style control for long-horizon agents using execution metric forecasts.

A model-predictive agent architecture for repository-level code migration, where LLM actions are selected through finite-horizon planning under behavioral validation constraints.

## Reading List

- Ma et al. (ICLR 2025) — [Non-myopic Generation of Language Models for Reasoning and Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/56b694fb10c02b177e75a41f45825a74-Paper-Conference.pdf): Proposes Predictive-Decoding, which uses Model Predictive Control to make LLM generation non-myopic by reweighting token probabilities based on forward-looking trajectories.
- Wang et al. (2025) — [Test-Time Alignment for Large Language Models via Textual Model Predictive Control](https://arxiv.org/abs/2502.20795): Adapts MPC principles to LLM inference by identifying text subgoals that guide iterative refinement for better alignment at test time.
- Computers 14(3):104 (2025) — [LLMPC: Large Language Model Predictive Control](https://www.mdpi.com/2073-431x/14/3/104): Develops a planning framework for LLMs using model predictive control to iteratively solve complex long-horizon problems.
- Erdogan et al. (2025) — [Plan-and-Act: Improving Planning of Agents for Long-Horizon Tasks](https://openreview.net/forum?id=ybA4EcMmUZ): Separates planning from execution in LLM-based agents, using synthetic data generation to improve performance on complex multi-step tasks.
