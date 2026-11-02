'use client';

import React, { useState } from 'react';
import { Download, Copy, Check, Terminal, Sparkles, BookOpen, FileCode, Github, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [copied, setCopied] = useState(false);

  const handleDownloadCore = () => {
    const link = document.createElement('a');
    link.href = '/assets/gaf-core.md';
    link.download = 'gaf-core.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyQuickPrompt = async () => {
    try {
      const res = await fetch('/assets/gaf-core.md');
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Author */}
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center space-x-2 group">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition">
              <div className="w-full h-full bg-slate-950 rounded-lg flex items-center justify-center font-black tracking-tight text-white text-base">
                GAF
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
                The Growth Architecture Framework
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  v2.4
                </span>
              </span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                Architected by <strong className="text-slate-200">Sparsh Keshwani</strong>
              </span>
            </div>
          </a>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
          <a href="#dual-path" className="hover:text-cyan-400 transition flex items-center gap-1">
            <span>Dual-Path Hub</span>
          </a>
          <a href="#modules" className="hover:text-purple-400 transition flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>9 Modules</span>
          </a>
          <a href="#sandbox" className="hover:text-indigo-400 transition flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Live CMO Sandbox</span>
          </a>
          <a href="#code-viewer" className="hover:text-emerald-400 transition flex items-center gap-1">
            <FileCode className="w-3.5 h-3.5" />
            <span>Repo Files</span>
          </a>
          <a href="#developer-specs" className="hover:text-amber-400 transition flex items-center gap-1">
            <Terminal className="w-3.5 h-3.5" />
            <span>CLI & SDKs</span>
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={handleCopyQuickPrompt}
            title="Copy full GAF system prompt to clipboard"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition active:scale-95 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied Prompt!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Prompt</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownloadCore}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-xs sm:text-sm font-bold text-white shadow-md shadow-purple-500/25 transition active:scale-95 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>1-Click Download</span>
          </button>
        </div>
      </div>
    </header>
  );
}
