# Blog Yazısı Ekleme Rehberi

Bu proje Astro Content Collections kullanır ve type-safe schema ile çalışır.
Yeni bir blog yazısı eklerken aşağıdaki adımları eksiksiz uygula.

---

## 1️⃣ Yeni Yazı Oluşturma

Yeni dosya oluştur:

```
src/content/blog/yazi-adi.md
```

Slug dosya isminden otomatik üretilir.
Türkçe karakter ve boşluk kullanma.
Kebab-case kullan.

Doğru:

```
mikroservis-mimarisi.md
```

Yanlış:

```
Mikroservis Mimarisi.md
```

---

## 2️⃣ Frontmatter Zorunlu Alanlar

Her yazının başında şu alanlar olmalı:

```yaml
---
title: "Başlık en az 5 karakter olmalı"
description: "Açıklama 20–160 karakter arasında olmalı. SEO snippet olarak kullanılır."
publishDate: 2026-02-22
category: "tech"
tags: ["astro", "frontend"]
draft: false
---
```

---

## 3️⃣ Alan Kuralları

### title

* Minimum 5 karakter
* Net ve anlamlı

### description

* Minimum 20 karakter
* Maksimum 160 karakter
* SEO için kullanılır
* Tek cümle tercih edilir

### publishDate

* ISO format: `YYYY-MM-DD`
* Gelecek tarih olamaz

### category

Serbest string ama tutarlı ol.

Önerilen değerler:

* "tech"
* "personal"

Yeni kategori eklemeden önce mevcut yazıları kontrol et.

### tags

* En az 1 adet zorunlu
* Her tag en az 2 karakter
* Küçük harf kullan
* Tutarlı isimlendirme yap

Doğru:

```
["astro", "typescript"]
```

Yanlış:

```
["Astro", "TypeScript", "frontend dev"]
```

### draft

* true → Yayına girmez
* false → Yayına girer
* Yazmazsan otomatik false olur

### updatedDate (opsiyonel)

```yaml
updatedDate: 2026-03-01
```

Yazı güncellendiğinde eklenir.

### coverImage (opsiyonel)

```yaml
coverImage: "/images/mikroservis.jpg"
```

Public klasörüne koy.

---

## 4️⃣ İçerik Yazımı

Markdown kullan.

Önerilen yapı:

```
## Giriş

Ana fikir.

## Problem

Neden önemli?

## Çözüm

Nasıl çözüldü?

## Sonuç

Kısa özet.
```

---

## 5️⃣ Yayın Öncesi Kontrol Listesi

* Başlık anlamlı mı?
* Description 20–160 karakter mi?
* Tag en az 1 adet mi?
* Gelecek tarih var mı?
* Draft false mu?
* Yazım hatası var mı?
* Build hatasız mı?

---

## 6️⃣ Build Kontrolü

```
npm run build
```

Hata varsa schema engeller.
Schema hatası varsa frontmatter düzelt.

---

## 7️⃣ Production Deploy

Git push → CI build → Domain güncellenir.

---

## Önemli Not

Schema katıdır.
Eksik veya yanlış alan varsa build kırılır.
Bu bilinçli tasarım kararıdır.

Amaç: içerik kalitesini zorlamak.

```
```
