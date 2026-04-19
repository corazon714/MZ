# Elektrik Şeması — MZ ETZ 251

## Genel Sistem Yapısı

MZ ETZ 251, 12V DC elektrik sistemi kullanır. Enerji kaynağı olarak jeneratör (Lichtmaschine) ve (bazı varyantlarda) akü bulunur.

---

## Sistem Blok Şeması

```
┌──────────────────────────────────────────────────────────────┐
│                     MZ ETZ 251 ELEKTRİK SİSTEMİ              │
│                                                              │
│  ┌─────────┐    ┌───────────┐    ┌──────────┐               │
│  │Jeneratör├───→│Doğrultucu ├───→│  Akü     │               │
│  │ 180W AC │    │(Regülatör)│    │ 12V DC   │               │
│  └────┬────┘    └───────────┘    └────┬─────┘               │
│       │                               │                      │
│       │         ┌─────────────────────┤                      │
│       │         │                     │                      │
│  ┌────▼────┐  ┌─▼────────┐   ┌──────▼──────┐               │
│  │Ateşleme │  │Aydınlatma│   │  Sinyaller  │               │
│  │Sistemi  │  │Sistemi   │   │  + Korna    │               │
│  └────┬────┘  └─┬────────┘   └──────┬──────┘               │
│       │         │                     │                      │
│  ┌────▼────┐  ┌─▼────────┐   ┌──────▼──────┐               │
│  │CDI/Platin│ │Far, Arka │   │Sinyal Flaşör│               │
│  │Buji     │  │Gösterge  │   │Korna Rölesi │               │
│  └─────────┘  └──────────┘   └─────────────┘               │
└──────────────────────────────────────────────────────────────┘
```

---

## Ana Bileşenler

### 1. Jeneratör (Lichtmaschine / LiMa)

| Parametre | Değer |
|---|---|
| Tip | Dönerfazlı AC jeneratör |
| Güç | 180W |
| Voltaj | 12V AC (doğrultularak DC) |
| Montaj | Krank mili sol tarafı |

**Çıkışlar:**
- Aydınlatma sarımı → Doğrultucu → DC güç
- Ateşleme sarımı → CDI ünitesi (veya platin)
- Tetikleme sarımı (CDI modellerde)

### 2. Doğrultucu ve Regülatör

| Bileşen | İşlev |
|---|---|
| **Doğrultucu** (Gleichrichter) | AC → DC dönüşüm |
| **Regülatör** (Regler) | Voltajı 13,5–14,5V aralığında tutar |

### 3. Ateşleme Sistemi

#### CDI (Elektronik)

```
Tetikleme    ┌──────────┐    ┌──────────┐
Bobini  ────→│CDI Ünite ├───→│Ateşleme  ├───→ Buji
              │(Steuer-  │    │Bobini    │
Jeneratör───→│ gerät)   │    │(Zündspule)│
(şarj sarımı)└──────────┘    └──────────┘
```

#### Mekanik (Platin)

```
Jeneratör ──→ Platin ──→ Kondansatör ──→ Ateşleme Bobini ──→ Buji
             Kontağı     (0,22 µF)        (Zündspule)
```

### 4. Kontak Anahtarı (Zündschloss)

| Pozisyon | İşlev |
|---|---|
| **0 / OFF** | Tüm sistem kapalı |
| **1 / ON** | Ateşleme + aydınlatma aktif |
| **2 / P** | Park lambası (bazı modeller) |

### 5. Kill Switch (Motor Durdurma)

Gidon sol tarafında bulunan düğme. Ateşleme devresini keser (kısa devre ile).

---

## Aydınlatma Sistemi

### Far (Scheinwerfer)

| Parametre | Değer |
|---|---|
| Tip | Yuvarlak, Ø 170 mm |
| Ampul | H4, 60/55W (uzun/kısa far) |
| Montaj | Çatal taçına bağlı |

### Arka Lamba (Rücklicht)

| Parametre | Değer |
|---|---|
| Ampul | 21/5W çift flamanlı (fren + park) |
| Fren lambası | Fren kolu/pedalı ile aktif |

### Sinyal Lambaları (Blinker)

| Parametre | Değer |
|---|---|
| Ampul | 21W × 4 (ön 2 + arka 2) |
| Flaşör | 12V elektronik veya mekanik |
| Frekans | ~60–120 flaş/dakika |

### Gösterge Paneli

| Lamba | İşlev |
|---|---|
| Yeşil | Nötr (boş vites) |
| Kırmızı | Şarj uyarısı |
| Turuncu | Sinyal göstergesi |
| Mavi | Uzun far göstergesi |

---

## Kablo Renk Kodları (Genel MZ Standardı)

| Renk | İşlev |
|---|---|
| **Siyah** | Toprak (şase) |
| **Kırmızı** | Ana güç (akü +) |
| **Sarı** | Jeneratör → doğrultucu |
| **Mavi** | Uzun far |
| **Beyaz** | Kısa far |
| **Yeşil** | Nötr göstergesi |
| **Kahverengi** | Arka lamba / park |
| **Gri** | Fren lambası |
| **Turuncu** | Sinyaller |
| **Siyah/Beyaz** | Ateşleme (CDI besleme) |

> **NOT**: Kablo renkleri üretim yılına ve varyanta göre değişebilir. Her zaman kendi motosikletinizin kablo demetini izleyin.

---

## Topraklama Noktaları

| Nokta | Konum |
|---|---|
| Ana toprak | Motor gövdesi → şasi |
| Motor toprak | Silindir kapağı cıvatası veya motor blok |
| Arka toprak | Arka çamurluk/şasi bağlantısı |
| Far toprak | Far yuvası |

> **ÖNEMLİ**: Topraklama sorunları, MZ motosikletlerde en yaygın elektrik arızası nedenidir. Tüm topraklama noktalarını düzenli olarak temizleyin ve kontrol edin.

---

## Arıza Tespit Voltaj Referansları

| Ölçüm Noktası | Beklenen Değer |
|---|---|
| Akü voltajı (motor kapalı) | 12,4–12,8V |
| Şarj voltajı (rölanti) | 13,0–13,8V |
| Şarj voltajı (3000+ d/d) | 13,8–14,5V |
| Aşırı voltaj (hata) | >15V — regülatör arızası |
| Düşük voltaj (hata) | <12,5V @ 3000 d/d — jeneratör/doğrultucu |

---

*Kaynak: MZ ETZ servis el kitabı referansları, genel DDR motosiklet elektrik prensipleri*

→ [Teknik Tablolar](teknik-tablolar.md) | [Tork Değerleri](tork-degerleri.md) | [Ana Sayfa](../README.md)
