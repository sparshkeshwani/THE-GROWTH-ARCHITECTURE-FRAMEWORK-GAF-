'use client';

import React, { useState } from 'react';
import { FileText, Copy, Check, Download, Folder, FolderOpen, Terminal, Code2, Shield, GitPullRequest } from 'lucide-react';

interface RepoFile {
  name: string;
  path: string;
  type: 'markdown' | 'python' | 'typescript' | 'json' | 'text';
  icon: any;
  content: string;
}

const REPO_FILES: RepoFile[] = [
  {
    name: 'README.md',
    path: '/README.md',
    type: 'markdown',
    icon: FileText,
    content: `# ⚡ The Growth Architecture Framework (GAF)
### The Definitive Integrated Marketing Communications (IMC) Backbone for Frontier AI Models & Autonomous Growth Engineering

Created & Architected by Sparsh Keshwani
License: MIT | Production Ready v2.4

> The Be-All and End-All for AI-Driven Marketing & Integrated Marketing Communications.

[Refer to repository root for full visual README with Shields badges and architectural diagrams]`
  },
  {
    name: 'gaf-core.md',
    path: '/assets/gaf-core.md',
    type: 'markdown',
    icon: FileText,
    content: `# The Growth Architecture Framework (GAF)

Created & Developed by SPARSH KESHWANI

> **Role & Purpose:** You are an elite Chief Marketing Officer (CMO) and Growth Architect. You execute end-to-end marketing operations, demand generation, content strategy, global growth, governance, advanced AI engineering, revenue operations, and analytics. 
> **Instructions for AI:** Use the active workflow, variable inputs, and sub-task modules below to complete any marketing directive requested by the user.

---

## 1. System Context & Variables
Before executing tasks, ensure the following context variables are established:
* Product/Service Name: [Insert Product Name]
* Target Audience/ICP: [Insert ICP Details]
* Primary Goal/KPI: [e.g., Lead Gen, Brand Awareness, ARR, CAC Reduction, LTV Expansion, PQL Conversion]
* Brand Tone & Voice: [e.g., Professional, Conversational, Technical, Punchy]
* Key Channels & Regions: [e.g., LinkedIn, Meta, Email, Organic Search, Answer Engines, Global/APAC/EMEA]
* AI Architecture & Agent Tooling: [e.g., Cursor, LangChain/CrewAI, Custom LLMs, Native Chat UI]

---

## 2. Universal Execution Workflow
1. Context & Audit
2. Strategy & Outline
3. Asset Generation
4. Optimization & Formatting

---

## 3. Core Task Modules (1.1 - 9.6)
[Module 1: Audience, Brand & Positioning]
[Module 2: Lead Generation & Acquisition Funnels]
[Module 3: Content Strategy, SEO & Answer Engines (GEO)]
[Module 4: Paid Media & Performance Marketing]
[Module 5: Lifecycle Marketing, PLG & Retention]
[Module 6: Go-to-Market (GTM), Sales Enablement & Events]
[Module 7: Ecosystem, Partnerships & Advocacy Networks]
[Module 8: Global Strategy, Localization & Compliance]
[Module 9: Advanced Analytics, Operations & AI Architecture]`
  },
  {
    name: 'LICENSE',
    path: '/LICENSE',
    type: 'text',
    icon: Shield,
    content: `MIT License

Copyright (c) 2026 Sparsh Keshwani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.`
  },
  {
    name: 'CONTRIBUTING.md',
    path: '/CONTRIBUTING.md',
    type: 'markdown',
    icon: GitPullRequest,
    content: `# Contributing to The Growth Architecture Framework (GAF)

Thank you for your interest in contributing to The Growth Architecture Framework (GAF), created and maintained by Sparsh Keshwani!

GAF is the open-source Integrated Marketing Communications (IMC) backbone designed for the era of generative AI and autonomous growth engineering.

## Architectural Principles
1. Zero Fluff, Maximum Velocity
2. Universal Model Interoperability (Claude 3.7, GPT-4o, Gemini 2.0, Perplexity, Cursor)
3. Multi-Agent State Coherence
4. Holistic IMC Alignment

## PR Submission Checklist
- Test prompt across at least three frontier engines
- Verify adherence to 4-Step Universal Flow
- License under MIT with attribution to Sparsh Keshwani`
  },
  {
    name: 'python_gemini.py',
    path: '/examples/python_gemini.py',
    type: 'python',
    icon: Code2,
    content: `"""
The Growth Architecture Framework (GAF) - Python Integration
Created & Architected by Sparsh Keshwani
"""

import os
from pathlib import Path
from google import genai
from google.genai import types

def run_gaf_directive(product_name: str, icp: str, kpi: str, module_directive: str):
    gaf_core = Path("assets/gaf-core.md").read_text(encoding="utf-8")
    client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        config=types.GenerateContentConfig(
            system_instruction=gaf_core,
            temperature=0.25,
        ),
        contents=f"[TASK DIRECTIVE]: {module_directive}"
    )
    return response.text`
  },
  {
    name: 'node_script.ts',
    path: '/examples/node_script.ts',
    type: 'typescript',
    icon: Code2,
    content: `import * as fs from 'fs';
import * as path from 'path';
import { GoogleGenAI } from '@google/genai';

export async function executeGaf(directive: string) {
  const gafCore = fs.readFileSync(path.resolve('./assets/gaf-core.md'), 'utf-8');
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  return await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: \`\${gafCore}\\n\\n\${directive}\`,
  });
}`
  },
  {
    name: 'cursor_rules.json',
    path: '/examples/cursor_rules.json',
    type: 'json',
    icon: Terminal,
    content: `{
  "name": "GAF (Growth Architecture Framework) by Sparsh Keshwani",
  "version": "2.4.0",
  "description": "Cursor IDE Rule for transforming Cursor Composer into an autonomous CMO and Growth Engineering engine.",
  "globs": ["marketing/**", "growth/**", "copy/**", "prompts/**", "docs/**"],
  "instructions": "You are an elite CMO and Growth Architect powered by The Growth Architecture Framework (GAF) created by Sparsh Keshwani. Strictly enforce the 4-Step Universal Execution Workflow."
}`
  }
];

export default function RepoFileViewer() {
  const [selectedFileIndex, setSelectedFileIndex] = useState(1); // default to gaf-core.md
  const [copied, setCopied] = useState(false);

  const currentFile = REPO_FILES[selectedFileIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([currentFile.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="code-viewer" className="py-20 bg-slate-950 border-b border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Open Source Codebase
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white tracking-tight">
            Repository File Inspector
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Every file formatted and verified, ready to be committed straight to your GitHub repository.
          </p>
        </div>

        {/* File Inspector Container */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
          
          {/* Top Bar with File Tabs */}
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto">
              {REPO_FILES.map((file, idx) => {
                const Icon = file.icon;
                const isActive = selectedFileIndex === idx;

                return (
                  <button
                    key={file.name}
                    onClick={() => setSelectedFileIndex(idx)}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition cursor-pointer ${
                      isActive
                        ? 'bg-purple-600/20 text-purple-300 border border-purple-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{file.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Actions for Selected File */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-850 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 transition cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>

              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white shadow-sm transition cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
            </div>
          </div>

          {/* File Path Banner */}
          <div className="bg-slate-900/90 px-5 py-2 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2 text-slate-300">
              <FolderOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>growth-architecture-framework{currentFile.path}</span>
            </span>
            <span>{currentFile.content.split('\n').length} lines</span>
          </div>

          {/* Code Body */}
          <div className="p-5 font-mono text-xs sm:text-sm text-slate-200 bg-slate-950 overflow-x-auto max-h-[500px] leading-relaxed">
            <pre className="whitespace-pre-wrap select-all">
              <code>{currentFile.content}</code>
            </pre>
          </div>

          {/* Tree Summary Footer */}
          <div className="bg-slate-900/90 px-5 py-3 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              <span>Directory Structure: </span>
              <code className="text-purple-300">/assets/gaf-core.md</code>, <code className="text-purple-300">/examples/</code>, <code className="text-purple-300">/README.md</code>, <code className="text-purple-300">/CONTRIBUTING.md</code>, <code className="text-purple-300">/LICENSE</code>
            </div>
            <span className="text-[11px] text-slate-500">
              100% Zero-Placeholder Open Source Release
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
