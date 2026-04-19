# Piston Tutması — Kolbenklemmer

## Tanım

**Kolbenklemmer** (piston tutması / piston seizure), 2 zamanlı motorlarda en korkulan arızalardan biridir. Piston, aşırı ısınma nedeniyle silindir duvarına yapışır ve motor **aniden durur**.

---

## MZ ETZ Serisinde Kolbenklemmer Geçmişi

### Tarihsel Arka Plan

MZ ETZ 250'nin (1981) piyasaya çıkışından sonra ciddi bir Kolbenklemmer sorunu yaşanmıştır:

| Dönem | Durum |
|---|---|
| **1981–1982** | ETZ 250 piyasaya çıkışı, 4 kanal ters süpürme sistemi tanıtımı |
| **~1982** | **970 adet şikâyet** yaklaşık 7000 üniteden — Kolbenklemmer |
| **Kilometrede** | Genellikle **4000–6000 km** civarında |
| **Neden (tespit edilen)** | Silindir-piston termal genleşme uyumsuzluğu |
| **Çözüm** | Piston-silindir boşluk toleransları yeniden hesaplandı |

### Ne Olmuştu?

MZ mühendisleri, yeni 4 kanal ters süpürme silindir tasarımında:
- Silindir ve piston **farklı oranlarda** termal genleşme gösteriyordu
- Belirli çalışma koşullarında piston, silindirden daha fazla genleşiyordu
- Piston-silindir boşluğu **yeterli değildi**
- Sonuç: Piston silindir duvarına yapışıyordu

### Çözüm

MZ, toleransları revize ederek sorunu büyük ölçüde çözmüştür. ETZ 251 (1989+) bu düzeltilmiş toleranslara sahiptir, ancak Kolbenklemmer riski hiçbir 2 zamanlı motorda tamamen ortadan kalkmaz.

---

## Kolbenklemmer Nasıl Oluşur?

```
  PİSTON TUTMASI (Kolbenklemmer) — Aşama Aşama:

  1. NORMAL               2. ISINIYOR            3. TEHLİKE!           4. TUTULMA!
  (Soğuk/normal)          (Aşırı ısınma)        (Boşluk azalıyor)    (Motor durur)

  ┌──────────┐           ┌──────────┐          ┌──────────┐          ┌──────────┐
  │Silindir  │           │Silindir  │          │Silindir  │          │Silindir  │
  │          │           │          │          │          │          │          │
  │ ┌──────┐ │           │ ┌──────┐ │          │ ┌══════┐ │          │ ╔══════╗ │
  │ │      │ │           │ │ ░░░░ │ │          │ │▓▓▓▓▓▓│ │          │ ║██████║ │
  │ │Piston│ │           │ │Piston│ │          │ │Piston│ │          │ ║Piston║ │
  │ │  ↕   │ │           │ │  ↕   │ │          │ │  ↕   │ │          │ ║  ██  ║ │
  │ │      │ │           │ │ ░░░░ │ │          │ │▓▓▓▓▓▓│ │          │ ║██████║ │
  │ └──────┘ │           │ └──────┘ │          │ └══════┘ │          │ ╚══════╝ │
  │  ↔ boşluk│           │ ↔ boşluk↔│          │↔dar↔     │          │ boşluk=0 │
  └──────────┘           └──────────┘          └──────────┘          └──────────┘
  Boşluk: 0,04-0,06mm   Piston genleşir       Yağ filmi incelir     YAPIŞMA!
  Yağ filmi sağlam       Boşluk azalır         Metal-metal temas     Motor DURUR

  ═══════════════════════════════════════════════════════════════════════════

  KOLBENKLEMMER NEDENLERİ — Akış Şeması:

  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
  │ FAKİR KARIŞIM   │  │ YETERSİZ YAĞLAMA│  │ AŞIRI YÜK       │
  │                 │  │                 │  │                 │
  │ • Hava kaçağı   │  │ • Yanlış yağ    │  │ • Uzun süre     │
  │ • Küçük jikle   │  │   oranı         │  │   tam gaz       │
  │ • Tıkalı jikle  │  │ • Yağsız yakıt  │  │ • Yokuş çıkışı │
  │ • Karbüratör    │  │ • Yağ pompası   │  │ • Yüksek sıcak  │
  │   ayar bozuk    │  │   arızası       │  │   hava + tam gaz│
  └────────┬────────┘  └────────┬────────┘  └────────┬────────┘
           │                    │                     │
           └────────────────────┼─────────────────────┘
                                │
                       ┌────────▼────────┐
                       │  AŞIRI ISINMA   │
                       │  → PİSTON       │
                       │    GENLEŞMESİ   │
                       │  → KOLBENKLEMMER │
                       └─────────────────┘
```

### Adım Adım

1. **Aşırı ısınma** → Piston, silindir duvarından daha hızlı genleşir
2. **Boşluk azalır** → Yağ filmi incelir
3. **Metal-metal temas** → Sürtünme artar → Daha fazla ısı
4. **Kısmi yapışma** → Motor güç kaybeder, gıcırtı sesi
5. **Tam yapışma** → Motor aniden durur
6. **Soğuma sonrası** → Piston geri çekilir ama hasar oluşmuştur

---

## Kolbenklemmer Belirtileri (UYARI İŞARETLERİ)

### Erken Uyarılar (HEMEN TEPKİ VERİN!)

| Belirti | Anlam |
|---|---|
| **Ani güç kaybı** | Piston genleşmeye başlıyor |
| **Metalik gıcırtı/çınlama** | Piston silindire sürtüyor |
| **Detonasyon sesleri** (ping) | Aşırı ısınma / erken tutuşma |
| **Motor hızı düşüyor** (gaz açıkken) | Piston sıkışmaya başlıyor |
| **Motor ani duruş** | Piston tamamen tutulmuş |

### Erken Belirtileri Duyduğunuzda:

1. **GAZ KOLU HEMEN KAPAT** — daha fazla ısı üretme!
2. **Debriyajı çek** — motoru yükten kurtır
3. **Motoru kapat** (mümkünse kor sürüşle yavaşla)
4. **Güvenli bir yere çek**
5. **En az 30 dakika** soğumaya bırak
6. Motor soğuduktan sonra **yavaşça** tekrar çalıştırmayı dene
7. Çalışıyorsa: **düşük devirde**, **zengin karışımla** en yakın servise git

---

## Kolbenklemmer Nedenleri

| Neden | Risk Seviyesi | Açıklama |
|---|---|---|
| **Fakir yakıt karışımı** | ⚠️ ÇOK YÜKSEK | En yaygın neden! Yetersiz yakıt = yetersiz soğutma |
| **Yetersiz yağlama** | ⚠️ ÇOK YÜKSEK | Az yağ = sürtünme artışı = ısı |
| **Hava kaçağı** (emme/karter) | ⚠️ YÜKSEK | Karışımı fakir yapar, yağlamayı bozar |
| **Ateşleme çok erken** | ⚠️ YÜKSEK | Detonasyon → aşırı ısı → piston hasarı |
| **Uzun süreli tam gaz** | ORTA | Sürekli maksimum ısı yükü |
| **Yokuşta düşük vites+tam gaz** | ORTA | Yüksek yük + düşük hava akışı |
| **Trafik (dur-kalk)** | ORTA | Yetersiz soğutma |
| **Sıcak hava** | ORTA | Soğutma verimliliği düşük |
| **Yanlış buji ısı derecesi** | DÜŞÜK | Çok sıcak buji → detonasyon tetikler |
| **Kanatçık kirlenmesi** | DÜŞÜK | Soğutma kapasitesi azalır |
| **Egzoz tıkanması** | DÜŞÜK | Motor daha çok zorlanır |

---

## Kolbenklemmer Sonrası Değerlendirme

### Hasar Dereceleri

| Derece | Görünüm | Tamir |
|---|---|---|
| **Hafif** | İnce çizikler, piston eteğinde parlaklık | Silindir honlama + yeni segmanlar |
| **Orta** | Belirgin çizikler, piston eteğinde metal transferi | Honlama + oversize piston + yeni segman |
| **Ağır** | Derin scoring, piston eteği hasarlı | Oversize piston + silindir (veya yeni set) |
| **Çok ağır** | Piston kırılmış, port kenarı hasarlı | Yeni silindir + piston, krank kontrolü |

### Kontrol Listesi (Söküm Sonrası)

1. [ ] Piston yüzeyi kontrolü (çizik, metal transferi, deformasyon)
2. [ ] Silindir iç yüzey kontrolü (çizik, scoring, ovality)
3. [ ] Piston segmanları kontrolü (kırık, sıkışmış)
4. [ ] Piston pimi ve biyel yatağı kontrolü (renklenme = ısı hasarı)
5. [ ] Silindir kapağı kontrolü (detonasyon hasarı)
6. [ ] **Nedeni araştır ve gider** (yoksa tekrar eder!)

---

## Önleme

### ✅ YAPILMASI GEREKENLER

| Önlem | Açıklama |
|---|---|
| **Doğru karışım oranı** | 1:50 (normal), 1:33 (rodaj) — asla daha az yağ! |
| **Kaliteli 2T yağ** | API TC / JASO FC minimum |
| **Kaliteli benzin** | 95 RON tercih |
| **Rodaj kurallarına uyma** | Yeni/revize motorda ilk 1500 km |
| **Düzenli bakım** | Karbüratör ayarı, ateşleme, hava filtresi |
| **Emme borusu kontrolü** | Çatlak = hava kaçağı = fakir karışım |
| **Kanatçık temizliği** | Soğutma kapasitesini koru |
| **Buji rengi takibi** | Fakir karışım → beyaz buji → TEHLİKE! |
| **Motor ısınana kadar dikkat** | İlk 5-10 km'de tam gaz verme |
| **Yağ pompası kontrolü** (ayrı yağlama) | Pompa kablosu, yağ seviyesi |

### ❌ YAPILMAMASI GEREKENLER

| Hata | Sonuç |
|---|---|
| Yağsız benzinle çalıştırma | Dakikalar içinde piston tutması |
| Uzun süreli tam gaz (özellikle sıcak havada) | Aşırı ısınma riski |
| Rodaj kurallarını görmezden gelme | Erken piston tutması |
| Hava kaçağını görmezden gelme | Fakir karışım → tutma |
| Fakir buji rengini görmezden gelme | Yakında Kolbenklemmer! |
| Detonasyon seslerini görmezden gelme | Motor ciddi hasar görebilir |

---

## Acil Durum Protokolü

Yolda Kolbenklemmer yaşarsanız:

1. **Gaz kapat, debriyaj çek, kenara çek**
2. **30+ dakika bekle** (motor soğusun)
3. **Deneyimli bir baskı ile** kickstarter'ı dene
   - Dönüyorsa: motor serbest kalmış
   - Dönmüyorsa: tamamen kilitli — çekme/taşıma gerekli
4. Motor serbest kaldıysa:
   - Karışıma **ekstra yağ** ekle (1:33 veya daha zengin)
   - **Düşük devirde** (3000 d/d altı) sür
   - **Tam gaz verme**
   - En yakın noktaya git
5. Eve/servise ulaştığında: **motor sök ve hasar değerlendir**
6. **Nedeni bul ve gider** — yoksa tekrar yaşarsın!

---

*Kaynak: KFT 1982 (MZ Kolbenklemmer raporları), Wikipedia (DE), genel 2T motor güvenlik pratikleri*

→ [Güç Kaybı](guc-kaybi.md) | [Ses ve Titreşim](ses-titresim.md) | [Ana Sayfa](../README.md)
