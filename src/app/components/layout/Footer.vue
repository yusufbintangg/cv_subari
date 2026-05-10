<script setup lang="ts">
import { Truck, MapPin, Phone, Clock } from "lucide-vue-next"
import { SITE_CONFIG, WHATSAPP_NUMBER } from "../../../lib/config"

const quickLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Paket & Harga", href: "#harga" },
  { label: "Wilayah Layanan", href: "#wilayah" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
  { label: "Pesan Sekarang", href: "#booking" },
]

const services = [
  "Sedot Septic Tank",
  "Sedot WC Mampet",
  "Sedot Limbah Industri",
  "Sedot Berkala / Kontrak",
]

const handleNavClick = (href: string) => {
  const id = href.replace("#", "")
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}
</script>

<template>
  <footer style="background-color: #0f172a">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Left: Brand -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <div
              class="flex items-center justify-center w-10 h-10 rounded-lg"
              style="background-color: #1e3a5f"
            >
              <Truck :size="22" color="white" />
            </div>
            <div class="flex flex-col leading-none">
              <span
                style="
                  font-family: 'Plus Jakarta Sans', sans-serif;
                  font-weight: 700;
                  font-size: 1rem;
                  color: white;
                "
              >
                {{ SITE_CONFIG.name.toUpperCase() }}
              </span>
              <span
                style="
                  font-size: 0.7rem;
                  color: #94a3b8;
                  font-family: 'Inter', sans-serif;
                "
              >
                {{ SITE_CONFIG.tagline }}
              </span>
            </div>
          </div>
          <p
            style="
              font-family: 'Inter', sans-serif;
              font-size: 0.875rem;
              color: #94a3b8;
              line-height: 1.7;
            "
          >
            Jasa sedot WC dan septic tank profesional yang melayani seluruh
            Jawa Tengah. Cepat, bersih, dan bergaransi.
          </p>
          <div class="flex items-start gap-2 mt-1">
            <MapPin :size="16" color="#F59E0B" class="mt-0.5 shrink-0" />
            <span
              style="
                font-family: 'Inter', sans-serif;
                font-size: 0.8rem;
                color: #94a3b8;
                line-height: 1.6;
              "
            >
              {{ SITE_CONFIG.alamat }}
            </span>
          </div>
        </div>

        <!-- Center: Links -->
        <div class="flex flex-col gap-4">
          <h4
            style="
              font-family: 'Plus Jakarta Sans', sans-serif;
              font-weight: 700;
              font-size: 0.95rem;
              color: white;
            "
          >
            Navigasi Cepat
          </h4>
          <ul class="flex flex-col gap-2">
            <li v-for="link in quickLinks" :key="link.href">
              <a
                :href="link.href"
                @click.prevent="handleNavClick(link.href)"
                class="transition-colors duration-200 hover:text-yellow-400"
                style="
                  font-family: 'Inter', sans-serif;
                  font-size: 0.875rem;
                  color: #94a3b8;
                  text-decoration: none;
                "
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
          <h4
            class="mt-2"
            style="
              font-family: 'Plus Jakarta Sans', sans-serif;
              font-weight: 700;
              font-size: 0.95rem;
              color: white;
            "
          >
            Layanan Kami
          </h4>
          <ul class="flex flex-col gap-2">
            <li
              v-for="s in services"
              :key="s"
              style="
                font-family: 'Inter', sans-serif;
                font-size: 0.875rem;
                color: #94a3b8;
              "
            >
              {{ s }}
            </li>
          </ul>
        </div>

        <!-- Right: Contact Info -->
        <div class="flex flex-col gap-4">
          <h4
            style="
              font-family: 'Plus Jakarta Sans', sans-serif;
              font-weight: 700;
              font-size: 0.95rem;
              color: white;
            "
          >
            Hubungi Kami
          </h4>
          <div class="flex flex-col gap-4">
            <!-- WhatsApp -->
            <div class="flex items-center gap-3">
              <div
                class="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                style="background-color: #25d366"
              >
                <Phone :size="16" color="white" />
              </div>
              <div>
                <div
                  style="
                    font-size: 0.75rem;
                    color: #64748b;
                    font-family: 'Inter', sans-serif;
                  "
                >
                  WhatsApp / Telepon
                </div>
                <a
                  :href="`https://wa.me/${WHATSAPP_NUMBER}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="transition-colors hover:text-yellow-400"
                  style="
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 700;
                    font-size: 1.05rem;
                    color: white;
                    text-decoration: none;
                  "
                >
                  0858-0275-3321
                </a>
              </div>
            </div>

            <!-- Jam Operasional -->
            <div class="flex items-center gap-3">
              <div
                class="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                style="background-color: #1e3a5f"
              >
                <Clock :size="16" color="white" />
              </div>
              <div>
                <div
                  style="
                    font-size: 0.75rem;
                    color: #64748b;
                    font-family: 'Inter', sans-serif;
                  "
                >
                  Jam Operasional
                </div>
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 600;
                    font-size: 0.9rem;
                    color: white;
                  "
                >
                  {{ SITE_CONFIG.operasional }}
                </span>
              </div>
            </div>

            <!-- Area Layanan -->
            <div class="flex items-center gap-3">
              <div
                class="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                style="background-color: #2d5282"
              >
                <MapPin :size="16" color="white" />
              </div>
              <div>
                <div
                  style="
                    font-size: 0.75rem;
                    color: #64748b;
                    font-family: 'Inter', sans-serif;
                  "
                >
                  Area Layanan
                </div>
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 600;
                    font-size: 0.9rem;
                    color: white;
                  "
                >
                  Seluruh Jawa Tengah
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
        style="border-top: 1px solid #1e293b"
      >
        <p
          style="
            font-family: 'Inter', sans-serif;
            font-size: 0.8rem;
            color: #64748b;
          "
        >
          &copy; {{ new Date().getFullYear() }} {{ SITE_CONFIG.name }}. Semua hak dilindungi.
        </p>
        <p
          style="
            font-family: 'Inter', sans-serif;
            font-size: 0.8rem;
            color: #64748b;
          "
        >
          Melayani Jawa Tengah dengan sepenuh hati
        </p>
      </div>
    </div>
  </footer>
</template>