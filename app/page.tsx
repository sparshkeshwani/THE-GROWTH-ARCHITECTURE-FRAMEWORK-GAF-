'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DualPathSection from '@/components/DualPathSection';
import ModuleExplorer from '@/components/ModuleExplorer';
import LiveSandbox from '@/components/LiveSandbox';
import RepoFileViewer from '@/components/RepoFileViewer';
import SeoCluster from '@/components/SeoCluster';
import Footer from '@/components/Footer';
import { GafSubModule } from '@/lib/gaf-data';

export default function Home() {
  const [selectedSubModule, setSelectedSubModule] = useState<GafSubModule | null>(null);

  const handleSelectSubModule = (sub: GafSubModule) => {
    setSelectedSubModule(sub);
    // Smooth scroll down to sandbox
    const sandboxEl = document.getElementById('sandbox');
    if (sandboxEl) {
      sandboxEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <DualPathSection />
        <ModuleExplorer onSelectSubModule={handleSelectSubModule} />
        <LiveSandbox selectedSubModuleFromParent={selectedSubModule} />
        <RepoFileViewer />
        <SeoCluster />
      </main>
      <Footer />
    </div>
  );
}
