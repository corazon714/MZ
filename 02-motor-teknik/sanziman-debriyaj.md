# Şanzıman ve Debriyaj

## Şanzıman (Getriebe)

### Genel Bilgi

| Parametre | Değer |
|---|---|
| **Tip** | Sürekli kavramalı, ayakla kumandalı (klauengeschaltetes Getriebe) |
| **Vites Sayısı** | 5 ileri |
| **Vites Düzeni** | 1 – N – 2 – 3 – 4 – 5 (standart) |
| **Birincil Tahrik** | Dişli çark (Primärantrieb) — krank milinden debriyaj kovanına |
| **İkincil Tahrik** | Zincir (Sekundärkette) — çıkış milinden arka tekerleğe |
| **Yağlama** | Ayrı şanzıman yağı (Getriebeöl) |
| **Yağ Kapasitesi** | ~0,8–1,0 litre |
| **Yağ Tipi** | SAE 80W veya SAE 80W-90, API GL-4 |
| **Kickstarter** | Konsantrik (eş merkezli) — vites pedalı ile aynı eksen |

### Vites Kutusu Yapısı

MZ ETZ 251'in şanzımanı, MZ geleneğine uygun olarak **motor gövdesi içinde** (entegre) yer alır:

```
Krank Mili → Birincil Dişli → Debriyaj → Giriş Mili → Çıkış Mili → Zincir → Arka Teker
(Kurbelwelle)  (Primärzahnrad) (Kupplung)  (Antriebswelle) (Abtriebswelle) (Sekundärkette)
```

### Vites Oranları

| Vites | Kullanım |
|---|---|
| **1. Vites** | Kalkış, yokuş, düşük hız manevra |
| **2. Vites** | Şehir içi düşük hız, ivmelenme |
| **3. Vites** | Şehir içi orta hız |
| **4. Vites** | Şehir dışı orta-yüksek hız |
| **5. Vites** | Yüksek hız, cruise (ekonomik sürüş) |

### İkincil Tahrik (Sekundärantrieb)

ETZ 251'de arka jant boyutu değiştiği için (18"→16") ikincil dişli oranı ETZ 250'ye göre yeniden ayarlanmıştır:

| Parametre | ETZ 250 | ETZ 251 |
|---|---|---|
| **Arka jant** | 18 inç | 16 inç |
| **Ön zincir dişlisi (Ritzel)** | Standart | Uyarlanmış |
| **Arka zincir dişlisi (Kettenrad)** | Standart | Uyarlanmış |
| **Sonuç** | Referans | Aynı fahrleistung (sürüş performansı) |

### Kapalı Zincir Sistemi

MZ'nin tüm büyük modellerinde (RT 125/1'den beri) ikincil zincir **tamamen kapalı** (vollgekapselt) bir kılıf içindedir:

```
┌─────────────────────────────────────────────┐
│  Ön Dişli     Kauçuk Hortum      Arka Dişli │
│  (Ritzel)  ═══════════════════  (Kettenrad)  │
│     ⚙ ─────── ZİNCİR ─────── ⚙              │
│           Kauçuk Kılıf İçinde                │
│  ┌────────────────────────────────────┐      │
│  │  Duroplast Zincir Kutusu           │      │
│  │  (Kettenkasten) — Arka nabe'da     │      │
│  └────────────────────────────────────┘      │
└─────────────────────────────────────────────┘
```

**Bileşenler**:
| Bileşen | Alm. Adı | Malzeme |
|---|---|---|
| **Zincir kılıfı** | Kettenschutzschlauch | Kauçuk hortumlar |
| **Zincir kutusu** | Kettenkasten | Duroplast (sertleştirilmiş plastik) |
| **Konumu** | Arka teker nabında | — |

**Avantajları**:
- Zincir kir, toz ve sudan korunur
- Zincir ömrü önemli ölçüde uzar
- Yağlama daha uzun süre etkili kalır
- Bakım aralığı uzar

**Dezavantajları**:
- Zincir kontrolü daha zor (kılıfı sökmek gerekir)
- Kılıf zamanla çatlar/yırtılır
- Kılıf hasarı fark edilmezse zincir hızla aşınır

---

## Debriyaj (Kupplung)

### Genel Bilgi

| Parametre | Değer |
|---|---|
| **Tip** | Islak, çok diskli (Mehrscheiben-Ölbadkupplung) |
| **Kumanda** | Sol el kolu, çelik kablo (Seilzug) |
| **Konum** | Motor gövdesinin sağ tarafında, debriyaj kapağı (Kupplungsdeckel) altında |
| **Disk sayısı** | Sürtünme + çelik diskler (değişken) |
| **Yağlama** | Şanzıman yağı içinde (yağ banyosu) |

### Çalışma Prensibi

```
Sol El Kolu → Çelik Kablo → Baskı Mekanizması → Diskler Ayrılır
(çekilir)     (Seilzug)     (Druckstück)         → Güç Aktarımı KESİLİR

Sol El Kolu → Kablo Gevşer → Yaylar Diskleri Sıkıştırır
(bırakılır)                   → Güç Aktarımı BAŞLAR
```

### Debriyaj Yapısı

```
Motor Tarafı                                    Şanzıman Tarafı
     │                                               │
     │  ┌─────────────────────────────────┐           │
     │  │  Sürtünme Diski (Reibscheibe)   │           │
     │  │  Çelik Disk (Stahlscheibe)      │           │
     │  │  Sürtünme Diski                 │           │
     │  │  Çelik Disk                     │           │
     │  │  ...                            │           │
     │  │  Baskı Plakası (Druckplatte)    │           │
     │  │  Yaylar (Federn)                │           │
     │  └─────────────────────────────────┘           │
     │       Debriyaj Kovanı (Kupplungskorb)          │
     │                                               │
  Birincil Dişli                              Giriş Mili
  (Primärzahnrad)                           (Antriebswelle)
```

### Debriyaj Disk Tipleri

| Disk Tipi | Alm. Adı | İşlev |
|---|---|---|
| **Sürtünme diskleri** | Reibscheiben | Mantar veya fiber kaplı, güç iletimi sağlar |
| **Çelik diskler** | Stahlscheiben | Sürtünme diskleri arasında, metal |
| **Baskı plakası** | Druckplatte | Diskleri sıkıştıran son eleman |
| **Yaylar** | Kupplungsfedern | Diskleri bir arada tutan basınç yayları |

### Debriyaj Kablosu (Kupplungszug)

| Parametre | Değer |
|---|---|
| **Tip** | Çelik tel kablo, kılıflı |
| **Serbest oyun (Spiel)** | 2–3 mm (el kolunda) |
| **Ayar yeri** | El kolu tarafında ve/veya motor tarafında |
| **Yağlama** | Kablo kılıfı içine hafif yağ |

---

## Kickstarter

MZ ETZ 251'de **konsantrik (eş merkezli) kickstarter** kullanılır — vites pedalı ile aynı eksen üzerindedir:

| Parametre | Değer |
|---|---|
| **Konum** | Sol taraf (vites pedalı ile aynı eksende) |
| **Çalışma** | Ayakla aşağı basılır |
| **Dönüş yönü** | Saat yönünün tersine (sola) |
| **Geri dönüş** | Yaylı, otomatik |

### Kickstarter Kullanım İpuçları

1. Vites **boşta** (N) olmalı
2. Debriyaj **çekilmeli** (özellikle soğuk havada — şanzıman yağı koyu olabilir)
3. Kickstarter pedalını **üst konuma** getirin
4. **Hızlı ve kararlı** bir tekme vurun (yavaş vuruş motorun tepesine çıkaramaz)
5. Geri tepme (Rückschlag) olursa — ateşleme zamanlaması kontrol edilmeli

---

## Devir Sayacı (Drehzahlmesser) Tahriği

ETZ 251'in bazı varyantlarında (Lüks) devir sayacı (takometre) bulunur. Devir bilgisi, **şanzıman çıkış milinden** mekanik olarak alınır:

| Parametre | Değer |
|---|---|
| **Tahrik tipi** | Mekanik, esnek kablo (Tachowelle) |
| **Çıkış noktası** | Şanzıman tarafında |
| **Standart varyant** | Devir sayacı **yok** |
| **Lüks varyant** | Devir sayacı **var** |

---

*Kaynak: KFT 1981/5, KFT 1988/8, MZ Betriebsanleitung, MZ Reparaturanleitung*

→ [Egzoz Sistemi](egzoz-sistemi.md) | [Teknik Özellikler](teknik-ozellikler.md) | [Ana Sayfa](../README.md)
