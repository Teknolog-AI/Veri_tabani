import React from 'react';
import { 
  Eye, 
  Search, 
  Filter, 
  Clock, 
  Shield, 
  MapPin, 
  UserCheck, 
  UserMinus, 
  Camera, 
  ArrowUpRight,
  Barcode,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export default function KlipsListTable({ 
  klipsList, 
  selectedProcess, 
  setSelectedProcess, 
  processTypes, 
  onSelectKlips,
  searchTerm
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl overflow-hidden">
      
      {/* Table Header Controls */}
      <div className="p-5 bg-slate-900/90 border-b border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-white tracking-wide flex items-center gap-2">
            <Shield className="w-4 h-4 text-blue-400" />
            HYS KLİPS İŞLEM LİSTESİ
          </h2>
          <p className="text-xs text-slate-400">
            Klipslere bağlı süreçlerin uçtan uca takip ve sorgulama paneli ({klipsList.length} kayıt listelendi)
          </p>
        </div>

        {/* Process Filter Pills */}
        <div className="flex items-center space-x-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {processTypes.map((proc, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedProcess(proc)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedProcess === proc 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {proc}
            </button>
          ))}
        </div>
      </div>

      {/* Table Data */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-950/70 border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
              <th className="py-3.5 px-4 font-semibold">Klips No / Barkod</th>
              <th className="py-3.5 px-4 font-semibold">İşlem Türü</th>
              <th className="py-3.5 px-4 font-semibold">Teslim Eden → Teslim Alan (Q1 & Q2)</th>
              <th className="py-3.5 px-4 font-semibold">Sayım Lokasyonu (Q3)</th>
              <th className="py-3.5 px-4 font-semibold">Kamera / Kanal (Q4)</th>
              <th className="py-3.5 px-4 font-semibold">Saat & Hazırlayan (Q5 & Q6)</th>
              <th className="py-3.5 px-4 font-semibold text-right">Detay / Sorgula</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {klipsList.length === 0 ? (
              <tr>
                <td colSpan="7" className="py-12 text-center text-slate-500">
                  Arama kriterlerine uygun klips kaydı bulunamadı.
                </td>
              </tr>
            ) : (
              klipsList.map((item) => (
                <tr 
                  key={item.id}
                  className="hover:bg-slate-800/40 transition-colors group cursor-pointer"
                  onClick={() => onSelectKlips(item)}
                >
                  {/* Klips ID & Barcode */}
                  <td className="py-4 px-4 font-mono">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-blue-400 text-sm group-hover:underline">
                        {item.id}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 block">{item.barcode}</span>
                  </td>

                  {/* Process Type */}
                  <td className="py-4 px-4">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/30 whitespace-nowrap">
                      {item.processType}
                    </span>
                    <span className="text-[10px] text-emerald-400 block mt-1 font-semibold">{item.amount}</span>
                  </td>

                  {/* Q1 & Q2: Receiver & Deliverer */}
                  <td className="py-4 px-4">
                    <div className="space-y-0.5 max-w-xs">
                      <p className="text-slate-200 font-medium truncate flex items-center gap-1">
                        <span className="text-purple-400 text-[10px] font-mono">VEREN:</span> {item.answers.q2_deliverer.split(' (')[0]}
                      </p>
                      <p className="text-slate-300 font-medium truncate flex items-center gap-1">
                        <span className="text-blue-400 text-[10px] font-mono">ALAN:</span> {item.answers.q1_receiver.split(' (')[0]}
                      </p>
                    </div>
                  </td>

                  {/* Q3: Location */}
                  <td className="py-4 px-4">
                    <div className="max-w-xs">
                      <p className="text-slate-200 font-medium truncate flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                        {item.answers.q3_location.split(' / ')[0]}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">{item.answers.q3_station}</p>
                    </div>
                  </td>

                  {/* Q4: Camera */}
                  <td className="py-4 px-4 font-mono text-[11px]">
                    <div className="flex items-center gap-1.5 text-amber-300 bg-amber-950/40 px-2 py-1 rounded border border-amber-500/20 w-max">
                      <Camera className="w-3 h-3 shrink-0" />
                      <span>{item.answers.q4_camera.split(' (')[0]}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-0.5">{item.answers.q4_channel.split(' (')[0]}</span>
                  </td>

                  {/* Q5 & Q6: Timestamp & Preparer */}
                  <td className="py-4 px-4">
                    <p className="text-slate-300 text-[11px] font-mono">{item.answers.q5_timestamp}</p>
                    <p className="text-[10px] text-slate-400">Hazırlayan: <span className="text-slate-200">{item.answers.q6_preparer.split(' (')[0]}</span></p>
                  </td>

                  {/* Action Button */}
                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectKlips(item);
                      }}
                      className="px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white rounded-xl text-xs font-semibold transition-all border border-blue-500/30 flex items-center gap-1 ml-auto"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Incele</span>
                    </button>
                  </td>

                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
