# Contributing to The Growth Architecture Framework (GAF)

Thank you for your interest in contributing to **The Growth Architecture Framework (GAF)**, created and maintained by **Sparsh Keshwani**! 

GAF is the open-source Integrated Marketing Communications (IMC) backbone designed for the era of generative AI and autonomous growth engineering. We welcome contributions from growth leads, Chief Marketing Officers, MarTech architects, and AI research engineers worldwide.

---

## Table of Contents

1. [Our Architectural Philosophy](#our-architectural-philosophy)
2. [Areas Where You Can Contribute](#areas-where-you-can-contribute)
   - [Expanding Existing Modules](#1-expanding-existing-modules)
   - [Proposing New Sub-Modules](#2-proposing-new-sub-modules)
   - [Agentic & Multi-Agent Handoff Optimization](#3-agentic--multi-agent-handoff-optimization)
   - [Tooling & Framework Adapters](#4-tooling--framework-adapters)
3. [Module Standards & Taxonomy](#module-standards--taxonomy)
4. [Prompt Testing & Benchmarking Protocol](#prompt-testing--benchmarking-protocol)
5. [Pull Request (PR) Workflow](#pull-request-pr-workflow)
6. [Commit Guidelines & Code of Conduct](#commit-guidelines--code-of-conduct)
7. [Licensing & Attribution](#licensing--attribution)

---

## Our Architectural Philosophy

GAF is built on four non-negotiable principles:

1. **Zero Fluff, Maximum Velocity**: Every directive must yield production-ready, quantitative, and directly executable assets (no vague theoretical summaries).
2. **Universal Model Interoperability**: Directives must execute flawlessly across leading frontier models: Anthropic Claude 3.5/3.7, OpenAI GPT-4o/o1/o3, Google Gemini 2.0/Pro, Perplexity, xAI Grok, and Cursor.
3. **Multi-Agent State Coherence**: Prompts must provide clean deterministic inputs, execution workflows, and serializable handoffs suitable for agentic orchestration frameworks (Cursor rules, CrewAI, AutoGen, LangGraph).
4. **Holistic IMC Alignment**: Tactical activations must seamlessly link back to the brand positioning, ICP economics (CAC, LTV, ARR), and regulatory frameworks.

---

## Areas Where You Can Contribute

### 1. Expanding Existing Modules
We actively welcome tactical improvements to Modules 1 through 9. For example:
- Enhancing **Module 3.3 (Generative Engine Optimization - GEO)** with new search visibility algorithms.
- Refining **Module 5.3 (Product-Led Growth Mechanics)** with state-of-the-art PQL telemetry formulas.
- Deepening **Module 8.2 (Regulatory Compliance)** with updated AI disclosure laws (EU AI Act, DPDP, FTC guidance).

### 2. Proposing New Sub-Modules
If a major marketing discipline or emerging growth vector is not covered, propose a new sub-module following our standard taxonomy.

### 3. Agentic & Multi-Agent Handoff Optimization
Submit standardized JSON schemas, YAML agent specifications, or Cursor `.cursorrules` that turn GAF into autonomous swarms (e.g., `Research Agent` -> `Strategy Agent` -> `Copy Engine` -> `Compliance Validator`).

### 4. Tooling & Framework Adapters
Build open-source integrations for:
- Python SDK wrappers (`pip install gaf-core`)
- LangChain / CrewAI / AutoGen templates
- Custom GPTs / Claude Projects setup configs
- Raycast & Alfred quick-action workflows

---

## Module Standards & Taxonomy

Every sub-module added to GAF must conform to the **4-Step Universal Execution Workflow**:

```
Step 1: Context & Audit
        └─ Review ICP, positioning, KPIs, and toolchain dependencies.
Step 2: Strategy & Outline
        └─ Generate mathematical models, structural frameworks, or decision trees.
Step 3: Asset Generation
        └─ Produce the actual production-ready deliverable (copy, code, SOP, script).
Step 4: Optimization & Formatting
        └─ Refine for channel mechanics, regulatory guardrails, and agent handoffs.
```

### Formatting Checklist:
* Clear numbering (e.g., `Module X.Y: Title`).
* Strict bullet points defining scope and output deliverables.
* No brand-specific hardcoded assumptions—must use dynamic variables (e.g., `[Insert Product Name]`, `[Insert ICP Details]`).

---

## Prompt Testing & Benchmarking Protocol

Before submitting a Pull Request modifying `/assets/gaf-core.md`, test your prompt across at least three frontier engines:

| Engine | Target Version | Passing Criteria |
| :--- | :--- | :--- |
| **Claude** | Claude 3.5 Sonnet / 3.7 | Zero hesitation; produces full structured output without asking redundant questions. |
| **OpenAI** | GPT-4o / o1 / o3-mini | Follows all markdown headers, respects token limits, and executes the 4-step workflow. |
| **Gemini** | Gemini 2.0 Flash / Pro | Correctly parses variables and handles long-context brand inputs. |
| **Cursor / Agent** | Agent Mode (Claude/GPT) | Accurately generates files, plans, and system scripts without context degradation. |

---

## Pull Request (PR) Workflow

1. **Fork the Repository**:
   ```bash
   git clone https://github.com/sparshkeshwani/growth-architecture-framework.git
   cd growth-architecture-framework
   git checkout -b feature/module-enhancement
   ```

2. **Make Edits**:
   - Update `/assets/gaf-core.md`.
   - If adding code snippets or agent templates, place them in `/examples/` or `/adapters/`.
   - Update `README.md` if public module manifests change.

3. **Validate Formatting**:
   Ensure all markdown files are clean, free of trailing whitespace, and follow standard markdown conventions.

4. **Submit PR**:
   - Title: `feat(module-X): brief description of change`
   - Include test prompt outputs and brief rationale in the PR description.

---

## Commit Guidelines & Code of Conduct

We follow conventional commits:
- `feat:` New sub-module or agentic capability
- `fix:` Correction to prompt logic, variable binding, or typos
- `docs:` Documentation and README updates
- `perf:` Prompt token optimization or latency reduction

Please maintain a respectful, constructive, and inclusive tone across all discussions, issues, and PR reviews.

---

## Licensing & Attribution

By contributing to GAF, you agree that your contributions will be licensed under the project's [MIT License](LICENSE), with author and original framework attribution reserved for **Sparsh Keshwani**.
