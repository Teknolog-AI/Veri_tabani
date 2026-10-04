export const initialKlipsData = [
  {
    id: "KLP-2026-9041",
    barcode: "8699041002931",
    processType: "ATM Yükleme",
    status: "Tamamlandı",
    amount: "1,250,000 TRY",
    denomBreakdown: "200 TL x 5000, 100 TL x 2500",
    createdAt: "2026-09-24 14:15:30",
    
    // 6 Kritik Soru Yanıtları
    answers: {
      q1_receiver: "Ahmet Yılmaz (Saha Kurye Lideri - Sicil: #7842)",
      q1_receiver_dept: "Bileşim Lojistik / Sahadaki Devir Birimi",
      q1_receiver_sig: "Verified / Dijital İmzalı (Biyometrik)",
      
      q2_deliverer: "Mehmet Demir (Merkez Vezne Sorumlusu - Sicil: #4102)",
      q2_deliverer_dept: "HYS Genel Merkez Ana Kasa Veznesi",
      q2_deliverer_sig: "Verified / Dijital İmzalı (SmartCard)",
      
      q3_location: "Genel Merkez Ana Vezne / Otomatik Banknot Sayım Odası #2",
      q3_station: "Sayım Masası #04 - Deşifre/Kaset Odası",
      q3_machine: "Glory Nifty-9000 Banknot Sayım Sayacı",
      
      q4_camera: "CAM-ATM-VAULT-04 (Sayım Masası 4 Geniş Açı Full HD)",
      q4_channel: "DVR-Kanal #08 (Zaman Damgalı Kayıt ID: #REC-20260924-884)",
      q4_videoTimestamp: "2026-09-24 14:02:10 - 14:15:25",
      
      q5_timestamp: "24 Eylül 2026 - Saat 14:15:30 (TSİ)",
      q5_duration: "13 dakika 20 saniye",
      
      q6_preparer: "Zeynep Kaya (Kasa Hazırlama Uzmanı - Sicil: #3319)",
      q6_preparer_dept: "HYS Kaset & Klips Hazırlama Birimi"
    },

    targetDestination: "ATM #4021 - Levent Büyükdere Cad. Şubesi Dış ATM",
    bagType: "Zırhlı Kaset Çantası (Tam Mühürlü)",
    timeline: [
      { step: "Klips & Kaset Hazırlığı", user: "Zeynep Kaya (#3319)", time: "2026-09-24 13:45:00", detail: "Kaset dolduruldu, Klips KLP-2026-9041 ile kilitlendi.", location: "Hazırlama Birimi" },
      { step: "Otomatik Sayım & Doğrulama", user: "Mehmet Demir (#4102)", time: "2026-09-24 14:02:10", detail: "Glory Nifty-9000 ile sayım tamamlandı, kamera CAM-04 kayıtta.", location: "Sayım Odası #2" },
      { step: "Vezne Devri & Çıkış Mühürü", user: "Mehmet Demir -> Ahmet Yılmaz", time: "2026-09-24 14:15:30", detail: "Zırhlı araca teslim edildi. Çift taraflı dijital imza alındı.", location: "Lojistik Yükleme Peronu" },
      { step: "ATM Yükleme Tamamlandı", user: "Ahmet Yılmaz (#7842)", time: "2026-09-24 15:40:12", detail: "ATM #4021 kaset yuvasına yerleştirildi, mühür kırıldı & doğrulandı.", location: "Levent Şubesi ATM" }
    ]
  },

  {
    id: "KLP-2026-5120",
    barcode: "8695120008472",
    processType: "Müşteri Teslimatı",
    status: "Yolda (Transit)",
    amount: "450,000 USD",
    denomBreakdown: "100 USD x 4500",
    createdAt: "2026-09-24 16:30:10",

    answers: {
      q1_receiver: "Mustafa Çelik (Kurumsal Müşteri Temsilcisi - ABC Lojistik A.Ş.)",
      q1_receiver_dept: "ABC Lojistik Genel Merkez Finans Departmanı",
      q1_receiver_sig: "Bekliyor (Saha Teslim Anında Alınacak)",
      
      q2_deliverer: "Ali Rıza Şahin (Kıymetli Kurye Uzmanı - Sicil: #9011)",
      q2_deliverer_dept: "Zırhlı Lojistik Ekibi #03",
      q2_deliverer_sig: "Verified / Mobil Terminal Onaylı",
      
      q3_location: "Şişli Merkez Şubesi / Döviz Kasası Odası",
      q3_station: "Kambiyo Veznesi #01",
      q3_machine: "De La Rue 2650 Döviz Sayım Cihazı",
      
      q4_camera: "CAM-FX-VAULT-01 (Kambiyo Kasası İçi Döviz Odası)",
      q4_channel: "DVR-Kanal #03 (Zaman Damgalı Kayıt ID: #REC-20260924-112)",
      q4_videoTimestamp: "2026-09-24 16:10:00 - 16:28:40",
      
      q5_timestamp: "24 Eylül 2026 - Saat 16:30:10 (TSİ)",
      q5_duration: "18 dakika 40 saniye",
      
      q6_preparer: "Deniz Arslan (Döviz Veznedarı - Sicil: #5510)",
      q6_preparer_dept: "HYS Şişli Şubesi Hazine Veznesi"
    },

    targetDestination: "ABC Lojistik A.Ş. - Maslak Plaza",
    bagType: "Yüksek Güvenlikli Kurşun Geçirmez Güvenlik Torbası",
    timeline: [
      { step: "Döviz Sayımı & Paketleme", user: "Deniz Arslan (#5510)", time: "2026-09-24 16:10:00", detail: "450.000 USD sayılarak mühürlendi. Kamera CAM-FX-01 aktif.", location: "Şişli Kambiyo Kasası" },
      { step: "Kuryeye Teslim", user: "Deniz Arslan -> Ali Rıza Şahin", time: "2026-09-24 16:30:10", detail: "Zırhlı kurye çantayı teslim aldı, mobil onay verildi.", location: "Şişli Şubesi Zırhlı Peron" },
      { step: "Transit Sevkiyat", user: "Ali Rıza Şahin (#9011)", time: "2026-09-24 16:45:00", detail: "Araç Maslak yönüne hareket etti. GPS Takip aktif.", location: "Maslak Yolu" }
    ]
  },

  {
    id: "KLP-2026-3391",
    barcode: "8693391001209",
    processType: "Toplu Sayım",
    status: "Tamamlandı",
    amount: "8,750,000 TRY",
    denomBreakdown: "Karışık Kupür (200, 100, 50, 20 TL)",
    createdAt: "2026-09-24 09:10:00",

    answers: {
      q1_receiver: "Canan Yılmaz (Nakit Operasyon Lideri - Sicil: #1105)",
      q1_receiver_dept: "HYS Bölge Operasyon Merkezi - Toplu Sayım Odası",
      q1_receiver_sig: "Verified / Sistem Giriş Onaylı",
      
      q2_deliverer: "Grup Lojistik A.Ş. (Toplu Zırhlı Getiri Ekibi)",
      q2_deliverer_dept: "Dış Kaynak Nakit Toplama Ekibi #12",
      q2_deliverer_sig: "Verified / İrsaliye Kodlu İmzalı",
      
      q3_location: "Anadolu Bölge Operasyon Merkezi / Yüksek Kapasiteli Sayım Odası",
      q3_station: "Sayım Hattı #A3 (BPS C4 Otomatik Ayıklama)",
      q3_machine: "Giesecke+Devrient BPS C4 Banknot İnceleme Makinesi",
      
      q4_camera: "CAM-BULK-LINE-A3 (Sayım Hattı A3 4K Tepe Kamerası)",
      q4_channel: "DVR-Kanal #14 (Zaman Damgalı Kayıt ID: #REC-20260924-044)",
      q4_videoTimestamp: "2026-09-24 09:15:00 - 10:45:00",
      
      q5_timestamp: "24 Eylül 2026 - Saat 09:10:00 (TSİ)",
      q5_duration: "1 saat 35 dakika",
      
      q6_preparer: "Fatma Şahin (Başveznedar - Sicil: #2041)",
      q6_preparer_dept: "HYS Bölge Hazine Sayım Ekibi"
    },

    targetDestination: "HYS Genel Merkez Ana Tonoz (Vault)",
    bagType: "Toplu Sayım Çelik Konteynırı & Çift Mühür",
    timeline: [
      { step: "Toplu Araç Kabulü", user: "Grup Lojistik Ekibi", time: "2026-09-24 08:50:00", detail: "Ana tona teslim edilen 12 torba toplu sayım alanına alındı.", location: "Güvenlikli Mal Kabul" },
      { step: "Klips Açma & Sayım", user: "Canan Yılmaz (#1105)", time: "2026-09-24 09:10:00", detail: "BPS C4 makinesinde sahte, yıpranmış ve kupür ayrımı yapıldı.", location: "Sayım Hattı #A3" },
      { step: "Tutanak & Tonoza Aktarım", user: "Fatma Şahin (#2041)", time: "2026-09-24 10:45:00", detail: "Sayım farkı 0.00 TL ile tamamlandı. Tonoza mühürlü aktarıldı.", location: "Ana Tonoz" }
    ]
  },

  {
    id: "KLP-2026-1048",
    barcode: "8691048007712",
    processType: "Dış Kaynak İşlemleri",
    status: "Devir Bekliyor",
    amount: "3,100,000 TRY",
    denomBreakdown: "200 TL x 15500",
    createdAt: "2026-09-24 17:05:44",

    answers: {
      q1_receiver: "Bekleniyor (Prosecur Lojistik Temsilcisi)",
      q1_receiver_dept: "Prosecur CIT Zırhlı Taşıma Servisi",
      q1_receiver_sig: "Bekliyor (Güvenlik Kodu ile Onaylanacak)",
      
      q2_deliverer: "Burak Eren (Vezne Yetkilisi - Sicil: #6290)",
      q2_deliverer_dept: "HYS Kadıköy Şubesi Operasyon Servisi",
      q2_deliverer_sig: "Verified / Sistem Beklemede",
      
      q3_location: "Kadıköy Şubesi / Şube İçi Alt Tonoz Odası",
      q3_station: "Vezne #02 (Kadıköy Sayım Masası)",
      q3_machine: "Glory USF-300 Banknot Sayım Cihazı",
      
      q4_camera: "CAM-KADIKOY-VAULT-02 (Tonoz İçi Güvenlik Kamerası)",
      q4_channel: "DVR-Kanal #05 (Zaman Damgalı Kayıt ID: #REC-20260924-901)",
      q4_videoTimestamp: "2026-09-24 16:50:00 - 17:04:00",
      
      q5_timestamp: "24 Eylül 2026 - Saat 17:05:44 (TSİ)",
      q5_duration: "14 dakika 00 saniye",
      
      q6_preparer: "Burak Eren (Vezne Yetkilisi - Sicil: #6290)",
      q6_preparer_dept: "HYS Kadıköy Şube Veznesi"
    },

    targetDestination: "Merkez Bankası İptal/Takas Deposu",
    bagType: "Dış Kaynak Standart Güvenlik Çantası",
    timeline: [
      { step: "Klips Hazırlığı & Paketleme", user: "Burak Eren (#6290)", time: "2026-09-24 16:50:00", detail: "3.1M TL sayılarak KLP-2026-1048 klipsi ile mühürlendi.", location: "Kadıköy Şube Veznesi" },
      { step: "Dış Kaynak Bildirimi Sent", user: "Sistem Otomasyonu", time: "2026-09-24 17:05:44", detail: "Prosecur firmasına zırhlı kurye talebi gönderildi.", location: "Kadıköy Vezne Kasası" }
    ]
  },

  {
    id: "KLP-2026-7782",
    barcode: "8697782003310",
    processType: "Kıymetli Evrak İşlemleri",
    status: "Tamamlandı",
    amount: "15 Adet Teminat Mektubu / Çek Koçanı",
    denomBreakdown: "Teminat Mektupları & Hazine Bonosu Evrakı",
    createdAt: "2026-09-24 11:20:00",

    answers: {
      q1_receiver: "Ebru Güneş (Arşiv & Değerli Evrak Yöneticisi - Sicil: #8190)",
      q1_receiver_sig: "Verified / Biyometrik İmza",
      q1_receiver_dept: "HYS Genel Merkez Kıymetli Evrak Arşivi",
      
      q2_deliverer: "Serkan Vural (Özel Kurye - Sicil: #4401)",
      q2_deliverer_dept: "Saha Değerli Evrak Taşıma Ekibi",
      q2_deliverer_sig: "Verified / Tablet İmza",
      
      q3_location: "Genel Merkez Kıymetli Evrak Kabul Odası",
      q3_station: "Evrak İnceleme & Barkodlama Masası #01",
      q3_machine: "Zebra DS2208 Barkod Okuyucu & Ultra-Violet Tarayıcı",
      
      q4_camera: "CAM-DOC-ARCHIVE-01 (Evrak Kabul Masası HD Kamera)",
      q4_channel: "DVR-Kanal #11 (Zaman Damgalı Kayıt ID: #REC-20260924-411)",
      q4_videoTimestamp: "2026-09-24 11:05:00 - 11:18:00",
      
      q5_timestamp: "24 Eylül 2026 - Saat 11:20:00 (TSİ)",
      q5_duration: "13 dakika 00 saniye",
      
      q6_preparer: "Oğuzhan Tekin (Krediler Operasyon Şefi - Sicil: #1982)",
      q6_preparer_dept: "HYS Kurumsal Krediler Operasyonu"
    },

    targetDestination: "Genel Merkez Yangına Dayanıklı Özel Tonoz A-12",
    bagType: "Nem ve Isıya Dayanıklı Mühürlü Evrak Çantası",
    timeline: [
      { step: "Evrak Kontrolü & Klipsleme", user: "Oğuzhan Tekin (#1982)", time: "2026-09-24 10:30:00", detail: "15 adet teminat mektubu incelendi, KLP-2026-7782 takıldı.", location: "Kurumsal Krediler" },
      { step: "Kurye Teslimi", user: "Serkan Vural (#4401)", time: "2026-09-24 11:00:00", detail: "Evrak kuryeye teslim edildi.", location: "Kurye Peronu" },
      { step: "Arşiv Kabul & Tonoz Girişi", user: "Ebru Güneş (#8190)", time: "2026-09-24 11:20:00", detail: "Arşiv tonozu A-12 kasasına kilitlendi.", location: "Kıymetli Evrak Arşivi" }
    ]
  },

  {
    id: "KLP-2026-4409",
    barcode: "8694409006623",
    processType: "ATM Toplama",
    status: "Tamamlandı",
    amount: "890,400 TRY",
    denomBreakdown: "ATM'den Toplanan İade/İptal Kasetleri",
    createdAt: "2026-09-24 18:22:10",

    answers: {
      q1_receiver: "Mehmet Demir (Merkez Vezne Sorumlusu - Sicil: #4102)",
      q1_receiver_dept: "HYS Genel Merkez Kasa Odası",
      q1_receiver_sig: "Verified / SmartCard Onaylı",
      
      q2_deliverer: "Ahmet Yılmaz (Saha Kurye Lideri - Sicil: #7842)",
      q2_deliverer_dept: "Bileşim Lojistik Saha Ekibi",
      q2_deliverer_sig: "Verified / Biyometrik İmza",
      
      q3_location: "Genel Merkez Ana Vezne / ATM Kaset Boşaltma Odası",
      q3_station: "Sayım & Ayıklama Masası #02",
      q3_machine: "Kisan Newton-3 Banknot Sayıcı",
      
      q4_camera: "CAM-ATM-RECOVER-02 (Kaset Boşaltma Masası 2)",
      q4_channel: "DVR-Kanal #09 (Zaman Damgalı Kayıt ID: #REC-20260924-672)",
      q4_videoTimestamp: "2026-09-24 18:05:00 - 18:20:00",
      
      q5_timestamp: "24 Eylül 2026 - Saat 18:22:10 (TSİ)",
      q5_duration: "17 dakika 10 saniye",
      
      q6_preparer: "Ahmet Yılmaz (Saha Kurye Lideri - Sicil: #7842)",
      q6_preparer_dept: "Saha ATM Toplama Ekibi"
    },

    targetDestination: "Genel Merkez Ana Vezne Toplam Hesabı",
    bagType: "Geri Toplama Zırhlı Kaset Klipsli Çantası",
    timeline: [
      { step: "ATM'den Kaset Sökümü", user: "Ahmet Yılmaz (#7842)", time: "2026-09-24 17:15:00", detail: "Kadıköy Rıhtım ATM #1002 kasetleri çıkarıldı, klips takıldı.", location: "Kadıköy Rıhtım ATM" },
      { step: "Merkez Vezneye Teslim", user: "Mehmet Demir (#4102)", time: "2026-09-24 18:22:10", detail: "Kasetler boşaltıldı, mutabakat sağlandı.", location: "ATM Kaset Boşaltma Odası" }
    ]
  }
];

export const PROCESS_TYPES = [
  "Tümü",
  "Talep Devri",
  "ATM Yükleme",
  "ATM Toplama",
  "Müşteri Teslimatı",
  "Müşteri Devri",
  "Kıymetli Evrak İşlemleri",
  "Toplu Sayım",
  "Dış Kaynak İşlemleri"
];

export const CORE_QUESTIONS = [
  { id: 1, key: "q1_receiver", label: "Kim teslim aldı?", icon: "UserCheck", color: "from-blue-500 to-indigo-600" },
  { id: 2, key: "q2_deliverer", label: "Kim teslim etti?", icon: "UserMinus", color: "from-purple-500 to-pink-600" },
  { id: 3, key: "q3_location", label: "Nerede sayıldı?", icon: "MapPin", color: "from-emerald-500 to-teal-600" },
  { id: 4, key: "q4_camera", label: "Hangi kanal veya kamera ile ilişkili?", icon: "Camera", color: "from-amber-500 to-orange-600" },
  { id: 5, key: "q5_timestamp", label: "İşlem hangi saatte yapıldı?", icon: "Clock", color: "from-cyan-500 to-blue-600" },
  { id: 6, key: "q6_preparer", label: "Kim hazırladı?", icon: "ShieldCheck", color: "from-rose-500 to-red-600" }
];
