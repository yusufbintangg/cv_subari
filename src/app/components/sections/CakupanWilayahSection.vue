<!--
  CakupanWilayahSection.vue

  React TSX → Vue 3 Composition API
-->

<script setup lang="ts">
import { computed } from 'vue'

import {
  MapPin,
  MessageCircle
} from 'lucide-vue-next'

import wilayah from '@/data/wilayah'

import {
  SITE_CONFIG,
  WHATSAPP_NUMBER
} from '@/lib/config'

const waLink = computed(() => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Halo, saya ingin menanyakan apakah layanan tersedia di kota saya. Mohon infonya.'
  )}`
})
</script>

<template>
  <section
    id="wilayah"
    style="background-color: white;"
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >

      <!-- Heading -->
      <div class="text-center mb-10">

        <span
          class="inline-block font-inter font-medium uppercase tracking-widest mb-3"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            font-size: 0.75rem;
            color: #F59E0B;
            letter-spacing: 0.12em;
          "
        >
          Jangkauan Layanan
        </span>

        <h2
          class="font-jakarta font-bold tracking-tight"
          style="
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
            font-size: clamp(1.75rem, 3vw, 2.5rem);
            color: #1E293B;
          "
        >
          Area Layanan Jawa Tengah
        </h2>

        <p
          class="font-inter mt-3"
          style="
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            color: #64748B;
          "
        >
          Melayani 23+ kota dan kabupaten di Jawa Tengah
        </p>
      </div>

      <!-- City Badges -->
      <div
        class="flex flex-wrap gap-2 sm:gap-3 justify-center mb-12"
      >

        <div
          v-for="kota in wilayah"
          :key="kota"
          class="flex items-center gap-1.5 px-4 py-2 rounded-full font-inter font-medium transition-all duration-200 hover:scale-105"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            font-size: 0.875rem;
            background-color: #EFF6FF;
            color: #1E3A5F;
            border: 1.5px solid #BFDBFE;
          "
        >
          <MapPin
            :size="14"
            color="#1E3A5F"
          />

          {{ kota }}
        </div>
      </div>

      <!-- Google Maps -->
      <div
        class="w-full overflow-hidden rounded-2xl"
        style="
          height: 400px;
          border: 1.5px solid #E2E8F0;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        "
      >
        <iframe
          :src="SITE_CONFIG.mapsEmbed"
          width="100%"
          height="100%"
          style="border: 0;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Lokasi Sedot WC Salatiga"
        />
      </div>

      <!-- CTA -->
      <div
        class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 p-6 rounded-2xl"
        style="
          background-color: #F8FAFC;
          border: 1.5px solid #E2E8F0;
        "
      >

        <p
          class="font-inter text-center sm:text-left"
          style="
            font-family: 'Inter', sans-serif;
            font-size: 0.95rem;
            color: #64748B;
          "
        >
          Tidak lihat kota Anda?
          Hubungi kami untuk konfirmasi
          ketersediaan layanan di wilayah Anda.
        </p>

        <a
          :href="waLink"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-5 py-3 rounded-xl font-jakarta font-bold transition-all duration-200 hover:opacity-90 whitespace-nowrap"
          style="
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
            font-size: 0.9rem;
            background-color: #25D366;
            color: white;
            text-decoration: none;
            min-height: 44px;
          "
        >
          <MessageCircle :size="18" />

          Hubungi via WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>