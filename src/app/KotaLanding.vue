<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { getKotaBySlug } from '@/data/kota'
import { WHATSAPP_NUMBER } from '@/lib/config'
import Navbar from '@/app/components/layout/Navbar.vue'
import Footer from '@/app/components/layout/Footer.vue'
import WhatsAppFloating from '@/app/components/shared/WhatsAppFloating.vue'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const kota = computed(() => getKotaBySlug(slug.value))

const waLink = computed(() => {
  const pesan = kota.value
    ? `Halo, saya ingin bertanya jasa sedot WC di ${kota.value.nama}`
    : 'Halo, saya ingin bertanya jasa sedot WC'
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pesan)}`
})

useHead(
  computed(() => ({
    title: kota.value
      ? `${kota.value.judulHero} | CV Subari`
      : 'Halaman Tidak Ditemukan | CV Subari',
    meta: [
      {
        name: 'description',
        content: kota.value
          ? kota.value.deskripsiIntro.slice(0, 155)
          : 'Halaman tidak ditemukan.',
      },
      {
        property: 'og:title',
        content: kota.value ? `${kota.value.judulHero} | CV Subari` : '',
      },
      {
        property: 'og:description',
        content: kota.value ? kota.value.deskripsiIntro.slice(0, 155) : '',
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:url',
        content: kota.value ? `https://sedotwcjateng.id/sedot-wc-${kota.value.slug}` : '',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: kota.value ? `https://sedotwcjateng.id/sedot-wc-${kota.value.slug}` : '',
      },
    ],
  })),
)
</script>

<template>
  <div v-if="kota" class="min-h-screen bg-white text-slate-900">
    <Navbar />

    <!-- Hero -->
    <section class="pt-32 pb-16 px-6 bg-slate-950 text-white">
      <div class="max-w-3xl mx-auto text-center">
        <p class="text-orange-400 text-sm font-semibold tracking-wide uppercase mb-3">
          Jasa Sedot WC {{ kota.nama }}
        </p>
        <h1 class="text-3xl md:text-4xl font-bold mb-4">
          {{ kota.judulHero }}
        </h1>
        <p class="text-slate-300 leading-relaxed">
          {{ kota.deskripsiIntro }}
        </p>
        <a
          :href="waLink"
          target="_blank"
          rel="noopener"
          class="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Chat WhatsApp Sekarang
        </a>
      </div>
    </section>

    <!-- Area cakupan -->
    <section class="py-14 px-6">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-xl font-bold mb-4">
          Area Layanan Kami di {{ kota.nama }}
        </h2>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="k in kota.kecamatan"
            :key="k"
            class="px-3 py-1.5 bg-slate-100 rounded-full text-sm text-slate-700"
          >
            Kec. {{ k }}
          </span>
        </div>
      </div>
    </section>

    <!-- Klien / bukti kerja -->
    <section class="py-14 px-6 bg-slate-50">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-xl font-bold mb-2">
          Dipercaya Perusahaan & Instansi di {{ kota.nama }}
        </h2>
        <p class="text-slate-500 text-sm mb-6">
          Sebagian klien korporat yang pernah kami tangani di wilayah {{ kota.nama }}.
        </p>
        <ul class="grid sm:grid-cols-2 gap-3">
          <li
            v-for="klien in kota.klien"
            :key="klien.nama"
            class="bg-white border border-slate-200 rounded-lg px-4 py-3"
          >
            <p class="font-semibold text-sm">{{ klien.nama }}</p>
            <p class="text-xs text-slate-500">Kec. {{ klien.kecamatan }}</p>
          </li>
        </ul>
        <p class="text-slate-600 leading-relaxed mt-6 text-sm">
          {{ kota.paragrafPenutup }}
        </p>
      </div>
    </section>

    <!-- CTA penutup -->
    <section class="py-16 px-6 text-center">
      <h2 class="text-xl font-bold mb-3">
        Butuh Sedot WC di {{ kota.nama }} Sekarang?
      </h2>
      <p class="text-slate-500 mb-6">
        Tim kami siap merespons cepat. Hubungi via WhatsApp untuk survei &amp; estimasi biaya.
      </p>
      <a
        :href="waLink"
        target="_blank"
        rel="noopener"
        class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition"
      >
        Chat WhatsApp Sekarang
      </a>
    </section>

    <Footer />
    <WhatsAppFloating />
  </div>

  <div v-else class="min-h-screen flex items-center justify-center">
    <p class="text-slate-500">Halaman tidak ditemukan.</p>
  </div>
</template>