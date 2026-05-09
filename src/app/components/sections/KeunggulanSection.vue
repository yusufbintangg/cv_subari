<!--
  KeunggulanSection.vue

  React TSX → Vue 3 Composition API
-->

<script setup lang="ts">
import {
  ref,
  onMounted,
  onUnmounted
} from 'vue'

import {
  Zap,
  BadgeDollarSign,
  ShieldCheck,
  Settings,
  HardHat,
  Leaf
} from 'lucide-vue-next'

const keunggulan = [
  {
    icon: Zap,
    judul: 'Respons Cepat',
    deskripsi:
      'Tim siaga 24 jam, respons WA kurang dari 15 menit setelah pesan diterima.'
  },
  {
    icon: BadgeDollarSign,
    judul: 'Harga Transparan',
    deskripsi:
      'Tidak ada biaya tersembunyi. Harga fix disepakati di awal sebelum pengerjaan.'
  },
  {
    icon: ShieldCheck,
    judul: 'Bergaransi',
    deskripsi:
      'Garansi bersih 30-60 hari sesuai paket. Komplain? Kami kembali tanpa biaya.'
  },
  {
    icon: Settings,
    judul: 'Alat Modern',
    deskripsi:
      'Pompa hidrolik bertenaga tinggi dan selang panjang untuk akses gang sempit.'
  },
  {
    icon: HardHat,
    judul: 'Teknisi Berpengalaman',
    deskripsi:
      'Tim terlatih, sopan, dan profesional. Berpengalaman menangani berbagai kondisi.'
  },
  {
    icon: Leaf,
    judul: 'Ramah Lingkungan',
    deskripsi:
      'Pembuangan limbah sesuai regulasi lingkungan, aman untuk ekosistem sekitar.'
  }
]

const visible = ref(false)

const sectionRef = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!sectionRef.value) return

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer?.disconnect()
      }
    },
    {
      threshold: 0.1
    }
  )

  observer.observe(sectionRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <section
    id="keunggulan"
    ref="sectionRef"
    style="background-color: white;"
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >

      <!-- Heading -->
      <div class="text-center mb-12">

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
          Keunggulan Kami
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
          Mengapa Memilih Kami?
        </h2>
      </div>

      <!-- Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
      >

        <div
          v-for="(item, i) in keunggulan"
          :key="item.judul"
          class="flex flex-col gap-4 p-6 rounded-xl transition-all duration-200 hover:-translate-y-1"
          :style="{
            backgroundColor: '#F8FAFC',

            border: '1.5px solid #E2E8F0',

            opacity: visible ? 1 : 0,

            transform: visible
              ? 'translateY(0)'
              : 'translateY(20px)',

            transition: `
              opacity 0.5s ease ${i * 0.08}s,
              transform 0.5s ease ${i * 0.08}s,
              box-shadow 0.2s ease
            `
          }"
          @mouseenter="
            ($event.currentTarget as HTMLElement)
              .style.boxShadow =
              '0 8px 24px rgba(30,58,95,0.1)'
          "
          @mouseleave="
            ($event.currentTarget as HTMLElement)
              .style.boxShadow = 'none'
          "
        >

          <!-- Icon -->
          <div
            class="flex items-center justify-center w-14 h-14 rounded-xl"
            style="
              background-color:
              rgba(30,58,95,0.08);

              color: #1E3A5F;
            "
          >
            <component
              :is="item.icon"
              :size="32"
            />
          </div>

          <!-- Title -->
          <h3
            class="font-jakarta font-bold"
            style="
              font-family:
              'Plus Jakarta Sans', sans-serif;

              font-weight: 700;
              font-size: 1rem;
              color: #1E293B;
            "
          >
            {{ item.judul }}
          </h3>

          <!-- Description -->
          <p
            class="font-inter"
            style="
              font-family: 'Inter', sans-serif;
              font-size: 0.875rem;
              color: #64748B;
              line-height: 1.6;
            "
          >
            {{ item.deskripsi }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>