<!--
  LayananSection.vue

  React TSX → Vue 3 Composition API
-->

<script setup lang="ts">
import {
  ref,
  onMounted,
  onUnmounted
} from 'vue'

import {
  Truck,
  Wrench,
  Factory,
  RefreshCw,
  ChevronRight
} from 'lucide-vue-next'

const layanan = [
  {
    id: 'septic-tank',
    icon: Truck,
    nama: 'Sedot Septic Tank',
    deskripsi:
      'Untuk rumah tinggal, kos-kosan, dan hunian. Bersih tuntas, bebas bau.'
  },
  {
    id: 'wc-mampet',
    icon: Wrench,
    nama: 'Sedot WC Mampet',
    deskripsi:
      'Pembersihan pipa dan saluran yang tersumbat. Cepat dan efektif.'
  },
  {
    id: 'limbah-industri',
    icon: Factory,
    nama: 'Sedot Limbah Industri',
    deskripsi:
      'Untuk pabrik, hotel, dan rumah sakit. Tim dan armada lengkap.'
  },
  {
    id: 'berkala',
    icon: RefreshCw,
    nama: 'Sedot Berkala / Kontrak',
    deskripsi:
      'Jadwal rutin bulanan atau triwulan. Lebih hemat dan terjadwal.'
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
      threshold: 0.15
    }
  )

  observer.observe(sectionRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
})

const scrollToBooking = () => {
  const el = document.getElementById('booking')

  if (el) {
    el.scrollIntoView({
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <section
    id="layanan"
    ref="sectionRef"
    class="relative"
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
          Apa yang Kami Kerjakan
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
          Layanan Kami
        </h2>
      </div>

      <!-- Cards -->
      <div
        class="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6"
      >

        <div
          v-for="(item, i) in layanan"
          :key="item.id"
          class="group flex flex-col gap-4 p-6 rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-1"
          :style="{
            backgroundColor: 'white',

            border: '1.5px solid #E2E8F0',

            boxShadow:
              '0 2px 8px rgba(0,0,0,0.05)',

            opacity: visible ? 1 : 0,

            transform: visible
              ? 'translateY(0)'
              : 'translateY(20px)',

            transition: `
              opacity 0.5s ease ${i * 0.1}s,
              transform 0.5s ease ${i * 0.1}s,
              box-shadow 0.2s ease,
              border-color 0.2s ease
            `
          }"
          @mouseenter="
            ($event.currentTarget as HTMLElement)
              .style.borderColor = '#1E3A5F';

            ($event.currentTarget as HTMLElement)
              .style.boxShadow =
              '0 8px 24px rgba(30,58,95,0.12)';
          "
          @mouseleave="
            ($event.currentTarget as HTMLElement)
              .style.borderColor = '#E2E8F0';

            ($event.currentTarget as HTMLElement)
              .style.boxShadow =
              '0 2px 8px rgba(0,0,0,0.05)';
          "
        >

          <!-- Icon -->
          <div
            class="flex items-center justify-center w-16 h-16 rounded-xl"
            style="
              background-color:
              rgba(30,58,95,0.08);

              color: #1E3A5F;
            "
          >
            <component
              :is="item.icon"
              :size="36"
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
            {{ item.nama }}
          </h3>

          <!-- Description -->
          <p
            class="font-inter flex-1"
            style="
              font-family: 'Inter', sans-serif;
              font-size: 0.875rem;
              color: #64748B;
              line-height: 1.6;
            "
          >
            {{ item.deskripsi }}
          </p>

          <!-- CTA -->
          <button
            @click="scrollToBooking"
            class="flex items-center gap-1 font-inter font-medium transition-all duration-200 hover:gap-2"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 600;
              font-size: 0.875rem;
              color: #1E3A5F;
              background: none;
              border: none;
              padding: 0;
              cursor: pointer;
            "
          >
            Selengkapnya

            <ChevronRight :size="16" />
          </button>
        </div>
      </div>
    </div>

    <!-- Wave Divider -->
    <div style="margin-bottom: -2px;">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        class="w-full block"
        style="height: 60px;"
      >
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z"
          fill="#F8FAFC"
        />
      </svg>
    </div>
  </section>
</template>