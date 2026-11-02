'use client';

import React, { useState } from 'react';
import { GAF_MODULES, GafModule, GafSubModule } from '@/lib/gaf-data';
import { Search, ChevronDown, ChevronUp, Copy, Check, Sparkles, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ModuleExplorerProps {
  onSelectSubModule?: (subModule: GafSubModule, module: GafModule) => void;
}

export default function ModuleExplorer({ onSelectSubModule }: ModuleExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({
    1: true,
    2: false,
    3: true, // GEO highlighted
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['All', 'Foundation', 'Acquisition', 'Organic & GEO', 'Retention & PLG', 'AI Engineering'];

  const toggleModule = (id: number) => {
    setExpandedModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allExpanded: Record<number, boolean> = {};
    GAF_MODULES.forEach((m) => (allExpanded[m.id] = true));
    setExpandedModules(allExpanded);
  };

  const collapseAll = () => {
    const allCollapsed: Record<number, boolean> = {};
    GAF_MODULES.forEach((m) => (allCollapsed[m.id] = false));
    setExpandedModules(allCollapsed);
  };

  const handleCopyDirective = (directive: string, id: string) => {
    navigator.clipboard.writeText(directive);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter modules and sub-modules based on search query and category
  const filteredModules = GAF_MODULES.filter((m) => {
    const matchesCategory = selectedCategory === 'All' || m.badge === selectedCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const matchesTitle = m.title.toLowerCase().includes(query) || m.tagline.toLowerCase().includes(query);
    const matchesSub = m.subModules.some(
      (s) => s.name.toLowerCase().includes(query) || s.description.toLowerCase().includes(query) || s.id.includes(query)
    );

    return matchesTitle || matchesSub;
  });

  return (
    <section id="modules" className="py-20 bg-slate-950 border-b border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            System Taxonomy
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white tracking-tight">
            The 9 Core Task Modules
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Covering 28+ specialized disciplines across the entire Integrated Marketing Communications lifecycle.
          </p>

          {/* Search Bar & Filters */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search modules (e.g. pricing, GEO, ABM)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={expandAll}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-400 hover:text-white transition cursor-pointer"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-400 hover:text-white transition cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Category Chips */}
          <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Modules Accordion / Card Grid */}
        <div className="space-y-4">
          {filteredModules.map((module) => {
            const isExpanded = expandedModules[module.id] ?? false;

            return (
              <div
                key={module.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800/90 overflow-hidden shadow-lg transition-all"
              >
                {/* Module Bar / Header */}
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-slate-850/60 transition cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-800 text-slate-200 font-mono font-bold text-xs sm:text-sm border border-slate-700">
                      {module.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {module.title}
                        </h3>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {module.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {module.tagline} • <span className="text-slate-500">{module.subModules.length} sub-tasks</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-xs font-semibold hidden sm:inline">
                      {isExpanded ? 'Hide' : 'View Sub-Tasks'}
                    </span>
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-purple-400" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Sub-Modules Body */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/80 bg-slate-950/60">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      {module.subModules.map((sub) => (
                        <div
                          key={sub.id}
                          className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span className="text-xs font-mono font-bold text-purple-400">
                                Module {sub.id}
                              </span>
                              <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                                {sub.recommendedModel}
                              </span>
                            </div>

                            <h4 className="text-sm font-bold text-white mb-1.5">
                              {sub.name}
                            </h4>

                            <p className="text-xs text-slate-300 leading-relaxed mb-3">
                              {sub.description}
                            </p>

                            {/* Deliverables pill tags */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {sub.deliverables.map((del, i) => (
                                <span
                                  key={i}
                                  className="text-[10px] px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 flex items-center gap-1"
                                >
                                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                                  <span>{del}</span>
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Row */}
                          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                            <button
                              onClick={() => handleCopyDirective(sub.defaultDirective, sub.id)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-semibold text-slate-300 hover:text-white transition cursor-pointer"
                            >
                              {copiedId === sub.id ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-400" />
                                  <span className="text-emerald-400 font-bold">Directive Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3 text-slate-400" />
                                  <span>Copy Directive</span>
                                </>
                              )}
                            </button>

                            {onSelectSubModule && (
                              <button
                                onClick={() => onSelectSubModule(sub, module)}
                                className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-300 hover:text-purple-200 transition cursor-pointer"
                              >
                                <Sparkles className="w-3 h-3 text-purple-400" />
                                <span>Load in Sandbox</span>
                                <ArrowUpRight className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
