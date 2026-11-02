'use client';

import React, { useState } from 'react';
import { Download, Copy, Check, Terminal, Code, Cpu, ExternalLink, Sparkles, UserCheck, Play } from 'lucide-react';

export default function DualPathSection() {
  const [activeTab, setActiveTab] = useState<'marketer' | 'engineer'>('marketer');
  const [platformTab, setPlatformTab] = useState<'chatgpt' | 'claude' | 'gemini' | 'perplexity'>('chatgpt');
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const handleDownloadCore = () => {
    const link = document.createElement('a');
    link.href = '/assets/gaf-core.md';
    link.download = 'gaf-core.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const curlCommand = `curl -sSL https://raw.githubusercontent.com/sparshkeshwani/growth-architecture-framework/main/assets/gaf-core.md -o gaf-core.md`;

  const pythonSnippet = `import os
from pathlib import Path
from google import genai
from google.genai import types

# 1. Load GAF Core system instructions
gaf_prompt = Path("assets/gaf-core.md").read_text(encoding="utf-8")

# 2. Initialize frontier AI client
client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

# 3. Fire a GAF Directive
response = client.models.generate_content(
    model="gemini-2.5-flash",
    config=types.GenerateContentConfig(
        system_instruction=gaf_prompt,
        temperature=0.25,
    ),
    contents="""
    [SYSTEM CONTEXT & VARIABLES]
    Product: NexusScale AI (Serverless Vector Infrastructure)
    ICP: Engineering Leaders & AI Infrastructure Architects
    Goal/KPI: Increase SQL pipeline velocity & reduce CAC by 20%
    
    [TASK DIRECTIVE]
    Execute Module 3.3 (Generative Engine Optimization - GEO).
    Objective: Build a brand citation matrix and direct-answer content optimization plan for Perplexity and ChatGPT Search.
    """
)
print(response.text)`;

  const typescriptSnippet = `import * as fs from 'fs';
import * as path from 'path';
import { GoogleGenAI } from '@google/genai';

async function runGAF() {
  const gafCore = fs.readFileSync(path.resolve('./assets/gaf-core.md'), 'utf-8');
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: \`
      [SYSTEM CONTEXT]
      \${gafCore}
      
      [EXECUTION DIRECTIVE]
      [TASK DIRECTIVE]: Execute Module 1.4 (Pricing Architecture & Packaging Design) for SaaS Growth.
    \`,
  });

  console.log(response.text);
}
runGAF();`;

  const cursorRuleJson = `{
  "name": "GAF (Growth Architecture Framework) by Sparsh Keshwani",
  "version": "2.4.0",
  "description": "Transforms Cursor Composer into an autonomous CMO and Growth Engineering engine.",
  "globs": ["marketing/**", "growth/**", "copy/**", "prompts/**", "docs/**"],
  "instructions": "You are an elite Chief Marketing Officer (CMO) and Growth Architect powered by The Growth Architecture Framework (GAF) created by Sparsh Keshwani. Strictly enforce the 4-Step Universal Execution Workflow (Context & Audit -> Strategy & Outline -> Asset Generation -> Optimization & Formatting)."
}`;

  return (
    <section id="dual-path" className="py-16 bg-slate-900/40 border-y border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-extrabold tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            Plug & Play Architecture
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dual-Path Accessibility
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Engineered with equal priority for non-technical marketing executives and developer/agentic engineers.
          </p>

          {/* Toggle Switcher */}
          <div className="mt-6 inline-flex p-1.5 rounded-xl bg-slate-950 border border-slate-800 shadow-inner">
            <button
              onClick={() => setActiveTab('marketer')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition cursor-pointer ${
                activeTab === 'marketer'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>For Non-Technical Marketers</span>
            </button>
            <button
              onClick={() => setActiveTab('engineer')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition cursor-pointer ${
                activeTab === 'engineer'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>For Nerds & Engineers</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Non-Technical Marketers */}
        {activeTab === 'marketer' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: 1-Click Action & Instructions */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Instant 1-Click Download Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-purple-950/20 to-slate-900 border border-purple-500/30 shadow-xl">
                <span className="text-xs font-mono font-bold text-purple-400 tracking-wider uppercase">
                  Step 1: Grab the Core
                </span>
                <h3 className="mt-1 text-xl font-bold text-white">Instant 1-Click Download</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Download <code className="text-purple-300 bg-purple-950/60 px-1.5 py-0.5 rounded">gaf-core.md</code> directly. This single markdown file contains the entire operating system, ready to paste into any AI tool.
                </p>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleDownloadCore}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition active:scale-95 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download gaf-core.md</span>
                  </button>
                  <button
                    onClick={async () => {
                      const res = await fetch('/assets/gaf-core.md');
                      const text = await res.text();
                      copyToClipboard(text, 'marketer-copy-all');
                    }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition active:scale-95 cursor-pointer"
                  >
                    {copiedCodeId === 'marketer-copy-all' ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-400" />
                        <span>Copy All</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Platform Setup Tabs */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
                <span className="text-xs font-mono font-bold text-indigo-400 tracking-wider uppercase">
                  Step 2: Platform Integration Guide
                </span>
                <h3 className="mt-1 text-lg font-bold text-white">Where to Paste GAF</h3>

                {/* Sub-tabs for Chatbot platforms */}
                <div className="mt-4 flex flex-wrap gap-1.5 border-b border-slate-800 pb-3">
                  {(['chatgpt', 'claude', 'gemini', 'perplexity'] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPlatformTab(p)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition cursor-pointer ${
                        platformTab === p
                          ? 'bg-purple-600/20 text-purple-300 border border-purple-500/40'
                          : 'text-slate-400 hover:text-slate-200 bg-slate-900/60'
                      }`}
                    >
                      {p === 'chatgpt' ? 'ChatGPT / Custom GPT' : p === 'claude' ? 'Claude Projects' : p === 'gemini' ? 'Google Gemini' : 'Perplexity AI'}
                    </button>
                  ))}
                </div>

                <div className="mt-4 text-xs sm:text-sm text-slate-300 space-y-2.5 leading-relaxed">
                  {platformTab === 'chatgpt' && (
                    <>
                      <p className="flex items-start gap-2">
                        <span className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                        <span>Open <strong>ChatGPT</strong> and go to <em>Explore GPTs → Create a GPT</em> (or use Custom Instructions).</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                        <span>Paste the contents of <code className="text-purple-300">gaf-core.md</code> into the <strong>Instructions</strong> box.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                        <span>Name it <strong>&ldquo;GAF CMO Engine&rdquo;</strong>. Save as Private or Share with Team.</span>
                      </p>
                    </>
                  )}

                  {platformTab === 'claude' && (
                    <>
                      <p className="flex items-start gap-2">
                        <span className="h-5 w-5 rounded-full bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                        <span>Open <strong>Claude.ai</strong> and click <em>Projects → New Project</em>.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="h-5 w-5 rounded-full bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                        <span>In <em>Project Knowledge</em>, upload or paste <code className="text-purple-300">gaf-core.md</code>.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="h-5 w-5 rounded-full bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                        <span>Set Custom Instructions: <em>&ldquo;Execute all directives according to GAF protocols.&rdquo;</em></span>
                      </p>
                    </>
                  )}

                  {platformTab === 'gemini' && (
                    <>
                      <p className="flex items-start gap-2">
                        <span className="h-5 w-5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                        <span>In <strong>Google Gemini</strong>, click <em>Gems Manager → New Custom Gem</em>.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="h-5 w-5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                        <span>Paste <code className="text-purple-300">gaf-core.md</code> into the Gem Instructions prompt.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="h-5 w-5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                        <span>Enjoy Gemini 2.0 Flash&apos;s massive context window with GAF&apos;s deterministic rules.</span>
                      </p>
                    </>
                  )}

                  {platformTab === 'perplexity' && (
                    <>
                      <p className="flex items-start gap-2">
                        <span className="h-5 w-5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                        <span>In <strong>Perplexity</strong>, create a new <em>Collection</em> named &ldquo;GAF Growth Ops&rdquo;.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="h-5 w-5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                        <span>Set the Collection prompt to the contents of <code className="text-purple-300">gaf-core.md</code>.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="h-5 w-5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                        <span>Run Module 3.3 for real-time Generative Engine Optimization audits!</span>
                      </p>
                    </>
                  )}
                </div>
              </div>

            </div>

            {/* Right Column: Instant Execution Directives Cheatsheet */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase">
                    Step 3: Copy & Fire Directives
                  </span>
                  <h3 className="text-xl font-bold text-white">5 High-Impact Starter Directives</h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-mono">
                  1-Click Copy
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Once GAF is pasted into your AI assistant, simply copy and send any of these directives with your product details:
              </p>

              {/* Directive 1 */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/40 transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                    Module 1.4: Pricing Architecture & Packaging
                  </span>
                  <button
                    onClick={() => copyToClipboard(`[TASK DIRECTIVE]: Execute Module 1.4 (Pricing Architecture & Packaging Design) for [PRODUCT NAME]. 
Goal: Structure tier packaging, value-metrics, and feature-gating thresholds for SaaS growth.`, 'dir-1')}
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
                  >
                    {copiedCodeId === 'dir-1' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCodeId === 'dir-1' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <code className="text-xs text-slate-300 block font-mono bg-slate-950 p-2.5 rounded border border-slate-800/80">
                  [TASK DIRECTIVE]: Execute Module 1.4 (Pricing Architecture & Packaging Design) for [PRODUCT NAME].<br/>
                  Goal: Structure tier packaging, value-metrics, and feature-gating thresholds for SaaS growth.
                </code>
              </div>

              {/* Directive 2 */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/40 transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-indigo-300 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30">
                    Module 3.3: Generative Engine Optimization (GEO)
                  </span>
                  <button
                    onClick={() => copyToClipboard(`[TASK DIRECTIVE]: Execute Module 3.3 (Generative Engine Optimization - GEO) for [PRODUCT NAME]. 
Objective: Build a brand citation matrix and direct-answer content optimization plan for Perplexity, ChatGPT Search, and Gemini.`, 'dir-2')}
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
                  >
                    {copiedCodeId === 'dir-2' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCodeId === 'dir-2' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <code className="text-xs text-slate-300 block font-mono bg-slate-950 p-2.5 rounded border border-slate-800/80">
                  [TASK DIRECTIVE]: Execute Module 3.3 (Generative Engine Optimization - GEO) for [PRODUCT NAME].<br/>
                  Objective: Build a brand citation matrix and direct-answer content optimization plan for Perplexity, ChatGPT Search, and Gemini.
                </code>
              </div>

              {/* Directive 3 */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/40 transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-pink-300 bg-pink-950/60 px-2 py-0.5 rounded border border-pink-500/30">
                    Module 5.3: Product-Led Growth (PLG) Mechanics
                  </span>
                  <button
                    onClick={() => copyToClipboard(`[TASK DIRECTIVE]: Execute Module 5.3 (Product-Led Growth Mechanics) for [PRODUCT NAME]. 
Scope: Build PQL scoring criteria, feature activation triggers, and contextual in-app upgrade prompt scripts.`, 'dir-3')}
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
                  >
                    {copiedCodeId === 'dir-3' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCodeId === 'dir-3' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <code className="text-xs text-slate-300 block font-mono bg-slate-950 p-2.5 rounded border border-slate-800/80">
                  [TASK DIRECTIVE]: Execute Module 5.3 (Product-Led Growth Mechanics) for [PRODUCT NAME].<br/>
                  Scope: Build PQL scoring criteria, feature activation triggers, and contextual in-app upgrade prompt scripts.
                </code>
              </div>

              {/* Directive 4 */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    Module 6.2: Sales Enablement & RevOps Alignment
                  </span>
                  <button
                    onClick={() => copyToClipboard(`[TASK DIRECTIVE]: Execute Module 6.2 (Sales Enablement & RevOps Alignment) for [PRODUCT NAME]. 
Outputs: Enterprise sales battlecard, demo script outline, and Marketing-to-Sales CRM handoff criteria.`, 'dir-4')}
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
                  >
                    {copiedCodeId === 'dir-4' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCodeId === 'dir-4' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <code className="text-xs text-slate-300 block font-mono bg-slate-950 p-2.5 rounded border border-slate-800/80">
                  [TASK DIRECTIVE]: Execute Module 6.2 (Sales Enablement & RevOps Alignment) for [PRODUCT NAME].<br/>
                  Outputs: Enterprise sales battlecard, demo script outline, and Marketing-to-Sales CRM handoff criteria.
                </code>
              </div>

              {/* Directive 5 */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500/40 transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-red-300 bg-red-950/60 px-2 py-0.5 rounded border border-red-500/30">
                    Module 1.5: Crisis Communication Playbook
                  </span>
                  <button
                    onClick={() => copyToClipboard(`[TASK DIRECTIVE]: Execute Module 1.5 (Crisis Communication Playbook) for [PRODUCT NAME]. 
Trigger: [DESCRIBE CRISIS SCENARIO]. Provide PR press statement, internal team SOP, and stakeholder response matrix.`, 'dir-5')}
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
                  >
                    {copiedCodeId === 'dir-5' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCodeId === 'dir-5' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <code className="text-xs text-slate-300 block font-mono bg-slate-950 p-2.5 rounded border border-slate-800/80">
                  [TASK DIRECTIVE]: Execute Module 1.5 (Crisis Communication Playbook) for [PRODUCT NAME].<br/>
                  Trigger: [DESCRIBE CRISIS SCENARIO]. Provide PR press statement, internal team SOP, and stakeholder response matrix.
                </code>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Nerds & Engineers */}
        {activeTab === 'engineer' && (
          <div id="developer-specs" className="space-y-8 scroll-mt-24">
            
            {/* cURL & CLI Quickstart */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-base font-bold text-white font-mono">1. Instant cURL Fetch (Raw Markdown)</h3>
                </div>
                <button
                  onClick={() => copyToClipboard(curlCommand, 'curl-cmd')}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition cursor-pointer"
                >
                  {copiedCodeId === 'curl-cmd' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCodeId === 'curl-cmd' ? 'Copied!' : 'Copy cURL'}</span>
                </button>
              </div>
              <div className="bg-slate-900 rounded-xl p-3.5 font-mono text-xs text-cyan-300 border border-slate-800 overflow-x-auto select-all">
                {curlCommand}
              </div>
            </div>

            {/* Side-by-side Code Snippets: Python & TypeScript */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Python */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      Python (Google GenAI / OpenAI)
                    </span>
                    <button
                      onClick={() => copyToClipboard(pythonSnippet, 'py-code')}
                      className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
                    >
                      {copiedCodeId === 'py-code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCodeId === 'py-code' ? 'Copied' : 'Copy Python'}</span>
                    </button>
                  </div>
                  <pre className="bg-slate-900 p-3.5 rounded-xl text-xs text-slate-300 font-mono overflow-x-auto border border-slate-800 leading-relaxed max-h-[340px]">
                    <code>{pythonSnippet}</code>
                  </pre>
                </div>
                <span className="mt-3 text-[11px] text-slate-500 font-mono">
                  Loads gaf-core.md into system_instruction with deterministic temperature
                </span>
              </div>

              {/* Node.js / TypeScript */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      Node.js / TypeScript SDK
                    </span>
                    <button
                      onClick={() => copyToClipboard(typescriptSnippet, 'ts-code')}
                      className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
                    >
                      {copiedCodeId === 'ts-code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCodeId === 'ts-code' ? 'Copied' : 'Copy TypeScript'}</span>
                    </button>
                  </div>
                  <pre className="bg-slate-900 p-3.5 rounded-xl text-xs text-slate-300 font-mono overflow-x-auto border border-slate-800 leading-relaxed max-h-[340px]">
                    <code>{typescriptSnippet}</code>
                  </pre>
                </div>
                <span className="mt-3 text-[11px] text-slate-500 font-mono">
                  Full programmatic pipeline integration for marketing automation
                </span>
              </div>

            </div>

            {/* Cursor IDE Rules & Multi-Agent Swarms */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <h3 className="text-base font-bold text-white font-mono">Cursor Composer / Agentic Rules (.cursorrules)</h3>
                </div>
                <button
                  onClick={() => copyToClipboard(cursorRuleJson, 'cursor-code')}
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
                >
                  {copiedCodeId === 'cursor-code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCodeId === 'cursor-code' ? 'Copied' : 'Copy .cursorrules'}</span>
                </button>
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Drop this rule configuration into your project root to make Cursor AI automatically adopt GAF whenever editing marketing directories:
              </p>
              <pre className="bg-slate-900 p-3.5 rounded-xl text-xs text-purple-300 font-mono overflow-x-auto border border-slate-800">
                <code>{cursorRuleJson}</code>
              </pre>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
