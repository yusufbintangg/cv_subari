<!--
  BookingFormSection.vue

  React TSX → Vue 3 Composition API
-->

<script setup lang="ts">
import { reactive } from 'vue'

import {
  AlertCircle,
  Shield
} from 'lucide-vue-next'

import wilayah from '@/data/wilayah'

import {
  generateWAMessage
} from '@/lib/utils'

interface FormState {
  nama: string
  whatsapp: string
  alamat: string
  kota: string
  layanan: string
  paket: string
  tanggal: string
  jam: string
  catatan: string
}

interface FormErrors {
  nama?: string
  whatsapp?: string
  alamat?: string
  kota?: string
  layanan?: string
  paket?: string
  tanggal?: string
  jam?: string
}

const initialForm: FormState = {
  nama: '',
  whatsapp: '',
  alamat: '',
  kota: '',
  layanan: '',
  paket: '',
  tanggal: '',
  jam: '',
  catatan: ''
}

const form = reactive<FormState>({
  ...initialForm
})

const errors = reactive<FormErrors>({})

const inputStyle = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.9rem',
  color: '#1E293B',
  backgroundColor: 'white',
  border: '1.5px solid #E2E8F0',
  borderRadius: '10px',
  padding: '10px 14px',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  minHeight: '44px',
  boxSizing: 'border-box'
}

const inputErrorStyle = {
  ...inputStyle,
  borderColor: '#EF4444'
}

const labelStyle = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#1E293B',
  display: 'block',
  marginBottom: '6px'
}

const todayStr =
  new Date()
    .toISOString()
    .split('T')[0]

const getLabel = (name: string) => {
  const labels: Record<string, string> = {
    nama: 'Nama lengkap',
    whatsapp: 'Nomor WhatsApp',
    alamat: 'Alamat lengkap',
    kota: 'Kota/Kabupaten',
    layanan: 'Jenis layanan',
    paket: 'Paket',
    tanggal: 'Tanggal preferensi',
    jam: 'Jam preferensi'
  }

  return labels[name] || name
}

const handleChange = (
  e: Event
) => {
  const target =
    e.target as
    HTMLInputElement |
    HTMLTextAreaElement |
    HTMLSelectElement

  const { name, value } = target

  form[name as keyof FormState] = value

  if (
    errors[name as keyof FormErrors]
  ) {
    errors[name as keyof FormErrors] =
      undefined
  }
}

const validate = (): boolean => {
  const newErrors: FormErrors = {}

  if (!form.nama.trim()) {
    newErrors.nama =
      'Nama lengkap wajib diisi'
  }

  if (!form.whatsapp.trim()) {
    newErrors.whatsapp =
      'Nomor WhatsApp wajib diisi'
  }

  if (!form.alamat.trim()) {
    newErrors.alamat =
      'Alamat lengkap wajib diisi'
  }

  if (!form.kota) {
    newErrors.kota =
      'Kota/Kabupaten wajib dipilih'
  }

  if (!form.layanan) {
    newErrors.layanan =
      'Jenis layanan wajib dipilih'
  }

  if (!form.paket) {
    newErrors.paket =
      'Paket wajib dipilih'
  }

  if (!form.tanggal) {
    newErrors.tanggal =
      'Tanggal preferensi wajib dipilih'
  }

  if (!form.jam) {
    newErrors.jam =
      'Jam preferensi wajib dipilih'
  }

  Object.assign(errors, newErrors)

  return (
    Object.keys(newErrors).length === 0
  )
}

const handleBlur = (
  e: Event
) => {
  const target =
    e.target as
    HTMLInputElement |
    HTMLTextAreaElement |
    HTMLSelectElement

  const { name, value } = target

  if (
    !value.trim() &&
    name !== 'catatan'
  ) {
    errors[
      name as keyof FormErrors
    ] = `${getLabel(name)} wajib diisi`
  }
}

const handleSubmit = (
  e: Event
) => {
  e.preventDefault()

  if (!validate()) return

  const url =
    generateWAMessage(form)

  window.open(
    url,
    '_blank',
    'noopener,noreferrer'
  )
}
</script>

<template>
  <section
    id="booking"
    style="background-color: #F8FAFC;"
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
          Pesan Layanan
        </span>

        <h2
          class="font-jakarta font-bold tracking-tight"
          style="
            font-family:
            'Plus Jakarta Sans', sans-serif;

            font-weight: 700;

            font-size:
            clamp(1.75rem, 3vw, 2.5rem);

            color: #1E293B;
          "
        >
          Pesan Layanan Sekarang
        </h2>
      </div>

      <!-- Form Card -->
      <div
        class="rounded-2xl p-6 sm:p-8"
        style="
          background-color: white;

          border: 1.5px solid #E2E8F0;

          box-shadow:
          0 4px 24px rgba(0,0,0,0.07);
        "
      >

        <form
          @submit="handleSubmit"
          novalidate
          class="flex flex-col gap-5"
        >

          <!-- Nama -->
          <div>
            <label
              for="nama"
              :style="labelStyle"
            >
              Nama Lengkap
              <span style="color:#EF4444;">
                *
              </span>
            </label>

            <input
              id="nama"
              name="nama"
              type="text"
              :value="form.nama"
              @input="handleChange"
              @blur="handleBlur"
              placeholder="Masukkan nama lengkap Anda"
              :style="
                errors.nama
                  ? inputErrorStyle
                  : inputStyle
              "
            >

            <div
              v-if="errors.nama"
              class="flex items-center gap-1.5 mt-1.5"
            >
              <AlertCircle
                :size="13"
                color="#EF4444"
              />

              <span
                style="
                  font-family: 'Inter', sans-serif;
                  font-size: 0.78rem;
                  color: #EF4444;
                "
              >
                {{ errors.nama }}
              </span>
            </div>
          </div>

          <!-- WhatsApp -->
          <div>
            <label
              for="whatsapp"
              :style="labelStyle"
            >
              Nomor WhatsApp
              <span style="color:#EF4444;">
                *
              </span>
            </label>

            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              :value="form.whatsapp"
              @input="handleChange"
              @blur="handleBlur"
              placeholder="Contoh: 0812-3456-7890"
              :style="
                errors.whatsapp
                  ? inputErrorStyle
                  : inputStyle
              "
            >

            <div
              v-if="errors.whatsapp"
              class="flex items-center gap-1.5 mt-1.5"
            >
              <AlertCircle
                :size="13"
                color="#EF4444"
              />

              <span
                style="
                  font-family: 'Inter', sans-serif;
                  font-size: 0.78rem;
                  color: #EF4444;
                "
              >
                {{ errors.whatsapp }}
              </span>
            </div>
          </div>

          <!-- Alamat -->
          <div>
            <label
              for="alamat"
              :style="labelStyle"
            >
              Alamat Lengkap
              <span style="color:#EF4444;">
                *
              </span>
            </label>

            <textarea
              id="alamat"
              name="alamat"
              rows="3"
              :value="form.alamat"
              @input="handleChange"
              @blur="handleBlur"
              placeholder="Masukkan alamat lengkap beserta nama jalan"
              :style="{
                ...(errors.alamat
                  ? inputErrorStyle
                  : inputStyle),

                resize: 'vertical',
                minHeight: '88px'
              }"
            />

            <div
              v-if="errors.alamat"
              class="flex items-center gap-1.5 mt-1.5"
            >
              <AlertCircle
                :size="13"
                color="#EF4444"
              />

              <span
                style="
                  font-family: 'Inter', sans-serif;
                  font-size: 0.78rem;
                  color: #EF4444;
                "
              >
                {{ errors.alamat }}
              </span>
            </div>
          </div>

          <!-- Kota + Layanan -->
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >

            <!-- Kota -->
            <div>
              <label
                for="kota"
                :style="labelStyle"
              >
                Kota/Kabupaten
                <span style="color:#EF4444;">
                  *
                </span>
              </label>

              <select
                id="kota"
                name="kota"
                :value="form.kota"
                @change="handleChange"
                @blur="handleBlur"
                :style="
                  errors.kota
                    ? inputErrorStyle
                    : inputStyle
                "
              >
                <option value="">
                  Pilih kota/kabupaten
                </option>

                <option
                  v-for="k in wilayah"
                  :key="k"
                  :value="k"
                >
                  {{ k }}
                </option>

                <option value="Lainnya">
                  Lainnya
                </option>
              </select>
            </div>

            <!-- Layanan -->
            <div>
              <label
                for="layanan"
                :style="labelStyle"
              >
                Jenis Layanan
                <span style="color:#EF4444;">
                  *
                </span>
              </label>

              <select
                id="layanan"
                name="layanan"
                :value="form.layanan"
                @change="handleChange"
                @blur="handleBlur"
                :style="
                  errors.layanan
                    ? inputErrorStyle
                    : inputStyle
                "
              >
                <option value="">
                  Pilih jenis layanan
                </option>

                <option value="Sedot Septic Tank">
                  Sedot Septic Tank
                </option>

                <option value="Sedot WC Mampet">
                  Sedot WC Mampet
                </option>

                <option value="Sedot Limbah Industri">
                  Sedot Limbah Industri
                </option>

                <option value="Sedot Berkala / Kontrak">
                  Sedot Berkala / Kontrak
                </option>
              </select>
            </div>
          </div>

          <!-- Paket + Tanggal -->
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >

            <!-- Paket -->
            <div>
              <label
                for="paket"
                :style="labelStyle"
              >
                Paket
                <span style="color:#EF4444;">
                  *
                </span>
              </label>

              <select
                id="paket"
                name="paket"
                :value="form.paket"
                @change="handleChange"
                @blur="handleBlur"
                :style="
                  errors.paket
                    ? inputErrorStyle
                    : inputStyle
                "
              >
                <option value="">
                  Pilih paket
                </option>

                <option value="Paket Rumahan">
                  Paket Rumahan
                </option>

                <option value="Paket Komersial">
                  Paket Komersial
                </option>

                <option value="Paket Industri">
                  Paket Industri
                </option>
              </select>
            </div>

            <!-- Tanggal -->
            <div>
              <label
                for="tanggal"
                :style="labelStyle"
              >
                Tanggal Preferensi
                <span style="color:#EF4444;">
                  *
                </span>
              </label>

              <input
                id="tanggal"
                name="tanggal"
                type="date"
                :value="form.tanggal"
                @input="handleChange"
                @blur="handleBlur"
                :min="todayStr"
                :style="
                  errors.tanggal
                    ? inputErrorStyle
                    : inputStyle
                "
              >
            </div>
          </div>

          <!-- Jam -->
          <div>
            <label
              for="jam"
              :style="labelStyle"
            >
              Jam Preferensi
              <span style="color:#EF4444;">
                *
              </span>
            </label>

            <select
              id="jam"
              name="jam"
              :value="form.jam"
              @change="handleChange"
              @blur="handleBlur"
              :style="
                errors.jam
                  ? inputErrorStyle
                  : inputStyle
              "
            >
              <option value="">
                Pilih jam preferensi
              </option>

              <option value="Pagi 08.00-12.00">
                Pagi 08.00-12.00
              </option>

              <option value="Siang 12.00-17.00">
                Siang 12.00-17.00
              </option>

              <option value="Malam 17.00-21.00">
                Malam 17.00-21.00
              </option>

              <option value="Darurat atau Fleksibel">
                Darurat atau Fleksibel
              </option>
            </select>
          </div>

          <!-- Catatan -->
          <div>
            <label
              for="catatan"
              :style="labelStyle"
            >
              Catatan Tambahan
            </label>

            <textarea
              id="catatan"
              name="catatan"
              rows="3"
              :value="form.catatan"
              @input="handleChange"
              placeholder="Opsional: kondisi septic tank, lokasi khusus, atau informasi tambahan"
              :style="{
                ...inputStyle,
                resize: 'vertical',
                minHeight: '80px'
              }"
            />
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-jakarta font-bold transition-all duration-200 hover:opacity-90 hover:scale-[1.01] mt-2"
            style="
              font-family:
              'Plus Jakarta Sans', sans-serif;

              font-weight: 700;
              font-size: 1.05rem;

              background-color: #25D366;
              color: white;

              border: none;
              cursor: pointer;

              min-height: 52px;

              box-shadow:
              0 4px 16px rgba(37,211,102,0.3);
            "
          >
            Kirim via WhatsApp
          </button>

          <!-- Disclaimer -->
          <div
            class="flex items-center justify-center gap-2 mt-1"
          >
            <Shield
              :size="14"
              color="#94A3B8"
            />

            <p
              class="font-inter text-center"
              style="
                font-family: 'Inter', sans-serif;
                font-size: 0.78rem;
                color: #94A3B8;
              "
            >
              Data Anda aman. Kami tidak menyimpan informasi pribadi.
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>