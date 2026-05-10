<!--
  BookingFormSection.vue
  React TSX → Vue 3 Composition API
-->

<script setup lang="ts">
import { reactive } from 'vue'
import { AlertCircle, Shield } from 'lucide-vue-next'
import wilayah from '@/data/wilayah'
import { generateWAMessage } from '@/lib/utils'

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

const form = reactive<FormState>({
  nama: '', whatsapp: '', alamat: '', kota: '',
  layanan: '', paket: '', tanggal: '', jam: '', catatan: ''
})

const errors = reactive<FormErrors>({})

const todayStr = new Date().toISOString().split('T')[0]

const getLabel = (name: string) => {
  const labels: Record<string, string> = {
    nama: 'Nama lengkap', whatsapp: 'Nomor WhatsApp',
    alamat: 'Alamat lengkap', kota: 'Kota/Kabupaten',
    layanan: 'Jenis layanan', paket: 'Paket',
    tanggal: 'Tanggal preferensi', jam: 'Jam preferensi'
  }
  return labels[name] || name
}

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  const { name, value } = target
  form[name as keyof FormState] = value
  if (errors[name as keyof FormErrors]) {
    errors[name as keyof FormErrors] = undefined
  }
}

const validate = (): boolean => {
  const newErrors: FormErrors = {}
  if (!form.nama.trim()) newErrors.nama = 'Nama lengkap wajib diisi'
  if (!form.whatsapp.trim()) newErrors.whatsapp = 'Nomor WhatsApp wajib diisi'
  if (!form.alamat.trim()) newErrors.alamat = 'Alamat lengkap wajib diisi'
  if (!form.kota) newErrors.kota = 'Kota/Kabupaten wajib dipilih'
  if (!form.layanan) newErrors.layanan = 'Jenis layanan wajib dipilih'
  if (!form.paket) newErrors.paket = 'Paket wajib dipilih'
  if (!form.tanggal) newErrors.tanggal = 'Tanggal preferensi wajib dipilih'
  if (!form.jam) newErrors.jam = 'Jam preferensi wajib dipilih'
  Object.assign(errors, newErrors)
  return Object.keys(newErrors).length === 0
}

const handleBlur = (e: Event) => {
  const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  const { name, value } = target
  if (!value.trim() && name !== 'catatan') {
    errors[name as keyof FormErrors] = `${getLabel(name)} wajib diisi`
  }
}

const handleSubmit = (e: Event) => {
  e.preventDefault()
  if (!validate()) return
  window.open(generateWAMessage(form), '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <section id="booking" style="background-color: #F8FAFC;">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

      <!-- Heading -->
      <div class="text-center mb-10">
        <span class="section-label">Pesan Layanan</span>
        <h2 class="section-title">Pesan Layanan Sekarang</h2>
      </div>

      <!-- Form Card -->
      <div class="form-card">
        <form @submit="handleSubmit" novalidate class="flex flex-col gap-5">

          <!-- Nama -->
          <div>
            <label for="nama" class="field-label">
              Nama Lengkap <span class="required">*</span>
            </label>
            <input
              id="nama" name="nama" type="text"
              :value="form.nama" @input="handleChange" @blur="handleBlur"
              placeholder="Masukkan nama lengkap Anda"
              :class="['field-input', { 'field-input--error': errors.nama }]"
            >
            <div v-if="errors.nama" class="field-error">
              <AlertCircle :size="13" color="#EF4444" />
              <span>{{ errors.nama }}</span>
            </div>
          </div>

          <!-- WhatsApp -->
          <div>
            <label for="whatsapp" class="field-label">
              Nomor WhatsApp <span class="required">*</span>
            </label>
            <input
              id="whatsapp" name="whatsapp" type="tel"
              :value="form.whatsapp" @input="handleChange" @blur="handleBlur"
              placeholder="Contoh: 0812-3456-7890"
              :class="['field-input', { 'field-input--error': errors.whatsapp }]"
            >
            <div v-if="errors.whatsapp" class="field-error">
              <AlertCircle :size="13" color="#EF4444" />
              <span>{{ errors.whatsapp }}</span>
            </div>
          </div>

          <!-- Alamat -->
          <div>
            <label for="alamat" class="field-label">
              Alamat Lengkap <span class="required">*</span>
            </label>
            <textarea
              id="alamat" name="alamat" rows="3"
              :value="form.alamat" @input="handleChange" @blur="handleBlur"
              placeholder="Masukkan alamat lengkap beserta nama jalan"
              :class="['field-input', 'field-textarea', { 'field-input--error': errors.alamat }]"
            />
            <div v-if="errors.alamat" class="field-error">
              <AlertCircle :size="13" color="#EF4444" />
              <span>{{ errors.alamat }}</span>
            </div>
          </div>

          <!-- Kota + Layanan -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label for="kota" class="field-label">
                Kota/Kabupaten <span class="required">*</span>
              </label>
              <select
                id="kota" name="kota" :value="form.kota"
                @change="handleChange" @blur="handleBlur"
                :class="['field-input', { 'field-input--error': errors.kota }]"
              >
                <option value="">Pilih kota/kabupaten</option>
                <option v-for="k in wilayah" :key="k" :value="k">{{ k }}</option>
                <option value="Lainnya">Lainnya</option>
              </select>
              <div v-if="errors.kota" class="field-error">
                <AlertCircle :size="13" color="#EF4444" />
                <span>{{ errors.kota }}</span>
              </div>
            </div>

            <div>
              <label for="layanan" class="field-label">
                Jenis Layanan <span class="required">*</span>
              </label>
              <select
                id="layanan" name="layanan" :value="form.layanan"
                @change="handleChange" @blur="handleBlur"
                :class="['field-input', { 'field-input--error': errors.layanan }]"
              >
                <option value="">Pilih jenis layanan</option>
                <option value="Sedot Septic Tank">Sedot Septic Tank</option>
                <option value="Sedot WC Mampet">Sedot WC Mampet</option>
                <option value="Sedot Limbah Industri">Sedot Limbah Industri</option>
                <option value="Sedot Berkala / Kontrak">Sedot Berkala / Kontrak</option>
              </select>
              <div v-if="errors.layanan" class="field-error">
                <AlertCircle :size="13" color="#EF4444" />
                <span>{{ errors.layanan }}</span>
              </div>
            </div>
          </div>

          <!-- Paket + Tanggal -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label for="paket" class="field-label">
                Paket <span class="required">*</span>
              </label>
              <select
                id="paket" name="paket" :value="form.paket"
                @change="handleChange" @blur="handleBlur"
                :class="['field-input', { 'field-input--error': errors.paket }]"
              >
                <option value="">Pilih paket</option>
                <option value="Paket Rumahan">Paket Rumahan</option>
                <option value="Paket Komersial">Paket Komersial</option>
                <option value="Paket Industri">Paket Industri</option>
              </select>
              <div v-if="errors.paket" class="field-error">
                <AlertCircle :size="13" color="#EF4444" />
                <span>{{ errors.paket }}</span>
              </div>
            </div>

            <div>
              <label for="tanggal" class="field-label">
                Tanggal Preferensi <span class="required">*</span>
              </label>
              <input
                id="tanggal" name="tanggal" type="date"
                :value="form.tanggal" @input="handleChange" @blur="handleBlur"
                :min="todayStr"
                :class="['field-input', { 'field-input--error': errors.tanggal }]"
              >
              <div v-if="errors.tanggal" class="field-error">
                <AlertCircle :size="13" color="#EF4444" />
                <span>{{ errors.tanggal }}</span>
              </div>
            </div>
          </div>

          <!-- Jam -->
          <div>
            <label for="jam" class="field-label">
              Jam Preferensi <span class="required">*</span>
            </label>
            <select
              id="jam" name="jam" :value="form.jam"
              @change="handleChange" @blur="handleBlur"
              :class="['field-input', { 'field-input--error': errors.jam }]"
            >
              <option value="">Pilih jam preferensi</option>
              <option value="Pagi 08.00-12.00">Pagi 08.00-12.00</option>
              <option value="Siang 12.00-17.00">Siang 12.00-17.00</option>
              <option value="Malam 17.00-21.00">Malam 17.00-21.00</option>
              <option value="Darurat atau Fleksibel">Darurat atau Fleksibel</option>
            </select>
            <div v-if="errors.jam" class="field-error">
              <AlertCircle :size="13" color="#EF4444" />
              <span>{{ errors.jam }}</span>
            </div>
          </div>

          <!-- Catatan -->
          <div>
            <label for="catatan" class="field-label">Catatan Tambahan</label>
            <textarea
              id="catatan" name="catatan" rows="3"
              :value="form.catatan" @input="handleChange"
              placeholder="Opsional: kondisi septic tank, lokasi khusus, atau informasi tambahan"
              class="field-input field-textarea"
            />
          </div>

          <!-- Submit -->
          <button type="submit" class="submit-btn mt-2">
            Kirim via WhatsApp
          </button>

          <!-- Disclaimer -->
          <div class="flex items-center justify-center gap-2 mt-1">
            <Shield :size="14" color="#94A3B8" />
            <p class="disclaimer">Data Anda aman. Kami tidak menyimpan informasi pribadi.</p>
          </div>

        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-label {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  color: #F59E0B;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 12px;
}

.section-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  color: #1E293B;
}

.form-card {
  background-color: white;
  border: 1.5px solid #E2E8F0;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  border-radius: 1rem;
  padding: 1.5rem;
}

@media (min-width: 640px) {
  .form-card { padding: 2rem; }
}

.field-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1E293B;
  display: block;
  margin-bottom: 6px;
}

.required { color: #EF4444; }

.field-input {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #1E293B;
  background-color: white;
  border: 1.5px solid #E2E8F0;
  border-radius: 10px;
  padding: 10px 14px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  min-height: 44px;
  box-sizing: border-box;
  display: block;
}

.field-input:focus {
  border-color: #1E3A5F;
}

.field-input--error {
  border-color: #EF4444;
}

.field-textarea {
  resize: vertical;
  min-height: 88px;
}

.field-error {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  color: #EF4444;
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 1rem;
  border-radius: 0.75rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  background-color: #25D366;
  color: white;
  border: none;
  cursor: pointer;
  min-height: 52px;
  box-shadow: 0 4px 16px rgba(37,211,102,0.3);
  transition: all 0.2s ease;
}

.submit-btn:hover {
  opacity: 0.9;
  transform: scale(1.01);
}

.disclaimer {
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  color: #94A3B8;
  text-align: center;
}
</style>