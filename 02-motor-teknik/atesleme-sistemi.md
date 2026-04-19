# Ateşleme Sistemi

## Genel Bakış

MZ ETZ 251, üretim dönemine ve varyantına göre **iki farklı ateşleme sistemi** ile donatılmıştır:

1. **Elektronik Ateşleme** (Elektronische Zündung) — Standart (iç pazar, 1989+)
2. **Mekanik Ateşleme** (Unterbrecherzündung / Platinli) — Bazı ihracat varyantları

MZ'de elektronik ateşleme **1987** yılında ETZ 250e modeli ile tanıtılmış ve ETZ 251'de standart hale gelmiştir.

---

## 1. Elektronik Ateşleme (CDI / Thyristor)

### Çalışma Prensibi

```
  ELEKTRONİK ATEŞLEME SİSTEMİ — Sinyal Akış Şeması:

  ┌─────────────────────────────────────────────────────────────┐
  │                                                             │
  │ JENERATÖR (Lichtmaschine)                                   │
  │ ┌──────────────────────────┐                                │
  │ │  ╭─╮   ╭─╮   ╭─╮        │                                │
  │ │  │S│   │N│   │S│ Rotor  │  Krank mili döner →            │
  │ │  ╰─╯   ╰─╯   ╰─╯ (mıknatıs)  AC sinyal üretir          │
  │ │  ┌─┐   ┌─┐   ┌─┐        │                                │
  │ │  │ │   │ │   │ │ Stator │                                │
  │ │  │█│   │█│   │█│ (bobin)│                                │
  │ │  └─┘   └─┘   └─┘        │                                │
  │ └──────────┬──┬────────────┘                                │
  │            │  │                                             │
  │   Tetikleme│  │Güç                                          │
  │   sinyali  │  │beslemesi                                    │
  │            ▼  ▼                                             │
  │ ┌──────────────────────────┐                                │
  │ │  ELEKTRONİK KONTROL     │                                │
  │ │  ÜNİTESİ (Steuergerät)  │                                │
  │ │  ┌────────────────────┐  │                                │
  │ │  │ Tetikleme gelir →  │  │  "Doğru zamanda"              │
  │ │  │ Thyristor/SCR      │  │  kondansatörü boşaltarak      │
  │ │  │ ATEŞ emri verir    │  │  bobinin birincil devresine   │
  │ │  └────────────────────┘  │  yüksek akım gönderir         │
  │ └──────────┬───────────────┘                                │
  │            │                                                │
  │            │ Yüksek akım darbesi                            │
  │            ▼                                                │
  │ ┌──────────────────────────┐                                │
  │ │  ATEŞLEME BOBİNİ        │                                │
  │ │  (Zündspule)             │    Birincil: ~12V              │
  │ │  ┌──┐     ┌──────────┐  │    İkincil: ~20.000V           │
  │ │  │██│ ←── │██████████│  │                                │
  │ │  │██│1.dev│██████████│2.│    Transformatör prensibi:     │
  │ │  │██│ ──→ │██████████│  │    Düşük voltajı               │
  │ │  └──┘     └──────────┘  │    yüksek voltaja dönüştürür   │
  │ └──────────┬───────────────┘                                │
  │            │                                                │
  │            │ ~20.000V yüksek gerilim                        │
  │            ▼                                                │
  │ ┌──────────────────────────┐                                │
  │ │  BUJİ (Zündkerze)        │                                │
  │ │                          │                                │
  │ │     ──┐    ┌──           │  Elektrotlar arası ~0,5mm      │
  │ │       │    │             │  Yüksek voltaj → ark oluşumu   │
  │ │       └~★~┘             │  ★ = KIVILCIM → Tutuşma!      │
  │ │                          │                                │
  │ └──────────────────────────┘                                │
  └─────────────────────────────────────────────────────────────┘
```

### Sistem Bileşenleri

| Bileşen | Alm. Adı | İşlev |
|---|---|---|
| **Tetikleme bobini** | Gebersspule / Impulsgeber | Krank mili pozisyonunu algılar |
| **Elektronik kontrol ünitesi** | Steuergerät / Zündbox | Ateşleme zamanlamasını kontrol eder |
| **Ateşleme bobini** | Zündspule | Düşük voltajı yüksek voltaja dönüştürür |
| **Buji** | Zündkerze | Kıvılcım üretir |
| **Buji kablosu** | Zündkabel | Bobin-buji bağlantısı |
| **Buji başlığı** | Kerzenstecker | Kablo-buji bağlantısı (dirençli) |

### Avantajları (Platinli sisteme göre)

| Avantaj | Açıklama |
|---|---|
| **Bakım gerektirmez** | Platin aşınması yok, ayar gerekmez |
| **Kararlı zamanlama** | Ateşleme avansı sabit kalır |
| **Güçlü kıvılcım** | Daha yüksek voltaj → daha iyi tutuşma |
| **Uzun ömür** | Mekanik aşınma yok |
| **Kolay çalıştırma** | Düşük devirde bile güçlü kıvılcım |
| **Otomatik avans** | Devire bağlı avans ayarı elektronik olarak yapılır |

### Ateşleme Zamanlaması

| Parametre | Değer |
|---|---|
| **Ateşleme avansı** | ÜÖN'den ~1,8–2,2 mm önce (piston konumu) |
| **Avans açısı** | ~18°–22° BTDC (devire bağlı) |
| **Otomatik avans** | Elektronik kontrol ünitesinde entegre |

---

## 2. Mekanik Ateşleme (Platinli / Unterbrecherzündung)

### Çalışma Prensibi

```
┌──────────────┐    ┌──────────────────┐    ┌──────────────┐
│  Kam (Nocken) │───→│  Platin Kontağı  │───→│  Kondansatör │
│  Krank mili   │    │  (Unterbrecher)  │    │  (Kondensator)│
│  üzerinde     │    │  Açılır/Kapanır  │    └──────┬───────┘
└──────────────┘    └──────────────────┘           │
                                                    ↓
                    ┌──────────────────┐    ┌──────────────┐
                    │  Ateşleme Bobini │───→│  BUJİ        │
                    │  (Zündspule)      │    │  (Zündkerze)  │
                    │  Birincil devre   │    │  Kıvılcım!   │
                    │  kesilir →        │    └──────────────┘
                    │  İkincil devrede  │
                    │  yüksek voltaj    │
                    └──────────────────┘
```

### Sistem Bileşenleri

| Bileşen | Alm. Adı | İşlev |
|---|---|---|
| **Kam** | Nocken | Krank mili dönüşüyle platin kontağını açar |
| **Platin kontağı** | Unterbrecherkontakt | Birincil devreyi açar/kapar |
| **Kondansatör** | Kondensator | Platin kontağında ark oluşumunu önler |
| **Ateşleme bobini** | Zündspule | Voltaj yükseltir |
| **Buji** | Zündkerze | Kıvılcım üretir |
| **Avans mekanizması** | Fliehkraftverstellung | Santrifüj ağırlıklar ile devire bağlı avans |

### Platin Aralığı (Unterbrecherabstand)

```
  PLATİN KONTAĞI — Çalışma Prensibi:

  KAM (Nocken) krank mili üzerinde döner:

       KAPALI (kapalı devre)          AÇIK (açık devre = kıvılcım anı!)

            ╭─╮                              ╭─╮
      ──────┤ ├──── Sabit kol          ──────┤ ├──── Sabit kol
            │ │                              │ │
            │●│ ← Temas noktaları            │ │
            │ │    birbirine değiyor         │ │  ← 0,4 mm aralık
      ──────┤ ├──── Hareketli kol      ──────┤ ├──── Hareketli kol
            ╰─╯                              ╰┬╯
                                               │
            Kam düz kısımda              ╭──╮  │ ← Kam çıkıntısı
                                         │  ╰──┘    kolu açıyor
                                         ╰──╮
                                             │ Kam dönüş yönü →

  PLATİN ARALIĞI ÖLÇÜMÜ:

                    ┌── Sabit kol
                    │
       ─────────────┤
                    │
                    │ ←─── 0,35–0,45 mm
                    │      (Feeler gauge ile ölçülür)
       ─────────────┤
                    │
                    └── Hareketli kol
                    │
              ╭─────┘
              │ Kam çıkıntısı (en yüksek nokta)
```

| Parametre | Değer |
|---|---|
| **Platin aralığı** | 0,35–0,45 mm (nominal 0,4 mm) |
| **Kontrol aralığı** | Her 3000–5000 km |
| **Platin değişimi** | Aşındığında veya yandığında (tipik 10.000–15.000 km) |

### Mekanik Ateşleme Ayarı

1. **Silindir kapağını** ve **jeneratör kapağını** sökün
2. Krank milini **ÜÖN** (üst ölü nokta) konumuna getirin
3. Krank milini ÜÖN'den **geriye** (saat yönünün tersine) çevirerek piston konumunu ayarlayın
4. **Platin aralığını** 0,4 mm'ye feeler gauge ile ayarlayın
5. Ateşleme zamanlamasını kontrol edin (platin tam açılma noktası = ateşleme anı)
6. **Kontrol lambası** veya **multimetre** ile doğrulayın

---

## Buji (Zündkerze)

### Buji Yapısı — Görsel

```
  BUJİ (Zündkerze) — Kesit Görünüm:

    Buji Kablosu Bağlantısı
            │
      ╔═════╧═════╗
      ║  Terminal  ║ ← Buji başlığı (Kerzenstecker)
      ║   üst uç  ║    Dirençli tip (5 kΩ)
      ╠═══════════╣
      ║           ║
      ║  SERAMİK  ║ ← İzolatör (beyaz porselen)
      ║  İZOLATÖR ║    Yüksek voltajı izole eder
      ║           ║    Buji rengi burada okunur!
      ║           ║
      ╠═══════════╣
      ║  ┌─────┐  ║
      ║  │METAL│  ║ ← Gövde (çelik)
      ║  │GÖVDE│  ║    Altıgen anahtar boyutu: 21 mm
      ║  │ ██  │  ║
      ╠══╧═════╧══╣
      ║ ╔═══════╗ ║
      ║ ║ DİŞLİ ║ ║ ← M14 × 1,25 dişli
      ║ ║  KISIM║ ║    Tork: 20-25 Nm
      ║ ╚═══════╝ ║
      ╠═══════════╣
      ║           ║
      ║  ──┐ ┌── ║ ← Merkez elektrot (iç)
      ║    │ │    ║
      ║    │ │    ║
      ║    │★│    ║ ← KIVILCIM burada atlar
      ║    │ │    ║    Elektrot aralığı: 0,5–0,6 mm
      ║ ───┘ └──  ║ ← Toprak elektrot (dış, bükülmüş)
      ╚═══════════╝

  ELEKTROT ARALIĞI AYARI:

      Merkez elektrot (sabit)
           │
           │  ←── 0,5–0,6 mm ──→  Feeler gauge
           │                       ile ölçülür
      ─────┘
      Toprak elektrot
      (dikkatlice bükülerek ayarlanır)

      ⚠️ Sadece toprak elektrotu bükün!
         Merkez elektrota DOKUNMAYIN.
```

### Buji Spesifikasyonları

| Parametre | Değer |
|---|---|
| **Orijinal DDR Buji** | Isolator M14-260 |
| **Modern Eşdeğeri (NGK)** | B8ES veya B7ES |
| **Modern Eşdeğeri (Bosch)** | W3AC veya W4AC |
| **Modern Eşdeğeri (Champion)** | N3C veya N4C |
| **Vida çapı** | M14 × 1,25 |
| **Anahtar boyutu** | 20,8 mm (21 mm) |
| **Isı derecesi** | Orta (2 zamanlı motor için) |
| **Elektrot aralığı** | 0,5–0,6 mm |
| **Sıkma torku** | 20–25 Nm |

### Buji Durumu Okuma (Diagnoz)

Bujinin görünümü, motor durumu hakkında önemli bilgiler verir:

| Buji Görünümü | Anlam | Çözüm |
|---|---|---|
| **Açık kahverengi / ten rengi** | ✅ Normal, ideal yanma | Değişiklik gerekmez |
| **Siyah, kurum kaplı (kuru)** | Karışım çok zengin | Ana jikle küçült, hava filtresi kontrol |
| **Siyah, ıslak/yağlı** | Aşırı yağ veya düşük sıkıştırma | Yağ oranını kontrol, segmanları kontrol |
| **Beyaz / çok açık gri** | Karışım çok fakir → TEHLİKE | Hemen ana jikle büyült, hava kaçağı kontrol |
| **Elektrot erimiş** | Aşırı ısınma / detonasyon | Motor hemen durdur, nedeni araştır |
| **Kıvılcım yok** | Ateşleme arızası | Buji, kablo, bobin, platin/CDI kontrol |

### Buji Bakımı

| İşlem | Aralık |
|---|---|
| **Kontrol ve temizlik** | Her 2500–3000 km |
| **Elektrot aralığı kontrolü** | Her 2500–3000 km |
| **Değişim** | Her 5000–10.000 km (veya duruma göre) |

---

## Ateşleme Bobini (Zündspule)

| Parametre | Değer |
|---|---|
| **Konum** | Şasi üzerinde, silindir yakınında |
| **Birincil direnç** | ~0,5–2,0 Ω (sisteme bağlı) |
| **İkincil direnç** | ~5000–10.000 Ω |
| **Çıkış voltajı** | ~15.000–25.000 V |

### Bobin Arıza Belirtileri
- Zayıf veya düzensiz kıvılcım
- Motor rölantide titrer
- Yüksek devirde ateşleme kaçırma (misfire)
- Motor ısındığında durma
- Bobin aşırı ısınma

---

## Jeneratör ve Ateşleme Güç Kaynağı

ETZ 251'de ateşleme sistemi, **drehstrom lichtmaschine** (AC alternatör / jeneratör) tarafından beslenir:

| Parametre | Değer |
|---|---|
| **Tip** | Döner mıknatıslı AC jeneratör (Drehstromlichtmaschine) |
| **Nominal güç** | 180W |
| **Voltaj** | 12V |
| **Konum** | Motor gövdesinin sol tarafında |
| **Kapak** | Lichtmaschinendeckel (jeneratör kapağı) |

---

*Kaynak: KFT 1986/9, KFT 1988/8, MZ Betriebsanleitung, MZ Reparaturanleitung*

→ [Karbüratör](karburator.md) | [Soğutma Sistemi](sogutma-sistemi.md) | [Ateşleme Ayarı](../03-bakim/atesleme-ayari.md) | [Ana Sayfa](../README.md)
