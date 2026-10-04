import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ProcessSummaryCards from './components/ProcessSummaryCards';
import BarcodeScannerSimulator from './components/BarcodeScannerSimulator';
import QuestionCardSection from './components/QuestionCardSection';
import KlipsListTable from './components/KlipsListTable';
import KlipsDetailModal from './components/KlipsDetailModal';
import NewKlipsModal from './components/NewKlipsModal';
import CameraStreamSimulator from './components/CameraStreamSimulator';

import { initialKlipsData, PROCESS_TYPES } from './data/mockKlipsData';
import { ShieldCheck, Eye, Search, Layers, CheckCircle2, Info, Lock } from 'lucide-react';

export default function App() {
  const [klipsList, setKlipsList] = useState(() => {
    const saved = localStorage.getItem('hys_klips_data');
    return saved ? JSON.parse(saved) : initialKlipsData;
  });

  const [selectedProcess, setSelectedProcess] = useState('Tümü');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedKlips, setSelectedKlips] = useState(null);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);

  // Save to LocalStorage
  const updateKlipsList = (newList) => {
    setKlipsList(newList);
    localStorage.setItem('hys_klips_data', JSON.stringify(newList));
  };

  const handleResetData = () => {
    if (window.confirm("Tüm klips verilerini varsayılana sıfırlamak istediğinize emin misiniz?")) {
      updateKlipsList(initialKlipsData);
      setSelectedKlips(null);
    }
  };

  const handleAddKlips = (newRecord) => {
    const updated = [newRecord, ...klipsList];
    updateKlipsList(updated);
    setSelectedKlips(newRecord);
  };

  // Filtered List
  const filteredKlips = useMemo(() => {
    return klipsList.filter((item) => {
      const matchesProcess = selectedProcess === 'Tümü' || item.processType === selectedProcess;
      const term = searchTerm.toLowerCase().trim();
      if (!term) return matchesProcess;

      const matchesSearch = 
        item.id.toLowerCase().includes(term) ||
        item.barcode.includes(term) ||
        item.processType.toLowerCase().includes(term) ||
        item.answers.q1_receiver.toLowerCase().includes(term) ||
        item.answers.q2_deliverer.toLowerCase().includes(term) ||
        item.answers.q3_location.toLowerCase().includes(term) ||
        item.answers.q4_camera.toLowerCase().includes(term) ||
        item.answers.q6_preparer.toLowerCase().includes(term);

      return matchesProcess && matchesSearch;
    });
  }, [klipsList, selectedProcess, searchTerm]);

  // Featured / Active Selected Item (defaults to first match if searching)
  const activeDisplayedKlips = useMemo(() => {
    if (selectedKlips) return selectedKlips;
    if (searchTerm.trim() && filteredKlips.length > 0) return filteredKlips[0];
    return klipsList[0];
  }, [selectedKlips, searchTerm, filteredKlips, klipsList]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white pb-12">
      
      {/* Top Header */}
      <Header
        onOpenNewModal={() => setIsNewModalOpen(true)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onResetData={handleResetData}
        totalCount={klipsList.length}
      />

      {/* Main Container */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 pt-6 space-y-6 flex-1">
        
        {/* Verification Status Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 border border-blue-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                HYS KLİPS İŞLEM TAKİP SİSTEMİ – 6 TEMEL SORU UÇTAN UCA SORGULAMA
              </h2>
              <p className="text-xs text-slate-300">
                Talep devri, ATM yükleme/toplama, müşteri teslimatı/devri, kıymetli evrak, toplu sayım ve dış kaynak işlemleri klips bazlı izlenmektedir.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> 6 Soru Yanıtı Aktif
            </span>
          </div>
        </div>

        {/* Process Metric Cards */}
        <ProcessSummaryCards klipsList={klipsList} />

        {/* Barcode Scanner Quick Tool */}
        <BarcodeScannerSimulator
          onSelectByBarcode={(id) => {
            const found = klipsList.find(k => k.id === id);
            if (found) setSelectedKlips(found);
          }}
          klipsList={klipsList}
        />

        {/* FEATURED / SEARCHED KLİPS 6-QUESTIONS ANSWER PANEL */}
        {activeDisplayedKlips && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-extrabold text-slate-200 tracking-wider flex items-center gap-2 uppercase">
                <Lock className="w-4 h-4 text-blue-400" />
                SEÇİLİ KLİPS DETAY VE 6 TEMEL SORU KARTLARI
              </h2>
              <button
                onClick={() => setSelectedKlips(activeDisplayedKlips)}
                className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
              >
                <span>Tam Tutanağı & Zaman Çizelgesini Aç →</span>
              </button>
            </div>

            <QuestionCardSection
              item={activeDisplayedKlips}
              onShowCamera={() => setSelectedKlips(activeDisplayedKlips)}
            />
          </section>
        )}

        {/* ALL TRACKED KLIPS DATA TABLE */}
        <section className="pt-2">
          <KlipsListTable
            klipsList={filteredKlips}
            selectedProcess={selectedProcess}
            setSelectedProcess={setSelectedProcess}
            processTypes={PROCESS_TYPES}
            onSelectKlips={(item) => setSelectedKlips(item)}
            searchTerm={searchTerm}
          />
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-900 py-6 text-center text-xs text-slate-400 font-mono">
        <p>HYS – Hazine Operasyon & Kıymetli Lojistik Yönetimi | Klips Takip Mimarisi © 2026</p>
      </footer>

      {/* MODALS */}
      <KlipsDetailModal
        item={selectedKlips}
        onClose={() => setSelectedKlips(null)}
      />

      <NewKlipsModal
        isOpen={isNewModalOpen}
        onClose={() => setIsNewModalOpen(false)}
        onAddKlips={handleAddKlips}
      />

    </div>
  );
}
