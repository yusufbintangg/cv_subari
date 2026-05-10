![Vue](https://img.shields.io/badge/Vue_3-4FC08D?style=flat&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/Status-Production_Ready-brightgreen?style=flat)

---

**Stack:** Vue 3 · Vite · Tailwind CSS v4 · TypeScript · Lucide Vue Next

| Property | Value |
|---|---|
| Tipe | Single-Page Landing Page — Lead Generation |
| Framework | Vue 3 Composition API (`<script setup lang="ts">`) |
| Navigasi | Anchor hash `#section` + smooth scroll — no router |
| Lead Channel | Booking form → redirect WhatsApp |
| Target Area | Salatiga & Seluruh Jawa Tengah |
| Status | ✅ Production Ready |

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Local Development](#4-local-development)
5. [Component Reference](#5-component-reference)
6. [Data & Configuration](#6-data--configuration)
7. [Known Issues](#7-known-issues)
8. [Deployment Guide](#8-deployment-guide)
9. [Cara Ganti Foto Galeri](#9-cara-ganti-foto-galeri)

---

## 1. Project Overview

**Sedot WC Salatiga** adalah Vue 3 landing page untuk bisnis jasa sedot WC & septic tank yang melayani Salatiga dan seluruh Jawa Tengah. Tujuan utama halaman ini adalah **lead generation** — mengubah pengunjung menjadi calon pelanggan via booking form yang terhubung langsung ke WhatsApp.

### 1.1 Alur Utama

```
User buka halaman
  → Scroll lihat layanan, harga, testimoni
  → Isi form booking (#booking)
  → Submit → generateWAMessage() membuat pesan otomatis
  → window.open() buka WhatsApp: wa.me/<WHATSAPP_NUMBER>?text=<pesan>
  → Tim konfirmasi jadwal via WA
```

### 1.2 Feature Matrix

| Fitur | Deskripsi | Status |
|---|---|---|
| Hero Section | Headline, badge, CTA, count-up animasi | ✅ Production |
| Layanan | Grid 4 kartu layanan dengan reveal scroll | ✅ Production |
| Paket Harga | 3 paket (Rumahan / Komersial / Industri) + CTA WA | ✅ Production |
| Keunggulan | 6 keunggulan bisnis dengan reveal scroll | ✅ Production |
| Proses Kerja | Timeline 5 step horizontal/vertical | ✅ Production |
| Galeri | Grid foto 3x4 + lightbox fullscreen + keyboard nav | ✅ Production |
| Cakupan Wilayah | Badge 23 kota + Google Maps embed | ✅ Production |
| Testimoni | Carousel 12 testimoni + auto-advance | ✅ Production |
| FAQ | Accordion 6 pertanyaan | ✅ Production |
| Booking Form | Form 9 field + validasi + redirect WA | ✅ Production |
| WhatsApp Floating | Tombol floating + pulse animation | ✅ Production |
| Back to Top | Muncul setelah scroll 400px | ✅ Production |

---

## 2. Tech Stack

| Kategori | Library / Tool |
|---|---|
| Build Tool | Vite 6 |
| Framework | Vue 3 Composition API |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | lucide-vue-next |
| Fonts | Google Fonts — Plus Jakarta Sans, Inter, Space Grotesk |
| Node.js | >= 18 |
| Package Manager | pnpm |

---

## 3. Project Structure

```
.
├── index.html                        # Entry HTML — Google Fonts, mount point #app
├── vite.config.ts                    # Vite config + alias @ + custom resolver figma:asset/
├── tsconfig.app.json                 # TS config untuk src/ (exclude ui/)
├── tsconfig.node.json                # TS config untuk vite.config.ts
├── postcss.config.mjs
├── netlify.toml                      # Netlify config — publish dir: dist/
├── ATTRIBUTIONS.md                   # Credits (Unsplash, Lucide, dll)
└── src/
    ├── main.ts                       # createApp(App).mount('#app')
    ├── app/
    │   ├── App.vue                   # Root — rakit semua section berurutan
    │   └── components/
    │       ├── layout/
    │       │   ├── Navbar.vue        # Sticky navbar + mobile drawer + active section tracking
    │       │   └── Footer.vue        # Footer 3 kolom + kontak + quick links
    │       ├── sections/
    │       │   ├── HeroSection.vue          # Hero + count-up + IntersectionObserver
    │       │   ├── LayananSection.vue       # Grid layanan + reveal scroll
    │       │   ├── PaketHargaSection.vue    # Paket harga + CTA WA per paket
    │       │   ├── KeunggulanSection.vue    # Grid 6 keunggulan + reveal scroll
    │       │   ├── ProsesKerjaSection.vue   # Timeline 5 step + reveal bertahap
    │       │   ├── GaleriSection.vue        # Grid foto + lightbox + keyboard + scroll lock
    │       │   ├── CakupanWilayahSection.vue# Badge kota + Google Maps embed
    │       │   ├── TestimoniSection.vue     # Carousel 12 testimoni + auto-advance
    │       │   ├── FaqSection.vue           # Accordion FAQ
    │       │   └── BookingFormSection.vue   # Form booking + validasi + submit ke WA
    │       ├── shared/
    │       │   ├── WhatsAppFloating.vue     # Floating WA button + pulse + IntersectionObserver
    │       │   └── BackToTop.vue            # Scroll to top button
    │       └── figma/
    │           └── ImageWithFallback.vue    # Image dengan fallback SVG jika gagal load
    ├── data/
    │   ├── paket.ts                  # Data 3 paket layanan
    │   ├── testimoni.ts              # Data 12 testimoni pelanggan
    │   ├── faq.ts                    # Data 6 FAQ
    │   └── wilayah.ts                # Data 23 kota/kabupaten Jawa Tengah
    ├── lib/
    │   ├── config.ts                 # WHATSAPP_NUMBER + SITE_CONFIG
    │   └── utils.ts                  # formatPrice + WA message generators
    └── styles/
        ├── index.css                 # CSS variables + global styles + keyframes
        ├── tailwind.css              # Tailwind directives
        ├── theme.css                 # Theme tokens
        └── fonts.css                 # Font setup
```

---

## 4. Local Development

```bash
# Install dependencies
pnpm install

# Jalankan dev server
pnpm dev
# → http://localhost:5173

# Type check
pnpm type-check

# Build production
pnpm build

# Preview hasil build
pnpm preview
```

---

## 5. Component Reference

### 5.1 Layout Components

| File | Deskripsi | Catatan Khusus |
|---|---|---|
| `Navbar.vue` | Sticky navbar + mobile hamburger drawer | Active section detection via IntersectionObserver; smooth scroll ke anchor hash |
| `Footer.vue` | Footer 3 kolom — alamat, quick links, kontak | Data dari `SITE_CONFIG` di `config.ts` |

### 5.2 Section Components

| File | Section ID | Deskripsi | Catatan Khusus |
|---|---|---|---|
| `HeroSection.vue` | `#hero` | Hero utama + badge + CTA | Count-up animasi via IntersectionObserver + setInterval |
| `LayananSection.vue` | `#layanan` | Grid 4 kartu layanan | Reveal on scroll via IntersectionObserver |
| `PaketHargaSection.vue` | `#harga` | 3 paket harga | CTA per paket pakai `generatePaketWAMessage()` |
| `KeunggulanSection.vue` | `#keunggulan` | Grid 6 keunggulan | Reveal on scroll via IntersectionObserver |
| `ProsesKerjaSection.vue` | `#proses` | Timeline 5 step | Reveal bertahap dengan setTimeout chain |
| `GaleriSection.vue` | `#galeri` | Grid 3x4 + lightbox | Lightbox via `<Teleport to="body">`, scroll lock, keyboard nav (Esc/←/→) |
| `CakupanWilayahSection.vue` | `#wilayah` | Badge 23 kota + Maps | Google Maps embed dari `SITE_CONFIG.mapsEmbed` |
| `TestimoniSection.vue` | `#testimoni` | Carousel 12 testimoni | Auto-advance 5 detik, pause on hover, manual prev/next |
| `FaqSection.vue` | `#faq` | Accordion 6 FAQ | Satu item terbuka dalam satu waktu, animasi max-height |
| `BookingFormSection.vue` | `#booking` | Form booking 9 field | Validasi per field + onBlur, submit via `generateWAMessage()` |

### 5.3 Shared Components

| File | Deskripsi | Catatan Khusus |
|---|---|---|
| `WhatsAppFloating.vue` | Floating WA button + pulse animation | Disembunyikan saat `#booking` visible via IntersectionObserver |
| `BackToTop.vue` | Tombol kembali ke atas | Muncul setelah scroll > 400px |
| `ImageWithFallback.vue` | Image dengan fallback SVG | Dipakai di GaleriSection |

---

## 6. Data & Configuration

### 6.1 Data Files

| File | Interface | Deskripsi |
|---|---|---|
| `src/data/paket.ts` | `Paket` | Array 3 paket: `id`, `nama`, `harga`, `hargaDisplay`, `deskripsi`, `kapasitas`, `fitur[]`, `isPopular` |
| `src/data/testimoni.ts` | `Testimoni` | Array 12 testimoni: `id`, `nama`, `kota`, `alamat`, `bintang`, `pesan`, `paket` |
| `src/data/faq.ts` | `Faq` | Array 6 FAQ: `id`, `pertanyaan`, `jawaban` |
| `src/data/wilayah.ts` | `string[]` | Array 23 nama kota/kabupaten Jawa Tengah |

### 6.2 Configuration

| File | Export | Deskripsi |
|---|---|---|
| `src/lib/config.ts` | `WHATSAPP_NUMBER` | Nomor WA tujuan: `6285802753321` |
| `src/lib/config.ts` | `SITE_CONFIG` | `name`, `tagline`, `area`, `operasional`, `alamat`, `mapsEmbed`, `instagram` |
| `src/lib/utils.ts` | `formatPrice(price)` | Format angka ke format Rupiah |
| `src/lib/utils.ts` | `generateWAMessage(form)` | Generate URL WA dari data form booking |
| `src/lib/utils.ts` | `generatePaketWAMessage(nama, harga)` | Generate URL WA dari klik CTA paket harga |
| `src/lib/utils.ts` | `generateDefaultWAMessage()` | Generate URL WA default untuk floating button |

### 6.3 Cara Update Nomor WhatsApp

Buka `src/lib/config.ts` dan ubah nilai `WHATSAPP_NUMBER`:

```ts
export const WHATSAPP_NUMBER = "628XXXXXXXXXX"
```

Format: kode negara `62` + nomor tanpa awalan `0`. Contoh: `0858-0275-3321` → `6285802753321`.

---

## 7. Known Issues

| Issue | Impact | Status |
|---|---|---|
| False positive TS error `Worker` dari `vite/types/importGlob.d.ts` | Tidak mempengaruhi runtime dan hasil `pnpm build` — hanya muncul saat `pnpm type-check` | Won't Fix |
| Duplikasi `@keyframes pulse-ring` di `src/styles/index.css` | Animasi pulse pada WhatsApp floating button mungkin tidak deterministik | Needs Fix — hapus salah satu definisi, pertahankan: `0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(2); opacity: 0; }` |

---

## 8. Deployment Guide

### 8.1 Build

```bash
pnpm build
# Output: dist/
```

### 8.2 Opsi Hosting

| Hosting | Cara Deploy | Catatan |
|---|---|---|
| **Netlify** | Push ke Git → auto deploy | `netlify.toml` sudah dikonfigurasi, publish dir: `dist/` |
| **Vercel** | Import repo → set output dir `dist/` | Deploy sebagai Static Site |
| **Cloudflare Pages** | Import repo → build command `pnpm build`, output `dist/` | Free tier cocok untuk landing page |
| **VPS + Nginx** | Upload `dist/` ke server, arahkan root Nginx ke folder tersebut | Tidak perlu SPA fallback karena no router |

### 8.3 Nginx Config (VPS)

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/sedotwc/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 8.4 Post-Deployment Checklist

- [ ] Website dapat diakses via domain
- [ ] Google Fonts ter-load (Plus Jakarta Sans, Inter, Space Grotesk)
- [ ] Navigasi anchor hash berjalan smooth (`#layanan`, `#harga`, `#galeri`, `#booking`)
- [ ] Form booking berhasil redirect ke WhatsApp dengan pesan yang benar
- [ ] Paket harga CTA membuka WhatsApp dengan pesan paket yang benar
- [ ] Tombol WhatsApp floating muncul dan pulse animation berjalan
- [ ] Lightbox galeri terbuka, navigasi keyboard (Esc/←/→) berfungsi
- [ ] Google Maps embed ter-load di section cakupan wilayah
- [ ] Carousel testimoni auto-advance dan pause on hover
- [ ] Accordion FAQ expand/collapse dengan benar
- [ ] Tampilan mobile responsive di semua section
- [ ] Back to top button muncul setelah scroll

---

## 9. Cara Ganti Foto Galeri

Foto galeri diambil dari array `photos` di `GaleriSection.vue`. Saat ini menggunakan foto placeholder dari Unsplash.

### 9.1 Struktur Data Foto

```ts
const photos = [
  {
    src: "/images/nama-foto.jpg",  // path lokal atau URL eksternal
    judul: "Sedot WC Rumah Tinggal",
    lokasi: "Salatiga Selatan",
  },
  // ...
]
```

### 9.2 Langkah Ganti Foto

**Menggunakan foto lokal:**

1. Letakkan foto di folder `public/images/`
2. Buka `src/app/components/sections/GaleriSection.vue`
3. Ubah nilai `src` pada tiap item di array `photos`:

```ts
src: "/images/foto-pekerjaan-01.jpg"
```

4. Build ulang:

```bash
pnpm build
```

**Menggunakan URL eksternal:**

Ganti `src` dengan URL lengkap foto:

```ts
src: "https://cdn.example.com/foto-pekerjaan.jpg"
```

### 9.3 Rekomendasi Foto

| Aspek | Rekomendasi |
|---|---|
| Jumlah | 12 foto (sesuai grid 3x4) |
| Rasio | 4:3 (landscape) |
| Ukuran file | Maks 300KB per foto untuk performa optimal |
| Format | `.jpg` atau `.webp` |
| Konten | Foto aktual pekerjaan di lapangan — tanki, proses sedot, tim teknisi, lokasi |

---

*Technical Documentation v2.0 — Mei 2026 — Internal Use Only*