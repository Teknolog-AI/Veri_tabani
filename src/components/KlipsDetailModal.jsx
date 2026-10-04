import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  FileCheck, 
  Clock, 
  Shield, 
  Video, 
  MapPin, 
  CheckCircle2, 
  Download, 
  Building, 
  Share2,
  Lock,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import QuestionCardSection from './QuestionCardSection';
import CameraStreamSimulator from './CameraStreamSimulator';

export default function KlipsDetailModal({ item, onClose }) {
  const [activeTab, setActiveTab] = useState('questions'); // 'questions', 'timeline', 'camera', 'print'

  if (!item) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative text-slate-100">
        
        {/* Modal Header */}
        <div className="p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-b border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center space-x-3">
            <div className="h-11 w-11 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold font-mono text-lg shadow-lg">
              KLP
            </div>
            <div>
              <div className="flex items-center space-x-3">
                <h2 className="text-xl font-extrabold text-white font-mono tracking-tight">{item.id}</h2>
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40">
                  {item.processType}
                </span>
                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                  item.status === 'Tamamlandı' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}>
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 font-mono">
                Barkod: {item.barcode} | Tutar: <span className="text-emerald-400 font-semibold">{item.amount}</span> | Hedef: {item.targetDestination}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 flex items-center gap-1.5 transition-all"
            >
              <Printer className="w-4 h-4 text-blue-400" />
              <span className="hidden sm:inline">Tutanak Yazdır</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 bg-slate-950/60 border-b border-slate-800 flex items-center space-x-2 overflow-x-auto no-print">
          <button
            onClick={() => setActiveTab('questions')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'questions' ? 'border-blue-500 text-blue-400 bg-blue-500/10' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCheck className="w-4 h-4" />
            <span>6 Temel Soru Yanıtları</span>
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'timeline' ? 'border-blue-500 text-blue-400 bg-blue-500/10' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Uçtan Uca Zaman Çizelgesi</span>
          </button>

          <button
            onClick={() => setActiveTab('camera')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'camera' ? 'border-amber-500 text-amber-400 bg-amber-500/10' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>Kamera / Kanal İzleyici</span>
          </button>

          <button
            onClick={() => setActiveTab('print')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'print' ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Printer className="w-4 h-4" />
            <span>Resmi Teslim Tutanağı</span>
          </button>
        </div>

        {/* Modal Body Scroll Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">

          {/* TAB 1: 6 MANDATORY QUESTIONS */}
          {activeTab === 'questions' && (
            <div className="space-y-6">
              <QuestionCardSection 
                item={item} 
                onShowCamera={() => setActiveTab('camera')} 
              />

              {/* Extra Details Box */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 font-medium block">Tutar & Kupür Dağılımı:</span>
                  <span className="text-white font-bold text-sm block mt-0.5">{item.amount}</span>
                  <span className="text-slate-400 text-[11px] font-mono">{item.denomBreakdown}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Çanta & Mühür Tipi:</span>
                  <span className="text-slate-200 font-semibold block mt-0.5">{item.bagType}</span>
                  <span className="text-emerald-400 text-[11px] font-mono">Çift Mühür Kilidi Aktif</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Hedef Lokasyon:</span>
                  <span className="text-blue-300 font-semibold block mt-0.5">{item.targetDestination}</span>
                  <span className="text-slate-400 text-[11px]">Güvenlikli Sevkiyat Rotası</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: END-TO-END TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/30 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    UÇTAN UCA İŞLEM TARİHÇESİ (END-TO-END AUDIT LOG)
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Klips {item.id} mühürlenme anından nihai teslime kadar geçen adımlar.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold">
                  Toplam Adım: {item.timeline.length}
                </span>
              </div>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500 before:to-emerald-500">
                {item.timeline.map((step, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-6 top-1.5 h-5 w-5 rounded-full bg-slate-900 border-2 border-blue-400 flex items-center justify-center text-[10px] font-bold text-blue-400 shadow">
                      {idx + 1}
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/40 transition-all shadow-md">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <span className="text-sm font-bold text-white flex items-center gap-2">
                          {step.step}
                        </span>
                        <span className="text-xs text-blue-400 font-mono bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
                          {step.time}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mb-2">{step.detail}</p>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-900 font-mono">
                        <span>Personel: <strong className="text-slate-200">{step.user}</strong></span>
                        <span>Konum: <strong className="text-emerald-400">{step.location}</strong></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CAMERA STREAM */}
          {activeTab === 'camera' && (
            <div className="space-y-4">
              <CameraStreamSimulator
                cameraName={item.answers.q4_camera}
                channelInfo={item.answers.q4_channel}
                videoTimestamp={item.answers.q4_videoTimestamp}
                klipsId={item.id}
              />
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                <p className="font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                  <Video className="w-4 h-4" /> Güvenlik Kamera Sistemi Metadataları
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-400 text-[11px]">
                  <li>Bu klips işlem anına ait DVR kamera kaydı zaman damgasıyla eşleştirilmiştir.</li>
                  <li>Kamera: <span className="text-white font-mono">{item.answers.q4_camera}</span></li>
                  <li>Sayım Odası IP: <span className="text-white font-mono">192.168.10.44</span></li>
                  <li>Kayıt Bütünlük Hash: <span className="text-blue-400 font-mono">sha256-a9b8c7e6f5d4...</span></li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: PRINTABLE MANIFEST */}
          {activeTab === 'print' && (
            <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl font-sans text-xs space-y-6 print-only-container">
              
              {/* Official Header */}
              <div className="flex justify-between items-center border-b-2 border-slate-900 pb-4">
                <div>
                  <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
                    HYS – HAZİNE VE DEĞERLİ LOJİSTİK OPERASYONLARI
                  </h1>
                  <h2 className="text-sm font-semibold text-slate-700">
                    KLİPS MÜHÜRLÜ TESLİM / TESLİMAT VE SAYIM TUTANAĞI
                  </h2>
                </div>
                <div className="text-right font-mono text-[11px]">
                  <p className="font-bold">TUTANAK NO: #TUT-{item.id.replace('KLP-', '')}</p>
                  <p>Tarih: {item.answers.q5_timestamp}</p>
                </div>
              </div>

              {/* 6 Questions Summary Table for Print */}
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
                  1. KLİPS SORGULAMA KARTLARI (6 TEMEL SORU YANITLARI)
                </h3>
                <div className="grid grid-cols-2 gap-3 text-[11px]">
                  <div className="p-2.5 bg-slate-100 rounded border border-slate-300">
                    <span className="font-bold text-slate-700 block">1. KIM TESLİM ALDI?</span>
                    <span>{item.answers.q1_receiver}</span>
                  </div>
                  <div className="p-2.5 bg-slate-100 rounded border border-slate-300">
                    <span className="font-bold text-slate-700 block">2. KIM TESLİM ETTİ?</span>
                    <span>{item.answers.q2_deliverer}</span>
                  </div>
                  <div className="p-2.5 bg-slate-100 rounded border border-slate-300">
                    <span className="font-bold text-slate-700 block">3. NEREDE SAYILDI?</span>
                    <span>{item.answers.q3_location} ({item.answers.q3_station})</span>
                  </div>
                  <div className="p-2.5 bg-slate-100 rounded border border-slate-300">
                    <span className="font-bold text-slate-700 block">4. KAMERA / KANAL</span>
                    <span>{item.answers.q4_camera} / {item.answers.q4_channel}</span>
                  </div>
                  <div className="p-2.5 bg-slate-100 rounded border border-slate-300">
                    <span className="font-bold text-slate-700 block">5. İŞLEM SAATİ</span>
                    <span>{item.answers.q5_timestamp}</span>
                  </div>
                  <div className="p-2.5 bg-slate-100 rounded border border-slate-300">
                    <span className="font-bold text-slate-700 block">6. KIM HAZIRLADI?</span>
                    <span>{item.answers.q6_preparer}</span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 pt-2 text-[11px]">
                <div>
                  <p><strong>Klips / Mühür No:</strong> {item.id}</p>
                  <p><strong>Barkod No:</strong> {item.barcode}</p>
                  <p><strong>İşlem Tipi:</strong> {item.processType}</p>
                </div>
                <div>
                  <p><strong>Toplam Tutar:</strong> {item.amount}</p>
                  <p><strong>Çanta / Ambalaj:</strong> {item.bagType}</p>
                  <p><strong>Hedef Nokta:</strong> {item.targetDestination}</p>
                </div>
              </div>

              {/* Signatures */}
              <div className="pt-8 border-t border-slate-400 grid grid-cols-3 gap-4 text-center text-[11px]">
                <div>
                  <p className="font-bold text-slate-800 mb-8">HAZIRLAYAN PERESONEL</p>
                  <p className="border-t border-slate-400 pt-1 font-semibold">{item.answers.q6_preparer.split(' (')[0]}</p>
                  <p className="text-[9px] text-slate-500">İmza / Dijital Onay</p>
                </div>

                <div>
                  <p className="font-bold text-slate-800 mb-8">TESLİM EDEN</p>
                  <p className="border-t border-slate-400 pt-1 font-semibold">{item.answers.q2_deliverer.split(' (')[0]}</p>
                  <p className="text-[9px] text-slate-500">İmza / Dijital Onay</p>
                </div>

                <div>
                  <p className="font-bold text-slate-800 mb-8">TESLİM ALAN</p>
                  <p className="border-t border-slate-400 pt-1 font-semibold">{item.answers.q1_receiver.split(' (')[0]}</p>
                  <p className="text-[9px] text-slate-500">İmza / Dijital Onay</p>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs no-print">
          <span className="text-slate-400 font-mono text-[11px]">
            HYS Klips Veri Tabanı Kaydı: Verified & Audit Locked
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all"
          >
            Kapat
          </button>
        </div>

      </div>
    </div>
  );
}
