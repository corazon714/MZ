# Ateşleme Ayarı

## Elektronik Ateşleme (CDI) — Ayar

Elektronik ateşlemeli ETZ 251 modellerde ateşleme zamanlaması **fabrika ayarlıdır** ve normalde ayar gerektirmez. Ancak kontrol gerekebilir:

### Ne Zaman Kontrol Gerekir?
- Motor güç kaybettiyse
- Detonasyon (ping) sesleri varsa
- Motorun üst devire çıkışı zayıfsa
- CDI ünitesi veya tetikleme bobini değiştirildiyse

### Kontrol Prosedürü

1. Bujiyi sökün
2. Buji deliğinden bir **milimetrik gösterge** (dial gauge) yerleştirin
3. Krank milini yavaşça çevirerek pistonu **ÜÖN** (üst ölü nokta / OT) konumuna getirin
4. Göstergeyi **sıfırlayın**
5. Krank milini **geriye** çevirin (pistonun inme yönü)
6. Ateşleme anını tespit edin:
   - Piston ÜÖN'den **1,8–2,2 mm önce** olmalı
7. Spesifikasyon dışındaysa CDI ünitesi veya tetikleme bobinini kontrol edin

> Elektronik ateşlemede mekanik ayar yoktur. Zamanlama yanlışsa bileşenler arızalı olabilir.

---

## Mekanik Ateşleme (Platinli) — Ayar

### Gerekli Aletler
- Feeler gauge (0,4 mm)
- Düz tornavida
- Milimetrik gösterge (dial gauge) veya zamanlama aleti
- Kontrol lambası veya multimetre
- 17/19 mm lokma anahtar (volanı çevirmek için)

### Platin Aralığı Ayarı (Unterbrecherabstand)

**Hedef**: 0,35–0,45 mm (nominal **0,4 mm**)

1. **Jeneratör kapağını** (Lichtmaschinendeckel) sökün
2. Krank milini çevirerek **kam tepesini** platin üzerine getirin (platin maksimum açık)
3. **Feeler gauge** (0,4 mm) ile platin aralığını kontrol edin
4. Gauge, platin kontakları arasından **hafif sürtünerek** geçmeli
5. Ayar gerekiyorsa:
   - Platin taban vidasını **hafifçe** gevşetin
   - Düz tornavida ile platin tabanını kaydırarak aralığı ayarlayın
   - Vidayı sıkın
   - Tekrar kontrol edin (sıkma sırasında kayma olabilir)

### Ateşleme Zamanlaması Ayarı (Zündzeitpunkt)

**Hedef**: Piston ÜÖN'den **1,8–2,2 mm önce** (BTDC)

#### Yöntem 1: Kontrol Lambası ile

1. Bujiyi sökün
2. Buji deliğinden **milimetrik gösterge** yerleştirin
3. Pistonu ÜÖN'ye getirin ve göstergeyi sıfırlayın
4. Platin kontağına bir **kontrol lambası** (12V) bağlayın:
   - Bir uç: platin bağlantı terminali
   - Diğer uç: şasi (toprak)
5. Kontağı açın (ateşleme açık)
6. Krank milini **yavaşça** saat yönünde çevirin
7. Lamba **yandığı an** = platin açılma anı = ateşleme anı
8. Bu anda göstergedeki değer **1,8–2,2 mm** olmalı

#### Yöntem 2: Sigara Kağıdı ile (Basit)

1. Platin kontakları arasına ince bir **sigara kağıdı** sıkıştırın
2. Kontağı açın
3. Krank milini yavaşça çevirin
4. Kağıt **serbest kaldığı an** (çekildiğinde kolayca çıkıyorsa) = platin açıldı
5. Bu anda piston konumunu kontrol edin

#### Ayar (Zamanlama Doğru Değilse)

- **Çok erken ateşleme** (>2,2 mm BTDC):
  - Belirtiler: detonasyon, metalik çınlama, aşırı ısınma
  - Çözüm: Platin taban plakasını ateşlemeyi **geciktirme** yönünde kaydırın

- **Çok geç ateşleme** (<1,8 mm BTDC):
  - Belirtiler: güç kaybı, aşırı ısınma, kötü üst devir
  - Çözüm: Platin taban plakasını ateşlemeyi **erkene alma** yönünde kaydırın

### Avans Mekanizması Kontrolü (Santrifüj)

Mekanik ateşlemeli modellerde **santrifüj avans** (Fliehkraftverstellung) bulunur:

1. Jeneratör kapağını sökün
2. Avans mekanizmasının serbest hareket ettiğini kontrol edin
3. Ağırlıklar (Fliehgewichte) **yumuşak** hareket etmeli
4. Yaylar sağlam ve uygun gerginlikte olmalı
5. Paslanma veya yapışma varsa temizleyin ve yağlayın

---

## Ateşleme Sistemi Arıza Kontrol Listesi

| Kontrol | Yöntem | Beklenen |
|---|---|---|
| **Kıvılcım testi** | Bujiyi çıkar, gövdeye temas ettir, kickle | Mavi-beyaz güçlü kıvılcım |
| **Buji direnci** | Multimetre | Buji başlığı: 1–5 kΩ |
| **Kablo direnci** | Multimetre, her iki uçtan | < 10 kΩ |
| **Bobin birincil** | Multimetre | 0,5–2,0 Ω |
| **Bobin ikincil** | Multimetre | 5.000–10.000 Ω |
| **Platin aralığı** | Feeler gauge | 0,4 mm |
| **Kondansatör** | Kapasite ölçer veya değiştirerek test | ~0,22 µF |

---

*Kaynak: MZ Reparaturanleitung, KFT 1986/9, genel 2T ateşleme servis pratikleri*

→ [Ateşleme Sistemi Teknik](../02-motor-teknik/atesleme-sistemi.md) | [Karbüratör Ayarı](karburator-ayari.md) | [Ana Sayfa](../README.md)
