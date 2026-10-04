import React, { useState } from 'react';
import { 
  X, 
  PlusCircle, 
  ShieldCheck, 
  Barcode, 
  UserCheck, 
  UserMinus, 
  MapPin, 
  Camera, 
  Clock, 
  DollarSign, 
  Building2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PROCESS_TYPES } from '../data/mockKlipsData';

export default function NewKlipsModal({ isOpen, onClose, onAddKlips }) {
  if (!isOpen) return null;

  const availableProcesses = PROCESS_TYPES.filter(p => p !== 'Tümü');

  const [formData, setFormData] = useState({
    id: `KLP-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    barcode: `869${Math.floor(1000000000 + Math.random() * 9000000000)}`,
    processType: 'ATM Yükleme',
    status: 'Tamamlandı',
    amount: '1,500,000 TRY',
    denomBreakdown: '200 TL x 7500',
    targetDestination: 'Kadıköy Şubesi ATM #201',
    bagType: 'Zırhlı Kaset Çantası (Mühürlü)',

    // 6 Temel Soru Girdileri
    q1_receiver: 'Ahmet Yılmaz (Saha Kurye Lideri - Sicil: #7842)',
    q1_receiver_dept: 'Bileşim Lojistik Saha Ekibi',
    q1_receiver_sig: 'Verified / Dijital İmzalı',

    q2_deliverer: 'Mehmet Demir (Merkez Vezne Sorumlusu - Sicil: #4102)',
    q2_deliverer_dept: 'HYS Genel Merkez Veznesi',
    q2_deliverer_sig: 'Verified / SmartCard',

    q3_location: 'Genel Merkez Ana Vezne / Otomatik Sayım Odası #1',
    q3_station: 'Sayım Masası #02',
    q3_machine: 'Glory Nifty-9000 Banknot Sayacı',

    q4_camera: 'CAM-VAULT-02 (Sayım Masası 2 HD Kamera)',
    q4_channel: 'DVR-Kanal #04 (Zaman Damgalı Kayıt ID: #REC-LIVE-01)',
    q4_videoTimestamp: '2026-09-24 17:30:00 - 17:42:00',

    q5_timestamp: `${new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })} - Saat ${new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })} (TSİ)`,
    q5_duration: '12 dakika 30 saniye',

    q6_preparer: 'Zeynep Kaya (Kasa Hazırlama Uzmanı - Sicil: #3319)',
    q6_preparer_dept: 'HYS Kaset & Klips Hazırlama Birimi'
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerateNewId = () => {
    const newNum = Math.floor(1000 + Math.random() * 9000);
    setFormData(prev => ({
      ...prev,
      id: `KLP-2026-${newNum}`,
      barcode: `869${Math.floor(1000000000 + Math.random() * 9000000000)}`
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      id: formData.id,
      barcode: formData.barcode,
      processType: formData.processType,
      status: formData.status,
      amount: formData.amount,
      denomBreakdown: formData.denomBreakdown,
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
      targetDestination: formData.targetDestination,
      bagType: formData.bagType,

      answers: {
        q1_receiver: formData.q1_receiver,
        q1_receiver_dept: formData.q1_receiver_dept,
        q1_receiver_sig: formData.q1_receiver_sig,

        q2_deliverer: formData.q2_deliverer,
        q2_deliverer_dept: formData.q2_deliverer_dept,
        q2_deliverer_sig: formData.q2_deliverer_sig,

        q3_location: formData.q3_location,
        q3_station: formData.q3_station,
        q3_machine: formData.q3_machine,

        q4_camera: formData.q4_camera,
        q4_channel: formData.q4_channel,
        q4_videoTimestamp: formData.q4_videoTimestamp,

        q5_timestamp: formData.q5_timestamp,
        q5_duration: formData.q5_duration,

        q6_preparer: formData.q6_preparer,
        q6_preparer_dept: formData.q6_preparer_dept
      },

      timeline: [
        {
          step: "Yeni Klips Girişi ve Sayım Kaydı",
          user: formData.q6_preparer,
          time: new Date().toISOString().replace('T', ' ').substring(0, 19),
          detail: `${formData.processType} için klips mühürlendi ve HYS sistemine kaydedildi.`,
          location: formData.q3_location
        }
      ]
    };

    onAddKlips(newRecord);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative text-slate-100">
        
        {/* Modal Header */}
        <div className="p-5 bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
              <PlusCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">YENİ HYS KLİPS İŞLEM KAYDI OLUŞTUR</h2>
              <p className="text-xs text-slate-300">Klips numarası üzerinden 6 temel sorunun uçtan uca veri girişi</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Section 1: Klips & Process Basics */}
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                <Barcode className="w-4 h-4" /> Temel Klips & Süreç Bilgileri
              </h3>
              <button
                type="button"
                onClick={handleGenerateNewId}
                className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-mono"
              >
                <Sparkles className="w-3.5 h-3.5" /> Yeni Klips No Üret
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Klips Numarası (ID)</label>
                <input
                  type="text"
                  required
                  value={formData.id}
                  onChange={(e) => handleChange('id', e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm font-mono text-blue-400 font-bold focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Barkod Numarası</label>
                <input
                  type="text"
                  required
                  value={formData.barcode}
                  onChange={(e) => handleChange('barcode', e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm font-mono text-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">İşlem Türü (Süreç)</label>
                <select
                  value={formData.processType}
                  onChange={(e) => handleChange('processType', e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm font-semibold text-white focus:outline-none focus:border-blue-500"
                >
                  {availableProcesses.map((proc, idx) => (
                    <option key={idx} value={proc}>{proc}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Toplam Tutar / Kupür</label>
                <input
                  type="text"
                  required
                  value={formData.amount}
                  onChange={(e) => handleChange('amount', e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm font-semibold text-emerald-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Hedef Lokasyon</label>
                <input
                  type="text"
                  required
                  value={formData.targetDestination}
                  onChange={(e) => handleChange('targetDestination', e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Çanta & Mühür Tipi</label>
                <input
                  type="text"
                  value={formData.bagType}
                  onChange={(e) => handleChange('bagType', e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Section 2: 6 Mandatory Questions Inputs */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> 6 Temel Soru Yanıt Girişleri
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Q1 */}
              <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-blue-500/30 space-y-2">
                <label className="text-xs font-bold text-blue-300 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4" /> 1. Kim teslim aldı?
                </label>
                <input
                  type="text"
                  required
                  value={formData.q1_receiver}
                  onChange={(e) => handleChange('q1_receiver', e.target.value)}
                  placeholder="Teslim alan ad, unvan ve sicil"
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white"
                />
                <input
                  type="text"
                  value={formData.q1_receiver_dept}
                  onChange={(e) => handleChange('q1_receiver_dept', e.target.value)}
                  placeholder="Birim / Şube / Firma"
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-400"
                />
              </div>

              {/* Q2 */}
              <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-purple-500/30 space-y-2">
                <label className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                  <UserMinus className="w-4 h-4" /> 2. Kim teslim etti?
                </label>
                <input
                  type="text"
                  required
                  value={formData.q2_deliverer}
                  onChange={(e) => handleChange('q2_deliverer', e.target.value)}
                  placeholder="Teslim eden ad, unvan ve sicil"
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white"
                />
                <input
                  type="text"
                  value={formData.q2_deliverer_dept}
                  onChange={(e) => handleChange('q2_deliverer_dept', e.target.value)}
                  placeholder="Birim / Vezne"
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-400"
                />
              </div>

              {/* Q3 */}
              <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-emerald-500/30 space-y-2">
                <label className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> 3. Nerede sayıldı?
                </label>
                <input
                  type="text"
                  required
                  value={formData.q3_location}
                  onChange={(e) => handleChange('q3_location', e.target.value)}
                  placeholder="Sayım Odası / Lokasyon"
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white"
                />
                <input
                  type="text"
                  value={formData.q3_station}
                  onChange={(e) => handleChange('q3_station', e.target.value)}
                  placeholder="Sayım Masası # / Makine"
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-400"
                />
              </div>

              {/* Q4 */}
              <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-amber-500/30 space-y-2">
                <label className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <Camera className="w-4 h-4" /> 4. Hangi kanal/kamera ile ilişkili?
                </label>
                <input
                  type="text"
                  required
                  value={formData.q4_camera}
                  onChange={(e) => handleChange('q4_camera', e.target.value)}
                  placeholder="Kamera ID & İsim"
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white"
                />
                <input
                  type="text"
                  value={formData.q4_channel}
                  onChange={(e) => handleChange('q4_channel', e.target.value)}
                  placeholder="DVR Kanal Kayıt Ref"
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-400"
                />
              </div>

              {/* Q5 */}
              <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-cyan-500/30 space-y-2">
                <label className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> 5. İşlem hangi saatte yapıldı?
                </label>
                <input
                  type="text"
                  required
                  value={formData.q5_timestamp}
                  onChange={(e) => handleChange('q5_timestamp', e.target.value)}
                  placeholder="Tarih & Saat"
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white"
                />
                <input
                  type="text"
                  value={formData.q5_duration}
                  onChange={(e) => handleChange('q5_duration', e.target.value)}
                  placeholder="İşlem Süresi"
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-400"
                />
              </div>

              {/* Q6 */}
              <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-rose-500/30 space-y-2">
                <label className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> 6. Kim hazırladı?
                </label>
                <input
                  type="text"
                  required
                  value={formData.q6_preparer}
                  onChange={(e) => handleChange('q6_preparer', e.target.value)}
                  placeholder="Hazırlayan Uzman & Sicil"
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white"
                />
                <input
                  type="text"
                  value={formData.q6_preparer_dept}
                  onChange={(e) => handleChange('q6_preparer_dept', e.target.value)}
                  placeholder="Kasa / Hazırlama Birimi"
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-400"
                />
              </div>

            </div>
          </div>

          {/* Submit Buttons */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl text-xs transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl text-xs shadow-lg shadow-blue-500/20 flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Klips Kaydını Tamamla & Kaydet</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
