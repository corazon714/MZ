# Elektrik Sistemi Bakımı

## Sistem Genel Bakış

| Parametre | Değer |
|---|---|
| **Voltaj** | 12V DC |
| **Jeneratör** | AC drehstrom Lichtmaschine (alternatör), 180W |
| **Doğrultucu** | Drehstromgleichrichter (köprü doğrultucu) |
| **Regülatör** | Spannungsregler (voltaj regülatörü) |
| **Akü** | 12V, kurşun-asit |
| **Far** | H4 Halojen, 60/55W |
| **Konum** | Doğrultucu ve regülatör sele altında; akü sağ yan kapak altında |

---

## Jeneratör (Lichtmaschine)

### Bakım

| İşlem | Aralık | Yöntem |
|---|---|---|
| Şarj kontrolü | Her 5000 km | Multimetre ile akü voltajı (motor çalışırken) |
| Kablo bağlantıları | Her 5000 km | Gevşeklik, korozyon |
| Jeneratör çıkış testi | Sorun durumunda | AC voltaj ölçümü |

### Şarj Sistemi Testi

1. **Akü voltajı (motor kapalı)**: ~12,5–12,8 V (tam şarj)
2. **Akü voltajı (motor çalışırken, ~3000 d/d)**: **13,5–14,5 V**
   - <13,5V: Şarj yetersiz → jeneratör, doğrultucu veya regülatör arızalı
   - >15,0V: Aşırı şarj → regülatör arızalı → akü hasar görebilir!
3. **Jeneratör AC çıkış** (konnektör ayrılmış, motor çalışırken): Her fazda AC voltaj ölçün

---

## Akü (Batterie)

### Akü Tipleri

| Tip | Avantaj | Dezavantaj |
|---|---|---|
| **Konvansiyonel (açık)** | Ucuz, orijinal | Bakım gerekir (su ekleme) |
| **MF (bakımsız)** | Bakım gerektirmez | Biraz daha pahalı |
| **Jel** | Bakımsız, devrilme güvenli | En pahalı |

### Akü Bakımı

#### Konvansiyonel (Açık) Akü

| İşlem | Aralık |
|---|---|
| Elektrolit seviyesi kontrolü | Her ay |
| Terminal temizliği | Her 3 ay |
| Şarj durumu kontrolü | Her ay |
| Tam şarj | Uzun süre kullanılmayacaksa |

**Elektrolit ekleme**: Yalnızca **damıtık su** (destilliertes Wasser) ekleyin. **Asla** musluk suyu veya asit eklemeyin!

#### Tüm Akü Tipleri

| İşlem | Aralık |
|---|---|
| Terminal cıvatalarını sık | Her 5000 km |
| Terminallere vazelin veya pil gresi | Her 6 ay |
| Voltaj kontrolü | Her ay |
| Akü kasası temizliği | Her 3 ay |

### Akü Şarj

| Parametre | Değer |
|---|---|
| **Şarj akımı** | Akü kapasitesinin 1/10'u (ör. 7 Ah → 0,7 A) |
| **Şarj voltajı** | Maks. 14,4V (otomatik şarj cihazı önerilir) |
| **Şarj süresi** | 8–12 saat (boşalmış akü) |
| **Tam şarj voltajı** | 12,7–12,8V (yüksüz) |

### Akü Arıza Belirtileri

| Belirti | Olası Neden |
|---|---|
| Farlar sönük | Akü düşük şarj veya jeneratör arızası |
| Motor çalışmıyor (elektrik) | Akü boş veya terminal gevşek |
| Akü sık boşalıyor | Şarj sistemi arızası veya kaçak akım |
| Akü şişmiş | Aşırı şarj (regülatör arızası) |
| Akü kokuyor (yumurta) | Aşırı şarj veya ömrü dolmuş |

---

## Aydınlatma ve Sinyaller

### Far (Scheinwerfer)

| Parametre | Değer |
|---|---|
| **Tip** | H4 Halojen |
| **Güç** | 60W (uzun huzme) / 55W (kısa huzme) |
| **Çap** | 170 mm |
| **Renk** | Mat siyah gövde |
| **Asimetrik** | Kısa huzme asimetrik (sağ trafiğe ayarlı) |

### Ampul Değişimi

| Lamba | Tip | Güç |
|---|---|---|
| Far | H4 | 60/55W |
| Arka lamba (fren+park) | Çift flamanlı | 21/5W |
| Sinyal (sinyal) | Tek flamanlı | 21W |
| Gösterge aydınlatma | Küçük ampul | 1,2–3W |
| Nötr göstergesi | Küçük ampul | 1,2W |

### Sinyal Flaşörü (Blinkgeber)

| Parametre | Değer |
|---|---|
| **Tip** | Elektronik veya termal |
| **Flaş hızı** | 60–120 flaş/dakika |
| **Konum** | Gidon altında veya sele altında |

**Sorun**: Sinyal çok hızlı yanıp sönüyorsa → bir sinyal ampulü yanmış. Çok yavaş → flaşör veya topraklama sorunu.

---

## Kablolama Bakımı

### Genel Kontroller

| İşlem | Aralık |
|---|---|
| Kablo izolasyonu kontrolü | Her 10.000 km |
| Konnektör temizliği | Her 10.000 km |
| Topraklama noktaları | Her 5000 km |
| Sigorta kontrolü | Sorun durumunda |

### Yaygın Elektrik Sorunları

| Sorun | Olası Neden | Çözüm |
|---|---|---|
| Tüm elektrik ölü | Akü boş, ana sigorta | Akü şarj/değiştir, sigorta kontrol |
| Far yanmıyor | Ampul, anahtar, kablo | Ampul değiştir, kablo kontrol |
| Tek sinyal çalışmıyor | Ampul, topraklama | Ampul değiştir, toprak bağlantısı kontrol |
| Fren lambası yanmıyor | Ampul, fren şalteri | Ampul değiştir, şalter ayarla |
| Şarj olmuyor | Jeneratör, doğrultucu, regülatör | Tek tek test et |
| Kısa devre | Hasarlı kablo, su girişi | Kablo güzergahını incele, kuru tut |

### Topraklama (Masse) Noktaları

ETZ 251'de negatif kutup şasiye bağlıdır (negatif topraklama). Topraklama sorunları en yaygın elektrik arıza nedenlerinden biridir:

- Topraklama cıvatalarında **korozyon** kontrol edin
- Bağlantı noktasını **zımparala** ve temizle
- **Yıldız rondela** kullanarak iyi temas sağlayın
- Bağlantıya **vazelin** sürün (korozyon önleme)

---

*Kaynak: MZ Betriebsanleitung, KFT 1981/5, genel motosiklet elektrik bakım pratikleri*

→ [Fren Bakımı](fren-bakim.md) | [Kış Bakımı](kis-bakimi.md) | [Ana Sayfa](../README.md)
