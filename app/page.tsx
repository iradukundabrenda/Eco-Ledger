"use client"
import React, { useState } from 'react';
import { Layers, Zap, Globe, Cpu, ArrowUpRight, BarChart, Shield, Calculator, PieChart, TrendingUp, Search, Activity } from 'lucide-react';
import { getImpactData } from '@/lib/impact';


export default function FluxCarbon() {
  const [data, setData] = useState({ energy: 0, travel: 0, compute: 0 });
  const stats = getImpactData(data.energy, data.travel, data.compute);

  return (
    <main className="min-h-screen bg-[#0A0C10] text-[#E6EDF3] font-sans selection:bg-cyan-500/30">
      
      {/* GLOBAL NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0C10]/80 backdrop-blur-md border-b border-slate-800/50 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Layers className="text-cyan-500 w-6 h-6" />
            <span className="font-black italic tracking-tighter uppercase text-lg">Flux<span className="text-cyan-500 not-italic font-light">Carbon</span></span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
            <a href="#nexus" className="hover:text-cyan-500 transition-colors">Nexus</a>
            <a href="#economics" className="hover:text-cyan-500 transition-colors">Market Economics</a>
            <a href="#methodology" className="hover:text-cyan-500 transition-colors">Methodology</a>
          </div>
          <div className="px-4 py-1.5 border border-slate-800 rounded-full text-[10px] font-mono text-slate-400">
            VER: 1.0.4 // STABLE
          </div>
        </div>
      </nav>

      {/* SECTION 1: THE NEXUS */}
      <section id="nexus" className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-xs font-black text-cyan-500 uppercase tracking-[0.4em] mb-4">Operational Inputs</h2>
              <p className="text-sm text-slate-400 leading-relaxed">Quantifying multi-scope emissions for corporate and industrial reporting.</p>
            </div>
            
            <div className="space-y-10">
              {[
                { key: 'energy', label: 'Facility Energy (kWh)', icon: <Zap size={16}/> },
                { key: 'travel', label: 'Logistics / Transit (Miles)', icon: <Globe size={16}/> },
                { key: 'compute', label: 'Cloud Resources (vCPU Hrs)', icon: <Cpu size={16}/> }
              ].map((item) => (
                <div key={item.key} className="relative">
                  <label className="text-[10px] text-slate-500 uppercase font-black mb-3 block tracking-widest">{item.label}</label>
                  <div className="flex items-center gap-4 border-b border-slate-800 focus-within:border-cyan-500 transition-all group">
                    <span className="text-slate-700 group-focus-within:text-cyan-500">{item.icon}</span>
                    <input 
                      type="number" 
                      onChange={(e) => setData({...data, [item.key]: Number(e.target.value)})}
                      className="w-full bg-transparent py-4 text-3xl outline-none font-light placeholder:text-slate-900"
                      placeholder="0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-[#12161D] rounded-[40px] p-12 border border-slate-800/50 shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <div className="flex justify-between items-center mb-16">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Real-time Analytics Engine</span>
                  </div>
                  <ArrowUpRight className="text-slate-700" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                  <div>
                    <h3 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] mb-4">Cumulative Impact</h3>
                    <div className="flex items-baseline gap-4">
                      <span className="text-8xl font-black tracking-tighter text-white leading-none">{stats.total}</span>
                      <span className="text-lg font-medium text-slate-600 uppercase tracking-widest italic">Kg CO2e</span>
                    </div>
                  </div>
                  <div className="md:border-l border-slate-800 md:pl-12 flex flex-col justify-center">
                    <h3 className="text-[10px] font-black text-rose-500 uppercase tracking-[0.3em] mb-4">Market Exposure</h3>
                    <span className="text-5xl font-mono font-bold text-white">{stats.carbonTax}</span>
                    <p className="text-xs text-slate-500 mt-2 font-medium tracking-wide">Applied UK Carbon Price Floor (GBP)</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {stats.metrics.map((m: any) => (
                    <div key={m.id} className="p-8 bg-black/40 rounded-3xl border border-slate-800/50 hover:bg-black/60 transition-all group">
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em] mb-6 flex items-center gap-3">
                        <BarChart size={14} className={m.color} /> {m.label}
                      </p>
                      <p className="text-3xl font-mono font-bold">+{m.value.toFixed(1)}</p>
                    </div>
                  ))}
                </div>
             </div>
             <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE ECONOMICS */}
      <section id="economics" className="py-32 px-8 bg-[#0D0F14] border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-black tracking-tighter mb-8 leading-tight">Financializing<br/><span className="text-cyan-500">Environmental Risk.</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-12">
                Carbon is shifting from a corporate social responsibility (CSR) metric to a core financial liability. FluxCarbon bridges this gap by applying dynamic market pricing to raw emission data.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Shield className="text-cyan-500" size={32} />
                  <h4 className="font-bold">Regulatory Compliance</h4>
                  <p className="text-sm text-slate-500">Audit-ready reporting for UK and EU regulatory frameworks (SECR/ESOS).</p>
                </div>
                <div className="space-y-4">
                  <TrendingUp className="text-rose-500" size={32} />
                  <h4 className="font-bold">Projected Risk</h4>
                  <p className="text-sm text-slate-500">Based on a $45/t projection, your future liability could rise to <span className="text-white font-bold">{stats.projectedRisk}</span>.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="h-64 bg-slate-900/50 rounded-3xl border border-slate-800 p-8 flex flex-col justify-end">
                  <PieChart className="text-slate-700 mb-4" size={40} />
                  <p className="text-xs font-bold text-slate-500 uppercase">Portfolio Analysis</p>
               </div>
               <div className="h-64 bg-cyan-500 rounded-3xl p-8 flex flex-col justify-end">
                  <Calculator className="text-black mb-4" size={40} />
                  <p className="text-xs font-bold text-black uppercase">Tax Integration</p>
               </div>
               <div className="col-span-2 h-40 bg-slate-900/50 rounded-3xl border border-slate-800 p-8">
                  <p className="text-sm text-slate-400 italic font-serif">"The ability to quantify carbon in currency is the next frontier of enterprise resource planning."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE METHODOLOGY (The replacement for Stack) */}
      <section id="methodology" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-xs font-black text-cyan-500 uppercase tracking-[0.4em] mb-4">Methodology & Logic</h2>
            <p className="text-3xl font-black tracking-tighter">The Green Ledger Architecture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { title: 'Data Ingestion', desc: 'Inputs are parsed and normalized into standardized SI units before processing.', icon: <Search/> },
               { title: 'Coefficient Mapping', desc: 'Applying UK Government (DEFRA) and IEA emission factors for Scope 2 and 3 accuracy.', icon: <Layers/> },
               { title: 'Asynchronous State', desc: 'Utilizing non-blocking state updates to maintain high-performance financial calculations.', icon: <Activity/> }
             ].map((box, i) => (
               <div key={i} className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-500">
                    {box.icon}
                  </div>
                  <h4 className="text-xl font-bold">{box.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{box.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-slate-800/50 flex flex-col items-center gap-6">
         <div className="flex items-center gap-3 opacity-50 grayscale">
            <Layers className="w-4 h-4" />
            <span className="text-[10px] font-black tracking-widest uppercase">FluxCarbon OS</span>
         </div>
         <p className="text-[9px] font-medium text-slate-600 uppercase tracking-[0.5em]">Developed by Brenda Iradukunda // 2026</p>
      </footer>
    </main>
  );
}