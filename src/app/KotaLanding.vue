<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import WhatsAppFloating from './components/shared/WhatsAppFloating.vue'
import BackToTop from './components/shared/BackToTop.vue'
import { getKotaBySlug } from '../data/kota'
import { WHATSAPP_NUMBER } from '../lib/config'

const route = useRoute()
const slug = computed(() => (route.params.slug as string) ?? '')
const kota = computed(() => getKotaBySlug(slug.value))

// Schema.org Structured Data untuk Local SEO Otomatis
const schemaData = computed(() => {
  if (!kota.value) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Sedot WC ${kota.value.nama}`,
    description: kota.value.metaDescription,
    telephone: '+6285802753321',
    areaServed: kota.value.kecamatanDicover.map((kec) => ({
      '@type': 'AdministrativeArea',
      name: `Kecamatan ${kec}, ${kota.value?.nama}`,
    })),
    priceRange: '$$',
  }
})

// SEO per-halaman & Schema Injection
useHead(() => ({
  title: kota.value ? kota.value.metaTitle : 'Halaman Tidak Ditemukan',
  meta: [
    {
      name: 'description',
      content: kota.value ? kota.value.metaDescription : '',
    },
    ...(!kota.value ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
  ],
  script: schemaData.value
    ? [
        {
          type: 'application/ld+json',
          children: JSON.stringify(schemaData.value),
        },
      ]
    : [],
}))

const waLink = computed(() => {
  const nama = kota.value?.nama ?? ''
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Halo, saya ingin tanya jasa sedot WC di ${nama}.`,
  )}`
})
</script>

<template>
  <div class="min-h-screen bg-slate-100 text-slate-800 antialiased font-sans">
    <Navbar />

    <main v-if="kota" id="hero">
      <!-- 1. HERO SECTION (Conversion & Clarity Focused) -->
      <section
        class="relative overflow-hidden px-5 pt-32 pb-16 lg:pt-40 lg:pb-20"
        style="background: linear-gradient(160deg, #0b4da3 0%, #083674 100%)"
      >
        <!-- Background Pattern subtle -->
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div class="relative mx-auto max-w-4xl text-center">
          <!-- Tagline Area Coverage -->
          <div class="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide"
            style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.35)">
            <span class="h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
            Melayani {{ kota.kecamatanDicover.length }} Kecamatan di {{ kota.nama }}
          </div>

          <!-- SEO Main Heading H1 -->
          <h1
            class="mt-4 text-3xl font-black leading-tight text-white lg:text-5xl tracking-tight"
            style="font-family: 'Plus Jakarta Sans', sans-serif"
          >
            Sedot WC {{ kota.nama }} <span style="color: #f59e0b">24 Jam</span>
          </h1>

          <!-- Intro Dynamic Text -->
          <p class="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 lg:text-base">
            {{ kota.intro }}
          </p>

          <!-- Micro Trust Anchor (Tanpa Overclaim) -->
          <div class="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-200 border-y border-white/10 py-3 max-w-xl mx-auto">
            <span class="flex items-center gap-1.5"><svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg> Layanan Rumah Tangga & Instansi</span>
            <span class="flex items-center gap-1.5"><svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg> Responsif 24 Jam</span>
          </div>

          <!-- CTAs -->
          <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              :href="waLink"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto rounded-full px-8 py-3.5 text-sm font-extrabold shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              style="background: #f59e0b; color: #0f172a"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              Hubungi via WhatsApp
            </a>
            <a
              href="tel:+6285802753321"
              class="w-full sm:w-auto rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 flex items-center justify-center gap-2"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              Telepon Langsung
            </a>
          </div>
        </div>
      </section>

      <!-- 2. CAKUPAN KECAMATAN (Structured Grid for Local SEO Keyword Placement) -->
      <section class="px-5 py-14 lg:py-16">
        <div class="mx-auto max-w-5xl">
          <div class="text-center max-w-2xl mx-auto">
            <h2 class="text-2xl font-extrabold text-slate-900 lg:text-3xl" style="font-family: 'Plus Jakarta Sans', sans-serif">
              Jangkauan Area Layanan di {{ kota.nama }}
            </h2>
            <p class="mt-2 text-sm text-slate-600 lg:text-base">
              Tim kami menjangkau seluruh kecamatan berikut, siap datang langsung untuk kebutuhan rumah tangga maupun instansi.
            </p>
          </div>

          <div class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            <div
              v-for="kec in kota.kecamatanDicover"
              :key="kec"
              class="group rounded-xl border border-slate-200/80 bg-white p-4 text-center shadow-sm transition-all hover:border-blue-500 hover:shadow-md"
            >
              <div class="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <h3 class="text-xs text-slate-500 font-medium uppercase tracking-wider">Kecamatan</h3>
              <p class="text-sm font-bold text-slate-900 mt-0.5">{{ kec }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. KLIEN & SOCIAL PROOF (E-E-A-T Signal for Trust) -->
      <section class="bg-white px-5 py-14 lg:py-16 border-y border-slate-200/80" v-if="kota.klien.length">
        <div class="mx-auto max-w-5xl">
          <div class="text-center max-w-2xl mx-auto">
            <span class="text-xs font-bold uppercase tracking-wider text-blue-600">Proof of Work</span>
            <h2 class="mt-1 text-2xl font-extrabold text-slate-900 lg:text-3xl" style="font-family: 'Plus Jakarta Sans', sans-serif">
              Dipercaya Perusahaan &amp; Instansi di {{ kota.nama }}
            </h2>
            <p class="mt-2 text-sm text-slate-600 lg:text-base">
              Pengalaman pengerjaan skala besar untuk instansi, perusahaan, dan komersial di wilayah {{ kota.nama }}.
            </p>
          </div>

          <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="k in kota.klien"
              :key="k.nama"
              class="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all hover:bg-white hover:shadow-md"
            >
              <div class="flex items-center gap-3">
                <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700 font-bold text-xs">
                  PT/RS
                </div>
                <div>
                  <h3 class="text-sm font-bold text-slate-900 leading-snug">{{ k.nama }}</h3>
                  <p class="text-xs text-slate-500">Area {{ kota.nama }}</p>
                </div>
              </div>
              <span
                class="shrink-0 rounded-md px-2.5 py-1 text-xs font-semibold"
                style="background: rgba(11, 77, 163, 0.08); color: rgb(11, 77, 163)"
              >
                Kec. {{ k.kecamatan }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. CLOSING / BRIDGING CTA -->
      <section class="px-5 py-14 lg:py-16">
        <div class="mx-auto max-w-4xl rounded-3xl bg-slate-900 p-8 text-center shadow-2xl lg:p-12 relative overflow-hidden">
          <div class="relative z-10">
            <h2 class="text-xl font-bold text-white lg:text-2xl mb-3" style="font-family: 'Plus Jakarta Sans', sans-serif">
              Solusi Sedot WC Cepat &amp; Terpercaya di {{ kota.nama }}
            </h2>
            <p class="text-sm leading-relaxed text-slate-300 lg:text-base max-w-2xl mx-auto">
              {{ kota.penutup }}
            </p>
            <div class="mt-8">
              <a
                :href="waLink"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-extrabold shadow-lg transition-transform hover:scale-105 active:scale-95"
                style="background: #f59e0b; color: #0f172a"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                Konsultasi Gratis via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Fallback kalau slug gak dikenal -->
    <main v-else class="flex min-h-[60vh] flex-col items-center justify-center px-5 pt-32 text-center">
      <h1 class="text-2xl font-bold text-slate-900">Halaman Tidak Ditemukan</h1>
      <p class="mt-3 max-w-md text-sm text-slate-600">
        Kota yang kamu cari belum tersedia halamannya. Cek daftar wilayah layanan kami di beranda utama.
      </p>
      <a href="/" class="mt-6 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105" style="background: rgb(11, 77, 163)">
        Kembali ke Beranda
      </a>
    </main>

    <Footer />
    <WhatsAppFloating />
    <BackToTop />
  </div>
</template>