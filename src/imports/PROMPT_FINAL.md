# Sedot WC Salatiga — Landing Page

Build a professional single-page landing page for a septic tank cleaning service business called "Sedot WC Salatiga" serving the entire Central Java region. The website must feel trustworthy, fast, and professional.

Do not use any emoji anywhere in the website. All visual indicators must use Lucide React icons.

Build the project in this order: package.json, vite.config.js, tailwind.config.js, index.html, src/main.jsx, src/index.css, src/lib/config.js, src/lib/utils.js, src/data files, src/components/shared, src/components/layout, then each section component top to bottom, and finally App.jsx.

---

## Tech Stack

- Framework: React with functional components and hooks
- Build tool: Vite
- Styling: Tailwind CSS
- Icons: Lucide React — used for all icons throughout the site, no emoji
- Fonts: Google Fonts — Plus Jakarta Sans, Inter, Space Grotesk
- No backend, no database — all data is hardcoded in separate data files
- No React Router — this is a single-page app, all navigation is anchor links with smooth scroll

---

## Color Tokens

Define these as CSS variables in src/index.css:

```css
:root {
  --primary: #1E3A5F;
  --primary-dark: #152C47;
  --primary-light: #2D5282;
  --accent: #F59E0B;
  --accent-dark: #D97706;
  --accent-light: #FCD34D;
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8FAFC;
  --bg-dark: #0F172A;
  --text-primary: #1E293B;
  --text-secondary: #64748B;
  --text-muted: #94A3B8;
  --success: #10B981;
  --border: #E2E8F0;
}
```

---

## Typography

- Headings: Plus Jakarta Sans, weight 700-800
- Subheadings and labels: Plus Jakarta Sans, weight 600
- Body and paragraphs: Inter
- Prices and phone numbers: Space Grotesk

Load all three fonts via Google Fonts link tag in index.html.

---

## File Structure

```
src/
  components/
    layout/
      Navbar.jsx
      Footer.jsx
    sections/
      HeroSection.jsx
      LayananSection.jsx
      PaketHargaSection.jsx
      KeunggulanSection.jsx
      ProsesKerjaSection.jsx
      CakupanWilayahSection.jsx
      TestimoniSection.jsx
      FaqSection.jsx
      BookingFormSection.jsx
    shared/
      WhatsAppFloating.jsx
      BackToTop.jsx
  data/
    paket.js
    testimoni.js
    faq.js
    wilayah.js
  lib/
    config.js
    utils.js
  App.jsx
  main.jsx
  index.css
```

---

## Data Files

### src/lib/config.js

```js
export const WHATSAPP_NUMBER = "6285802753321"

export const SITE_CONFIG = {
  name: "Sedot WC Salatiga",
  tagline: "Cepat · Bersih · Terpercaya",
  area: "Seluruh Jawa Tengah",
  operasional: "24 Jam / 7 Hari",
  alamat: "Jl. Simonegoro Gg. 7, Kecandran, Kec. Sidomukti, Kota Salatiga, Jawa Tengah 50723",
  mapsEmbed: "https://www.google.com/maps?q=MF8G+F4W,+Jl.+Simonegoro+Gg.+7,+Kecandran,+Kec.+Sidomukti,+Kota+Salatiga,+Jawa+Tengah+50723&output=embed",
  instagram: null
}
```

### src/lib/utils.js

```js
import { WHATSAPP_NUMBER } from "./config"

export const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(price)

export const generateWAMessage = (form) => {
  const text = `PEMESANAN JASA SEDOT WC
Nama     : ${form.nama}
WhatsApp : ${form.whatsapp}
Alamat   : ${form.alamat}
Kota     : ${form.kota}
Layanan  : ${form.layanan}
Paket    : ${form.paket}
Tanggal  : ${form.tanggal}
Jam      : ${form.jam}
Catatan  : ${form.catatan || "-"}
Mohon konfirmasi ketersediaan jadwal. Terima kasih.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
```

### src/data/paket.js

```js
const paket = [
  {
    id: "rumahan",
    nama: "Paket Rumahan",
    harga: 250000,
    hargaDisplay: "Mulai Rp 250.000",
    deskripsi: "Cocok untuk septic tank rumah tinggal standard",
    kapasitas: "1.000 - 3.000 liter",
    fitur: [
      "Kapasitas septic tank 1.000-3.000 liter",
      "Armada tanki 3.000 liter",
      "Teknisi berpengalaman",
      "Bebas biaya survei",
      "Garansi bersih 30 hari",
      "Proses 1-2 jam"
    ],
    isPopular: false
  },
  {
    id: "komersial",
    nama: "Paket Komersial",
    harga: 600000,
    hargaDisplay: "Mulai Rp 600.000",
    deskripsi: "Untuk ruko, kantor, kos-kosan, dan restoran",
    kapasitas: "3.000 - 8.000 liter",
    fitur: [
      "Kapasitas septic tank 3.000-8.000 liter",
      "Armada tanki 6.000 liter",
      "2 teknisi profesional",
      "Bebas biaya survei",
      "Garansi bersih 60 hari",
      "Proses 2-4 jam",
      "Laporan kondisi septic tank"
    ],
    isPopular: true
  },
  {
    id: "industri",
    nama: "Paket Industri",
    harga: 0,
    hargaDisplay: "Hubungi Kami",
    deskripsi: "Untuk pabrik, hotel, rumah sakit, dan fasilitas besar",
    kapasitas: "8.000 liter ke atas",
    fitur: [
      "Kapasitas tidak terbatas (multi-trip)",
      "Armada tanki khusus",
      "Tim teknisi lengkap",
      "Survei lokasi gratis",
      "Kontrak berkala tersedia",
      "Proses fleksibel sesuai kebutuhan",
      "Laporan teknis lengkap",
      "Prioritas jadwal darurat"
    ],
    isPopular: false
  }
]

export default paket
```

### src/data/testimoni.js

```js
const testimoni = [
  {
    id: 1,
    nama: "Bpk. Mujiono",
    kota: "Blotongan, Kota Salatiga",
    alamat: "Jalan Fatmawati, Semarang-Salatiga, Blotongan, Kota Salatiga",
    bintang: 5,
    pesan: "Awalnya takut mahal, ternyata harganya ramah banget di kantong. Hasilnya tetap maksimal.",
    paket: "Paket Rumahan"
  },
  {
    id: 2,
    nama: "Bp. Santoso K",
    kota: "Tingkir Tengah, Kota Salatiga",
    alamat: "Perum Taman Mutiara, Tingkir Tengah, Kec. Tingkir, Kota Salatiga",
    bintang: 5,
    pesan: "Harga bersahabat, bisa dinego juga. Mantap, langsung deal.",
    paket: "Paket Rumahan"
  },
  {
    id: 3,
    nama: "Bp. Joni W",
    kota: "Kec. Sidorejo, Kota Salatiga",
    alamat: "Jl. Kemiri Raya Salatiga, Kec. Sidorejo, Kota Salatiga",
    bintang: 5,
    pesan: "Hasilnya benar-benar tuntas. Nggak ada sisa bau, lancar semua.",
    paket: "Paket Rumahan"
  },
  {
    id: 4,
    nama: "Ibu Hasnah",
    kota: "Pulutan, Kec. Tuntang, Kota Salatiga",
    alamat: "Jl. H. Ilyas, Sraten Satu, Pulutan, Kec. Tuntang, Kota Salatiga",
    bintang: 5,
    pesan: "Rumah di gang kecil pun aman. Selang panjang sehingga tetap bisa dijangkau dan hasilnya memuaskan.",
    paket: "Paket Rumahan"
  },
  {
    id: 5,
    nama: "Bu Budi R",
    kota: "Rowoboni, Kec. Banyubiru",
    alamat: "Jalan Raya Muncul, Rowoboni, Kec. Banyubiru",
    bintang: 5,
    pesan: "Cukup WA, langsung berangkat. Cepat banget responnya. Sangat membantu keadaan darurat. Cepat tanggap, cepat datang, dan cepat beres. Pelayanan secepat ini jarang banget ditemukan.",
    paket: "Paket Rumahan"
  },
  {
    id: 6,
    nama: "Bu Wardana",
    kota: "Kumpulrejo, Kec. Argomulyo, Kota Salatiga",
    alamat: "Bendosari, Kumpulrejo, Kec. Argomulyo, Kota Salatiga",
    bintang: 5,
    pesan: "Ada garansi bikin saya tenang. Kalau ada masalah lagi, tinggal hubungi. Tapi sampai sekarang WC tetap lancar.",
    paket: "Paket Rumahan"
  },
  {
    id: 7,
    nama: "Bpk. Siswono B",
    kota: "Kec. Sidorejo, Kota Salatiga",
    alamat: "Jl. Kartini, Salatiga, Kec. Sidorejo, Kota Salatiga",
    bintang: 5,
    pesan: "Kerjanya detail, nggak setengah-setengah. Setelah dibersihkan, masih dicek lagi. Mantap.",
    paket: "Paket Komersial"
  },
  {
    id: 8,
    nama: "Ibu Wina Raharjo",
    kota: "Karanggede, Kabupaten Boyolali",
    alamat: "Jl. Raya Karanggede - Gemolong, Karanggede, Kabupaten Boyolali",
    bintang: 5,
    pesan: "Tenaganya sopan, sabar, dan tahu cara kerja yang benar. Jadi saya pun tenang melihat hasilnya.",
    paket: "Paket Rumahan"
  },
  {
    id: 9,
    nama: "Bpk. Agus Gunadi",
    kota: "Kec. Sidorejo, Kota Salatiga",
    alamat: "Jl. Diponegoro, Kec. Sidorejo, Kota Salatiga",
    bintang: 5,
    pesan: "Harga ekonomis tapi kualitas premium. Sudah hemat, rumah jadi bersih. Nggak nyesel pilih di sini.",
    paket: "Paket Rumahan"
  },
  {
    id: 10,
    nama: "Mas Sujarwo",
    kota: "Sidorejo Kidul, Kec. Tingkir, Kota Salatiga",
    alamat: "Jl. Marditomo Sidorejo Kidul, Kec. Tingkir, Kota Salatiga",
    bintang: 5,
    pesan: "Satu kata: profesional. Dari awal datang sampai selesai, cara kerjanya bikin percaya.",
    paket: "Paket Komersial"
  },
  {
    id: 11,
    nama: "Bu Fatimah",
    kota: "Kalicacing, Kec. Sidomukti, Kota Salatiga",
    alamat: "Jl. Adisucipto, Kalicacing, Kec. Sidomukti, Kota Salatiga",
    bintang: 5,
    pesan: "Kalau soal harga, ini yang paling masuk akal. Cocok buat semua kalangan, apalagi hasilnya juga maksimal.",
    paket: "Paket Rumahan"
  },
  {
    id: 12,
    nama: "Bpk. Deni K",
    kota: "Kutowinangun Kidul, Kec. Tingkir, Kota Salatiga",
    alamat: "Perumahan Wahid Blok E, Kutowinangun Kidul, Kec. Tingkir, Kota Salatiga",
    bintang: 5,
    pesan: "Rumah saya agak masuk ke dalam, tapi selangnya panjang jadi tetap bisa di sedot.",
    paket: "Paket Rumahan"
  }
]

export default testimoni
```

### src/data/faq.js

```js
const faq = [
  {
    id: 1,
    pertanyaan: "Berapa lama proses sedot WC berlangsung?",
    jawaban: "Tergantung kapasitas dan kondisi septic tank. Paket Rumahan biasanya 1-2 jam, Paket Komersial 2-4 jam. Tim kami akan estimasi waktu saat survei awal."
  },
  {
    id: 2,
    pertanyaan: "Apakah melayani panggilan darurat malam hari?",
    jawaban: "Ya. Kami beroperasi 24 jam sehari, 7 hari seminggu termasuk hari libur nasional. Untuk darurat, hubungi WhatsApp kami dan teknisi akan segera dikerahkan."
  },
  {
    id: 3,
    pertanyaan: "Area mana saja yang dilayani?",
    jawaban: "Kami melayani seluruh wilayah Jawa Tengah, termasuk Salatiga, Semarang, Solo, Magelang, Boyolali, Klaten, Purwokerto, Tegal, Pekalongan, dan sekitarnya."
  },
  {
    id: 4,
    pertanyaan: "Apakah ada biaya survei atau biaya tersembunyi?",
    jawaban: "Tidak ada. Survei awal gratis dan harga yang kami kutip sudah all-in tanpa biaya tambahan. Transparansi harga adalah komitmen kami."
  },
  {
    id: 5,
    pertanyaan: "Bagaimana cara memesan layanan?",
    jawaban: "Isi form booking di website ini atau langsung hubungi WhatsApp kami. Setelah itu tim kami akan menghubungi Anda dalam 15 menit untuk konfirmasi jadwal."
  },
  {
    id: 6,
    pertanyaan: "Apakah bisa request jadwal tertentu?",
    jawaban: "Bisa. Saat booking, pilih tanggal dan jam preferensi Anda. Kami akan konfirmasi ketersediaan. Untuk layanan rutin atau kontrak, jadwal bisa diatur tetap setiap bulan."
  }
]

export default faq
```

### src/data/wilayah.js

```js
const wilayah = [
  "Salatiga", "Semarang", "Solo / Surakarta", "Magelang",
  "Boyolali", "Klaten", "Purwokerto", "Tegal", "Pekalongan",
  "Kudus", "Jepara", "Demak", "Ungaran", "Ambarawa",
  "Temanggung", "Wonosobo", "Purworejo", "Kebumen",
  "Cilacap", "Blora", "Rembang", "Pati", "Grobogan"
]

export default wilayah
```

---

## Sections

### Navbar

- Logo on the left: Truck icon from Lucide + text "SEDOT WC SALATIGA" in bold primary color + tagline "Cepat · Bersih · Terpercaya" below in small muted text
- Center: anchor links for Layanan, Harga, Wilayah, Testimoni, Kontak with smooth scroll
- Right: two buttons — "Hubungi Sekarang" (primary blue solid) and "WhatsApp" (green solid)
- Sticky on scroll with solid white background and drop shadow
- Active section link highlighted with accent color bottom border, detected via Intersection Observer
- Mobile: hamburger icon (Menu / X from Lucide) toggles a full-width dropdown drawer with all links

### Hero Section

- Full viewport height
- Background: dark blue gradient from #1E3A5F to #0F172A with a subtle CSS dot pattern overlay
- Left side:
  - Three small pill badges in a row using Lucide icons: "Respons kurang dari 15 Menit" (Zap icon), "500+ Pelanggan Puas" (Users icon), "Bergaransi" (ShieldCheck icon)
  - Large headline "Jasa Sedot WC Profesional" in Plus Jakarta Sans weight 800, white
  - Subheadline: "Melayani Seluruh Jawa Tengah · 24 Jam · Bergaransi" in muted white
  - Two CTA buttons: "Pesan Sekarang" (solid accent yellow, scrolls to booking form) and "Chat WhatsApp" (white outline, opens WA link)
- Stats bar below the content area with 4 items separated by vertical dividers: "500+ Pelanggan", "24 Jam", "Se-Jawa Tengah", "Bergaransi"
- Stat numbers animate with a count-up effect on viewport entry via Intersection Observer
- Right side: large inline SVG illustration of a service truck with simple geometric shapes, colored with primary and accent palette — no emoji, no external image
- Wave SVG divider at the bottom transitioning to the next section background

### Layanan Section

- Background: white
- Section heading: "Layanan Kami"
- 4 cards in a 2-column grid on mobile, 4 columns on desktop, each using a Lucide icon:
  1. Truck icon — Sedot Septic Tank — untuk rumah, kos, kantor
  2. Wrench icon — Sedot WC Mampet — pembersihan pipa dan saluran
  3. Factory icon — Sedot Limbah Industri — pabrik, hotel, rumah sakit
  4. RefreshCw icon — Sedot Berkala / Kontrak — jadwal rutin bulanan atau triwulan
- Each card: large Lucide icon in primary color, service name, short description, "Selengkapnya" text link with ChevronRight icon
- Hover: card lifts with translateY -4px transition, primary blue border appears
- Wave SVG divider at the bottom

### Paket & Harga Section

- Background: #F8FAFC
- Section heading: "Pilih Paket Sesuai Kebutuhan"
- 3 pricing cards side by side on desktop, stacked vertically on mobile, data from paket.js
- Card with isPopular true: "TERPOPULER" badge at the top, accent color border, slightly elevated scale
- Each card: package name, capacity, price display in Space Grotesk, feature list with Check icons from Lucide, CTA button "Pesan Paket Ini" that opens WhatsApp with pre-filled package inquiry message
- Small disclaimer below all cards: "Harga belum termasuk ongkos transport jarak jauh lebih dari 30km"

### Keunggulan Section

- Background: white
- Section heading: "Mengapa Memilih Kami?"
- 6 cards in a 2-column grid on mobile, 3 columns on desktop, each with a Lucide icon:
  1. Zap icon — Respons Cepat — Tim siaga 24 jam, respons WA kurang dari 15 menit
  2. BadgeDollarSign icon — Harga Transparan — Tidak ada biaya tersembunyi, harga fix di awal
  3. ShieldCheck icon — Bergaransi — Garansi bersih 30-60 hari sesuai paket
  4. Settings icon — Alat Modern — Pompa hidrolik bertenaga tinggi, selang panjang
  5. HardHat icon — Teknisi Berpengalaman — Tim terlatih, sopan, dan profesional
  6. Leaf icon — Ramah Lingkungan — Pembuangan sesuai regulasi lingkungan

### Proses Kerja Section

- Background: #F8FAFC
- Section heading: "Cara Kerja Kami — Mudah dan Cepat"
- 5-step timeline, horizontal on desktop with connector lines between steps, vertical on mobile, each with a Lucide icon:
  1. MessageSquare icon — Hubungi atau Isi Form
  2. CalendarCheck icon — Konfirmasi dan Jadwal
  3. Truck icon — Teknisi Datang
  4. Droplets icon — Proses Sedot
  5. CheckCircle icon — Selesai dan Bersih
- Each step: large step number in primary color, Lucide icon, step title, short description
- Steps fade in sequentially on scroll via Intersection Observer

### Cakupan Wilayah Section

- Background: white
- Section heading: "Area Layanan Jawa Tengah"
- Subtext: "Melayani 23+ kota dan kabupaten di Jawa Tengah"
- All city names from wilayah.js rendered as pill-shaped badges with a MapPin icon from Lucide, in a responsive flex-wrap layout
- Google Maps iframe using SITE_CONFIG.mapsEmbed, full width, 400px height, rounded corners
- CTA below map: "Tidak lihat kota Anda? Hubungi kami untuk konfirmasi" with a WhatsApp button

### Testimoni Section

- Background: #F8FAFC
- Section heading: "Apa Kata Pelanggan Kami"
- Summary line: "4.9 dari 500+ ulasan" with filled Star icons from Lucide
- Carousel showing 3 cards at a time on desktop, 1 card on mobile
- Manual prev/next navigation with ChevronLeft and ChevronRight icons
- Auto-advance every 5 seconds, pauses on hover
- Each card from testimoni.js: Star icons for rating, review text, customer name, city, package tag
- All 12 testimoni must be rendered

### FAQ Section

- Background: white
- Section heading: "Pertanyaan yang Sering Ditanyakan"
- Accordion list using faq.js — click to expand or collapse with smooth max-height CSS transition
- ChevronDown icon rotates to ChevronUp when open
- Only one item open at a time
- CTA text below: "Masih ada pertanyaan?" with a WhatsApp button using MessageCircle icon

### Booking Form Section

- Background: #F8FAFC
- Section heading: "Pesan Layanan Sekarang"
- Form inside a white card with shadow and rounded corners
- Fields:
  - Nama Lengkap (text, required)
  - Nomor WhatsApp (tel, required)
  - Alamat Lengkap (textarea, required)
  - Kota/Kabupaten (select from wilayah.js, required)
  - Jenis Layanan (select: Sedot Septic Tank / Sedot WC Mampet / Sedot Limbah Industri / Sedot Berkala, required)
  - Paket (select: Rumahan / Komersial / Industri, required)
  - Tanggal Preferensi (date input, min today, required)
  - Jam Preferensi (select: Pagi 08.00-12.00 / Siang 12.00-17.00 / Malam 17.00-21.00 / Darurat atau Fleksibel, required)
  - Catatan Tambahan (textarea, optional)
- Show red inline error messages below each required field if left empty on submit
- Submit button "Kirim via WhatsApp": validate all required fields, then redirect to WhatsApp using generateWAMessage() from utils.js
- Disclaimer below button: "Data Anda aman. Kami tidak menyimpan informasi pribadi."

### Footer

- Background: #0F172A
- 3 columns on desktop, stacked on mobile:
  - Left: Truck icon + logo text, short business description, full address with MapPin icon
  - Center: quick navigation links and service list
  - Right: WhatsApp number 0858-0275-3321 with Phone icon, operating hours with Clock icon, service area with MapPin icon
- Bottom bar: copyright and "Melayani Jawa Tengah dengan sepenuh hati"
- All text in white or gray tones

---

## Shared Components

### WhatsAppFloating

- Fixed bottom-right position, z-index above all content
- Green background with MessageCircle icon from Lucide
- Continuous pulse ring animation via CSS keyframes
- Tooltip "Chat Sekarang" on hover
- Hides when the booking form section is in the viewport via Intersection Observer
- Opens WhatsApp link with a default greeting message on click

### BackToTop

- Fixed bottom-right, appears after user scrolls 400px, positioned above WhatsAppFloating
- Primary blue background, ArrowUp icon from Lucide
- Smooth scrolls to top on click

---

## Behavior and Responsiveness

- All navbar anchor links use smooth scroll behavior
- Active section detection with Intersection Observer to highlight current nav link
- All hover and transition animations use 200ms ease
- Mobile-first layout using Tailwind breakpoints: sm 640px, md 768px, lg 1024px, xl 1280px
- Pricing cards stack vertically on mobile
- Process timeline becomes vertical on mobile
- City badges: 2 columns on mobile, flexible wrap on desktop
- Google Fonts loaded via link tag in index.html

---

## WhatsApp Message Formats

Booking form message generated by generateWAMessage() in utils.js:
```
PEMESANAN JASA SEDOT WC
Nama     : [value]
WhatsApp : [value]
Alamat   : [value]
Kota     : [value]
Layanan  : [value]
Paket    : [value]
Tanggal  : [value]
Jam      : [value]
Catatan  : [value or "-"]
Mohon konfirmasi ketersediaan jadwal. Terima kasih.
```

Package inquiry message from pricing card button:
```
Halo, saya tertarik dengan [Nama Paket].
Harga: [Harga].
Mohon info lebih lanjut. Terima kasih.
```

---

## Output Checklist

- All 9 sections rendered and connected in App.jsx
- All data loaded from separate data files
- No emoji anywhere — all icons use Lucide React
- Booking form with validation and WhatsApp redirect
- Floating WhatsApp button with pulse animation
- Smooth scroll between sections
- Accordion FAQ functional with only one open at a time
- Testimoni carousel with navigation, auto-advance, and all 12 reviews
- Sticky navbar with active section detection
- Fully responsive on mobile and desktop
- Google Fonts loaded in index.html
- Count-up animation on hero stats
- Google Maps embed from SITE_CONFIG.mapsEmbed
- Inline SVG truck illustration in hero section
- Wave SVG dividers between sections
