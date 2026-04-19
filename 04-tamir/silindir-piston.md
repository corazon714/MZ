# Silindir ve Piston — Detaylı Bilgi

## Silindir (Zylinder)

### Silindir Malzemesi ve Yapısı

| Parametre | Değer |
|---|---|
| **Malzeme** | Alüminyum gövde, çelik astar (Graugussbuchse) |
| **İç çap (nominal)** | 69,00 mm |
| **Kanatçık** | 9 adet, yatay |
| **Portlar** | 1 egzoz, 1 emme, 4 süpürme |
| **Sönümleme elemanları** | 4 adet (2 her yanda) |

### Oversize (Üst Ölçü) Seçenekleri

Silindir aşındığında veya çizildiğinde honlanarak (honing) bir üst ölçüye geçilebilir:

| Ölçü | Silindir İç Çap | Piston Çap |
|---|---|---|
| **Standart** | 69,00 mm | ~68,94–68,96 mm |
| **+0,25** | 69,25 mm | ~69,19–69,21 mm |
| **+0,50** | 69,50 mm | ~69,44–69,46 mm |
| **+0,75** | 69,75 mm | ~69,69–69,71 mm |
| **+1,00** | 70,00 mm | ~69,94–69,96 mm |

> ⚠️ Oversize honlama, **profesyonel bir makine atölyesinde** yapılmalıdır. Piston ve segmanlar ilgili oversize boyuta uygun olmalıdır.

### Silindir Honlama (Honing)

Honlama, silindir iç yüzeyinin ince bir aşındırıcı taşla işlenerek:
- Doğru çapa getirilmesi
- Yüzey pürüzlülüğünün ayarlanması (yağ tutma için çapraz çizgi deseni)
- Silindirikliğin sağlanması

**Honlama açısı**: ~45° çapraz çizgi (cross-hatch) deseni — yağ tutma için ideal

```
  SİLİNDİR İÇ YÜZEY — Honlama Deseni:

  ┌──────────────────────┐
  │ ╲   ╱  ╲   ╱  ╲   ╱ │
  │   ╲╱    ╲╱    ╲╱    │
  │   ╱╲    ╱╲    ╱╲    │  ← ~45° çapraz çizgi
  │ ╱   ╲ ╱   ╲ ╱   ╲  │     (cross-hatch pattern)
  │ ╲   ╱  ╲   ╱  ╲   ╱ │
  │   ╲╱    ╲╱    ╲╱    │     Bu desen yağ filmini tutar
  │   ╱╲    ╱╲    ╱╲    │     ve segman oturmasını sağlar
  │ ╱   ╲ ╱   ╲ ╱   ╲  │
  └──────────────────────┘

  DOĞRU: ~45° açı         YANLIŞ: Dikey çizikler
  ╲   ╱ ╲   ╱             │ │ │ │ │ │
    ╲╱   ╲╱               │ │ │ │ │ │
    ╱╲   ╱╲               │ │ │ │ │ │
  ╱   ╲╱   ╲             │ │ │ │ │ │
  Yağ burada               Yağ aşağı akar
  tutulur                   segman hızlı aşınır
```

### Silindir Hasar Tipleri

| Hasar | Neden | Çözüm |
|---|---|---|
| **Düşey çizikler** | Piston tutması, yabancı cisim | Honlama (hafif) veya oversize (derin) |
| **Aşınma (ovality)** | Normal kullanım, yüksek km | Honlama + oversize piston |
| **Port kenarı kırığı** | Segman yakalanması, montaj hatası | Kaynak + işleme veya yeni silindir |
| **Korozyon** | Uzun süre nemli ortamda bekleme | Hafif: honlama; Ağır: yeni silindir |

---

## Piston

### Piston Yapısı

```
  PİSTON — Detaylı Kesit Görünüm:

           Yanma odası tarafı (üst)
                    ▲
          ╔═════════════════════╗
          ║   PİSTON TEPESİ     ║ ← Kolbenboden
          ║   (düz veya bombeli)║    Yanma basıncını alır
          ╠═════════════════════╣
          ║ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ║ ← 1. SEGMAN (Kolbenring)
          ║ ·  1. kanal  · ║    Üst sızdırmazlık halkası
          ╠═════════════════════╣
          ║ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ║ ← 2. SEGMAN
          ║ ·  2. kanal  · ║    Alt sızdırmazlık halkası
          ╠═════════════════════╣
          ║                     ║
          ║   PİSTON ETEĞİ     ║ ← Kolbenhemd
          ║   (Silindir duvarı  ║    Pistonu silindir içinde
          ║    ile temas eden   ║    merkezli tutar
          ║    kısım)           ║
          ║        ╭─────╮      ║
          ║ ═══════╡  ●  ╞══════║ ← PİSTON PİMİ (Kolbenbolzen)
          ║        ╰─────╯      ║    Biyeli pistona bağlar
          ║  ◎                ◎ ║ ← SEGERLER (Sicherungsringe)
          ║  (sol)          (sağ)║   Pimin kaymasını önler
          ║                     ║
          ╚═════════════════════╝
                    │
                    ▼
              Karter tarafı (alt)

  PİSTON — Üstten Görünüm:

              ╭─────────────────╮
             ╱                   ╲
            │    ▲ OK İŞARETİ     │
            │    │                 │
            │    │ Bu ok EGZOZ     │
            │    │ tarafına        │
            │    │ bakmalı!        │
            │                     │
            │  ═══════●═══════   │ ← Piston pimi ekseni
            │                     │
             ╲                   ╱
              ╰─────────────────╯

  ⚠️ Pistonun ok işaretini KONTROL EDİN!
     Yanlış yöne takılan piston → port hasarı, motor arızası
```

### Piston Özellikleri

| Parametre | Değer (ETZ 251) |
|---|---|
| **Malzeme** | Alüminyum alaşım (Leichtmetall) |
| **Nominal çap** | ~68,94–68,96 mm (silindir boyuna göre eşleştirme) |
| **Piston pimi çapı** | Standart (biyel tipi bağımlı) |
| **Segman sayısı** | 2 adet (her ikisi de sızdırmazlık) |
| **Ağırlık** | Dengelenmeli (karşı ağırlık ile uyumlu) |

### 2 Zamanlı Pistonun Özel Özellikleri

4 zamanlı pistonlardan farklı olarak:
- **Yağ segmanı yoktur** (2T'de yağ yakıtla birlikte yanar)
- **Port pencereleri** piston eteğinde bulunabilir
- **Segman kilitleme pinleri** vardır (segman ağızlarının portlara denk gelmesini önler)
- **Piston eteği daha kısa** olabilir
- **Termal genleşme yönlendirmesi**: piston eteğinde genleşme yönü kontrolü için özel profil

### Piston-Silindir Eşleştirmesi

ETZ 251'de piston ve silindir **eşleştirilmiş çiftler** (Auswahlpaarung) olarak satılır:

| Sınıf | Açıklama |
|---|---|
| Her silindir bir tolerans sınıfında üretilir | |
| Eşleşen piston, o tolerans sınıfına uygun çapta | |
| Montajda **aynı sınıf** silindir ve piston kullanılmalı | |

**Piston-silindir aralığı**: ~0,04–0,06 mm (ideal)
- Çok dar → piston tutması riski
- Çok geniş → güç kaybı, aşırı yağ tüketimi, çarpma sesi

---

## Segmanlar (Kolbenringe)

### Segman Tipleri

ETZ 251 pistonunda **2 adet sızdırmazlık segmanı** bulunur:

| Segman | Pozisyon | İşlev |
|---|---|---|
| **Üst segman** | 1. kanal (tepeden yakın) | Ana sızdırmazlık, en yüksek basınca maruz |
| **Alt segman** | 2. kanal | Yedek sızdırmazlık, yağ kontrolü |

### Segman Ölçüleri

| Parametre | Değer |
|---|---|
| **Nominal çap** | 69 mm (standart) |
| **Ring gap (serbest)** | Üretici spesifikasyonuna göre |
| **Ring gap (silindirde)** | 0,15–0,40 mm (yeni) |
| **Maksimum ring gap** | >0,8 mm → değiştir |
| **Yandan boşluk** | 0,02–0,05 mm |
| **Kilitleme pini** | Var (2T motorlarda zorunlu) |

### Ring Gap Ölçümü

1. Segmanı silindire yerleştirin (pistonla iterek düzgün oturmasını sağlayın)
2. Segmanın ağız aralığını feeler gauge ile ölçün
3. Spesifikasyonu karşılaştırın

### Segman Montaj Kuralları

1. **Segman pensesi** kullanın — elle açmayın (kırılabilir)
2. **Yazılı yüzey yukarı** bakmalı ("TOP" veya üretici işareti)
3. Segman ağızları **kilitleme pinleri üzerine** oturmalı
4. Segmanları **asla 90°'den fazla** açmayın
5. Montajdan sonra piston serbestçe dönmeli (silindir takılmadan)

---

## Piston Pimi (Kolbenbolzen) ve Biyel Bağlantısı

| Parametre | Değer |
|---|---|
| **Malzeme** | Sertleştirilmiş çelik |
| **Sabitleme** | İki uçta seger (circlip) |
| **Biyel bağlantısı** | İğne yatak (Nadellager) |

### Piston Pimi Segerleri (Circlip)

- **Her seferinde yeni** seger kullanın
- Eski segerler esnekliğini kaybetmiş olabilir → düşerse motor hasar görür
- Seger yuvaya **tam oturmalı** — kısmen oturan seger çıkabilir!
- Segeri takarken **piston pimi deliğinden ötesine** düşürmemeye dikkat edin (karter içine düşer!)

---

## Piston Tutması (Kolbenklemmer) Sonrası

Piston tutması yaşandıysa:
1. Silindir ve pistonu **sökün**
2. Hasarı değerlendirin:
   - **Hafif çizik**: Silindir honlanabilir, piston değiştirilir
   - **Derin çizik/scoring**: Silindir oversize'a honlanır + oversize piston
   - **Port kenarı hasarı**: Silindir değiştirilmeli
3. **Nedeni araştırın** (yoksa tekrar eder):
   - Fakir karışım? → Karbüratör kontrol
   - Hava kaçağı? → Emme borusu/conta kontrol
   - Yetersiz yağlama? → Yağ oranı/pompa kontrol
   - Ateşleme sorunu? → Zamanlama kontrol

---

*Kaynak: MZ Reparaturanleitung, KFT test raporları, genel 2T motor tamir pratikleri*

→ [Motor Üst Revizyon](motor-ust-revizyon.md) | [Krank Mili Revizyon](krank-mili.md) | [Ana Sayfa](../README.md)
