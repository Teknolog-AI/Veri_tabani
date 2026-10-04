import React, { useState } from 'react';
import { Camera, Video, Play, Pause, Maximize2, ShieldAlert, Eye, Radio } from 'lucide-react';

export default function CameraStreamSimulator({ cameraName, channelInfo, videoTimestamp, klipsId }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="bg-slate-950 rounded-2xl border border-slate-800/80 overflow-hidden shadow-2xl relative">
      {/* Top Overlay Bar */}
      <div className="bg-slate-900/90 px-4 py-2.5 flex items-center justify-between border-b border-slate-800 text-xs">
        <div className="flex items-center space-x-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <span className="font-mono text-red-400 font-bold tracking-wider">CCTV - ARŞİV KAYDI</span>
          <span className="text-slate-500">|</span>
          <span className="font-semibold text-slate-200">{cameraName || "CAM-VAULT-04"}</span>
        </div>

        <div className="flex items-center space-x-3 text-slate-400 text-[11px] font-mono">
          <span className="bg-slate-800 px-2 py-0.5 rounded text-blue-300 font-medium">{channelInfo}</span>
          <span className="hidden sm:inline text-slate-400">{videoTimestamp}</span>
        </div>
      </div>

      {/* Main Simulated Camera View */}
      <div className="relative aspect-video bg-slate-900 flex items-center justify-center overflow-hidden group">
        
        {/* Visual simulated CCTV backdrop (dark vault environment with grid lines) */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Simulated Counting Desk Scene SVG graphic */}
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center z-10">
          
          {/* Simulated CCTV Bounding Box on Seal / Bag */}
          <div className="relative border-2 border-dashed border-emerald-400/80 bg-emerald-500/10 rounded-xl p-4 sm:p-6 backdrop-blur-xs max-w-sm w-full shadow-lg shadow-emerald-950/40">
            <div className="absolute -top-3 left-3 bg-emerald-500 text-slate-950 font-mono font-bold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
              <Eye className="w-3 h-3" /> EŞLEŞEN KLİPS: {klipsId}
            </div>
            
            <div className="flex items-center justify-between text-left mb-2">
              <div>
                <p className="text-xs text-slate-300 font-mono font-semibold">SAYIM MASASI #04 - BANKNOT SAYAÇ</p>
                <p className="text-[11px] text-emerald-300 font-mono">Doğrulama: OK (%99.8 Güvenlik Skoru)</p>
              </div>
              <div className="h-8 w-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-bold text-xs font-mono">
                C4
              </div>
            </div>

            <div className="h-1 bg-slate-800 rounded-full overflow-hidden my-2">
              <div className={`h-full bg-emerald-400 transition-all duration-1000 ${isPlaying ? 'w-full animate-pulse' : 'w-2/3'}`}></div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
              <span>FPS: 30.00</span>
              <span>Kamera ID: {cameraName.split(' ')[0]}</span>
              <span>Kanal #08</span>
            </div>
          </div>

          {/* OSD Stamp Overlay */}
          <div className="absolute top-4 left-4 text-left font-mono text-[11px] text-emerald-400 bg-slate-950/80 p-2 rounded border border-emerald-500/20 shadow">
            <p className="font-bold">HYS GÜVENLİK KAMERASI SİSTEMİ</p>
            <p className="text-slate-300 text-[10px]">Tarih: {videoTimestamp ? videoTimestamp.split(' - ')[0] : '2026-09-24'}</p>
            <p className="text-emerald-300 text-[10px]">Kayıt ID: #REC-20260924-884</p>
          </div>

          <div className="absolute bottom-4 right-4 font-mono text-xs text-slate-400 bg-slate-950/80 px-3 py-1 rounded border border-slate-800">
            {isPlaying ? '▶ CANLI REPLAY AKIŞI' : '❚❚ DAKİKA DURAKLATILDI'}
          </div>
        </div>

        {/* Scanlines Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-30"></div>
      </div>

      {/* Camera Controls Footer */}
      <div className="bg-slate-900/90 px-4 py-2 flex items-center justify-between border-t border-slate-800 text-xs text-slate-400">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center gap-1.5"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            <span className="text-[11px] font-medium">{isPlaying ? 'Duraklat' : 'Oynat'}</span>
          </button>
          <span className="text-slate-600">|</span>
          <span className="text-[11px] text-slate-300">Zaman Damgalı Kamera Kaydı Doğrulandı</span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
            Kamera Kanal Eşleşmesi Sağlandı
          </span>
        </div>
      </div>
    </div>
  );
}
