import React from 'react';
import { 
  UserCheck, 
  UserMinus, 
  MapPin, 
  Camera, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Cpu, 
  Building2, 
  Video,
  Key
} from 'lucide-react';

export default function QuestionCardSection({ item, onShowCamera }) {
  if (!item || !item.answers) return null;

  const { answers } = item;

  const questionsData = [
    {
      num: 1,
      title: "1. Kim Teslim Aldı?",
      icon: UserCheck,
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-950/40 border-blue-500/30",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/40",
      mainText: answers.q1_receiver,
      subText: answers.q1_receiver_dept,
      metaText: `İmza/Onay: ${answers.q1_receiver_sig}`
    },
    {
      num: 2,
      title: "2. Kim Teslim Etti?",
      icon: UserMinus,
      color: "from-purple-600 to-indigo-600",
      bgColor: "bg-purple-950/40 border-purple-500/30",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/40",
      mainText: answers.q2_deliverer,
      subText: answers.q2_deliverer_dept,
      metaText: `İmza/Onay: ${answers.q2_deliverer_sig}`
    },
    {
      num: 3,
      title: "3. Nerede Sayıldı?",
      icon: MapPin,
      color: "from-emerald-600 to-teal-600",
      bgColor: "bg-emerald-950/40 border-emerald-500/30",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
      mainText: answers.q3_location,
      subText: answers.q3_station,
      metaText: `Sayım Cihazı: ${answers.q3_machine}`
    },
    {
      num: 4,
      title: "4. Hangi Kanal veya Kamera ile İlişkili?",
      icon: Camera,
      color: "from-amber-600 to-orange-600",
      bgColor: "bg-amber-950/40 border-amber-500/30",
      badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/40",
      mainText: answers.q4_camera,
      subText: answers.q4_channel,
      metaText: `Video Arşivi: ${answers.q4_videoTimestamp}`,
      hasAction: true
    },
    {
      num: 5,
      title: "5. İşlem Hangi Saatte Yapıldı?",
      icon: Clock,
      color: "from-cyan-600 to-blue-600",
      bgColor: "bg-cyan-950/40 border-cyan-500/30",
      badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
      mainText: answers.q5_timestamp,
      subText: `Sistem Kayıt Zamanı: ${item.createdAt}`,
      metaText: `İşlem Süresi: ${answers.q5_duration}`
    },
    {
      num: 6,
      title: "6. Kim Hazırladı?",
      icon: ShieldCheck,
      color: "from-rose-600 to-pink-600",
      bgColor: "bg-rose-950/40 border-rose-500/30",
      badgeColor: "bg-rose-500/20 text-rose-400 border-rose-500/40",
      mainText: answers.q6_preparer,
      subText: answers.q6_preparer_dept,
      metaText: "Kalite & Mühür Kontrolü: Onaylandı"
    }
  ];

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 shadow-lg">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-400 animate-ping"></span>
            <h3 className="text-base font-bold text-white tracking-wide">
              KLİPS SORGULAMA SONUÇLARI – 6 TEMEL SORU YANITI
            </h3>
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Klips No: <strong className="text-blue-400 font-mono text-sm">{item.id}</strong> | Barkod: <span className="font-mono text-slate-400">{item.barcode}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 flex items-center gap-1.5">
            <Key className="w-3.5 h-3.5" />
            İşlem Tipi: {item.processType}
          </span>
        </div>
      </div>

      {/* Grid of 6 Mandatory Question Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {questionsData.map((q) => {
          const IconComponent = q.icon;
          return (
            <div 
              key={q.num}
              className={`p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.01] hover:shadow-xl flex flex-col justify-between ${q.bgColor}`}
            >
              <div>
                {/* Question Badge Top */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className={`h-8 w-8 rounded-xl bg-gradient-to-br ${q.color} flex items-center justify-center text-white shadow-md`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      Soru #{q.num}
                    </span>
                  </div>
                  <span className={`px-2 py-0.5 text-[10px] font-mono font-semibold rounded-full border ${q.badgeColor}`}>
                    Doğrulandı
                  </span>
                </div>

                {/* Question Title */}
                <h4 className="text-xs font-semibold text-slate-400 mb-1">
                  {q.title}
                </h4>

                {/* Main Answer */}
                <p className="text-sm font-bold text-white leading-snug mb-1">
                  {q.mainText}
                </p>

                {/* Department / Station info */}
                <p className="text-xs text-slate-300 font-medium mb-2">
                  {q.subText}
                </p>
              </div>

              {/* Meta information & Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="truncate pr-2">{q.metaText}</span>
                {q.hasAction && onShowCamera && (
                  <button
                    onClick={onShowCamera}
                    className="px-2.5 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded-lg border border-amber-500/40 text-[10px] font-bold flex items-center gap-1 transition-colors shrink-0"
                  >
                    <Video className="w-3 h-3" />
                    Kamera Kaydı
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
