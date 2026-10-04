import React, { useState } from 'react';
import { Barcode, Scan, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';

export default function BarcodeScannerSimulator({ onSelectByBarcode, klipsList }) {
  const [isScanning, setIsScanning] = useState(false);
  const [selectedDemoId, setSelectedDemoId] = useState('');

  const handleSimulateScan = (id) => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      onSelectByBarcode(id);
    }, 600);
  };

  return (
    <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-indigo-950 border border-indigo-500/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
      
      <div className="flex items-center space-x-3 w-full md:w-auto">
        <div className={`h-11 w-11 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 ${isScanning ? 'animate-bounce' : ''}`}>
          <Scan className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            HIZLI KLİPS BARKOD OKUYUCU SİMÜLATÖRÜ
            {isScanning && (
              <span className="text-xs text-amber-400 font-mono animate-pulse">Okunuyor...</span>
            )}
          </h3>
          <p className="text-xs text-slate-400">
            Fiziksel klips barkodunu okutarak 6 temel soru cevabına anında erişin.
          </p>
        </div>
      </div>

      {/* Demo Quick Buttons */}
      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
        <span className="text-xs text-slate-400 font-mono">Hızlı Test:</span>
        {klipsList.slice(0, 4).map((item) => (
          <button
            key={item.id}
            onClick={() => handleSimulateScan(item.id)}
            disabled={isScanning}
            className="px-3 py-1.5 bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-mono font-bold rounded-xl border border-slate-700 transition-all flex items-center gap-1.5 shadow-md active:scale-95"
          >
            <Barcode className="w-3.5 h-3.5 text-indigo-400" />
            <span>{item.id}</span>
          </button>
        ))}
      </div>

    </div>
  );
}
