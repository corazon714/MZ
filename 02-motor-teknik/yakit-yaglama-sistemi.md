# Yakıt ve Yağlama Sistemi

## Genel Bakış

MZ ETZ 251 motorunda (EM 251) iki farklı yağlama sistemi kullanılmıştır:

1. **Gemischschmierung** (Ön-karışım / Premix) — DDR iç pazarı için standart
2. **Getrenntschmierung** (Ayrı yağlama / Autolube) — İhracat pazarları için

Her iki sistemde de prensip aynıdır: 2 zamanlı motorda yağ, yakıtla birlikte yanma odasına girer ve burada hem yağlama hem de yanma gerçekleşir.

---

## 1. Ön-Karışım Sistemi (Gemischschmierung)

### Prensip
Motor yağı, benzinle birlikte **doğrudan yakıt deposuna** eklenir ve karışım olarak motora beslenir.

### Karışım Oranları

| Durum | Oran (Benzin:Yağ) | Açıklama |
|---|---|---|
| **Rodaj Dönemi** (ilk 1500 km) | **1:33** | 1 litre yağ / 33 litre benzin |
| **Normal Kullanım** | **1:50** | 1 litre yağ / 50 litre benzin |
| **Kış/Soğuk Hava** | **1:40** | Hafif zengin karışım önerilir |
| **Sepetli (Gespann)** | **1:40** | Motor daha çok zorlanır |

### Pratikte Karışım Tablosu

| Benzin (litre) | 1:33 (rodaj) | 1:50 (normal) | 1:40 (kış/sepet) |
|---|---|---|---|
| 5 litre | 150 ml yağ | 100 ml yağ | 125 ml yağ |
| 10 litre | 300 ml yağ | 200 ml yağ | 250 ml yağ |
| 15 litre | 450 ml yağ | 300 ml yağ | 375 ml yağ |
| 17 litre (full tank) | 515 ml yağ | 340 ml yağ | 425 ml yağ |

### Karışım Hazırlama Kuralları

1. **Önce** yağın bir kısmını depoya koyun
2. **Sonra** benzini ekleyin (türbülans karışımı sağlar)
3. **Son olarak** kalan yağı ekleyin
4. Mümkünse motosikleti hafifçe sallayın
5. **Asla** yağsız benzinle çalıştırmayın — motor birkaç dakika içinde yanar
6. Karışımı en fazla **2 hafta** içinde tüketin (ayrışma riski)

### Uygun Motor Yağı (Ön-Karışım)

| Özellik | Gereksinim |
|---|---|
| **Tip** | 2 zamanlı motor yağı (Zweitaktöl / 2-stroke oil) |
| **Orijinal DDR Spesifikasyonu** | TGL 21199, Tip M2T |
| **Modern Eşdeğeri** | API TC veya JASO FC/FD sınıfı |
| **Renk** | Genellikle mavi veya yeşil (karışım kontrolü için) |
| **Sentez** | Mineral veya yarı-sentetik önerilir |

> ⚠️ **UYARI**: 4 zamanlı motor yağı (SAE 10W-40 vb.) **asla** 2 zamanlı motorda kullanılmamalıdır! Yanma kalıntısı bırakır ve motoru tahrip eder.

---

## 2. Ayrı Yağlama Sistemi (Getrenntschmierung)

### Prensip
Motor yağı, ayrı bir depoda tutulur ve bir **dozaj pompası** (Frischöldosierpumpe) aracılığıyla otomatik olarak motora beslenir. Benzin depoya saf olarak konulur.

### Sistem Bileşenleri

```
┌──────────────┐     Seilzug (kablo)    ┌──────────────────┐
│  Gaz Kolu    │ ────────────────────→ │  Dozaj Pompası    │
│  (Gasdrehgriff)│                      │  (Dosierpumpe)    │
└──────────────┘                        └────────┬─────────┘
                                                  │
┌──────────────┐                                  │ Yağ
│  Yağ Deposu  │ ─────────────────────────────────┘
│  (1,3 litre) │
│  Sol taraf,   │
│  seitendeckel │
│  altında      │
└──────────────┘
                    ↓ Yağ, motora dozajlanır
              ┌──────────────┐
              │  MOTOR (EM 251)│
              └──────────────┘
```

### Çalışma Mekanizması

1. **Yağ deposu** (1,3 litre) sol tarafta, seitendeckel (yan kapak) altında bulunur
2. **Dozaj pompası**, debriyaj kapağının (Kupplungsdeckel) içinde ayrı bir bölmede yer alır
3. Pompanın üzerinde ayrı bir koruma kapağı vardır
4. **Gaz kolu** ile bağlantılı bir **çelik kablo** (Seilzug) pompa besleme miktarını ayarlar
5. Gaz açıldıkça → pompa daha fazla yağ verir (**yük bağımlı dozajlama**)
6. Rölantide minimum yağ, tam gazda maksimum yağ

### Ayrı Yağlama — Avantajlar ve Dezavantajlar

| Avantaj | Dezavantaj |
|---|---|
| Her seferde karışım hazırlamaya gerek yok | Daha karmaşık sistem |
| Daha hassas yağ dozajı | Pompa arızası riski → motor hasarı |
| Daha temiz yanma (tam gaz hariç az yağ) | Kablo ayarı düzenli kontrol gerektirir |
| Buji ömrü uzar | Yağ deposu ayrıca kontrol edilmeli |
| Daha az duman | Pompa hortumları yaşlanır, sızıntı yapabilir |

### ⚠️ Ayrı Yağlama Güvenlik Uyarıları

1. **Yağ deposunu asla boş bırakmayın** — motor kuru çalışır ve yanar
2. Yağ seviyesini **her dolumda** kontrol edin
3. Pompa kablosunun gerginliğini **düzenli** kontrol edin
4. Yağ hortumlarında hava kabarcığı oluşursa **derhal** giderin (bleeding)
5. Şüphe durumunda ek güvenlik olarak benzine **1:100** oranında yağ ekleyin
6. Pompa arızası şüphesinde **hemen** ön-karışım sistemine geçin (1:50)

---

## Yakıt Gereksinimleri

| Parametre | Değer |
|---|---|
| **Yakıt Tipi** | Kurşunsuz benzin (Normalbenzin) |
| **Oktanaj** | Minimum 91 RON (Normal), 95 RON (Süper) tercih edilir |
| **Depo Kapasitesi** | ~17 litre |
| **Ortalama Tüketim (Solo)** | 4,5–5,5 l/100 km |
| **Ortalama Tüketim (Gespann)** | 6,0–7,0 l/100 km |
| **Menzil (Tahmini)** | ~280–350 km (solo) |
| **Benzin Musluğu** | Manuel çevirme, 3 konum: Kapalı / Açık / Rezerv |

### Yakıt Kalitesi ve Motor Sağlığı

DDR döneminde yaşanan **piston tutması** (Kolbenklemmer) sorunlarının bir nedeni olarak düşük kaliteli yakıt ve yağ gösterilmiştir. Batı Avrupa'daki kaliteli yakıt ve yağla bu sorun çok daha az görülmüştür.

**Öneriler**:
- Mümkünse 95 oktan veya üzeri benzin kullanın
- Kaliteli, markalı 2 zamanlı yağ kullanın (API TC / JASO FC minimum)
- Etanol içeriği yüksek (E10+) yakıtlardan **kaçının** — karbüratör contaları ve hortumları zarar görebilir
- Uzun süre depoda kalan benzin bozulur — 2-3 haftadan fazla duracaksa yakıt stabilizatörü ekleyin

---

## Yağ Filtreleme

EM 251 motorunda **ayrı bir yağ filtresi yoktur**. 2 zamanlı motorlarda yağ, yakıtla birlikte yanma odasında yanar ve egzozdan atılır. Bu nedenle:
- Yağ geri dönüşümü yoktur
- Yağ filtresi gereksizdir
- Yağ kalitesi doğrudan motor ömrünü etkiler

---

## Şanzıman Yağı (Getriebeöl)

Şanzıman, motor yağından **ayrı** olarak yağlanır:

| Parametre | Değer |
|---|---|
| **Yağ Tipi** | Dişli yağı (Getriebeöl) |
| **Orijinal DDR Spesifikasyonu** | TGL 17542, GL-130 |
| **Modern Eşdeğeri** | SAE 80W veya SAE 80W-90, API GL-4 |
| **Kapasite** | ~0,8–1,0 litre |
| **Değişim Aralığı** | ~5000–10.000 km (veya yılda bir) |
| **Kontrol** | Dolum/kontrol vidası motor gövdesinin yan tarafında |

> ⚠️ **NOT**: Şanzıman yağı ile 2 zamanlı motor yağını karıştırmayın! Şanzıman yağı **ayrı bir bölmede** bulunur ve yanma odasına girmez.

---

*Kaynak: KFT 1981/5, KFT 1988/8, MZ Betriebsanleitung (Kullanım Kılavuzu), Wikipedia (DE)*

→ [Çalışma Prensibi](calisma-prensibi.md) | [Karbüratör](karburator.md) | [Ana Sayfa](../README.md)
