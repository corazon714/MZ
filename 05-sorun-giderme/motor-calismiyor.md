# Motor Çalışmıyor — Arıza Tespit Rehberi

## Hızlı Kontrol Akış Şeması

```
MOTOR ÇALIŞMIYOR
       │
       ├── Kickstarter sert mi? (Sıkıştırma hissi)
       │   ├── HAYIR → Sıkıştırma yok → [A] Sıkıştırma Sorunları
       │   └── EVET → Devam
       │
       ├── Buji kıvılcım çakıyor mu?
       │   │  (Bujiyi sök, gövdeye temas ettir, kickle)
       │   ├── HAYIR → [B] Ateşleme Sorunları
       │   └── EVET → Devam
       │
       ├── Buji ıslak mı? (Yakıt ulaşıyor mu?)
       │   ├── HAYIR → [C] Yakıt Sorunları
       │   └── EVET → Devam (veya aşırı ıslak = boğulmuş)
       │
       └── Tüm üçü tamam ama çalışmıyor
           └── [D] Diğer Nedenler
```

---

## [A] Sıkıştırma Sorunları

**Belirti**: Kickstarter çok kolay (dirençsiz) dönüyor.

| Neden | Kontrol | Çözüm |
|---|---|---|
| Buji gevşek/sökük | Bujiyi kontrol et | Bujiyi sık |
| Segmanlar aşınmış | Sıkıştırma testi (kompresyon tester) | Segman/piston değişimi |
| Silindir çizik/hasarlı | Sıkıştırma testi + söküm | Silindir honlama/oversize |
| Silindir kapağı contası hasarlı | Conta bölgesinden hava kaçağı | Conta değişimi |
| Karter sızdırmazlığı bozuk | Karter basıncı tutmuyor | Conta/simer değişimi |

### Sıkıştırma Testi
1. Bujiyi sökün
2. Kompresyon tester'ı buji deliğine takın
3. Gaz kolu **tam açık**
4. 5-10 kick vurun
5. **Beklenen**: ~8–12 bar (2 zamanlı motor)
6. <6 bar → sıkıştırma sorunu var

---

## [B] Ateşleme Sorunları — Kıvılcım Yok

### Kontrol Sırası

| Adım | Kontrol | Doğru Durum |
|---|---|---|
| 1 | **Kill switch** (motor durdurma) | RUN (çalışır) konumunda |
| 2 | **Buji** | Sağlam, temiz, doğru aralık (0,5-0,6 mm) |
| 3 | **Buji başlığı** | Sıkı oturuyor, direnç 1-5 kΩ |
| 4 | **Buji kablosu** | Sağlam, kopuk değil, <10 kΩ |
| 5 | **Ateşleme bobini** | Birincil: 0,5-2 Ω, İkincil: 5-10 kΩ |
| 6 | **Platin kontağı** (mekanik) | Aralık 0,4 mm, temiz, yanmamış |
| 7 | **Kondansatör** (mekanik) | ~0,22 µF, sağlam |
| 8 | **CDI ünitesi** (elektronik) | Diğer tüm bileşenler sağlamsa → CDI |
| 9 | **Tetikleme bobini** (elektronik) | Direnç ölçümü, üretici değeri |
| 10 | **Kablolama** | Kısa devre, kopukluk, korozyon |

### Islak Kıvılcım Testi

Buji kıvılcım çakmıyorsa ama buji değiştirince çakıyorsa → **eski buji arızalı**.

### CDI vs Mekanik Ateşleme Farkı

| CDI Arızası | Mekanik Arızası |
|---|---|
| Tamamen kıvılcım yok veya düzensiz | Zayıf/turuncu kıvılcım |
| CDI ısındığında arıza | Platin aşınması |
| Sıfır ayar imkanı | Ayar ve bakım yapılabilir |
| Sadece değiştirilir | Tamir edilebilir |

---

## [C] Yakıt Sorunları — Buji Kuru

**Belirti**: Kıvılcım var ama buji kuru — yakıt silindire ulaşmıyor.

| Adım | Kontrol | Çözüm |
|---|---|---|
| 1 | **Yakıt musluğu** açık mı? | Açın (ON veya RESERVE) |
| 2 | **Depoda yakıt** var mı? | Yakıt ekleyin |
| 3 | **Yakıt musluğu** akıtıyor mu? | Hortumu çıkar, musluğu aç → akmalı |
| 4 | **Yakıt filtresi** tıkalı mı? | Temizle veya değiştir |
| 5 | **Yakıt hortumu** tıkalı veya bükülmüş mü? | Düzelt veya değiştir |
| 6 | **Depo havalandırması** tıkalı mı? | Kapağı açık çalıştır → çalışıyorsa tıkalı |
| 7 | **Karbüratör** tıkalı mı? | Şamandıra odasını boşalt → yakıt geliyor mu? |
| 8 | **Karbüratör jikleleri** tıkalı mı? | Karbüratör revizyonu |
| 9 | **Emme borusu** çatlak/düşmüş mü? | Kontrol ve değiştir |

### Depo Havalandırması Testi
Yakıt 1-2 dakika sonra kesiliyorsa → depo kapağı havalandırması tıkalı. Tank içinde vakum oluşuyor.
- **Test**: Kapağı açık çalıştırın. Çalışıyorsa → kapak havalandırmasını temizleyin.

---

## [D] Diğer Nedenler

Yakıt, kıvılcım ve sıkıştırma yeterli ama motor çalışmıyorsa:

| Neden | Açıklama | Çözüm |
|---|---|---|
| **Motor boğulmuş** (buji çok ıslak) | Aşırı yakıt silindirde birikmiş | Bujiyi sök, kick ile havalandır, kuru buji tak |
| **Ateşleme zamanlaması çok bozuk** | Yanlış zamanlama — karışım tutuşamıyor | Zamanlama kontrol/ayar |
| **Hava kaçağı** (karter) | Çok fakir karışım — tutuşamıyor | Conta/simer kontrolü |
| **Egzoz tamamen tıkalı** | Karbon birikimi — gazlar çıkamıyor | Egzoz temizliği |
| **Motor kilitli** | Piston tutulmuş, yatak arızası | Motoru sök, incele |
| **Su girişi** | Yakıtta su — tutuşamıyor | Tankı boşalt, karbüratörü boşalt |

---

## Soğuk Havalarda Çalıştırma Sorunları

| Neden | Çözüm |
|---|---|
| Jikle kullanılmıyor | Jikle'yi kapatın (zengin karışım) |
| Akü zayıf (elektrik start varsa) | Aküyü şarj edin |
| Yağ çok koyu (debriyaj sürükleme) | Debriyajı çekin, kickleyin |
| Buji kirli/ıslak | Temiz/kuru buji takın |
| Eski yakıt | Taze yakıt koyun |

---

*Kaynak: MZ Reparaturanleitung, genel 2T motor arıza tespit pratikleri*

→ [Güç Kaybı](guc-kaybi.md) | [Piston Tutması](kolben-klemmer.md) | [Ana Sayfa](../README.md)
