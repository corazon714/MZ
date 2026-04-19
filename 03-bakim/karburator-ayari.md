# Karbüratör Ayarı — BVF 30 N 3-1

## Ön Hazırlık

Karbüratör ayarı yapmadan önce aşağıdakilerin sağlıklı olduğundan emin olun:
- ✅ Hava filtresi temiz ve yerinde
- ✅ Egzoz sistemi sağlam, sızıntı yok
- ✅ Emme borusu (Ansauggummi) sağlam, çatlak yok
- ✅ Ateşleme sistemi düzgün çalışıyor
- ✅ Buji doğru tipte ve sağlam
- ✅ Silindir sıkıştırması yeterli
- ✅ Motor normal çalışma sıcaklığında

> ⚠️ Yukarıdaki koşullar sağlanmadan yapılan karbüratör ayarı yanlış sonuç verir!

---

## BVF 30 N 3-1 Genel Görünüm

Aşağıdaki şema, karbüratörün motosikletteki yerleşimini ve dışarıdan erişilebilen ayar noktalarını gösterir.

### Karbüratör Motosikletteki Konumu

```
            Hava Filtresi            Karbüratör           Motor (Silindir)
            ┌─────────┐            ┌──────────┐          ┌──────────────┐
  HAVA ───→ │ Filtre   │ ──HAVA──→ │  BVF     │ ─KARİŞİM→│  Emme Portu  │
            │ Elemanı  │           │  30 N    │           │  (İntake)    │
            └─────────┘            │  3-1     │          └──────────────┘
                                   └────┬─────┘
                                        │
                                   Yakıt Hortumu
                                        │
                                   ┌────┴─────┐
                                   │  Yakıt   │
                                   │  Deposu  │
                                   └──────────┘
```

### Karbüratör Dış Görünüm — Ayar Vidaları Konumları

```
                    ┌─── Gaz Kablosu (Bowdenzug)
                    │    ↕ Gaz kolu ile sürgüyü yukarı çeker
                    ▼
            ╔═══════════════╗
            ║   KARBÜRATÖR  ║
            ║   ÜST KAPAK  ║
            ║  (Vergaserdeckel)
            ╠═══════════════╣
            ║               ║
    ──►     ║   Hava Giriş  ║     ──►  Motora (emme borusu)
  Hava      ║   (Lufteintritt)    Karışım
  Filtre    ║               ║
  tarafı    ║               ║
            ╠═══════════════╣
            ║  Şamandıra    ║
            ║  Odası        ║
            ║  (Schwimmer-  ║
            ║   kammer)     ║
            ╚═══════╤═══════╝
                    │
             ┌──────┴──────┐
             │ ALT KAPAK   │  ← 2 vida ile açılır
             │ (Bodenschraube)
             └─────────────┘


   AYAR VIDALARI KONUMU (ALTAN/YANDAN GÖRÜNÜM):

      Karbüratör Gövdesi
      ┌─────────────────────────────┐
      │                             │
      │    ╔═══════════════════╗    │
      │    ║                   ║    │
      │    ║   Hava Kanalı     ║    │
      │    ║   (Mischkammer)   ║    │
      │    ║                   ║    │
      │    ╚═══════════════════╝    │
      │                             │
      │  (A)●────────              │  ← (A) RÖLANTI DURDURUCU VİDASI
      │      \                      │     (Leerlauf-Anschlagschraube)
      │       \ Sürgü alt           │     Yassı başlı vida, yandan erişilir
      │        \ kenarına temas     │     Saat yönü: devir ARTAR
      │                             │     Saat yönü tersi: devir AZALIR
      │                             │
      │        (B)●                 │  ← (B) KARIŞIM VİDASI
      │           │                 │     (Leerlaufgemisch-Regulierschraube)
      │           │                 │     İnce, sivri uçlu vida, altta/yanda
      │           ▼                 │     Saat yönü: karışım FAKİRLEŞİR
      │     Rölanti yakıt           │     Saat yönü tersi: karışım ZENGİNLEŞİR
      │     kanalını kontrol        │
      │     eder                    │
      └─────────────────────────────┘
```

### Rölanti Durdurucu ve Karışım Vidası — Yakın Görünüm

```
  (A) RÖLANTI DURDURUCU VİDASI          (B) KARIŞIM VİDASI
  ══════════════════════════════          ══════════════════════

  Görünüm: Kalın gövdeli,               Görünüm: İnce gövdeli,
  düz/oluklu başlı vida                  sivri konik uçlu vida
  Yay ile desteklenir                    Yay + O-ring ile sızdırmaz

     ┌───┐                                  ┌──┐
     │ ─ │ ← Oluklu başlık                  │──│ ← Oluklu başlık
     └─┬─┘   (tornavida ile döndürülür)      └┬─┘   (tornavida ile)
       │                                      │
     ┌─┴─┐                                 ┌──┴──┐
     │   │ ← Vida gövdesi                  │     │ ← Vida gövdesi
     │   │   (kalın, silindirik)            │     │   (silindirik)
     ├───┤                                  ├─────┤
     │///│ ← Diş kısmı                     │/////│ ← Diş kısmı
     │///│                                  │/////│
     │///│                                  │/////│
     └───┘                                  └──┬──┘
       │                                       │
       └── Ucu düz, sürgü                      └── Ucu SİVRİ KONİK
           pistonun altına                          Rölanti yakıt kanalının
           temas eder                               içine oturur

  ═══════════════════════════════════════════════════════════════

  İKİSİNİ KARIŞTIRMAYIN!
  • Durdurucu vida (A): DEVİR ayarı — mekanik stop
  • Karışım vidası (B): KARIŞ ayarı — yakıt/hava oranı
```

---

## 1. Rölanti Ayarı (Leerlaufeinstellung)

### Hedef
- Rölanti devri: **1000–1200 d/d**
- Motor kararlı ve düzgün çalışmalı
- Gaz bırakıldığında motor durmamalı

### Ayar Vidaları

| Vida | Alm. Adı | İşlev |
|---|---|---|
| **Rölanti durdurucu** | Leerlauf-Anschlagschraube | Sürgülü pistonun minimum açıklığını belirler → **devir ayarı** |
| **Karışım vidası** | Leerlaufgemisch-Regulierschraube | Rölanti devresindeki hava/yakıt oranını ayarlar → **karışım ayarı** |

### Karbüratör İç Kesit Görünümü — Rölanti Sistemi Nasıl Çalışır

```
  GAZ KABLOSU
       │
       ▼
  ╔════╧════════════════════════════════════════╗
  ║   Üst Kapak (Vergaserdeckel)                ║
  ╠═════════════════════════════════════════════╣
  ║         │ Sürgülü Piston (Kolbenschieber)   ║
  ║         │ Gaz kablosu ile                   ║
  ║         │ yukarı çekilir                    ║
  ║    ┌────┴────┐                              ║
  ║    │ ╔══════╗│                              ║
  ║    │ ║İĞNE  ║│ ← Düsennadel                ║
  ║    │ ║ (konik║│   Sürgü ile birlikte        ║
  ║    │ ║  uçlu)║│   hareket eder              ║
  ║    │ ╚══╤═══╝│                              ║
  ║    └────┼────┘                              ║
  ║ ════════╪═══════════  Hava Kanalı  ═════════║
  ║ HAVA → ─┼───────────────────────── → MOTOR  ║
  ║ (filtre)│                          (emme)   ║
  ║ ════════╪═══════════════════════════════════║
  ║         │                                   ║
  ║    ┌────┴────┐ ← İğne Jiklesi (Nadeldüse)  ║
  ║    │  ●════● │   İğnenin konik ucu buraya   ║
  ║    │    ██   │   oturur ve yakıtı kontrol   ║
  ║    └────┬────┘   eder                       ║
  ║         │                                   ║
  ║    ┌────┴────┐ ← ANA JİKLE (Hauptdüse)     ║
  ║    │  ■────■ │   Sabit çaplı delik          ║
  ║    └────┬────┘   Tam gazda yakıtı sınırlar  ║
  ║         │                                   ║
  ║ ┌───────┴───────────────────────────────┐   ║
  ║ │     ŞAMANDIRA ODASI                   │   ║
  ║ │     (Schwimmerkammer)                 │   ║
  ║ │                                       │   ║
  ║ │  ┌─── Yakıt Seviyesi ───┐            │   ║
  ║ │  │≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈│            │   ║
  ║ │  │     ╭─╮              │            │   ║
  ║ │  │     │ │ ← Şamandıra │            │   ║
  ║ │  │     ╰─╯   (Schwimmer)            │   ║
  ║ │  └──────────────────────┘            │   ║
  ║ │                                       │   ║
  ║ └──────────────┬────────────────────────┘   ║
  ║                │                            ║
  ║           Yakıt Giriş                       ║
  ║           (Benzin hortumundan)              ║
  ╚═════════════════════════════════════════════╝

  RÖLANTİ DEVRESİ (ayrı bir kanal):
  ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

  Sürgü neredeyse tamamen kapalıyken (rölanti)
  ana jikle sistemi yeterli emme gücü üretemez.
  Bu durumda rölanti devresi devreye girer:

  Şamandıra ──→ Rölanti Jiklesi ──→ Karışım Vidası (B) ──→ Hava Kanalı
  Odasından      (Leerlaufdüse)      ayar ile kontrol       (sürgü kenarı
  yakıt çekilir  sabit delik         edilir                  yakınında çıkış)
```

### Rölanti Ayar Prosedürü

1. Motoru çalıştırın ve **normal çalışma sıcaklığına** ısıtın (~5-10 dk sürüş)
2. Motosikleti sehpaya alın
3. **Rölanti durdurucu vidasıyla** devri **~1200 d/d**'ye ayarlayın
4. **Karışım vidasını** yavaşça **saat yönünde** (kapatma yönü) çevirin — devir düşecek
5. Devir düşmeye başladığında **durdurun**
6. Şimdi yavaşça **saat yönünün tersine** (açma yönü) çevirin — devir artacak
7. **En yüksek rölanti devrine** ulaştığında **durdurun**
8. Bu noktadan **1/4 tur daha** saat yönünün tersine açın (hafif zengin ayar)
9. Rölanti durdurucu ile devri tekrar **1000–1200 d/d**'ye düşürün
10. Gaz kolunu birkaç kez açıp kapatarak testi tekrarlayın
11. Motor düzgün rölanti yapıyor ve gaz bırakıldığında durmuyorsa ayar tamamdır

```
  KARIŞIM VİDASI AYAR YÖNLERİ:

       Karışım Vidası (B) — görüntü (üstten)

              ╭──────╮
              │  ──  │  ← Oluklu tornavida başlık
              ╰──────╯

    SAAT YÖNÜ (CW)              SAAT YÖNÜ TERSİ (CCW)
    Vidayı KAPAT                Vidayı AÇ
        ↻                           ↺
    Yakıt kanalı               Yakıt kanalı
    DARALIR                    GENİŞLER
        │                           │
        ▼                           ▼
    Karışım                    Karışım
    FAKİRLEŞİR                ZENGİNLEŞİR
    (daha az yakıt)            (daha fazla yakıt)
        │                           │
        ▼                           ▼
    Devir DÜŞER                Devir ARTAR
    (bir noktaya kadar)        (bir noktaya kadar)
```

### Kontrol
- Gaz kolunu hızla açıp bıraktığında motor **tereddüt etmeden** tepki vermeli
- Motor rölantide **düzgün** çalışmalı (kesikli atış olmamalı)
- Buji rengini kontrol edin: açık kahverengi = ideal

---

## 2. İğne Konumu Ayarı (Düsennadelstellung)

### Ne Zaman Gerekir?
- Kısmi gaz (%15–%75) bölgesinde güç kaybı varsa
- Kısmi gazda aşırı duman veya düzensiz çalışma varsa

### İğne (Düsennadel) Yapısı ve Çalışması

```
  DÜSENNADEL (İğne) — Tam Boyutlu Görünüm

       ┌─┐
       │ │ ← Üst uç: Sürgüye sabitlenir
       │ │
       ├─┤ ← Klips Yuvası 1 (en üst)
       │ │
       ├─┤ ← Klips Yuvası 2
       │ │
       ├═┤ ← Klips Yuvası 3 — STANDART POZİSYON
       │ │    (E-klips burada oturur)
       ├─┤ ← Klips Yuvası 4
       │ │
       ├─┤ ← Klips Yuvası 5 (en alt)
       │ │
       │ │ ← Düz gövde (silindirik)
       │ │
       │╱│
       ╱  ╲ ← KONİK BÖLGE — çap giderek azalır
      ╱    ╲   Bu bölge İğne Jiklesi (Nadeldüse)
     ╱      ╲  içinde oturarak yakıt akışını
    ╱        ╲ kontrol eder
   ╱    ●     ╲← Sivri uç

  ═══════════════════════════════════════════

  E-KLİPS (Sicherungsclip) — Görünüm:

         ╭─ ─╮
         │ C │  ← C şeklinde yaylı klips
         ╰─ ─╯     Yuvalara oturur
```

### İğne Klips Pozisyonları — Etkisi

```
  KLİPS YUKARI                KLİPS ORTA               KLİPS AŞAĞI
  (1. yuva)                    (3. yuva)                (5. yuva)
  İğne AŞAĞIDA kalır           STANDART                 İğne YUKARI çıkar

  Sürgü   ┌──┐                Sürgü   ┌──┐             Sürgü   ┌──┐
  Piston  │  │                Piston  │  │              Piston  │  │
          │C═│ ←Klips                 │  │                      │  │
          │  │                        │C═│ ←Klips               │  │
          │  │                        │  │                      │C═│ ←Klips
          └──┘                        └──┘                      └──┘
          │  │                        │  │                      │  │
          │  │                        │  │                      │  │
          │╲ │                        │╲ │                      │╲ │
          ╲  │                        ╲  │                      ╲  │
  ╔═══════╬══╬════╗           ╔═══════╬══╬════╗         ╔═══════╬══╬════╗
  ║ Jikle ║▓▓║    ║           ║ Jikle ║▓ ║    ║         ║ Jikle ║  ║    ║
  ╚═══════╩══╩════╝           ╚═══════╩══╩════╝         ╚═══════╩══╩════╝
           ▲                           ▲                         ▲
      Dar açıklık                 Orta açıklık              Geniş açıklık
      AZ yakıt geçer             NORMAL yakıt               ÇOK yakıt geçer
      = FAKİR                    = STANDART                  = ZENGİN

  ▓ = İğnenin konik bölgesinin jikle içindeki konumu
```

### Ayar Prosedürü

1. Karbüratörü sökün
2. Sürgülü pistonu çıkarın
3. İğneyi pistondan ayırın
4. Klipsi standart (orta) pozisyona ayarlayın
5. Yeniden monte edin ve test sürüşü yapın
6. Kısmi gazda:
   - **Tereddüt / boğulma** → klipsi 1 çentik aşağı (daha zengin)
   - **Duman / ıslak buji** → klipsi 1 çentik yukarı (daha fakir)
7. Her seferinde **sadece 1 çentik** değiştirin

---

## 3. Ana Jikle Kontrolü (Hauptdüse)

### Ne Zaman Gerekir?
- Tam gazda (>%75) güç kaybı varsa
- Tam gazda aşırı duman varsa
- Buji rengi uygun değilse

### Kontrol Yöntemi

1. 10–15 dakika normal sürüş yapın (motor tamamen ısınsın)
2. Düz bir yolda **tam gaz** verin ve 30–60 saniye sürdürün
3. Gazı **tam açıkken** motoru kapatın (kill switch ile)
4. Debriyajı çekin ve hemen durun
5. Bujiyi sökün ve rengini kontrol edin:

| Buji Rengi | Anlam | İşlem |
|---|---|---|
| Açık kahverengi | ✅ İdeal | Değişiklik yok |
| Koyu kahverengi/siyah | Zengin | Bir numara küçük ana jikle |
| Açık gri/beyaz | **FAKİR — TEHLİKE** | Bir numara büyük ana jikle |

### Buji Rengi Okuma Kılavuzu (Görsel)

```
  ╔════════════════════════════════════════════════════════════════════╗
  ║              BUJİ RENGİ OKUMA KILAVUZU                            ║
  ╠════════════════════════════════════════════════════════════════════╣
  ║                                                                    ║
  ║  1. İDEAL                    2. ZENGİN                            ║
  ║  (Açık kahverengi)           (Koyu kahverengi/siyah)              ║
  ║                                                                    ║
  ║    ┌─────────┐                 ┌─────────┐                        ║
  ║    │  ┌───┐  │                 │  ┌───┐  │                        ║
  ║    │  │ ▤ │  │ ← Elektrotlar  │  │ █ │  │ ← Elektrotlar          ║
  ║    │  └─┬─┘  │   temiz,       │  █████  │   siyah is             ║
  ║    │    │    │   açık renk     │  █████  │   kaplı, ıslak         ║
  ║    │  ░░░░░  │   ince tabaka  │  █████  │   karbon birikimi      ║
  ║    │  ░░░░░  │                 │  █████  │                        ║
  ║    └─────────┘                 └─────────┘                        ║
  ║   ✅ Ayar doğru!              ⚠️ Fazla yakıt:                    ║
  ║                                - Ana jikle küçült                  ║
  ║                                - İğneyi 1 çentik yukarı           ║
  ║                                - Hava filtresini kontrol           ║
  ║                                                                    ║
  ║  3. FAKİR (TEHLİKE!)         4. AŞIRI SICAK                      ║
  ║  (Beyaz/açık gri)             (Beyaz + erime izi)                 ║
  ║                                                                    ║
  ║    ┌─────────┐                 ┌─────────┐                        ║
  ║    │  ┌───┐  │                 │  ┌───┐  │                        ║
  ║    │  │   │  │ ← Elektrotlar  │  │ ○ │  │ ← Elektrotlar          ║
  ║    │  └─┬─┘  │   parlak beyaz │  └~┬~┘  │   eriyik/deformasyon   ║
  ║    │    │    │   temiz ama    │   ~│~   │   seramik çatlak        ║
  ║    │         │   hiç renk yok │   ~│~   │   yanık izleri          ║
  ║    │         │   porselen gibi│  ~~~~~~  │                        ║
  ║    └─────────┘                 └─────────┘                        ║
  ║   🚨 HEMEN ZENGİNLEŞTİR!     🚨 MOTOR DURDUR!                   ║
  ║   Kolbenklemmer riski!         - Ateşleme zamanlaması kontrol     ║
  ║   - Ana jikle büyüt            - Buji ısı derecesi yanlış        ║
  ║   - Hava kaçağı kontrol        - Ciddi mekanik hasar olabilir     ║
  ║   - İğneyi 1 çentik aşağı                                        ║
  ║                                                                    ║
  ╚════════════════════════════════════════════════════════════════════╝
```

> ⚠️ **FAKİR karışım = piston hasarı riski!** Şüphe durumunda her zaman hafif zengin tarafta kalın.

### Ana Jikle (Hauptdüse) — Görünüm ve Konum

```
  ANA JİKLE — Dış Görünüm:

       ┌─────┐
       │  ─  │ ← Oluklu başlık (düz tornavida)
       └──┬──┘
          │
       ┌──┴──┐
       │█████│ ← Altıgen veya düz gövde (pirinç, altın renkli)
       │█████│
       │█████│
       │██○██│ ← Kalibre edilmiş delik (jikle numarası = delik çapı)
       └─────┘

  Jikle numarası gövdenin üzerinde damgalıdır.
  Örn: "150" = 1,50 mm delik çapı

  ANA JİKLE — Karbüratördeki Konumu:

       Karbüratör Alt Kapak (söküldüğünde)
       ╔═══════════════════════════╗
       ║     Şamandıra Odası      ║
       ║                           ║
       ║      ┌─┐                  ║
       ║      │●│ ← ANA JİKLE     ║ Tam ortada, şamandıra
       ║      └─┘   buradan       ║ odasının tabanından
       ║           sökülür        ║ yukarı doğru vidalanmış
       ║                           ║
       ║  ┌───╮     ╭───┐         ║
       ║  │   │     │   │         ║ ← Şamandıra (iki tarafta)
       ║  │   ╰─────╯   │         ║
       ║  └──────────────┘         ║
       ╚═══════════════════════════╝
```

### Ana Jikle Değişimi

1. Karbüratörü sökün
2. Şamandıra odasını (alt kapak) açın
3. Ana jikleyi sökün (küçük düz tornavida veya özel anahtar)
4. Yeni jikleyi takın (boyut numarasını not edin)
5. Yeniden monte edin ve test edin

---

## 4. Şamandıra Seviyesi (Schwimmerstand)

### Neden Önemli?
Şamandıra seviyesi, karbüratör yakıt odasındaki benzin yüksekliğini belirler. Yanlış seviye tüm devir aralıklarını etkiler.

### Şamandıra Mekanizması — Görsel

```
  NORMAL ÇALIŞMA — Karbüratör dik konumda (kesit görünüm):

  Yakıt Giriş ──→ ┌─── İğne Valfi (Schwimmernadelventil)
                   │    ╔══╗
                   │    ║  ║ ← İğne, şamandıra kolu ile kontrol edilir
                   │    ╚╤═╝
                   │     │
  ┌────────────────┤     │─────────────────────┐
  │                │     │                     │
  │  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈  │ ← Yakıt seviyesi
  │                ╭─────────╮                 │
  │                │ ŞAMANDIRA│                │ ← Yakıt üzerinde yüzer
  │                │ (plastik/ │                │    Yakıt yükselince
  │                │  pirinç) │                │    şamandıra yukarı çıkar
  │                ╰────┬─────╯                │    → İğne valfi KAPATIR
  │                     │ ← Kol (Schwimmerhebel)     → Yakıt akışı DURUR
  │                     │                      │
  │                 ●───┘ ← Menteşe noktası    │    Yakıt azalınca
  │                                            │    şamandıra aşağı iner
  └────────────────────────────────────────────┘    → İğne valfi AÇAR
                                                     → Yakıt AKAR
  ═══════════════════════════════════════════════

  SEVİYE ÖLÇÜMÜ — Karbüratör TERS çevrilmiş:

            ╔══════════════════════════╗
            ║    Karbüratör gövdesi    ║
            ║   (ters çevrilmiş)       ║
            ╠══════════════════════════╣
            ║                          ║
            ║    ←  Ölçüm mesafesi  →  ║
            ║    ┌──────────────────┐  ║
            ║    │                  │  ║
    ── h ── ║    │   ŞAMANDIRA      │  ║  h = Şamandıra yüksekliği
            ║    │   (yukarıda)     │  ║  Gövde düzlemi ile şamandıranın
            ║    └────────┬─────────┘  ║  alt kenarı arasındaki mesafe
            ║             │            ║
            ║             │ ← İğne valfine                ║
            ║             │   hafifçe temas ediyor       ║
            ╚═════════════╧════════════╝

  ⚠️ Şamandırayı sıkıştırarak bastırmayın!
     Kendi ağırlığıyla iğne valfine temas etmeli.
```

### Kontrol
1. Karbüratörü sökün
2. Alt kapağı (Schwimmerkammer) çıkarın
3. Karbüratörü **ters çevirin** (şamandıra yukarıda)
4. Şamandıra, iğne valfine **hafifçe** temas etmeli ama sıkıştırmamalı
5. Şamandıra alt kenarı ile gövde arasındaki mesafeyi ölçün
6. Üretici spesifikasyonuna uygun olmalı

### Ayar
- Şamandıra genellikle **bükme** ile ayarlanır
- Çok yüksek seviye → taşma, zengin karışım, yakıt sızıntısı
- Çok düşük seviye → fakir karışım, özellikle tam gazda

---

## 5. Gaz Kablosu Ayarı

### Gaz Kablosu ve Sürgü Mekanizması — Görsel

```
  GAZ KOLU (Gasdrehgriff)              KARBÜRATÖR
  Gidon üzerinde                       Emme manifoldu üzerinde

  ╭────────────╮                       ╔══════════╗
  │   ╭──╮     │                       ║  Üst     ║
  │   │  │ Gaz │                       ║  Kapak   ║
  │   │  │ kolu│                       ╠══════════╣
  │   ╰─┬╯    │                       ║ ┌──────┐ ║
  │     │     │    GAZ KABLOSU         ║ │SÜRGÜ │ ║
  │     └─────┼────(Bowdenzug)────────→║ │      │ ║
  │           │    Çelik tel,          ║ │      │ ║
  ╰───────────╯    kılıf içinde       ║ └──────┘ ║
                                       ║          ║
  Gaz kolu çevirilince               ╚══════════╝
  kablo çekilir → sürgü yukarı
  kalkar → daha fazla hava/yakıt

  ═══════════════════════════════════════════

  SERBEST OYUN AYARI:

  Karbüratör üst kapağı yakınında ayar somunu bulunur:

       Gaz kablosu
       ────────────────┐
                       │
              ╔═══╗    │ ← Dış kılıf
              ║ S ║────┘ ← Ayar somunu (Stellmutter)
              ╠═══╣        (Somunu döndürerek serbest
              ║   ║         oyun ayarlanır)
              ╚═══╝
              │    │
       Kablo  │    │ Kılıf
       (çelik)│    │
              ▼    ▼
          ┌──────────┐
          │ Karbüratör│
          │ üst kapak │
          └──────────┘

  Serbest oyun: 2-3 mm
  (Gaz kolunda hafifçe oynatınca
   kablo henüz çekilmemeli)
```

### Serbest Oyun (Spiel)
- Gaz kolunda **2–3 mm serbest oyun** olmalı
- Gaz kolu bırakıldığında **tamamen** geri dönmeli

### Kontrol
1. Gaz kolunu her iki yöne çevirerek serbest oyunu hissedin
2. Ayar, gaz kablosundaki ayar somunu ile yapılır
3. Direksiyonu sağa-sola çevirdiğinizde rölanti devri **değişmemeli**
   - Değişiyorsa: kablo güzergâhı yanlış veya kablo çok gergin

---

## Hangi Ayar — Hangi Devir Aralığı?

```
  KARBÜRATÖR AYAR HARİTASI — Gaz Pozisyonuna Göre:

  Gaz Açıklığı:   0%      15%      50%      75%      100%
                   │        │        │        │        │
                   ▼        ▼        ▼        ▼        ▼
  ┌────────────────┬────────┬────────┬────────┬────────┐
  │                │        │        │        │        │
  │  ◄── RÖLANTİ ──►      │        │        │        │
  │  Karışım Vidası (B)    │        │        │        │
  │  + Durdurucu (A)       │        │        │        │
  │                │        │        │        │        │
  │                │◄────── İĞNE POZİSYONU ──────────►│
  │                │  Düsennadel klips ayarı           │
  │                │  Kısmi gaz bölgesinde etkili      │
  │                │        │        │        │        │
  │                │        │        │◄─ ANA JİKLE ──►│
  │                │        │        │  Hauptdüse      │
  │                │        │        │  Tam gaz etkili │
  │                │        │        │        │        │
  │◄──────────── ŞAMANDIRA SEVİYESİ ─────────────────►│
  │  Tüm devir aralıklarını etkiler                    │
  │                │        │        │        │        │
  └────────────────┴────────┴────────┴────────┴────────┘

  AYAR SIRASI (önemli!):
  ┌─────────────────────────────────────────────┐
  │ 1. Şamandıra seviyesi    → Temel           │
  │ 2. Ana jikle boyutu      → Tam gaz         │
  │ 3. İğne klips pozisyonu  → Kısmi gaz       │
  │ 4. Karışım vidası        → Rölanti          │
  │ 5. Rölanti durdurucu     → Rölanti devri    │
  │ 6. Gaz kablosu           → Son kontrol      │
  └─────────────────────────────────────────────┘
```

---

## Sorun Giderme Tablosu

| Sorun | Olası Neden | Çözüm |
|---|---|---|
| Motor rölantide duruyor | Rölanti devri çok düşük | Durdurucu vidası ayarla |
| Motor rölantide duruyor | Karışım çok fakir | Karışım vidası aç (CCW) |
| Rölanti çok yüksek | Durdurucu çok açık | Durdurucu vidası kapat |
| Rölanti çok yüksek | Hava kaçağı | Emme borusu/conta kontrol |
| Gaz verilince boğulma | Karışım çok zengin | İğneyi 1 çentik yukarı |
| Gaz verilince tereddüt | Karışım çok fakir | İğneyi 1 çentik aşağı |
| Tam gazda güç yok | Ana jikle küçük | Bir numara büyük jikle |
| Tam gazda duman | Ana jikle büyük | Bir numara küçük jikle |
| Yakıt sızıntısı | Şamandıra arızası | Şamandıra/valfi kontrol |
| Her devirde kötü | Hava filtresi tıkalı | Filtre temizle/değiştir |

---

*Kaynak: BVF karbüratör servis dokümanları, MZ Reparaturanleitung, genel 2T karbüratör ayar pratikleri*

→ [Karbüratör Teknik](../02-motor-teknik/karburator.md) | [Ateşleme Ayarı](atesleme-ayari.md) | [Ana Sayfa](../README.md)
