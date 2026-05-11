<!--
  PaketHargaSection.vue

  React TSX → Vue 3 Composition API
-->

<script setup lang="ts">
import { Check } from 'lucide-vue-next'

import paket from '@/data/paket'

import {
  generatePaketWAMessage
} from '@/lib/utils'
</script>

<template>
  <section
    id="harga"
    style="background-color: #F8FAFC;"
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
          Transparan dan Terjangkau
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
          Pilih Paket Sesuai Kebutuhan
        </h2>
      </div>

      <!-- Cards -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-6"
      >

        <div
          v-for="p in paket"
          :key="p.id"
          class="relative flex flex-col rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1"
          :style="{
            backgroundColor: 'white',

            border: p.isPopular
              ? '2.5px solid #F59E0B'
              : '1.5px solid #E2E8F0',

            boxShadow: p.isPopular
              ? '0 8px 32px rgba(245,158,11,0.18)'
              : '0 2px 12px rgba(0,0,0,0.06)',

            transform: p.isPopular
              ? 'scale(1.02)'
              : 'scale(1)'
          }"
        >

          <!-- Popular Badge -->
          <div
            v-if="p.isPopular"
            class="absolute top-0 left-0 right-0 py-2 text-center font-jakarta font-bold tracking-widest uppercase"
            style="
              font-family: 'Plus Jakarta Sans', sans-serif;
              font-weight: 700;
              font-size: 0.7rem;
              background-color: #F59E0B;
              color: #1E293B;
              letter-spacing: 0.12em;
            "
          >
            TERPOPULER
          </div>

          <div
            :class="[
              'flex flex-col gap-5 p-6 flex-1',
              p.isPopular ? 'pt-10' : ''
            ]"
          >

            <!-- Package -->
            <div>

              <h3
                class="font-jakarta font-bold"
                style="
                  font-family: 'Plus Jakarta Sans', sans-serif;
                  font-weight: 700;
                  font-size: 1.25rem;
                  color: #1E293B;
                "
              >
                {{ p.deskripsi }}
              </h3>
            </div>

            <!-- Price -->
            <div>

              

              <div
                class="font-inter mt-1"
                style="
                  font-family: 'Inter', sans-serif;
                  font-size: 0.8rem;
                  color: #94A3B8;
                "
              >
                Kapasitas: {{ p.kapasitas }}
              </div>
            </div>

            <!-- Divider -->
            <div
              class="h-px"
              style="background-color: #E2E8F0;"
            />

            <!-- Features -->
            <ul
              class="flex flex-col gap-3 flex-1"
            >

              <li
                v-for="f in p.fitur"
                :key="f"
                class="flex items-start gap-3"
              >

                <div
                  class="flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5"
                  style="
                    background-color:
                    rgba(16,185,129,0.12);
                  "
                >
                  <Check
                    :size="12"
                    color="#10B981"
                    :stroke-width="2.5"
                  />
                </div>

                <span
                  class="font-inter"
                  style="
                    font-family: 'Inter', sans-serif;
                    font-size: 0.875rem;
                    color: #1E293B;
                    line-height: 1.5;
                  "
                >
                  {{ f }}
                </span>
              </li>
            </ul>

            <!-- CTA -->
            <a
              :href="generatePaketWAMessage(
                p.nama,
              )"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center px-6 py-3 rounded-xl font-jakarta font-bold transition-all duration-200 hover:opacity-90 hover:scale-105 mt-auto"
              :style="{
                fontFamily:
                  `'Plus Jakarta Sans', sans-serif`,

                fontWeight: 700,

                fontSize: '0.95rem',

                backgroundColor: p.isPopular
                  ? '#F59E0B'
                  : '#1E3A5F',

                color: p.isPopular
                  ? '#1E293B'
                  : 'white',

                textDecoration: 'none',

                minHeight: '48px'
              }"
            >
              Pesan Paket Ini
            </a>
          </div>
        </div>
      </div>

      <!-- Disclaimer -->
      <p
        class="font-inter text-center mt-8"
        style="
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          color: #94A3B8;
        "
      >
        * Harga belum termasuk ongkos
        transport jarak jauh lebih dari 30km
      </p>
    </div>
  </section>
</template>