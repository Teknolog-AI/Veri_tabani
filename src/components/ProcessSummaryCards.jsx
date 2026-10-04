import React from 'react';
import { 
  Building2, 
  ArrowUpRight, 
  RefreshCcw, 
  TrendingUp, 
  Truck, 
  FileText, 
  Boxes, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function ProcessSummaryCards({ klipsList }) {
  const countByProcess = (type) => klipsList.filter(k => k.processType === type).length;

  const stats = [
    { title: "ATM Yükleme", count: countByProcess("ATM Yükleme"), icon: Building2, color: "text-blue-400", border: "border-blue-500/30", bg: "from-blue-950/40 to-slate-900" },
    { title: "ATM Toplama", count: countByProcess("ATM Toplama"), icon: RefreshCcw, color: "text-cyan-400", border: "border-cyan-500/30", bg: "from-cyan-950/40 to-slate-900" },
    { title: "Müşteri Teslimatı", count: countByProcess("Müşteri Teslimatı"), icon: Truck, color: "text-purple-400", border: "border-purple-500/30", bg: "from-purple-950/40 to-slate-900" },
    { title: "Toplu Sayım", count: countByProcess("Toplu Sayım"), icon: Boxes, color: "text-emerald-400", border: "border-emerald-500/30", bg: "from-emerald-950/40 to-slate-900" },
    { title: "Dış Kaynak", count: countByProcess("Dış Kaynak İşlemleri"), icon: TrendingUp, color: "text-amber-400", border: "border-amber-500/30", bg: "from-amber-950/40 to-slate-900" },
    { title: "Kıymetli Evrak", count: countByProcess("Kıymetli Evrak İşlemleri"), icon: FileText, color: "text-rose-400", border: "border-rose-500/30", bg: "from-rose-950/40 to-slate-900" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {stats.map((s, idx) => {
        const Icon = s.icon;
        return (
          <div 
            key={idx}
            className={`p-3.5 rounded-2xl bg-gradient-to-b ${s.bg} border ${s.border} flex flex-col justify-between shadow-lg transition-transform hover:scale-[1.02]`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-300 truncate">{s.title}</span>
              <Icon className={`w-4 h-4 ${s.color}`} />
            </div>

            <div className="flex items-baseline justify-between">
              <span className="text-xl font-extrabold text-white font-mono">{s.count}</span>
              <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-0.5">
                <CheckCircle2 className="w-3 h-3" /> Aktif
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
