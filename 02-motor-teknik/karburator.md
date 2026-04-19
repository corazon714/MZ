# Karbüratör — BVF 30 N 3-1

## Genel Bilgi

| Parametre | Değer |
|---|---|
| **Üretici** | Berliner Vergaser-Fabrik (BVF) |
| **Model** | 30 N 3-1 |
| **Tip** | Sürgülü piston (Schieber) karbüratör |
| **Boğaz Çapı** | 30 mm |
| **Kullanıldığı Model** | MZ ETZ 251, ETZ 301 |
| **Önceki Model (ETZ 250)** | BVF 30 N 2-5 |

> **Not**: ETZ 250'de kullanılan 30 N 2-5 ile ETZ 251'deki 30 N 3-1 arasında jikle (düse) boyutları ve iç yapıda farklılıklar vardır. Birbirinin yerine kullanılmamalıdır.

## Karbüratörün Yapısı

### Ana Bileşenler

```
┌──────────────────────────────────────┐
│           HAVA GİRİŞİ               │
│  (Luftfiltergehäuse'den gelir)       │
└──────────────┬───────────────────────┘
               ↓
┌──────────────────────────────────────┐
│         KARBURATöR GÖVDE             │
│                                      │
│  ┌─────────┐  ┌──────────────────┐   │
│  │ Jikle   │  │ Sürgülü Piston   │   │
│  │ (Choke) │  │ (Gasschieber)    │   │
│  └─────────┘  │  ↕ Gaz kolu ile  │   │
│               │    kontrol       │   │
│  ┌─────────┐  └──────────────────┘   │
│  │ Ana Jikle│                        │
│  │ (Hauptdüse)                       │
│  └─────────┘                         │
│               │                      │
│  ┌─────────┐  ┌──────────────────┐   │
│  │ Rölanti  │  │ Şamandıra Odası │   │
│  │ Devresi  │  │ (Schwimmerkammer)│   │
│  └─────────┘  └──────────────────┘   │
└──────────────┬───────────────────────┘
               ↓
┌──────────────────────────────────────┐
│      EMME MANIFOLDU (Kauçuk)         │
│      → SİLİNDİR EME PORTU           │
└──────────────────────────────────────┘
```

### Ana Parçalar Listesi

| Parça | Alm. Adı | İşlev |
|---|---|---|
| **Gövde** | Vergaserkörper | Ana yapı |
| **Sürgülü Piston** | Gasschieber | Hava/yakıt akışını gaz koluyla kontrol eder |
| **İğne** | Düsennadel | Orta devir yakıt dozajını ayarlar |
| **Ana Jikle** | Hauptdüse | Tam gaz yakıt akışını belirler |
| **Rölanti Jiklesi** | Leerlaufdüse | Rölanti yakıt akışını belirler |
| **İğne Jiklesi** | Nadeldüse | İğne ile birlikte çalışır |
| **Şamandıra** | Schwimmer | Yakıt seviyesini sabit tutar |
| **Şamandıra Valfi** | Schwimmernadel | Yakıt girişini açar/kapar |
| **Jikle Levyesi** | Startklappe/Choke | Soğuk çalıştırma için zengin karışım |
| **Rölanti Ayar Vidası** | Leerlaufgemisch-Regulierschraube | Rölanti karışım oranını ayarlar |
| **Gaz Durdurucu** | Anschlagschraube | Rölanti devir hızını ayarlar |
| **Kauçuk Emme Borusu** | Ansauggummi | Karbüratör-silindir bağlantısı |

## Karbüratör Devre Alanları

Karbüratör, motor devrine ve gaz konumuna göre farklı devreler üzerinden çalışır:

### 1. Rölanti Devresi (Leerlauf) — %0–%15 gaz
- **Rölanti jiklesi** (Leerlaufdüse) aktif
- **Rölanti karışım vidası** ile ayarlanır
- Hava emme portu (Luftbohrung) üzerinden hava eklenir
- Tipik rölanti devri: **1000–1200 d/d**

### 2. Kısmi Gaz Devresi (Teillast) — %15–%75 gaz
- **İğne** (Düsennadel) ve **iğne jiklesi** (Nadeldüse) aktif
- İğne konumu (klips pozisyonu) karışım zenginliğini belirler
- İğne yukarı → daha zengin, iğne aşağı → daha fakir

### 3. Tam Gaz Devresi (Volllast) — %75–%100 gaz
- **Ana jikle** (Hauptdüse) tam akış kapasitesiyle çalışır
- İğne tamamen kalkmış durumda, akışı sınırlamaz
- En fazla yakıt tüketimi bu bölgede

### 4. Soğuk Çalıştırma (Kaltstart / Choke)
- **Jikle levyesi** (Startklappe) kapatılır
- Hava girişi kısıtlanır → çok zengin karışım oluşur
- Motor ısındıktan sonra jikle **açılmalıdır**

## Hava Giriş Sistemi

ETZ 251'in hava giriş sistemi, **ETZ 125/150'den** alınmıştır ve ETZ 250'ninkinden farklıdır:

### Hava Akış Yolu
1. **Hava girişi**: Sele altından, şasi köprüsünün (Rahmenbrücke) kasa profili içindeki boru aracılığıyla çekilir
2. **Ses sönümleme**: Kademeli ses sönümleyici (gestaffelter Geräuschdämpfer) — emme gürültüsünü azaltır
3. **Filtre kutusu** (Filtergehäuse): Hava filtresi burada bulunur
4. **Esnek kauçuk boru** (Ansauggummi): Filtre kutusundan karbüratöre bağlantı
5. **Karbüratör**: BVF 30 N 3-1

### Hava Filtresi
| Parametre | Değer |
|---|---|
| **Tip** | Kağıt eleman (Papierluftfilter) veya köpük (Schaumstoff) |
| **Değişim Aralığı** | ~5000–10.000 km (kağıt) / temizlenebilir (köpük) |
| **Kontrol** | Her 2500 km'de bir kontrol |

## Karbüratör — Motor Bağlantısı

| Bileşen | Açıklama |
|---|---|
| **Emme manifoldu** | Esnek kauçuk boru (Ansauggummi) |
| **Bağlantı kelepçesi** | Paslanmaz çelik kelepçe |
| **Conta** | Karbüratör flanşında O-ring veya düz conta |

> ⚠️ **ÖNEMLİ**: Kauçuk emme borusu zamanla sertleşir ve çatlar. Çatlak bir emme borusu **hava kaçağı** oluşturur → fakir karışım → piston hasarı riski!

## Soğuk Çalıştırma Prosedürü

1. Yakıt musluğunu **açın** (ON konumu)
2. **Jikle levyesini** kapatın (Choke ON)
3. Gaz kolunu **biraz** açın (1/4 dönüş)
4. **Kickstarter** ile çalıştırın (1-3 tekme yeterli olmalı)
5. Motor çalışınca **30–60 saniye** bekleyin
6. Jikle levyesini **kademeli** olarak açın
7. Motor ısınana kadar (~2-3 dk) **sabit rölanti**de bekletin
8. Tam ısındıktan sonra sürüşe başlayın

**Sıcak motorda**: Jikle **kullanmayın**, direkt çalıştırın.

---

*Kaynak: KFT 1981/5, KFT 1988/8, BVF karbüratör teknik dokümanları*

→ [Yakıt ve Yağlama](yakit-yaglama-sistemi.md) | [Ateşleme Sistemi](atesleme-sistemi.md) | [Karbüratör Ayarı](../03-bakim/karburator-ayari.md) | [Ana Sayfa](../README.md)
