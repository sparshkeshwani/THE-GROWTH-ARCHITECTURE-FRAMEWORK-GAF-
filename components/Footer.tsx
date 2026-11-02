'use client';

import React from 'react';
import { Heart, ShieldCheck, Download, Github, Terminal, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadCore = () => {
    const link = document.createElement('a');
    link.href = '/assets/gaf-core.md';
    link.download = 'gaf-core.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 flex items-center justify-center font-black text-white text-xs">
                GAF
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                The Growth Architecture Framework
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-md leading-relaxed">
              Created & Developed by <strong className="text-white">Sparsh Keshwani</strong>. The definitive, all-in-one Integrated Marketing Communications (IMC) backbone for modern brands, entities, products, and enterprises leveraging AI chatbots.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/30">
                <ShieldCheck className="w-3 h-3" />
                MIT Licensed • Free Open Source
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Repository Resources
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#dual-path" className="hover:text-purple-300 transition">
                  Dual-Path Hub (Marketer / Engineer)
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-purple-300 transition">
                  9 Core Disciplines & Sub-tasks
                </a>
              </li>
              <li>
                <a href="#sandbox" className="hover:text-purple-300 transition">
                  Live CMO AI Sandbox
                </a>
              </li>
              <li>
                <a href="#code-viewer" className="hover:text-purple-300 transition">
                  Repository File Inspector
                </a>
              </li>
              <li>
                <a href="#developer-specs" className="hover:text-purple-300 transition">
                  CLI & Python / Node SDKs
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Downloads */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Direct File Access
            </h4>
            <div className="space-y-2">
              <button
                onClick={handleDownloadCore}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-200 transition cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-purple-400" />
                <span>Download gaf-core.md</span>
              </button>
              <div className="text-[11px] text-slate-500 font-mono">
                cURL: <code className="text-slate-400">curl -sSL .../gaf-core.md</code>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © 2026 <strong className="text-slate-300">Sparsh Keshwani</strong>. All rights reserved. Open-sourced under the MIT License.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
