# Elektrik Tamiri

## Genel Arıza Tespit Yaklaşımı

Elektrik arızalarında sistematik yaklaşım önemlidir:

1. **Basit olanı kontrol et**: Sigorta, akü, ampul
2. **Devreyi takip et**: Güç kaynağı → anahtar → yük → toprak
3. **Ölç**: Multimetre ile voltaj, direnç, süreklilik

### Temel Multimetre Kullanımı

| Ölçüm | Mod | Nasıl |
|---|---|---|
| **Voltaj** | V DC | Paralel ölçüm (devre üzerinde) |
| **Süreklilik** | Ω veya bip | Devre kapalıyken, iki uç arası |
| **Direnç** | Ω | Devre kapalıyken, bileşen üzerinde |
| **Akım** | A DC | Seri ölçüm (devreye seri bağla) |

---

## Şarj Sistemi Arızaları

### Jeneratör (Lichtmaschine) Testi

**Belirtiler**: Akü şarj olmuyor, farlar sönük, akü sık boşalıyor.

#### Test 1: Şarj Voltajı
1. Aküyü tam şarj edin
2. Motoru çalıştırın, ~3000 d/d
3. Akü terminalleri üzerinde voltajı ölçün
4. **13,5–14,5V** arası olmalı

| Sonuç | Anlam |
|---|---|
| <13,0V | Şarj yetersiz → jeneratör, doğrultucu veya regülatör arızalı |
| 13,5–14,5V | Normal |
| >15,0V | Aşırı şarj → regülatör arızalı |

#### Test 2: Jeneratör AC Çıkışı
1. Jeneratör fişini çıkarın (motor tarafı)
2. Motoru çalıştırın, ~3000 d/d
3. Jeneratör çıkış kablolarında **AC voltajı** ölçün
4. Her faz çifti arasında yaklaşık eşit AC voltaj olmalı

| Sonuç | Anlam |
|---|---|
| Tüm fazlarda voltaj var, eşit | Jeneratör sağlam |
| Bir fazda voltaj yok | Jeneratör bobini hasarlı |
| Hiç voltaj yok | Jeneratör hasarlı veya kablo kopuk |

#### Test 3: Jeneratör Bobin Direnci
1. Jeneratör fişi çıkık
2. Bobin uçları arasında **direnç** ölçün
3. Üretici değeri ile karşılaştırın (~birkaç Ω)
4. Sonsuz (∞) = kopuk bobin
5. 0 = kısa devre

### Doğrultucu (Gleichrichter) Testi

1. Fişi çıkarın
2. Multimetre'yi diyot moduna alın
3. Her bir diyodu iki yönde test edin:
   - Bir yönde: düşük direnç (iletim)
   - Ters yönde: yüksek direnç / sonsuz (kilitleme)
4. Her iki yönde iletim → diyot kısa devre (arızalı)
5. Her iki yönde kilitleme → diyot açık devre (arızalı)

### Voltaj Regülatörü Testi

1. Motor çalışırken akü voltajını izleyin
2. Devir artırıldığında voltaj **14,5V'u geçmemeli**
3. Geçiyorsa → regülatör arızalı → **hemen değiştirin** (akü zarar görür)

---

## Ateşleme Sistemi Arızaları

### Kıvılcım Yok — Kontrol Sırası

1. **Buji**: Sök, gövdeye temas ettir, kick → kıvılcım var mı?
2. **Buji kablosu**: Kablonun ucu gövdeye yaklaştır → kıvılcım?
3. **Buji başlığı**: İç direnci kontrol (1-5 kΩ)
4. **Ateşleme bobini**: Birincil/ikincil direnç ölç
5. **CDI ünitesi**: Diğer tüm bileşenler sağlamsa → CDI arızalı
6. **Platin kontağı** (mekanik): Aralık, temizlik, kondansatör

### CDI Ünitesi Arızası

CDI ünitesi genellikle **tamir edilemez** — değiştirilir. Arıza belirtileri:
- Hiç kıvılcım yok (diğer bileşenler sağlam)
- Düzensiz kıvılcım
- Motor ısındığında duruyor (CDI'daki elektronik ısıya duyarlı)
- Motor belirli devirlerde ateşleme kaçırıyor

### Kondansatör Arızası (Mekanik Ateşleme)

| Belirti | Anlam |
|---|---|
| Platin kontağı hızla yanıyor | Kondansatör arızalı veya kapasite düşük |
| Zayıf, turuncu kıvılcım | Kondansatör arızalı |
| Motor yüksek devirde ateşleme kaçırıyor | Kondansatör kapasite kaybı |

**Test**: Kondansatörü yenisiyle değiştirerek deneyin. Ölçüm için kapasite ölçer gerekir (~0,22 µF).

---

## Aydınlatma Arızaları

### Far Yanmıyor

| Kontrol Sırası | Yöntem |
|---|---|
| 1. Ampul | Çıkar, kontrol et (filaman kopuk mu?) |
| 2. Soket | Korozyon, gevşeklik |
| 3. Anahtar | Kontak süreklilik testi |
| 4. Sigorta | Görsel veya multimetre |
| 5. Kablo | Süreklilik testi (güçten sokete kadar) |
| 6. Topraklama | Far gövdesi-şasi arası süreklilik |
| 7. Jeneratör çıkışı | Far devresi doğrudan AC beslemeli olabilir |

### Sinyal Arızaları

| Sorun | Olası Neden |
|---|---|
| Bir sinyal yanmıyor | Ampul yanmış, soket, kablo |
| Tüm sinyaller yanmıyor | Flaşör arızalı, sigorta, anahtar |
| Çok hızlı yanıp sönme | Bir ampul yanmış (diğer taraf) |
| Çok yavaş yanıp sönme | Flaşör arızalı, topraklama sorunu |
| Sürekli yanık kalıyor | Flaşör arızalı |

---

## Kablolama Tamiri

### Kablo Onarımı

| Yöntem | Ne Zaman |
|---|---|
| **Lehimleme** | En iyi yöntem, kalıcı bağlantı |
| **Krimpleme** | Hızlı, güvenilir (doğru konnektör ile) |
| **Bantlama** | Geçici — uzun vadeli çözüm değil |

### Lehimleme Prosedürü

1. Kabloların ucunu soyun (~5 mm)
2. Uçları bükerek birleştirin
3. Lehim pastası (flux) uygulayın
4. Lehim havyası ile lehimleyin (kalaysız lehim → kurşunsuz lehim tercih)
5. Soğumaya bırakın (üflemeyeceğin!)
6. **Isıyla daralan makaron** (Schrumpfschlauch) ile izole edin

### Topraklama Sorunları — Çözüm

Topraklama (Masse) sorunları elektrik arızalarının **%50'sinden fazlasını** oluşturur:

1. Topraklama cıvatasını sökün
2. Hem cıvata hem yüzeyi **zımpara** ile temizleyin (parlak metal görünene kadar)
3. **Yıldız rondela** kullanın (daha iyi temas)
4. Sıkın
5. Üzerine **vazelin veya koruma spreyi** uygulayın (korozyon önleme)

---

*Kaynak: MZ Betriebsanleitung, MZ Schaltplan, genel motosiklet elektrik tamir pratikleri*

→ [Karbüratör Revizyonu](karburator-revizyon.md) | [Süspansiyon Tamiri](suspansiyon-tamiri.md) | [Ana Sayfa](../README.md)
