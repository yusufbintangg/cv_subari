<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, h } from "vue"
import {
  Zap,
  Users,
  ShieldCheck,
  MessageCircle,
} from "lucide-vue-next"

import { WHATSAPP_NUMBER } from "../../../lib/config"
import ImageWithFallback from "../figma/ImageWithFallback.vue"
// ========================================
// Counter Animation Logic
// ========================================
// Vue version dari custom React hook useCountUp
// Function ini dipakai buat animasi angka naik
// kayak 0 -> 500+
//
// Analoginya:
// kayak speedometer mobil yang naik pelan,
// bukan langsung loncat.
//
// Resources:
// https://vuejs.org/guide/essentials/reactivity-fundamentals.html
// ========================================

function useCountUp(target: number, duration: number) {
  const count = ref(0)
  let timer: ReturnType<typeof setInterval> | null = null

  const start = () => {
    let current = 0
    const step = Math.ceil(target / (duration / 16))

    timer = setInterval(() => {
      current += step

      if (current >= target) {
        count.value = target

        if (timer) {
          clearInterval(timer)
        }
      } else {
        count.value = current
      }
    }, 16)
  }

  onBeforeUnmount(() => {
    if (timer) clearInterval(timer)
  })

  return {
    count,
    start,
  }
}

// ========================================
// Stats Data
// ========================================

const stats = [
  {
    label: "Pelanggan",
    value: 500,
    suffix: "+",
  },
  {
    label: "Jam Layanan",
    value: 24,
    suffix: " Jam",
  },
  {
    label: "Kota Dilayani",
    value: 23,
    suffix: "+",
  },
]

// ========================================
// Counter Instances
// ========================================

const pelanggan = useCountUp(500, 1200)
const jam = useCountUp(24, 1200)
const kota = useCountUp(23, 1200)

// ========================================
// Section Ref
// ========================================

const sectionRef = ref<HTMLElement | null>(null)

// ========================================
// WhatsApp Link
// ========================================

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo, saya ingin memesan layanan sedot WC. Mohon informasinya."
)}`

// ========================================
// Smooth Scroll
// ========================================

const scrollToBooking = () => {
  const el = document.getElementById("booking")

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
    })
  }
}

// ========================================
// Badge Data
// ========================================

const badges = [
  {
    icon: Zap,
    text: "Respons < 15 Menit",
  },
  {
    icon: Users,
    text: "500+ Pelanggan Puas",
  },
  {
    icon: ShieldCheck,
    text: "Bergaransi",
  },
]

// ========================================
// Intersection Observer
// ========================================
// Dipakai buat trigger animasi pas section
// muncul di layar.
//
// Analoginya:
// kayak sensor lampu otomatis.
//
// Resources:
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// ========================================

onMounted(() => {
  if (!sectionRef.value) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        pelanggan.start()
        jam.start()
        kota.start()

        observer.disconnect()
      }
    },
    {
      threshold: 0.3,
    }
  )

  observer.observe(sectionRef.value)
})
</script>

<template>
  <section
    id="hero"
    ref="sectionRef"
    class="relative min-h-screen flex flex-col"
    :style="{
      background:
        'linear-gradient(135deg, rgb(11, 77, 163) 0%, #0b0f1a 100%)',
    }"
  >
    <!-- Dot Pattern -->
    <div
      class="absolute inset-0 pointer-events-none"
      :style="{
        backgroundImage:
          'radial-gradient(circle, rgba(251, 245, 245, 0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }"
    />

    <div
      class="relative flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28 pb-8 flex flex-col"
    >
      <div
        class="flex flex-col lg:flex-row items-center gap-12 flex-1"
      >
        <!-- LEFT CONTENT -->
        <div
          class="flex-1 flex flex-col gap-6 text-center lg:text-left"
        >
          <!-- BADGES -->
          <div
            class="flex flex-wrap justify-center lg:justify-start gap-2"
          >
            <div
              v-for="badge in badges"
              :key="badge.text"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-inter font-medium"
              :style="{
                fontFamily: `'Inter', sans-serif`,
                fontWeight: 500,
                fontSize: '0.78rem',
                backgroundColor: 'rgba(245,158,11,0.15)',
                color: '#FCD34D',
                border: '1px solid rgba(245,158,11,0.3)',
              }"
            >
              <component
                :is="badge.icon"
                :size="14"
                style="color: #F59E0B"
              />

              {{ badge.text }}
            </div>
          </div>

          <!-- HEADLINE -->
          <h1
            class="font-jakarta font-extrabold tracking-tight"
            :style="{
              fontFamily: `'Plus Jakarta Sans', sans-serif`,
              fontWeight: 800,
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              color: 'white',
              lineHeight: 1.15,
            }"
          >
            Jasa Sedot WC
            <span style="color: #F59E0B">
              Profesional
            </span>
          </h1>

          <!-- SUBHEADLINE -->
          <p
            class="font-inter"
            :style="{
              fontFamily: `'Inter', sans-serif`,
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: '#94A3B8',
              lineHeight: 1.7,
              maxWidth: '520px',
            }"
          >
            Melayani Seluruh Jawa Tengah · 24 Jam ·
            Bergaransi
          </p>

          <!-- CTA -->
          <div
            class="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mt-2"
          >
            <button
              @click="scrollToBooking"
              class="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-jakarta font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              :style="{
                fontFamily: `'Plus Jakarta Sans', sans-serif`,
                fontWeight: 700,
                fontSize: '1rem',
                backgroundColor: '#F59E0B',
                color: '#1E293B',
                minHeight: '48px',
                boxShadow:
                  '0 4px 16px rgba(245,158,11,0.4)',
              }"
            >
              Pesan Sekarang
            </button>

            <a
              :href="waLink"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-jakarta font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              :style="{
                fontFamily: `'Plus Jakarta Sans', sans-serif`,
                fontWeight: 700,
                fontSize: '1rem',
                backgroundColor: '#F59E0B',
                color: '#1E293B',
                minHeight: '48px',
                boxShadow:
                  '0 4px 16px rgba(245,158,11,0.4)',
              }"
            >
              <MessageCircle :size="18" />

              Chat WhatsApp
            </a>
          </div>
        </div>

        <!-- RIGHT IMAGE -->
        <div
          class="flex-1 w-full max-w-lg flex items-center justify-center"
        >
          <div
            :style="{
              position: 'relative',
              width: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow:
                '0 24px 64px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)',
              aspectRatio: '4/3',
            }"
          >
            <!-- TOP ACCENT -->
            <div
              :style="{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background:
                  'linear-gradient(90deg, #F59E0B, #FCD34D, transparent)',
                zIndex: 2,
              }"
            />

            <ImageWithFallback
              src="https://images.unsplash.com/photo-1773232806669-24919988ae6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Armada truk sedot WC profesional Salatiga"
              :style="{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }"
            />

            <!-- OVERLAY -->
            <div
              :style="{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background:
                  'linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 100%)',
                zIndex: 1,
              }"
            />

            <!-- BADGE -->
            <div
              :style="{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(245,158,11,0.92)',
                borderRadius: '8px',
                padding: '8px 14px',
                backdropFilter: 'blur(4px)',
              }"
            >
              <ShieldCheck
                :size="16"
                color="#1E293B"
              />

              <span
                :style="{
                  fontFamily:
                    `'Plus Jakarta Sans', sans-serif`,
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  color: '#1E293B',
                }"
              >
                Armada Siap 24 Jam
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- STATS -->
      <div
        class="mt-8 rounded-2xl p-4 flex flex-wrap items-center justify-center gap-0"
        :style="{
          backgroundColor: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(8px)',
        }"
      >
        <!-- Pelanggan -->
        <div class="flex items-center">
          <div class="flex flex-col items-center px-4">
            <span
              class="font-grotesk font-bold"
              :style="{
                fontFamily:
                  `'Space Grotesk', sans-serif`,
                fontWeight: 700,
                fontSize: '1.75rem',
                color: 'white',
              }"
            >
              {{ pelanggan.count }}+
            </span>

            <span
              class="font-inter"
              :style="{
                fontFamily: `'Inter', sans-serif`,
                fontSize: '0.8rem',
                color: '#94A3B8',
                marginTop: '2px',
              }"
            >
              Pelanggan
            </span>
          </div>

          <div
            class="hidden sm:block w-px h-10 mx-2"
            :style="{
              backgroundColor:
                'rgba(255,255,255,0.15)',
            }"
          />
        </div>

        <!-- Jam -->
        <div class="flex items-center">
          <div class="flex flex-col items-center px-4">
            <span
              class="font-grotesk font-bold"
              :style="{
                fontFamily:
                  `'Space Grotesk', sans-serif`,
                fontWeight: 700,
                fontSize: '1.75rem',
                color: 'white',
              }"
            >
              {{ jam.count }} Jam
            </span>

            <span
              class="font-inter"
              :style="{
                fontFamily: `'Inter', sans-serif`,
                fontSize: '0.8rem',
                color: '#94A3B8',
                marginTop: '2px',
              }"
            >
              Jam Layanan
            </span>
          </div>

          <div
            class="hidden sm:block w-px h-10 mx-2"
            :style="{
              backgroundColor:
                'rgba(255,255,255,0.15)',
            }"
          />
        </div>

        <!-- Kota -->
        <div class="flex items-center">
          <div class="flex flex-col items-center px-4">
            <span
              class="font-grotesk font-bold"
              :style="{
                fontFamily:
                  `'Space Grotesk', sans-serif`,
                fontWeight: 700,
                fontSize: '1.75rem',
                color: 'white',
              }"
            >
              {{ kota.count }}+
            </span>

            <span
              class="font-inter"
              :style="{
                fontFamily: `'Inter', sans-serif`,
                fontSize: '0.8rem',
                color: '#94A3B8',
                marginTop: '2px',
              }"
            >
              Kota Dilayani
            </span>
          </div>

          <div
            class="hidden sm:block w-px h-10 mx-2"
            :style="{
              backgroundColor:
                'rgba(255,255,255,0.15)',
            }"
          />
        </div>

        <!-- Garansi -->
        <div class="flex flex-col items-center px-4">
          <ShieldCheck
            :size="28"
            color="#10B981"
          />

          <span
            class="font-inter"
            :style="{
              fontFamily: `'Inter', sans-serif`,
              fontSize: '0.8rem',
              color: '#94A3B8',
              marginTop: '2px',
            }"
          >
            Bergaransi
          </span>
        </div>
      </div>
    </div>

    <!-- WAVE -->
    <div
      class="relative"
      style="margin-bottom: -2px"
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        class="w-full block"
        style="height: 60px"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="white"
        />
      </svg>
    </div>
  </section>
</template>