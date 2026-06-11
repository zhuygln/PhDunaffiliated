# MPC-Style Reliable Agent Infrastructure: Recent Paper Reading List

Generated: 2026-06-08

This list is organized for research on **reliable LLM/code-agent infrastructure** using ideas from **Model Predictive Control (MPC)**: receding-horizon planning, simulate-before-act, state feedback, validation, rollback, bounded commitment, and constraint-aware execution.

The list intentionally includes two types of papers:

1. **Explicit MPC / optimal-control papers** that directly use MPC language.
2. **MPC-like agent infrastructure papers** that use planning, simulation, world models, execution feedback, sandboxing, validation, and stateful safety, even if they do not call the method MPC.

---

## 0. Suggested Reading Path for a Coding-Agent / Repository-Migration Paper

For a DICE-SASPy-style paper, I would read in this order:

1. **LLMPC: Large Language Model Predictive Control**  
   Use this for the control-theoretic framing.

2. **Simulate Before Act: Model-Based Planning for Web Agents**  
   Use this for the agent-loop architecture: simulate candidates, choose one next action, re-plan.

3. **Web Agents with World Models** / **WebDreamer**  
   Use these for world-model and simulate-before-commit motivation.

4. **Why Reasoning Fails to Plan**  
   Use this to motivate why greedy chain-of-thought is not enough for long-horizon agents.

5. **SWE-agent**, **CodeAct**, **OpenHands**, **OpenHands SDK**  
   Use these for coding-agent action spaces, interfaces, sandboxing, and software-agent infrastructure.

6. **Agentless**, **SABER**, **What Breaks When LLMs Code?**  
   Use these for reliability, safety, validation, and baseline comparison.

---

## 1. Explicit MPC / Optimal-Control Framing for LLM Agents

### 1. LLMPC: Large Language Model Predictive Control

- **Authors:** Gabriel Maher
- **Year:** 2025
- **Link:** [arXiv:2501.02486](https://arxiv.org/abs/2501.02486)
- **Why it matters:** This is the most direct paper for connecting LLM planning with MPC. It interprets structured LLM planning prompts as implicit planning-cost minimization and shows that adding real evaluators/cost functions can improve planning.
- **Use for your paper:** Cite this when you formulate an LLM agent as a receding-horizon controller over a task state.
- **MPC angle:** LLM planning as approximate finite-horizon optimization.

### 2. Non-myopic Generation of Language Models for Reasoning and Planning / Predictive-Decoding

- **Authors:** Chang Ma, Haiteng Zhao, Junlei Zhang, Junxian He, Lingpeng Kong
- **Venue:** ICLR 2025
- **Links:** [OpenReview](https://openreview.net/forum?id=OoNazl6T7D), [ICLR proceedings](https://proceedings.iclr.cc/paper_files/paper/2025/hash/56b694fb10c02b177e75a41f45825a74-Abstract-Conference.html)
- **Why it matters:** It revisits LLM reasoning from an optimal-control perspective and proposes Predictive-Decoding, which uses MPC-style non-myopic lookahead to improve reasoning and planning.
- **Use for your paper:** Useful if you want to discuss MPC not only at the outer agent loop, but also at the inference/decoding level.
- **MPC angle:** Non-myopic action/token selection using future trajectory evaluation.

### 3. LanguageMPC: Large Language Models as Decision Makers for Autonomous Driving

- **Authors:** Hao Sha, Yao Mu, Yuxuan Jiang, Li Chen, Chenfeng Xu, Ping Luo, Shengbo Eben Li, Masayoshi Tomizuka, Wei Zhan, Mingyu Ding
- **Year:** 2023
- **Link:** [arXiv:2310.03026](https://arxiv.org/abs/2310.03026)
- **Why it matters:** Early example of integrating LLM high-level reasoning with MPC-style driving control.
- **Use for your paper:** Good analogy: LLM handles high-level decision context, while a controller enforces executable, grounded actions.
- **MPC angle:** LLM decision-making connected to low-level control.

---

## 2. Simulate-Before-Act and World-Model Agent Planning

### 4. Simulate Before Act: Model-Based Planning for Web Agents

- **Authors:** Yu Gu, Boyuan Zheng, Boyu Gou, Kai Zhang, Cheng Chang, Sanjari Srivastava, Yanan Xie, Peng Qi, Huan Sun, Yu Su
- **Year:** 2024/2025
- **Link:** [OpenReview](https://openreview.net/forum?id=JDa5RiTIC7)
- **Why it matters:** Very close to MPC-style agent infrastructure. The agent simulates likely future observations for candidate actions, scores them, executes one action, then re-plans.
- **Use for your paper:** Strong reference for “simulate candidate code transformations before committing them.”
- **MPC angle:** Model-based planning with receding-horizon execution.

### 5. Web Agents with World Models: Learning and Leveraging Environment Dynamics in Web Navigation

- **Authors:** Hyungjoo Chae, Namyoung Kim, Kai Tzu-iunn Ong, Minju Gwak, Gwanwoo Song, Jihoon Kim, Sunghwan Kim, Dongha Lee, Jinyoung Yeo
- **Year:** 2024
- **Links:** [arXiv:2410.13232](https://arxiv.org/abs/2410.13232), [OpenReview](https://openreview.net/forum?id=moWiYJuSGF)
- **Why it matters:** Proposes a world-model-augmented web agent that simulates outcomes before acting, motivated by avoiding irreversible mistakes.
- **Use for your paper:** Excellent for explaining why repository agents need a predictive model of workspace consequences.
- **MPC angle:** World-model prediction for safer action selection.

### 6. Is Your LLM Secretly a World Model of the Internet? Model-Based Planning for Web Agents / WebDreamer

- **Authors:** Yu Gu et al.
- **Link:** [OpenReview](https://openreview.net/forum?id=c6l7yA0HSq)
- **Why it matters:** Presents WebDreamer, a model-based planning framework using LLMs as world models and value functions.
- **Use for your paper:** Useful for the idea that the LLM can serve as both proposer and evaluator, but the system must still impose validation.
- **MPC angle:** Candidate rollout + value estimation before committing to an action.

### 7. Learning to Simulate from Experience for Better AI Agents

- **Link:** [OpenReview](https://openreview.net/forum?id=F848aPzCJy)
- **Why it matters:** Focuses on simulation as a core mechanism for improving AI agents.
- **Use for your paper:** Useful background for moving from prompt-only agents to agents that learn predictive consequences.
- **MPC angle:** Learned simulator/world model as the predictive component in control.

---

## 3. Long-Horizon Planning and Anti-Greedy Agent Control

### 8. Plan-and-Act: Improving Planning of Agents for Long-Horizon Tasks

- **Authors:** Lutfi Eren Erdogan, Nicholas Lee, Sehoon Kim, Suhong Moon, Hiroki Furuta, Gopala Anumanchipalli, Kurt Keutzer, Amir Gholami
- **Venue:** ICML 2025
- **Links:** [arXiv:2503.09572](https://arxiv.org/abs/2503.09572), [PMLR](https://proceedings.mlr.press/v267/erdogan25a.html), [GitHub](https://github.com/SqueezeAILab/plan-and-act)
- **Why it matters:** Separates a Planner that creates high-level plans from an Executor that translates them into environment-specific actions.
- **Use for your paper:** Supports a clean architecture separation: migration planner vs. code-edit executor vs. validation controller.
- **MPC angle:** Hierarchical planning plus environment feedback.

### 9. Why Reasoning Fails to Plan: A Planning-Centric Analysis of Long-Horizon Decision Making in LLM Agents

- **Authors:** Zehong Wang, Fang Wu, Hongru Wang, Xiangru Tang, Bolian Li, Zhenfei Yin, Yijun Ma, Yiyang Li, Weixiang Sun, Xiusi Chen, Yanfang Ye
- **Year:** 2026
- **Link:** [arXiv:2601.22311](https://arxiv.org/abs/2601.22311)
- **Why it matters:** Argues that step-by-step reasoning often acts like a greedy local policy and fails on long-horizon tasks. Introduces FLARE, a future-aware lookahead method.
- **Use for your paper:** Very good motivation for why reliable agents need lookahead, value propagation, limited commitment, and re-planning.
- **MPC angle:** Future-aware lookahead and limited commitment instead of greedy reasoning.

### 10. LLaMAR: Long-Horizon Planning for Multi-Agent Robots in Partially Observable Environments

- **Link:** [OpenReview](https://openreview.net/forum?id=Y1rOWS2Z4i)
- **Why it matters:** Uses a plan-act-correct-verify structure for long-horizon multi-agent robotics.
- **Use for your paper:** Good analogy for multi-step software workflows where execution feedback is required after every action.
- **MPC angle:** Closed-loop plan-act-correct-verify.

---

## 4. LLM/VLM + MPC Under Physical or Operational Constraints

### 11. Vision-Language Model Predictive Control for Manipulation Planning and Trajectory Generation

- **Authors:** Jiaming Chen, Wentao Zhao, Ziyu Meng, Donghui Mao, Ran Song, Wei Pan, Wei Zhang
- **Year:** 2025
- **Links:** [arXiv:2504.05225](https://arxiv.org/abs/2504.05225), [GitHub](https://github.com/PPjmchen/VLMPC)
- **Why it matters:** Combines VLM perception with MPC. Candidate action sequences are generated, predicted forward, scored, and selected.
- **Use for your paper:** Strong analogy for code migration: LLM proposes transformation candidates, validation predicts/measures effects, controller selects the next safe step.
- **MPC angle:** Candidate action sampling + predictive simulation + hierarchical cost.

### 12. InstructMPC: A Human-LLM-in-the-Loop Framework for Context-Aware Control

- **Authors:** Ruixiang Wu, Jiahao Ai, Tongxin Li
- **Year:** 2025
- **Link:** [arXiv:2504.05946](https://arxiv.org/abs/2504.05946)
- **Why it matters:** Uses an LLM to translate contextual human instructions into predictive disturbance trajectories for MPC.
- **Use for your paper:** Useful if human/domain instructions need to become controller constraints or predictive priors.
- **MPC angle:** LLM converts high-level context into control-relevant predictive signals.

### 13. InstructMPC: A Human-LLM-in-the-Loop Framework for Context-Aware Power Grid Control

- **Authors:** Ruixiang Wu, Jiahao Ai, Tinko Sebastian Bartels
- **Year:** 2025
- **Link:** [arXiv:2512.05876](https://arxiv.org/abs/2512.05876)
- **Why it matters:** Power-grid version of the InstructMPC idea, emphasizing context-aware predictions and online tuning.
- **Use for your paper:** Good example of MPC in a high-reliability operational system.
- **MPC angle:** Contextual disturbance prediction + online adaptation + control cost feedback.

### 14. CorrA: Leveraging Large Language Models for Dynamic Obstacle Avoidance of Autonomous Vehicles

- **Year:** 2025
- **Link:** [arXiv search](https://arxiv.org/search/?query=CorrA+Leveraging+Large+Language+Models+for+Dynamic+Obstacle+Avoidance+of+Autonomous+Vehicles&searchtype=all)
- **Why it matters:** Uses LLM reasoning to support dynamic obstacle avoidance, with MPC-style constrained control.
- **Use for your paper:** Good analogy for using LLMs to propose safe corridors/bounds while a controller enforces them.
- **MPC angle:** LLM-assisted constraint construction + MPC enforcement.

### 15. Prompting with the Future: Open-World Model Predictive Control with Vision-Language Models

- **Year:** 2025
- **Link:** [arXiv HTML](https://arxiv.org/html/2506.13761v1)
- **Why it matters:** Explicitly formulates control as MPC where a VLM evaluates predicted future states.
- **Use for your paper:** Useful for connecting future-state prompting/evaluation to MPC-style action selection.
- **MPC angle:** Simulation-informed prompting + future-state evaluation.

---

## 5. Coding-Agent Infrastructure: Action Space, Execution Feedback, and Sandboxing

### 16. SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering

- **Authors:** John Yang, Carlos E. Jimenez, Alexander Wettig, Kilian Lieret, Shunyu Yao, Karthik Narasimhan, Ofir Press
- **Venue:** NeurIPS 2024
- **Links:** [arXiv:2405.15793](https://arxiv.org/abs/2405.15793), [OpenReview](https://openreview.net/forum?id=mXpq6ut8J3)
- **Why it matters:** Shows that coding agents need agent-specific computer interfaces to navigate repositories, edit files, and run tests.
- **Use for your paper:** Supports formalizing the agent's observation space, action space, and execution loop.
- **MPC angle:** Defines the controlled environment and action/observation interface.

### 17. Executable Code Actions Elicit Better LLM Agents / CodeAct

- **Authors:** Xingyao Wang, Yangyi Chen, Lifan Yuan, Yizhe Zhang, Yunzhu Li, Hao Peng, Heng Ji
- **Venue:** ICML 2024
- **Links:** [arXiv:2402.01030](https://arxiv.org/abs/2402.01030), [GitHub](https://github.com/xingyaoww/code-act)
- **Why it matters:** Uses executable Python code as the agent action space, with execution feedback in multi-turn interactions.
- **Use for your paper:** Supports action-execution-observation loops for code agents.
- **MPC angle:** Actions are executable, observable, and can be revised after feedback.

### 18. OpenHands: An Open Platform for AI Software Developers as Generalist Agents

- **Authors:** Xingyao Wang et al.
- **Venue:** ICLR 2025
- **Links:** [arXiv:2407.16741](https://arxiv.org/abs/2407.16741), [OpenReview](https://openreview.net/forum?id=OJd3ayDDoF)
- **Why it matters:** Open platform for agents that write code, use command lines, browse the web, and run in sandboxed environments.
- **Use for your paper:** Infrastructure reference for sandboxed execution, tool interaction, and benchmark integration.
- **MPC angle:** Provides the runtime substrate for closed-loop agent control.

### 19. The OpenHands Software Agent SDK: A Composable and Extensible Foundation for Production Agents

- **Authors:** Xingyao Wang, Simon Rosenberg, Juan Michelini, Calvin Smith, Hoang Tran, Engel Nyst, Rohit Malhotra, Xuhui Zhou, Valerie Chen, Robert Brennan, Graham Neubig
- **Venue:** MLSys 2026
- **Links:** [arXiv:2511.03690](https://arxiv.org/abs/2511.03690), [OpenReview](https://openreview.net/forum?id=pzVmWs6yGq)
- **Why it matters:** Focuses on production-ready software agents, including reliable/secure execution, interfaces, extensibility, local-to-remote execution portability, and lifecycle control.
- **Use for your paper:** Strong reference for agent infrastructure beyond prompts.
- **MPC angle:** Provides production-grade execution/safety infrastructure for controlled agents.

### 20. Agentless: Demystifying LLM-based Software Engineering Agents

- **Authors:** Chunqiu Steven Xia, Yinlin Deng, Soren Dunn, Lingming Zhang
- **Year:** 2024
- **Links:** [arXiv:2407.01489](https://arxiv.org/abs/2407.01489), [GitHub](https://github.com/OpenAutoCoder/Agentless)
- **Why it matters:** Strong baseline/foil against complex autonomous agents. It uses a simpler three-phase process: localization, repair, and patch validation.
- **Use for your paper:** Good contrast: reliable systems may need structured control and validation more than unconstrained autonomy.
- **MPC angle:** Supports constrained, interpretable workflows and validation gates.

---

## 6. Stateful Safety, Operational Reliability, and Benchmarks

### 21. SABER: Benchmarking Operational Safety of LLM Coding Agents in Stateful Project Workspaces

- **Authors:** Qi Hu, Yifeng Tang, Qinghua Wang, Lanyang Zhao, Pengji Zhang, Yuhao Qing, Xin Yao, Dong Huang, Lin Zhang, Zhuoran Ji
- **Year:** 2026
- **Links:** [arXiv:2606.01317](https://arxiv.org/abs/2606.01317), [GitHub](https://github.com/sssr-lab/saber)
- **Why it matters:** Evaluates safety from the final environment state after a sequence of coding-agent actions, not just from isolated model responses.
- **Use for your paper:** Very relevant for repository-level migration reliability: correctness and safety should be judged by final workspace state.
- **MPC angle:** State-based safety evaluation over multi-step action sequences.

### 22. What Breaks When LLMs Code? Characterizing Operational Safety Failures of Agentic Code Assistants

- **Authors:** Alif Al Hasan, Sumon Biswas
- **Year:** 2026
- **Link:** [arXiv:2605.30777](https://arxiv.org/abs/2605.30777)
- **Why it matters:** Taxonomizes operational safety failures in coding agents, including constraint violations, destructive operations, fabricated success, and environment breakage.
- **Use for your paper:** Helps motivate validation, safe-halt behavior, rollback, and explicit constraints.
- **MPC angle:** Identifies failure modes that a controller should penalize or prohibit.

### 23. ClawsBench: Evaluating Capability and Safety of LLM Productivity Agents in Simulated Workspaces

- **Authors:** Xiangyi Li et al.
- **Year:** 2026
- **Link:** [arXiv:2604.05172](https://arxiv.org/abs/2604.05172)
- **Why it matters:** Evaluates LLM agents in realistic stateful productivity workspaces with snapshot/restore and safety-critical tasks.
- **Use for your paper:** Supports deterministic snapshot/restore and realistic stateful workspace evaluation.
- **MPC angle:** Evaluation over controlled state transitions and reversible sandboxed environments.

---

## 7. How to Map These Papers to a DICE-SASPy / Repository-Migration Framework

A concise research framing:

> We formulate repository-level code migration as a receding-horizon control problem over a stateful software workspace. At each step, the agent proposes candidate transformations, predicts or measures their effects through execution and validation, accepts only behavior-preserving actions, and re-plans from the updated repository state.

Possible terminology mapping:

| MPC Term | Coding-Agent / Migration Meaning |
|---|---|
| State | Current repository, converted files, dependency graph, tests, error logs, behavioral contracts |
| Action | Convert block, edit file, repair interface, reblock module, rollback, add wrapper, run validation |
| Dynamics model | Predicted effect of an edit on tests, dependencies, interfaces, and numeric equivalence |
| Cost | Test failure, numeric mismatch, interface breakage, schema drift, complexity increase |
| Constraint | Do not break accepted modules; preserve behavioral contracts; keep hybrid interfaces valid |
| Horizon | Next 2 to 5 code-transformation steps |
| Feedback | Test results, diff analysis, runtime errors, metric mismatch, human review |
| Receding-horizon step | Execute one accepted transformation, then re-plan |
| Safety mechanism | Sandbox, checkpoint, rollback, validation gates, safe halt |

---

## 8. Recommended Citation Cluster for Your Introduction

For a short paper, cite only 6 to 8 papers:

1. **LLMPC** — explicit MPC framing for LLM planning.
2. **Simulate Before Act** — model-based planning loop for agents.
3. **Web Agents with World Models** — simulate outcome before acting.
4. **Why Reasoning Fails to Plan** — reasoning is not planning; need lookahead.
5. **SWE-agent** — software-agent interface design.
6. **OpenHands / OpenHands SDK** — production software-agent infrastructure.
7. **Agentless** — strong structured baseline / validation-driven alternative.
8. **SABER** — stateful operational safety benchmark for coding agents.

---

## 9. Possible Paper Positioning for Your Work

### Title-style framing

- **Model-Predictive Code Migration Agents**
- **Receding-Horizon Control for Repository-Level Code Migration**
- **DICE-SASPy: A Convergence-Controlled Agent for Repository-Level SAS-to-Python Migration**
- **Reliable Code Migration as Model-Predictive Agent Control**

### One-sentence contribution framing

> We introduce a model-predictive agent architecture for repository-level code migration, where each transformation is selected through finite-horizon planning, validated through execution and behavioral equivalence checks, and accepted only under monotonic progress and safety constraints.

### Stronger systems-paper framing

> Unlike unconstrained autonomous coding agents, our system treats code migration as a controlled state-transition process: the repository state is checkpointed, candidate actions are proposed by an LLM, action effects are measured by execution and equivalence tests, unsafe changes are rejected or rolled back, and the controller re-plans from the latest validated state.

---

## 10. Notes on What Is Still Missing in the Literature

There appears to be room for a strong paper specifically on:

1. **MPC for repository-level coding agents**  
   Most current MPC/LLM papers focus on web, robotics, driving, or reasoning tasks.

2. **Behavioral-contract-based dynamics/cost functions**  
   Coding agents often validate with tests, but migration requires stronger contracts: schema, value, distribution, metrics, interfaces, and runtime behavior.

3. **Receding-horizon migration with rollback and convergence control**  
   This is highly relevant to SAS-to-Python/C++ migration and not yet well-covered by existing agent papers.

4. **Hybrid-runtime migration control**  
   Existing coding-agent benchmarks rarely model partial migration where legacy and target-language modules coexist.

5. **Stateful safety for code transformation agents**  
   SABER moves in this direction, but repository migration needs domain-specific safety metrics around semantic preservation and production behavior.

