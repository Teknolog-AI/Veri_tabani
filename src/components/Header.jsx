import React from 'react';
import { Shield, Search, PlusCircle, RefreshCw, Lock, Video, CheckCircle2 } from 'lucide-react';

export default function Header({ onOpenNewModal, searchTerm, setSearchTerm, onResetData, totalCount }) {
  return (
    <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white px-4 sm:px-6 py-3.5 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20 ring-1 ring-white/20">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent">
                  HYS KLİPS TAKİBİ
                </h1>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Uçtan Uca Aktif
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Hazine Operasyon & Klips Numarası Takip Sistemi</p>
            </div>
          </div>

          <button
            onClick={onOpenNewModal}
            className="md:hidden p-2 rounded-lg bg-blue-600 text-white font-medium text-xs flex items-center gap-1 shadow-md hover:bg-blue-500"
          >
            <PlusCircle className="h-4 w-4" />
            <span>Yeni</span>
          </button>
        </div>

        {/* Global Quick Search Bar */}
        <div className="w-full md:w-96 relative">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Klips no (ör: KLP-2026-9041) veya barkod ara..."
              className="w-full pl-10 pr-10 py-2.5 bg-slate-950/70 border border-slate-700/80 rounded-xl text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all shadow-inner"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Actions & User Badge */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={onResetData}
            title="Örnek Verileri Sıfırla"
            className="p-2.5 bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white rounded-xl border border-slate-700 transition-all text-xs flex items-center gap-1.5"
          >
            <RefreshCw className="h-4 w-4" />
            <span className="hidden xl:inline">Sıfırla</span>
          </button>

          <button
            onClick={onOpenNewModal}
            className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 text-sm border border-blue-400/30 active:scale-95"
          >
            <PlusCircle className="h-4 w-4" />
            <span>Yeni Klips Kaydı</span>
          </button>

          <div className="pl-2 border-l border-slate-800 flex items-center space-x-2 text-xs text-slate-400">
            <div className="h-8 w-8 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center font-bold text-blue-400">
              EŞ
            </div>
            <div className="hidden lg:block">
              <p className="font-semibold text-slate-200">Ertan ŞAHİN</p>
              <p className="text-[10px] text-blue-400 font-semibold">NAKİT MERKEZİ MÜDÜRÜ</p>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
