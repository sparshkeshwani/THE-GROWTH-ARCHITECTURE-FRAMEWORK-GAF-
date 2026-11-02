'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Download, Terminal, Sparkles, Copy, Check, ArrowRight, ShieldCheck, Cpu, Flame, Layers, Zap } from 'lucide-react';

export default function Hero() {
  const [downloading, setDownloading] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement('a');
    link.href = '/assets/gaf-core.md';
    link.download = 'gaf-core.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloading(false), 1200);
  };

  const handleCopyPrompt = async () => {
    try {
      const res = await fetch('/assets/gaf-core.md');
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2500);
    } catch {
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    }
  };

  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      {/* Background radial glow & geometric grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(147,51,234,0.18),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top High-Contrast Visual Banners & Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-300 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Production Ready v2.4</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/60 border border-purple-500/40 text-purple-300">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>MIT Open Source</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950/60 border border-indigo-500/40 text-indigo-300">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>Architected by Sparsh Keshwani</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Claude 3.7 • GPT-4o • Gemini 2.0 • Perplexity • Cursor</span>
          </div>
        </div>

        {/* Featured Repo Cover Banner */}
        <div className="mb-10 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-white/5 p-1 backdrop-blur-sm group hover:border-purple-500/50 transition">
          <Image
            src="/assets/gaf-cover.png"
            alt="The Growth Architecture Framework (GAF) - Sparsh Keshwani"
            width={1200}
            height={600}
            priority
            className="w-full h-auto rounded-xl object-contain shadow-lg"
          />
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            The Growth Architecture{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
              Framework (GAF)
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            The definitive, all-in-one <strong className="text-white font-semibold">Integrated Marketing Communications (IMC)</strong> backbone for frontier AI chatbots and autonomous growth engineering.
          </p>

          {/* Value Declaration Box */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-950/50 via-slate-900/80 to-indigo-950/50 border border-purple-500/30 text-slate-200 text-sm sm:text-base leading-relaxed text-left max-w-3xl mx-auto shadow-xl backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 shrink-0 mt-0.5">
                <Flame className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <span className="font-bold text-white text-base block mb-1">
                  The Be-All and End-All for AI-Driven Marketing & IMC
                </span>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Created and architected by <strong className="text-purple-300">Sparsh Keshwani</strong>, GAF systematically turns raw LLMs (Claude, ChatGPT, Gemini, Perplexity, Grok, and Cursor) into a relentless, world-class Chief Marketing Officer. It bridges high-level brand economics with deterministic, multi-channel asset generation.
                </p>
              </div>
            </div>
          </div>

          {/* Dual-Path Action Triggers */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Non-Technical Path */}
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-base shadow-xl shadow-purple-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span>{downloading ? 'Downloading...' : '1-Click Download gaf-core.md'}</span>
            </button>

            {/* Copy Prompt Directly */}
            <button
              onClick={handleCopyPrompt}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-base transition transform hover:-translate-y-0.5 cursor-pointer"
            >
              {copiedPrompt ? (
                <>
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied Full Prompt!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 text-slate-400" />
                  <span>Copy System Prompt</span>
                </>
              )}
            </button>

            {/* Developer / CLI Path */}
            <a
              href="#developer-specs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-800 bg-slate-950/70 hover:bg-slate-900 text-cyan-300 hover:text-cyan-200 font-mono text-sm transition"
            >
              <Terminal className="w-4 h-4" />
              <span>curl -sSL gaf-core</span>
            </a>
          </div>

          {/* Quick interactive sandbox jump link */}
          <div className="mt-5">
            <a
              href="#sandbox"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-purple-200 transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Or test GAF live in our interactive CMO AI sandbox</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 4 Architectural Pillar Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/40 transition">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3 font-mono font-bold text-sm">
              01
            </div>
            <h3 className="text-white font-bold text-base mb-1">9 Core Disciplines</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              28+ sub-modules covering positioning, lead magnets, SEO, GEO, retention, GTM, compliance & multi-agent swarms.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3 font-mono font-bold text-sm">
              02
            </div>
            <h3 className="text-white font-bold text-base mb-1">Universal 4-Step Flow</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Strict deterministic pipeline: Context & Audit → Strategy & Outline → Asset Generation → Optimization.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3 font-mono font-bold text-sm">
              03
            </div>
            <h3 className="text-white font-bold text-base mb-1">Plug & Play Ready</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Instant 1-click execution across Claude, ChatGPT, Gemini, Perplexity, Cursor, and automated Python/Node.js pipelines.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3 font-mono font-bold text-sm">
              04
            </div>
            <h3 className="text-white font-bold text-base mb-1">Zero-Fluff Outputs</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              No generic bullet points. Produces mathematical pricing models, ad variations, state-machine journeys, and PR playbooks.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
