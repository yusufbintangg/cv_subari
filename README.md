# Sedot WC Salatiga — React 18 → Vue 3 Migration Docs

> **Project Status:** Legacy React 18 + Vite + Tailwind v4 landing page.
> **Target:** Vue 3 Composition API — behavior parity, no design changes.

---

## 1. Overview

Single-page landing website untuk bisnis jasa sedot WC di Salatiga, Jawa Tengah. Tujuan konversi adalah memigrasikan implementasi UI dari React ke Vue 3 sambil mempertahankan seluruh UX, animasi, dan behavior yang sudah ada.

- **Tipe:** Single-page, no router
- **Navigasi:** Anchor hash `#section` + `scrollIntoView`
- **Lead generation:** Booking form → redirect WhatsApp

---

## 2. Tech Stack

### Saat Ini (React)

| Kategori | Library / Version |
|---|---|
| Build Tool | Vite 6.3.5 |
| Framework | React 18.3.1 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | lucide-react |
| Animation | motion |
| Carousel | embla-carousel-react |

### Target (Vue 3)

| Kategori | Library |
|---|---|
| Build Tool | Vite (tetap) |
| Framework | Vue 3 Composition API (`<script setup lang="ts">`) |
| Language | TypeScript (tetap) |
| Styling | Tailwind CSS v4 (tetap) |
| Icons | lucide-vue-next |
| Animation | CSS transitions / VueUse |
| Carousel | Custom atau Swiper Vue |

---

## 3. Kebutuhan Running di Local

### Requirements
- Node.js >= 18
- npm atau pnpm

### Setup & Run

```bash
# Install dependencies
pnpm install     # atau: npm install

# Jalankan dev server
pnpm dev         # atau: npm run dev

# Build production
pnpm build       # atau: npm run build
```

Dev server berjalan di `http://localhost:5173`

---

## 4. Struktur Project (Vue)

```
src/
  main.ts                              # Vue entrypoint
  app/
    App.vue                             # Assembly semua section
    components/
      layout/
        Navbar.vue                      # Sticky navbar + mobile drawer + active section tracking
        Footer.vue                      # Footer 3 kolom + info kontak dari SITE_CONFIG
      sections/
        HeroSection.tsx                # (saat ini masih TSX) Hero + badge + counter animasi + IntersectionObserver
        LayananSection.tsx             # (saat ini masih TSX)
        PaketHargaSection.tsx          # (saat ini masih TSX)
        KeunggulanSection.tsx          # (saat ini masih TSX)
        ProsesKerjaSection.tsx         # (saat ini masih TSX)
        GaleriSection.tsx              # (saat ini masih TSX)
        CakupanWilayahSection.tsx      # (saat ini masih TSX)
        TestimoniSection.tsx           # (saat ini masih TSX)
        FaqSection.tsx                 # (saat ini masih TSX)
        BookingFormSection.tsx         # (saat ini masih TSX)
      shared/
        WhatsAppFloating.vue           # Floating WA button + pulse + IntersectionObserver
        BackToTop.vue                  # Scroll to top, muncul setelah scroll 400px
      figma/
        ImageWithFallback.vue         # Image dengan fallback jika gagal load
      ui/
        *.tsx                           # React UI kit (Radix/shadcn) — TIDAK DIPAKAI, skip
  data/
    paket.ts                            # Data 3 paket layanan
    testimoni.ts                        # Data 12 testimoni pelanggan
    faq.ts                              # Data 6 FAQ
    wilayah.ts                          # Data 23 kota/kabupaten Jawa Tengah
  lib/
    config.ts                           # WHATSAPP_NUMBER, SITE_CONFIG
    utils.ts                            # formatPrice, generateWAMessage, generatePaketWAMessage
  styles/
    index.css                           # CSS variables + Tailwind directives
    tailwind.css
    theme.css
    fonts.css
```


---

## 5. Pemetaan Konversi React → Vue 3

| React | Vue 3 |

|---|---|
| `useState(x)` | `ref(x)` atau `reactive({})` |
| `useEffect(() => {}, [])` | `onMounted(() => {})` |
| `useEffect(() => {}, [dep])` | `watch(dep, () => {})` |
| `useRef()` | `ref()` |
| `useCallback` | Fungsi biasa atau `computed` |
| `useMemo` | `computed()` |
| Custom hook (`useCountUp`) | Composable (`useCountUp.ts`) |
| `.tsx` file | `.vue` file (template + script setup + style) |
| `className` | `class` |
| `htmlFor` | `for` |
| `style={{ color: 'red' }}` | `:style="{ color: 'red' }"` |
| `React.ChangeEvent` | `Event` (native DOM) |
| `React.FormEvent` | `Event` (native DOM) |
| `props.children` | `<slot />` |
| `createContext / useContext` | `provide / inject` |

---

## 6. Dependency Vue-Incompatible

| Dependency | Status | Pengganti |
|---|---|---|
| `@radix-ui/react-*` | Hanya di `ui/*` — SKIP | — |
| `react-hook-form` | Tidak dipakai di section inti — SKIP | — |
| `embla-carousel-react` | Hanya di `ui/*` — SKIP | Custom carousel |
| `recharts` | Tidak dipakai — SKIP | — |
| `@mui/material` | Tidak dipakai — SKIP | — |
| `lucide-react` | Dipakai di semua section | `lucide-vue-next` |

> `src/app/components/ui/*` seluruhnya tidak dipakai oleh section manapun di landing page. Skip total, effort turun drastis.

---

## 7. Critical Notes — Behavior Parity

### 7.1 IntersectionObserver
Dipakai di banyak tempat:
- `HeroSection` — mulai counter animasi saat masuk viewport
- `LayananSection`, `KeunggulanSection` — reveal animation
- `Navbar` — active section tracking
- `WhatsAppFloating` — show/hide berdasarkan visibility booking section
- `ProsesKerjaSection` — reveal step bertahap

**Panduan Vue:** Inisialisasi observer di `onMounted()`, disconnect di `onUnmounted()`. Simpan instance observer di `ref` agar bisa di-cleanup. Pastikan `threshold` dan `rootMargin` sama persis agar timing UX tidak berubah.

### 7.2 Form State & Validasi
`BookingFormSection` menggunakan manual state:
- `useState` untuk nilai form dan error
- Validasi onBlur per field
- Submit → `window.open(generateWAMessage(...))` buka WhatsApp

**Panduan Vue:** Gunakan `reactive()` untuk form model, `ref({})` untuk errors. Implementasi `handleBlur`, `validate`, dan `handleSubmit` dengan Vue event handlers. `window.open` tetap berlaku.

### 7.3 Lightbox & Scroll Lock (GaleriSection)
- Overlay fullscreen dengan prev/next navigation
- Keyboard shortcut: ESC untuk tutup, arrow keys untuk navigasi
- `document.body.style.overflow = 'hidden'` saat lightbox terbuka

**Panduan Vue:** Gunakan `ref` untuk state lightbox. Tambah/remove keyboard event listener di `onMounted`/`onUnmounted`. Cleanup scroll lock di `onUnmounted` sebagai safety net.

### 7.4 Vite Asset Resolver
`vite.config.ts` memiliki custom plugin yang resolve `figma:asset/...`. Pertahankan config ini saat setup project Vue baru.

---

## 8. TODO — Urutan Konversi

### Phase 1 — Setup Project Vue 3
- [x] Init project Vue 3 baru dengan Vite (`npm create vue@latest`)
- [x] Install: `vue`, `@vitejs/plugin-vue`, `tailwindcss`, `lucide-vue-next`, `typescript`
- [x] Setup `vite.config.ts` — alias `@` → `./src`, pertahankan asset resolver
- [x] Setup Tailwind CSS v4
- [x] Copy semua file dari `src/styles/` — CSS variables tetap sama

### Phase 2 — Utilities & Data (No Changes)
- [x] Copy `src/lib/config.ts`
- [x] Copy `src/lib/utils.ts`
- [x] Copy `src/data/paket.ts`
- [x] Copy `src/data/testimoni.ts`
- [x] Copy `src/data/faq.ts`
- [x] Copy `src/data/wilayah.ts`

### Phase 3 — Entrypoint
- [x] Buat `src/main.ts` — ganti `ReactDOM.render` ke `createApp(App).mount('#app')`
- [x] Update `index.html` — pastikan `<div id="app">` dan Google Fonts link ada

### Phase 4 — Shared Components
- [x] Convert `ImageWithFallback.tsx` → `ImageWithFallback.vue`
- [x] Convert `BackToTop.tsx` → `BackToTop.vue`
- [x] Convert `WhatsAppFloating.tsx` → `WhatsAppFloating.vue`

### Phase 5 — Layout Components
- [x] Convert `Footer.tsx` → `Footer.vue`
- [x] Convert `Navbar.tsx` → `Navbar.vue` ⚠️ IntersectionObserver + mobile drawer

### Phase 6 — Section Components (Medium)
- [x] Convert `FaqSection.tsx` → `FaqSection.vue`
- [x] Convert `CakupanWilayahSection.tsx` → `CakupanWilayahSection.vue`
- [x] Convert `PaketHargaSection.tsx` → `PaketHargaSection.vue`
- [x] Convert `LayananSection.tsx` → `LayananSection.vue`
- [x] Convert `KeunggulanSection.tsx` → `KeunggulanSection.vue`
- [x] Convert `TestimoniSection.tsx` → `TestimoniSection.vue`
- [x] Convert `BookingFormSection.tsx` → `BookingFormSection.vue`
 
### Phase 7 — Section Components (Complex)
- [x] Convert `HeroSection.tsx` → `HeroSection.vue` ⚠️ counter animasi + IntersectionObserver
- [x] Convert `ProsesKerjaSection.tsx` → `ProsesKerjaSection.vue` ⚠️ setTimeout chain
- [x] Convert `GaleriSection.tsx` → `GaleriSection.vue` ⚠️ lightbox + keyboard + scroll lock

### Phase 8 — Root Assembly & Testing
- [x] Convert `App.tsx` → `App.vue` — rakit semua section dengan urutan sama
- [x] Test semua section tampil benar di browser
- [x] Test responsiveness mobile dan desktop
- [x] Test semua interaksi: form, carousel, accordion, lightbox, floating button
- [x] Test WhatsApp redirect dari booking form dan paket cards
- [x] Verifikasi smooth scroll ke `#booking` dari semua CTA
- [x] Verifikasi active nav state saat scroll

### Phase 9 — Tambahan (Galeri Section)
- [x] Buat data dummy 12 foto dengan struktur `{ id, judul, lokasi, image }`
- [x] Layout grid 3x4 desktop, 2 kolom mobile
- [x] Overlay judul + lokasi di tiap foto, muncul on hover dengan smooth transition
- [x] Placeholder image siap diganti foto asli

---

## 9. Single Source of Truth

Urutan prioritas saat konversi:
1. `src/lib/*` dan `src/data/*` dulu — tidak ada perubahan, hanya copy
2. `App.vue` assembly — pertahankan urutan section yang sama persis
3. Layout + shared components sebelum section
4. Behavior yang wajib parity: smooth scroll, active nav, lightbox keyboard, scroll lock
5. `src/app/components/ui/*` — skip kecuali terbukti dipakai

