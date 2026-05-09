<!--
  FaqSection.vue

  Converted from:
  React TSX → Vue 3 Composition API

  Stack:
  - Vue 3
  - TypeScript
  - Tailwind CSS v4
  - lucide-vue-next

  Features:
  - Accordion FAQ
  - Smooth expand/collapse animation
  - WhatsApp CTA
  - Responsive layout

  Resources:
  https://vuejs.org/guide/essentials/reactivity-fundamentals.html
  https://vuejs.org/guide/essentials/list.html
  https://lucide.dev/guide/packages/lucide-vue-next
-->

<script setup lang="ts">
/**
 * Import ref
 *
 * ref() digunakan untuk membuat state reactive di Vue.
 * Pengganti useState() di React.
 */
import { ref, computed } from 'vue'

/**
 * Icons
 *
 * Pengganti:
 * lucide-react → lucide-vue-next
 */
import {
  ChevronDown,
  MessageCircle
} from 'lucide-vue-next'

/**
 * Import data FAQ
 *
 * Data source tetap dipisah
 * supaya component bersih dan scalable.
 */
import faq from '@/data/faq'

/**
 * Import config WhatsApp
 */
import { WHATSAPP_NUMBER } from '@/lib/config'

/**
 * openId
 *
 * Menyimpan FAQ yang sedang terbuka.
 *
 * null = semua tertutup
 */
const openId = ref<number | null>(null)

/**
 * waLink
 *
 * computed() dipakai untuk value turunan.
 * Mirip useMemo() di React.
 */
const waLink = computed(() => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Halo, saya punya pertanyaan mengenai layanan sedot WC. Bisa dibantu?'
  )}`
})

/**
 * toggle()
 *
 * Logic buka/tutup accordion.
 */
const toggle = (id: number) => {
  openId.value =
    openId.value === id ? null : id
}
</script>

<template>
  <section
    id="faq"
    style="background-color: white;"
  >
    <div
      class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
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
          FAQ
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
          Pertanyaan yang Sering Ditanyakan
        </h2>
      </div>

      <!-- Accordion -->
      <div class="flex flex-col gap-3">
        
        <div
          v-for="item in faq"
          :key="item.id"
          class="rounded-xl overflow-hidden transition-all duration-200"
          :style="{
            border:
              openId === item.id
                ? '1.5px solid #1E3A5F'
                : '1.5px solid #E2E8F0',

            boxShadow:
              openId === item.id
                ? '0 4px 16px rgba(30,58,95,0.08)'
                : 'none'
          }"
        >

          <!-- Button -->
          <button
            @click="toggle(item.id)"
            class="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200"
            :style="{
              backgroundColor:
                openId === item.id
                  ? 'rgba(30,58,95,0.03)'
                  : 'white',

              border: 'none',
              cursor: 'pointer'
            }"
            :aria-expanded="openId === item.id"
          >

            <!-- Question -->
            <span
              class="font-jakarta font-bold"
              style="
                font-family: 'Plus Jakarta Sans', sans-serif;
                font-weight: 700;
                font-size: 0.95rem;
                color: #1E293B;
              "
            >
              {{ item.pertanyaan }}
            </span>

            <!-- Icon -->
            <span
              class="shrink-0 transition-transform duration-300"
              :style="{
                transform:
                  openId === item.id
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)',

                color: '#1E3A5F'
              }"
            >
              <ChevronDown :size="20" />
            </span>
          </button>

          <!-- Collapsible -->
          <div
            :style="{
              maxHeight:
                openId === item.id
                  ? '300px'
                  : '0',

              overflow: 'hidden',
              transition: 'max-height 0.35s ease'
            }"
          >
            <div
              class="px-5 pb-5"
              :style="{
                backgroundColor:
                  openId === item.id
                    ? 'rgba(30,58,95,0.03)'
                    : 'white'
              }"
            >
              
              <p
                class="font-inter"
                style="
                  font-family: 'Inter', sans-serif;
                  font-size: 0.9rem;
                  color: #64748B;
                  line-height: 1.7;
                "
              >
                {{ item.jawaban }}
              </p>

            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div
        class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
      >

        <p
          class="font-inter"
          style="
            font-family: 'Inter', sans-serif;
            font-size: 0.95rem;
            color: #64748B;
          "
        >
          Masih ada pertanyaan?
        </p>

        <a
          :href="waLink"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-5 py-3 rounded-xl font-jakarta font-bold transition-all duration-200 hover:opacity-90"
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
          Tanya via WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>