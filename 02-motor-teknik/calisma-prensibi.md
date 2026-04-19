# Çalışma Prensibi — 2 Zamanlı Motor ve 4 Kanal Süpürme

## 2 Zamanlı (Zweitakt) Motor Nedir?

MZ ETZ 251'in EM 251 motoru, **2 zamanlı** (2-stroke / Zweitakt) bir benzinli motordur. 4 zamanlı motorlardan farklı olarak, krank milinin **her bir tam dönüşünde** (360°) bir güç darbesi üretir.

### 2 Zamanlı Çevrim Aşamaları

```
  AŞAMA 1: SIKIŞTIRMA + EMME           AŞAMA 2: PATLAMA + SÜPÜRME
  (Piston YUKARI hareket eder)          (Piston AŞAĞI hareket eder)

  ┌──────────────────────┐              ┌──────────────────────┐
  │     ★ Buji ★         │              │     ★ BUJİ ATEŞLER ★│
  │   ┌──────────────┐   │              │   ┌──────────────┐   │
  │   │ ░░░░░░░░░░░░ │   │              │   │ ▓▓▓▓▓▓▓▓▓▓▓▓ │   │
  │   │ ░ Karışım   ░│   │              │   │ ▓ Patlama!  ▓ │   │
  │   │ ░ sıkışıyor ░│   │              │   │ ▓ Basınç↓   ▓ │   │
  │   │ ░░░░░░░░░░░░ │   │              │   │ ▓▓▓▓▓▓▓▓▓▓▓▓ │   │
  │   └───────┬──────┘   │              │   │              │   │
  │           │           │              │   │  Egzoz       │ ══►
  │ KAPAL ┌───┴────┐KAPAL│              │ AÇIK┌──────────┐AÇIK
  │   I   │PISTON ▲│  I  │              │     │PISTON ▼  │    │
  │  Sü-  │  ████  │ Eg- │              │ Sü- │  ████   │ Eg-│
  │  pür-  │  ████  │ zoz │              │ pür- │  ████   │ zoz│
  │  me    └───┬────┘Port │              │  me  └───┬────┘Port│
  │  ka-       │     u    │              │  ka-      │        │
  │  nal-      │          │              │  nal-     │        │
  │  ları     │          │              │  ları    │        │
  │   │   KARTER  │   │   │              │   │  KARTER  │   │  │
  │   │  (vakum   │   │   │              │   │ (basınç  │   │  │
  │   │  oluşur)  │   │   │              │   │ oluşur)  │   │  │
  │   │     ↑     │   │   │              │   │    ↑     │   │  │
  └───┼─────┼─────┼───┼───┘              └───┼────┼─────┼───┼──┘
      │  Emme     │                          │   │     │
      │  portu    │                          │   │     │
      │  AÇIK     │                          │   │     │
      ▼           │                          │   ▼     │
   Taze karışım   │                      Taze karışım  │
   kartere girer  │                      silindire     │
                  │                      girer (süpürme)│

  ═══════════════════════════════════════════════════════════

  ÖZET: 1 TAM KRANK DEVRİ = 1 GÜÇ DARBESİ (360°)

  Krank açısı:   0°    90°    180°   270°   360°
                 │      │      │      │      │
                 ▼      ▼      ▼      ▼      ▼
  Piston:      [ÜÖN]  [aşağı] [AÖN] [yukarı][ÜÖN]
  Silindir:    sıkış   patla   süpür  sıkış   sıkış
  Karter:      emme    basınç  basınç emme    emme
                │◄── GÜÇ ──►│◄── HAZIRLAMA ──►│
```

### 4 Zamanlı ile Karşılaştırma

| Özellik | 2 Zamanlı (ETZ 251) | 4 Zamanlı |
|---|---|---|
| Güç darbesi | Her devir (360°) | Her 2 devir (720°) |
| Supap mekanizması | Yok (port kontrollü) | Var (karmaşık) |
| Yağlama | Yakıta karıştırılır veya ayrı | Ayrı yağ sistemi |
| Parça sayısı | Az | Çok |
| Bakım kolaylığı | Kolay | Orta-zor |
| Ağırlık | Hafif | Ağır |
| Yakıt verimliliği | Daha düşük | Daha yüksek |
| Emisyon | Daha yüksek | Daha düşük |
| Güç/ağırlık oranı | Yüksek | Orta |

## 4 Kanal Ters Süpürme (Vierkanalumkehrspülung)

EM 251 motoru, MZ serisinde **ilk kez ETZ 250 ile tanıtılan** 4 kanal ters süpürme sistemini kullanır. Bu, önceki modellerdeki 2 veya 3 kanal sistemlerine göre önemli bir iyileştirmedir.

### Süpürme Kanallarının İşlevi

```
  4 KANAL TERS SÜPÜRME — Silindir Üstten Kesit Görünüm:

              EGZOZ PORTU
              (Auslasskanal)
                 ╔═══╗
                 ║   ║
                 ║ ↑ ║  ← Yanmış gazlar ÇIKAR
                 ║ ↑ ║
        ╔════════╩═══╩════════╗
        ║                     ║
        ║  ↑               ↑  ║
   K.1──║→ ↑   SİLİNDİR   ↑ ←║──K.2
        ║  ↑               ↑  ║
        ║  ↑    (üstten    ↑  ║
        ║   ↑    bakış)   ↑   ║
   K.3──║→   ↑           ↑  ←║──K.4
        ║      ↑       ↑      ║
        ║        ╲   ╱        ║
        ║         ╲ ╱         ║
        ╚═════════════════════╝

  K.1, K.2 = Birincil süpürme kanalları
  K.3, K.4 = İkincil süpürme kanalları
  →  = Taze karışım giriş yönü
  ↑  = Taze karışım yükselme yönü

  TERS SÜPÜRME PRENSİBİ (yandan kesit):

     ┌───────────────────────┐
     │      Buji              │
     │   ┌───────────┐       │
     │   │ ↙ Taze    │↖      │
     │   │↙  gaz     │  ↖    │
     │   │  yukarı   │    ↖  │
     │   │  yükselir │      →│── EGZOZ
     │   │↗          │  Yanmış    PORTU
     │   │  ↗        │  gaz     (çıkış)
     │   │    ↗      │  itilir ↗│
     │   └───────────┘        │
     │   │ Piston    │        │
     ├───┤           ├────────┤
     │↗  │           │        │
  K.1│   │           │        │K.2
     │↗  │           │        │
  K.3│   │  KARTER   │        │K.4
     └───┴───────────┴────────┘
          (basınç ↑)

  Akış: Karter → Kanallar → Silindir karşı duvarı →
        Yukarı yükselir → Egzoz portuna doğru süpürür

  ⚠️ Anahtar tasarım: Kanallar EĞIMLI açılır
      → Taze gaz doğrudan egzozdan KAÇMAZ
      → Short-circuiting minimumda tutulur
```

### Ters Süpürme (Umkehrspülung) Prensibi

1. **Taze karışım**, süpürme kanallarından silindire girer
2. Kanallar, taze gazı egzoz portuna doğru **değil**, silindirin karşı duvarına doğru yönlendirir
3. Taze gaz, silindirin karşı duvarından **yukarı** yükselir
4. Yanmış gazları egzoz portuna doğru **iterek** dışarı süpürür
5. Bu tasarım, taze karışımın doğrudan egzozdan kaçmasını (short-circuiting) **minimuma indirir**

### 4 Kanal Sisteminin Avantajları (2-3 kanala göre)

| Avantaj | Açıklama |
|---|---|
| **Daha iyi süpürme** | Daha fazla kanal = daha etkili gaz değişimi |
| **Daha yüksek güç** | Geringfügig (hafif) güç artışı |
| **Daha düşük tüketim** | Daha az taze karışım kaybı |
| **Daha düzgün yanma** | Daha homojen karışım dağılımı |
| **Daha temiz egzoz** | Daha az yanmamış yakıt kaçağı |

## Emme Sistemi

### Emme Portu Kontrolü
ETZ 251'de emme, pistonun alt kenarı tarafından kontrol edilen **piston kontrollü emme portu** kullanır. Bu, en basit ve en güvenilir emme yöntemidir, ancak:

- Düşük devirlerde karışım geri üflemesi (blowback) olabilir
- İdeal olmayan emme zamanlaması (özellikle ~3000 d/d civarında)

### Membran Emme Valfi Eksikliği
KFT dergisi ve diğer kaynaklar, ETZ 251'in en önemli iyileştirme potansiyelinin **membran emme valfi** (Membraneinlasssteuerung / reed valve) olduğunu belirtmiştir:
- Membran valfi, kartere geri üflemeyi önler
- Düşük devirdeki tork ve çekiş gücünü artırır
- ETZ 251'de bu teknoloji **kullanılmamıştır**

## Motorun Silindirdeki Olaylar — Zamanlama

### Port Zamanlaması (Steuerzeiten)

Pistonun silindirdeki konumuna göre portların açılma ve kapanma zamanları, motorun güç karakteristiğini belirler.

**ETZ 251'de kritik nokta**: Egzoz sistemi ETZ 250'den 115 mm daha kısa ve 7° yukarı açılı olduğu için, optimum performans elde etmek amacıyla **kanal zamanlamaları** (Steuerzeiten) silindirde küçük yapısal değişikliklerle yeniden ayarlanmıştır.

### Sıkıştırma ve Patlama

| Aşama | Açıklama |
|---|---|
| **Sıkıştırma** | Piston ÜÖN'ye (üst ölü nokta) yaklaşırken karışım sıkıştırılır |
| **Ateşleme** | Buji, ÜÖN'den önce belirli bir açıda kıvılcım üretir (avans) |
| **Patlama** | Yanma basıncı pistonu aşağı iter |
| **Egzoz** | Piston aşağı inerken egzoz portu açılır, yanmış gazlar çıkar |
| **Süpürme** | Süpürme kanalları açılır, taze karışım silindire girer |

## Motor Titreşim Kontrolü

EM 251 tek silindirli bir motor olduğundan doğası gereği titreşim üretir. MZ, titreşimi azaltmak için iki temel yöntem kullanır:

1. **Elastik Motor Bağlantısı (Silentblock)**
   - Motor, şasiye doğrudan cıvatalarla değil, kauçuk tamponlar (Silentblock) aracılığıyla bağlanır
   - Silindir kapağından elastik bağlantı

2. **Silindir Titreşim Sönümleyicileri (Dämpfungskamm)**
   - Silindirin her iki yanında 2'şer adet (toplam 4) metal sönümleme elemanı
   - Dikey olarak tüm kanatçıklar boyunca uzanır (silindir kapağı dahil)
   - Silindir gövde ses emisyonunu (Körperschallemission) azaltır

---

*Kaynak: KFT 1981/5, KFT 1988/8, Wikipedia (DE)*

→ [Teknik Özellikler](teknik-ozellikler.md) | [Yakıt ve Yağlama](yakit-yaglama-sistemi.md) | [Ana Sayfa](../README.md)
