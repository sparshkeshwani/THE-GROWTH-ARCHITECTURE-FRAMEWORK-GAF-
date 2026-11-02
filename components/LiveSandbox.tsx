'use client';

import React, { useState } from 'react';
import { GAF_MODULES, PRESET_USE_CASES, GafSubModule } from '@/lib/gaf-data';
import { Sparkles, Play, Copy, Check, RefreshCw, Send, Terminal, AlertCircle, FileText, Download } from 'lucide-react';

interface LiveSandboxProps {
  selectedSubModuleFromParent?: GafSubModule | null;
}

export default function LiveSandbox({ selectedSubModuleFromParent }: LiveSandboxProps) {
  // Preset or initial values
  const [productName, setProductName] = useState('NexusPulse AI');
  const [icp, setIcp] = useState('B2B Enterprise CTOs & Heads of Data Engineering (Series B-D SaaS)');
  const [goalKpi, setGoalKpi] = useState('Increase demo request conversion rate by 35% and decrease CAC by 20%');
  const [brandTone, setBrandTone] = useState('Authoritative, mathematically grounded, enterprise-grade, crisp');
  const [channels, setChannels] = useState('AI Answer Engines (GEO), LinkedIn, Automated Lifecycle Email, Product In-App');
  
  const [selectedModuleId, setSelectedModuleId] = useState<string>('3.3'); // Default to GEO
  const [customDirectiveText, setCustomDirectiveText] = useState(
    '[TASK DIRECTIVE]: Execute Module 3.3 (Generative Engine Optimization - GEO). Objective: Build a brand citation matrix and direct-answer content optimization plan for Perplexity, ChatGPT Search, and Gemini.'
  );

  const [isLoading, setIsLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string | null>(null);
  const [executionError, setExecutionError] = useState<string | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedOutput, setCopiedOutput] = useState(false);

  // Apply a preset
  const handleApplyPreset = (preset: typeof PRESET_USE_CASES[0]) => {
    setProductName(preset.productName);
    setIcp(preset.icp);
    setGoalKpi(preset.goalKpi);
    setBrandTone(preset.brandTone);
    setChannels(preset.channels);
    setSelectedModuleId(preset.subModuleId);

    // Find the matching sub-module directive
    for (const m of GAF_MODULES) {
      const match = m.subModules.find((s) => s.id === preset.subModuleId);
      if (match) {
        setCustomDirectiveText(match.defaultDirective.replace('[PRODUCT NAME]', preset.productName));
        break;
      }
    }
  };

  // When sub-module selection changes from dropdown
  const handleSubModuleChange = (subId: string) => {
    setSelectedModuleId(subId);
    for (const m of GAF_MODULES) {
      const match = m.subModules.find((s) => s.id === subId);
      if (match) {
        setCustomDirectiveText(match.defaultDirective.replace('[PRODUCT NAME]', productName || '[PRODUCT NAME]'));
        break;
      }
    }
  };

  // Build the complete prompt
  const generatedPrompt = `[SYSTEM CONTEXT & VARIABLES]
* Product/Service Name: ${productName}
* Target Audience/ICP: ${icp}
* Primary Goal/KPI: ${goalKpi}
* Brand Tone & Voice: ${brandTone}
* Key Channels & Regions: ${channels}

[TASK DIRECTIVE]
${customDirectiveText}`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleCopyOutput = () => {
    if (!aiOutput) return;
    navigator.clipboard.writeText(aiOutput);
    setCopiedOutput(true);
    setTimeout(() => setCopiedOutput(false), 2000);
  };

  const handleDownloadOutput = () => {
    if (!aiOutput) return;
    const blob = new Blob([aiOutput], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gaf-output-${selectedModuleId}-${productName.toLowerCase().replace(/\s+/g, '-')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleExecuteAI = async () => {
    setIsLoading(true);
    setExecutionError(null);
    setAiOutput(null);

    try {
      const res = await fetch('/api/gemini/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productName,
          icp,
          goalKpi,
          brandTone,
          channels,
          directive: customDirectiveText,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Execution failed');
      }

      setAiOutput(data.text);
    } catch (err: any) {
      setExecutionError(err.message || 'An error occurred while executing the GAF directive.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="sandbox" className="py-20 bg-slate-900/50 border-b border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-extrabold tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            Interactive Testbed
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white tracking-tight">
            Live CMO AI Execution Sandbox
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Configure system context variables, select your GAF module directive, and test run it live using server-side Gemini 2.5 Flash.
          </p>

          {/* Quick Presets */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-slate-400 font-semibold mr-1">Quick Presets:</span>
            {PRESET_USE_CASES.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => handleApplyPreset(preset)}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/40 text-slate-300 hover:text-white transition cursor-pointer"
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>

        {/* Sandbox Grid: Left Config, Right Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span>1. System Context & Variables</span>
              </h3>
              <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                Deterministic Inputs
              </span>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Product / Service Name</label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Primary Goal / KPI</label>
                <input
                  type="text"
                  value={goalKpi}
                  onChange={(e) => setGoalKpi(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Target Audience / ICP</label>
              <input
                type="text"
                value={icp}
                onChange={(e) => setIcp(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Brand Tone & Voice</label>
                <input
                  type="text"
                  value={brandTone}
                  onChange={(e) => setBrandTone(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Key Channels & Regions</label>
                <input
                  type="text"
                  value={channels}
                  onChange={(e) => setChannels(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Sub-module Selector */}
            <div className="pt-2 border-t border-slate-800/80">
              <label className="block text-xs font-semibold text-slate-400 mb-1">Select GAF Task Directive</label>
              <select
                value={selectedModuleId}
                onChange={(e) => handleSubModuleChange(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-purple-500 cursor-pointer"
              >
                {GAF_MODULES.flatMap((m) =>
                  m.subModules.map((s) => (
                    <option key={s.id} value={s.id}>
                      Module {s.id}: {s.name} ({m.title})
                    </option>
                  ))
                )}
              </select>
            </div>

            {/* Directive Textarea */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Directive Prompt String</label>
              <textarea
                rows={3}
                value={customDirectiveText}
                onChange={(e) => setCustomDirectiveText(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-xs font-mono text-purple-300 focus:outline-none focus:border-purple-500 leading-relaxed"
              />
            </div>

            {/* Action Bar */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleExecuteAI}
                disabled={isLoading}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition active:scale-95 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-purple-200" />
                    <span>Executing 4-Step GAF Flow...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-cyan-300" />
                    <span>Run CMO AI (Gemini 2.5)</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopyPrompt}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 transition cursor-pointer"
              >
                {copiedPrompt ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Full Directive</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: AI Output Viewer */}
          <div className="lg:col-span-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col min-h-[540px]">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <h3 className="text-base font-bold text-white">GAF Output Asset</h3>
              </div>

              {aiOutput && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyOutput}
                    className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
                  >
                    {copiedOutput ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedOutput ? 'Copied' : 'Copy Asset'}</span>
                  </button>
                  <button
                    onClick={handleDownloadOutput}
                    className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col justify-center">
              {isLoading && (
                <div className="py-16 text-center space-y-4">
                  <div className="inline-block p-4 rounded-full bg-purple-500/10 border border-purple-500/30">
                    <RefreshCw className="w-8 h-8 animate-spin text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Synthesizing Marketing Asset</h4>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
                      Applying the 4-step framework: Context Audit → Strategy Outline → Asset Generation → Optimization...
                    </p>
                  </div>
                </div>
              )}

              {executionError && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Execution Error:</strong>
                    <span>{executionError}</span>
                  </div>
                </div>
              )}

              {!isLoading && !executionError && !aiOutput && (
                <div className="py-16 text-center text-slate-500 space-y-3">
                  <Sparkles className="w-8 h-8 text-slate-600 mx-auto" />
                  <p className="text-xs sm:text-sm font-medium">
                    Select a preset or enter your product details on the left, then click <strong className="text-purple-300">Run CMO AI</strong> to generate a complete marketing asset.
                  </p>
                  <div className="text-[11px] text-slate-600 font-mono">
                    All executions enforce GAF zero-fluff, mathematical guidelines.
                  </div>
                </div>
              )}

              {aiOutput && (
                <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 overflow-y-auto max-h-[480px] text-xs sm:text-sm text-slate-200 font-mono leading-relaxed whitespace-pre-wrap select-text">
                  {aiOutput}
                </div>
              )}
            </div>

            {aiOutput && (
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Generated via GAF Engine • Gemini 2.5 Flash
                </span>
                <span>Sparsh Keshwani Architecture</span>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
