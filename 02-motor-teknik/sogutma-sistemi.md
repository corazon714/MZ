# Soğutma Sistemi

## Genel Bakış

MZ ETZ 251 motoru (EM 251), tamamen **hava soğutmalı** (luftgekühlt / air-cooled) bir motordur. Sıvı soğutma sistemi, radyatör, su pompası veya termostat yoktur. Soğutma, sürüş sırasında silindirin üzerinden geçen hava akışı ile sağlanır.

## Silindir Kanatçık Tasarımı

### ETZ 250/251'de Soğutma İyileştirmesi

MZ mühendisleri, TS 250'den ETZ 250'ye geçişte silindir soğutma kapasitesini önemli ölçüde artırmıştır. Bu iyileştirme ETZ 251'de de aynen korunmuştur:

| Parametre | TS 250 | ETZ 250 / 251 |
|---|---|---|
| **Silindir kanatçık sayısı** | 7 adet | **9 adet** |
| **Kanatçık yönü** | Yatay | Yatay |
| **Silindir kapağı kanatçıkları** | Yatay | **Yatay (artırılmış)** |
| **Toplam ısı atım yüzeyi artışı** | Referans | **%40 artış** |

### Kanatçık Yapısı

```
        ┌─── Silindir Kapağı (Zylinderkopf) ───┐
        │  ═══════════════════════════════════   │  ← Yatay kanatçıklar
        │  ═══════════════════════════════════   │
        ├────────────────────────────────────────┤
        │  ═══════════════════════════════════   │  ← Kanatçık 1
        │  ═══════════════════════════════════   │  ← Kanatçık 2
Sönüm →│||═══════════════════════════════════||│  ← Kanatçık 3
Kamağı  │||═══════════════════════════════════||│  ← Kanatçık 4
(Dämf.) │||═══════════════════════════════════||│  ← Kanatçık 5
        │||═══════════════════════════════════||│  ← Kanatçık 6
        │||═══════════════════════════════════||│  ← Kanatçık 7
        │||═══════════════════════════════════||│  ← Kanatçık 8
        │||═══════════════════════════════════||│  ← Kanatçık 9
        ├────────────────────────────────────────┤
        │        Motor Gövdesi                   │
        └────────────────────────────────────────┘
         ||                                  ||
         Titreşim Sönümleme Elemanları (×2 her yanda)
```

### Titreşim Sönümleme Elemanları (Dämpfungskamm)

Silindirin her iki yanında **2'şer adet** (toplam 4) metal sönümleme elemanı bulunur:
- **Dikey** olarak tüm kanatçıklar boyunca uzanır
- Silindir kapağını da kapsar
- **Gövde ses emisyonunu** (Körperschallemission) azaltır
- Kanatçıkların titreşerek ses üretmesini önler

## Soğutma Prensibi

### Isı Transferi Zinciri

```
Yanma Odası → Piston → Silindir Duvarı → Kanatçıklar → HAVA
(~2000°C)     (~300°C)   (~180°C)         (~120°C)     (~30°C)
```

### Hava Akışı

1. Motor çalışırken, motosikletin ileri hareketi silindir üzerinden hava akışı sağlar
2. Kanatçıklar, yüzey alanını artırarak daha fazla ısı transferi sağlar
3. Hava, kanatçıklar arasındaki kanallardan geçerek ısıyı alır

### Soğutma Verimliliğini Etkileyen Faktörler

| Faktör | Etkisi |
|---|---|
| **Hız** | Yüksek hız → daha fazla hava akışı → daha iyi soğutma |
| **Ortam sıcaklığı** | Yüksek sıcaklık → soğutma verimliliği düşer |
| **Kir/toz birikimi** | Kanatçık arası tıkanma → ısı transferi azalır |
| **Yağ kalitesi** | İyi yağ → daha iyi iç yağlama → daha az sürtünme ısısı |
| **Karışım zenginliği** | Fakir karışım → aşırı ısınma riski |
| **Rölanti süresi** | Uzun rölanti → az hava akışı → aşırı ısınma riski |
| **Yokuş/düşük vites** | Yüksek yük + düşük hız → yetersiz soğutma |
| **Trafik** | Dur-kalk → soğutma yetersiz kalabilir |

## Aşırı Isınma (Überhitzung) Riskleri

### Belirtiler
- Motor gücünde ani düşüş
- Detonasyon sesleri (metalik "ping")
- Anormal motor titreşimi
- Motor duruyor veya çalışmıyor (piston tutması)
- Silindir kapağı dokunulamayacak kadar sıcak

### Aşırı Isınma Nedenleri

| Neden | Çözüm |
|---|---|
| Fakir yakıt karışımı | Karbüratör ayarı kontrol, jikle boyutları kontrol |
| Hava kaçağı (emme manifoldu) | Emme borusu ve contaları kontrol/değiştir |
| Kanatçıklarda kir birikimi | Temizle (fırça, basınçlı hava) |
| Ateşleme avansı çok ileri | Ateşleme zamanlaması kontrol/ayarla |
| Düşük yağ oranı (ön-karışım) | Doğru oranı kullan (1:50) |
| Yağ pompası arızası (ayrı yağlama) | Pompa kontrol, gerekirse ön-karışıma geç |
| Buji ısı derecesi yanlış | Doğru buji kullan (B8ES/B7ES) |
| Uzun süreli rölanti / trafik | Motor yükünü azalt, mümkünse rölantide kapat |
| Deforme/hasarlı silindir contası | Contayı değiştir |

### ⚠️ Piston Tutması (Kolbenklemmer) ile İlişki

Aşırı ısınma, en korkulan arıza olan **piston tutması**na (Kolbenklemmer) yol açar:
- Silindir ve piston farklı oranlarda genleşir
- Piston, silindir duvarına yapışır (tutar)
- Motor **aniden durur**
- Ciddi motor hasarı (silindir çizilmesi, piston kırılması)

> Detaylı bilgi: [Piston Tutması (Kolbenklemmer)](../05-sorun-giderme/kolben-klemmer.md)

## Bakım ve Temizlik

### Kanatçık Temizliği

| İşlem | Aralık | Yöntem |
|---|---|---|
| **Görsel kontrol** | Her 2500 km | Kir, böcek, yaprak birikimi kontrol |
| **Yüzey temizliği** | Her 5000 km | Fırça ile kuru temizlik |
| **Derin temizlik** | Her 10.000 km veya mevsimlik | Basınçlı hava veya solvent ile |
| **Yağ/gres birikimi** | Gerektiğinde | Yağ çözücü (degreaser) ile |

### Temizlik Prosedürü

1. Motoru soğumaya bırakın (**asla sıcak motoru yıkamayın** — termal şok riski)
2. Kaba kirleri yumuşak fırça ile temizleyin
3. Kanatçık aralarını basınçlı hava ile üfleyin
4. Yağlı birikmeler varsa, yağ çözücü sprey uygulayın
5. Bezle silerek kurulayın
6. Titreşim sönümleme elemanlarının (Dämpfungskamm) yerinde olduğunu kontrol edin

> ⚠️ **DİKKAT**: Yüksek basınçlı su kullanmayın — kanatçıklar arasına su girebilir ve korozyon yapabilir.

---

*Kaynak: KFT 1981/5, MZ Betriebsanleitung*

→ [Ateşleme Sistemi](atesleme-sistemi.md) | [Egzoz Sistemi](egzoz-sistemi.md) | [Ana Sayfa](../README.md)
