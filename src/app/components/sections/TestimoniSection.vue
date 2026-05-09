<!--
  TestimoniSection.vue

  React TSX → Vue 3 Composition API
-->

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  onUnmounted
} from 'vue'

import {
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin
} from 'lucide-vue-next'

import testimoni from '@/data/testimoni'

const current = ref(0)

const isPaused = ref(false)

const intervalRef = ref<ReturnType<typeof setInterval> | null>(null)

const total = testimoni.length

const perPage = 3

const visibleItems = computed(() => {
  const items = []

  for (let i = 0; i < perPage; i++) {
    items.push(
      testimoni[(current.value + i) % total]
    )
  }

  return items
})

const prev = () => {
  current.value =
    (current.value - 1 + total) % total
}

const next = () => {
  current.value =
    (current.value + 1) % total
}

const startAutoSlide = () => {
  stopAutoSlide()

  if (isPaused.value) return

  intervalRef.value = setInterval(() => {
    next()
  }, 5000)
}

const stopAutoSlide = () => {
  if (intervalRef.value) {
    clearInterval(intervalRef.value)
    intervalRef.value = null
  }
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<template>
  <section
    id="testimoni"
    style="background-color: #F8FAFC;"
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
          Testimoni Pelanggan
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
          Apa Kata Pelanggan Kami
        </h2>

        <div
          class="flex items-center justify-center gap-2 mt-3"
        >

          <div class="flex gap-0.5">
            <Star
              v-for="i in 5"
              :key="i"
              :size="20"
              fill="#F59E0B"
              color="#F59E0B"
            />
          </div>

          <span
            class="font-inter font-medium"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 500;
              font-size: 0.95rem;
              color: #64748B;
            "
          >
            4.9 dari 500+ ulasan
          </span>
        </div>
      </div>

      <!-- Carousel -->
      <div
        @mouseenter="
          isPaused = true;
          stopAutoSlide();
        "
        @mouseleave="
          isPaused = false;
          startAutoSlide();
        "
      >

        <!-- Desktop -->
        <div
          class="hidden md:grid grid-cols-3 gap-5"
        >

          <div
            v-for="(t, i) in visibleItems"
            :key="`${t.id}-${i}`"
            class="flex flex-col gap-4 p-6 rounded-2xl"
            style="
              background-color: white;
              border: 1.5px solid #E2E8F0;
              box-shadow:
              0 2px 8px rgba(0,0,0,0.05);

              height: 280px;
            "
          >

            <!-- Stars -->
            <div class="flex gap-0.5">
              <Star
                v-for="i in 5"
                :key="i"
                :size="16"
                :fill="
                  i <= t.bintang
                    ? '#F59E0B'
                    : 'none'
                "
                :color="
                  i <= t.bintang
                    ? '#F59E0B'
                    : '#E2E8F0'
                "
                :stroke-width="1.5"
              />
            </div>

            <!-- Message -->
            <p
              class="font-inter flex-1 overflow-hidden"
              style="
                font-family: 'Inter', sans-serif;
                font-size: 0.9rem;
                color: #1E293B;
                line-height: 1.7;
                font-style: italic;

                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              "{{ t.pesan }}"
            </p>

            <!-- Footer -->
            <div
              class="flex flex-col gap-1 mt-auto"
            >

              <span
                class="font-jakarta font-bold"
                style="
                  font-family:
                  'Plus Jakarta Sans', sans-serif;

                  font-weight: 700;
                  font-size: 0.9rem;
                  color: #1E293B;
                "
              >
                {{ t.nama }}
              </span>

              <div
                class="flex items-center gap-1"
              >
                <MapPin
                  :size="12"
                  color="#94A3B8"
                />

                <span
                  class="font-inter"
                  style="
                    font-family:
                    'Inter', sans-serif;

                    font-size: 0.78rem;
                    color: #94A3B8;
                  "
                >
                  {{ t.kota }}
                </span>
              </div>

              <span
                class="inline-block mt-1 px-2 py-0.5 rounded-full font-inter font-medium"
                style="
                  font-family: 'Inter', sans-serif;
                  font-size: 0.7rem;
                  font-weight: 600;

                  background-color:
                  rgba(30,58,95,0.08);

                  color: #1E3A5F;

                  align-self: flex-start;
                "
              >
                {{ t.paket }}
              </span>
            </div>
          </div>
        </div>

        <!-- Mobile -->
        <div class="md:hidden">

          <div
            class="flex flex-col gap-4 p-6 rounded-2xl"
            style="
              background-color: white;
              border: 1.5px solid #E2E8F0;

              box-shadow:
              0 2px 8px rgba(0,0,0,0.05);

              min-height: 260px;
            "
          >

            <!-- Stars -->
            <div class="flex gap-0.5">
              <Star
                v-for="i in 5"
                :key="i"
                :size="16"
                :fill="
                  i <= testimoni[current].bintang
                    ? '#F59E0B'
                    : 'none'
                "
                :color="
                  i <= testimoni[current].bintang
                    ? '#F59E0B'
                    : '#E2E8F0'
                "
                :stroke-width="1.5"
              />
            </div>

            <!-- Message -->
            <p
              class="font-inter flex-1"
              style="
                font-family: 'Inter', sans-serif;
                font-size: 0.9rem;
                color: #1E293B;
                line-height: 1.7;
                font-style: italic;
              "
            >
              "{{ testimoni[current].pesan }}"
            </p>

            <!-- Footer -->
            <div
              class="flex flex-col gap-1 mt-auto"
            >

              <span
                class="font-jakarta font-bold"
                style="
                  font-family:
                  'Plus Jakarta Sans', sans-serif;

                  font-weight: 700;
                  font-size: 0.9rem;
                  color: #1E293B;
                "
              >
                {{ testimoni[current].nama }}
              </span>

              <div
                class="flex items-center gap-1"
              >
                <MapPin
                  :size="12"
                  color="#94A3B8"
                />

                <span
                  class="font-inter"
                  style="
                    font-family:
                    'Inter', sans-serif;

                    font-size: 0.78rem;
                    color: #94A3B8;
                  "
                >
                  {{ testimoni[current].kota }}
                </span>
              </div>

              <span
                class="inline-block mt-1 px-2 py-0.5 rounded-full font-inter font-medium"
                style="
                  font-family: 'Inter', sans-serif;
                  font-size: 0.7rem;
                  font-weight: 600;

                  background-color:
                  rgba(30,58,95,0.08);

                  color: #1E3A5F;

                  align-self: flex-start;
                "
              >
                {{ testimoni[current].paket }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div
        class="flex items-center justify-center gap-4 mt-8"
      >

        <!-- Prev -->
        <button
          @click="prev"
          class="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200 hover:scale-110"
          style="
            background-color: white;

            border: 1.5px solid #E2E8F0;

            color: #1E3A5F;

            box-shadow:
            0 2px 6px rgba(0,0,0,0.06);
          "
          aria-label="Sebelumnya"
        >
          <ChevronLeft :size="20" />
        </button>

        <!-- Dots -->
        <div class="flex gap-1.5">

          <button
            v-for="(_, i) in testimoni"
            :key="i"
            @click="current = i"
            class="rounded-full transition-all duration-200"
            :style="{
              width:
                i === current
                  ? '20px'
                  : '8px',

              height: '8px',

              backgroundColor:
                i === current
                  ? '#F59E0B'
                  : '#E2E8F0',

              border: 'none',

              cursor: 'pointer'
            }"
            :aria-label="`Go to slide ${i + 1}`"
          />
        </div>

        <!-- Next -->
        <button
          @click="next"
          class="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200 hover:scale-110"
          style="
            background-color: white;

            border: 1.5px solid #E2E8F0;

            color: #1E3A5F;

            box-shadow:
            0 2px 6px rgba(0,0,0,0.06);
          "
          aria-label="Berikutnya"
        >
          <ChevronRight :size="20" />
        </button>
      </div>
    </div>
  </section>
</template>