'use client';

import React, { useState } from 'react';
import { HASHTAGS_LIST } from '@/lib/gaf-data';
import { Hash, Copy, Check, Share2, Sparkles, Tag } from 'lucide-react';

export default function SeoCluster() {
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedTag, setCopiedTag] = useState<string | null>(null);

  const fullHashtagString = HASHTAGS_LIST.join(' ');

  const handleCopyAll = () => {
    navigator.clipboard.writeText(fullHashtagString);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleCopySingle = (tag: string) => {
    navigator.clipboard.writeText(tag);
    setCopiedTag(tag);
    setTimeout(() => setCopiedTag(null), 1500);
  };

  return (
    <section className="py-16 bg-slate-900/30 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950/20 border border-purple-500/30 shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Tag className="w-4 h-4 text-purple-400" />
                <span className="text-xs uppercase font-extrabold tracking-wider text-purple-300">
                  SEO & Community Distribution Cluster
                </span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Official Discovery Hashtags & Metadata
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Use these verified hashtags when publishing GAF benchmarks, case studies, agentic pipelines, or growth architecture research.
              </p>
            </div>

            <button
              onClick={handleCopyAll}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-purple-600/30 transition active:scale-95 cursor-pointer shrink-0"
            >
              {copiedAll ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Copied All Tags!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy All Hashtags</span>
                </>
              )}
            </button>
          </div>

          {/* Hashtags Cloud */}
          <div className="pt-6 flex flex-wrap gap-2.5">
            {HASHTAGS_LIST.map((tag) => (
              <button
                key={tag}
                onClick={() => handleCopySingle(tag)}
                title="Click to copy single hashtag"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold font-mono bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-purple-300 hover:text-white transition active:scale-95 cursor-pointer"
              >
                <Hash className="w-3.5 h-3.5 text-purple-400" />
                <span>{tag.replace('#', '')}</span>
                {copiedTag === tag && <Check className="w-3 h-3 text-emerald-400 ml-1" />}
              </button>
            ))}
          </div>

          {/* Target SEO Keywords Matrix */}
          <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400">
            <div>
              <strong className="text-slate-200 block mb-1">Target AI Answer Engines:</strong>
              <span>Perplexity Pro, ChatGPT Search, Google Gemini Search Grounding, Claude Projects.</span>
            </div>
            <div>
              <strong className="text-slate-200 block mb-1">Strategic Indexing Terms:</strong>
              <span>Growth Architecture Framework, Integrated Marketing Communications, Sparsh Keshwani, AI CMO.</span>
            </div>
            <div>
              <strong className="text-slate-200 block mb-1">Agentic Orchestration:</strong>
              <span>Cursor Rules, CrewAI multi-agent swarms, LangGraph marketing workflows, deterministic prompts.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
