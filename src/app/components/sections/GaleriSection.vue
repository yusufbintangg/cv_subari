<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from "vue"
import { MapPin, X, ChevronLeft, ChevronRight } from "lucide-vue-next"
import ImageWithFallback from "../figma/ImageWithFallback.vue"

interface GalleryItem {
  src: string
  judul: string
  lokasi: string
}

const photos: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1773232806669-24919988ae6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    judul: "Sedot WC Rumah Tinggal",
    lokasi: "Salatiga Selatan",
  },
  {
    src: "https://images.unsplash.com/photo-1620301015743-73bcc87c89e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    judul: "Pembersihan Saluran",
    lokasi: "Argomulyo, Salatiga",
  },
  {
    src: "https://images.unsplash.com/photo-1589677735376-d68e32d9918d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    judul: "Pompa Septic Tank",
    lokasi: "Tingkir, Salatiga",
  },
  {
    src: "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    judul: "Perawatan Instalasi",
    lokasi: "Sidomukti, Salatiga",
  },
  {
    src: "https://images.unsplash.com/photo-1737244347989-36286970dd3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    judul: "Pembersihan Pipa",
    lokasi: "Semarang Barat",
  },
  {
    src: "https://images.unsplash.com/photo-1744484347124-ad6ad1b222aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    judul: "Pengerjaan Drainase",
    lokasi: "Ungaran, Semarang",
  },
  {
    src: "https://images.unsplash.com/photo-1759390304428-fbe1752a999e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    judul: "Penggalian Pipa Baru",
    lokasi: "Ambarawa, Semarang",
  },
  {
    src: "https://images.unsplash.com/photo-1774019883172-a89730a86500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    judul: "Mesin Pompa Industri",
    lokasi: "Kendal, Jawa Tengah",
  },
  {
    src: "https://images.unsplash.com/photo-1621905252472-943afaa20e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    judul: "Tim Teknisi Siap Kerja",
    lokasi: "Boyolali, Jawa Tengah",
  },
  {
    src: "https://images.unsplash.com/photo-1763033769948-ef5f827b5755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    judul: "Armada di Lokasi",
    lokasi: "Magelang, Jawa Tengah",
  },
  {
    src: "https://images.unsplash.com/photo-1766497278321-dff63e463f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    judul: "Perbaikan Pipa Bocor",
    lokasi: "Klaten, Jawa Tengah",
  },
  {
    src: "https://images.unsplash.com/photo-1626713748868-58643bf60860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    judul: "Pengolahan Limbah",
    lokasi: "Temanggung, Jawa Tengah",
  },
]

const visible = ref(false)
const lightbox = ref<number | null>(null)
const hoveredIndex = ref<number | null>(null)
const sectionRef = ref<HTMLElement | null>(null)

// Computed untuk akses aman ke foto aktif — tidak null saat dipakai di template
const activePhoto = computed(() =>
  lightbox.value !== null ? photos[lightbox.value] : null
)
const activeIndex = computed(() =>
  lightbox.value !== null ? lightbox.value + 1 : 0
)

// IntersectionObserver — trigger reveal grid on scroll
onMounted(() => {
  if (!sectionRef.value) return
  const obs = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        obs.disconnect()
      }
    },
    { threshold: 0.1 }
  )
  obs.observe(sectionRef.value)
})

// Keyboard navigation untuk lightbox
const handleKeydown = (e: KeyboardEvent) => {
  if (lightbox.value === null) return
  if (e.key === "Escape") lightbox.value = null
  if (e.key === "ArrowLeft") lightbox.value = ((lightbox.value as number) - 1 + photos.length) % photos.length
  if (e.key === "ArrowRight") lightbox.value = ((lightbox.value as number) + 1) % photos.length
}

onMounted(() => window.addEventListener("keydown", handleKeydown))
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown)
  document.body.style.overflow = ""
})

// Scroll lock saat lightbox terbuka
watch(lightbox, (val) => {
  document.body.style.overflow = val !== null ? "hidden" : ""
})

const prevPhoto = () => {
  if (lightbox.value === null) return
  lightbox.value = (lightbox.value - 1 + photos.length) % photos.length
}

const nextPhoto = () => {
  if (lightbox.value === null) return
  lightbox.value = (lightbox.value + 1) % photos.length
}
</script>

<template>
  <section id="galeri" ref="sectionRef" style="background-color: #FFFFFF">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

      <!-- Heading -->
      <div class="text-center mb-12">
        <span style="
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.75rem;
          color: #F59E0B;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 10px;
        ">
          Dokumentasi Lapangan
        </span>
        <h2 style="
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 3vw, 2.25rem);
          color: #1E293B;
          letter-spacing: -0.02em;
        ">
          Galeri Pekerjaan Kami
        </h2>
        <div class="flex justify-center mt-3">
          <div style="width: 56px; height: 4px; border-radius: 2px; background-color: #F59E0B" />
        </div>
        <p style="
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: #64748B;
          margin-top: 12px;
          line-height: 1.6;
        ">
          Foto nyata dari setiap pekerjaan yang telah kami selesaikan
        </p>
      </div>

      <!-- Grid: 2 col mobile, 3 col desktop -->
      <div class="grid gap-3">
        <div
          v-for="(photo, i) in photos"
          :key="photo.judul"
          :style="{
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
            cursor: 'pointer',
            aspectRatio: '4 / 3',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.97)',
            transition: `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`,
            boxShadow: hoveredIndex === i
              ? '0 8px 28px rgba(0,0,0,0.22)'
              : '0 2px 8px rgba(0,0,0,0.09)',
          }"
          @click="lightbox = i"
          @mouseenter="hoveredIndex = i"
          @mouseleave="hoveredIndex = null"
        >
          <!-- Photo -->
          <ImageWithFallback
            :src="photo.src"
            :alt="photo.judul"
            :style="{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transform: hoveredIndex === i ? 'scale(1.07)' : 'scale(1)',
              transition: 'transform 0.45s ease',
            }"
          />

          <!-- Bottom overlay — slides up on hover -->
          <div :style="{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.6) 60%, transparent 100%)',
            padding: '20px 14px 14px',
            transform: hoveredIndex === i ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.38s cubic-bezier(0.4,0,0.2,1)',
          }">
            <p style="
              font-family: 'Plus Jakarta Sans', sans-serif;
              font-weight: 700;
              font-size: 0.85rem;
              color: white;
              line-height: 1.3;
              margin-bottom: 4px;
            ">{{ photo.judul }}</p>
            <div style="display: flex; align-items: center; gap: 4px">
              <MapPin :size="11" color="#F59E0B" />
              <span style="
                font-family: 'Inter', sans-serif;
                font-size: 0.72rem;
                color: #CBD5E1;
                line-height: 1;
              ">{{ photo.lokasi }}</span>
            </div>
          </div>

          <!-- Top accent line on hover -->
          <div :style="{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #F59E0B, #FCD34D)',
            opacity: hoveredIndex === i ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }" />
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="lightbox !== null && activePhoto"
        @click="lightbox = null"
        style="
          position: fixed;
          inset: 0;
          background-color: rgba(0,0,0,0.88);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          backdrop-filter: blur(6px);
        "
      >
        <!-- Counter -->
        <div style="
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.55);
          user-select: none;
        ">
          {{ activeIndex }} / {{ photos.length }}
        </div>

        <!-- Prev -->
        <button
          @click.stop="prevPhoto"
          style="
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255,255,255,0.12);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 50%;
            width: 48px;
            height: 48px;
            cursor: pointer;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10001;
          "
        >
          <ChevronLeft :size="22" />
        </button>

        <!-- Image + caption -->
        <div
          @click.stop
          style="max-width: 88vw; max-height: 82vh; display: flex; flex-direction: column; gap: 12px"
        >
          <img
            :src="activePhoto.src"
            :alt="activePhoto.judul"
            style="
              max-width: 100%;
              max-height: 74vh;
              object-fit: contain;
              border-radius: 10px;
              box-shadow: 0 12px 48px rgba(0,0,0,0.6);
              display: block;
            "
          />
          <div style="text-align: center">
            <p style="
              font-family: 'Plus Jakarta Sans', sans-serif;
              font-weight: 700;
              font-size: 1rem;
              color: white;
            ">{{ activePhoto.judul }}</p>
            <div style="display: flex; align-items: center; justify-content: center; gap: 5px; margin-top: 4px">
              <MapPin :size="13" color="#F59E0B" />
              <span style="
                font-family: 'Inter', sans-serif;
                font-size: 0.82rem;
                color: #94A3B8;
              ">{{ activePhoto.lokasi }}</span>
            </div>
          </div>
        </div>

        <!-- Next -->
        <button
          @click.stop="nextPhoto"
          style="
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255,255,255,0.12);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 50%;
            width: 48px;
            height: 48px;
            cursor: pointer;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10001;
          "
        >
          <ChevronRight :size="22" />
        </button>

        <!-- Close -->
        <button
          @click.stop="lightbox = null"
          style="
            position: absolute;
            top: 16px;
            right: 16px;
            background: rgba(255,255,255,0.12);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            cursor: pointer;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10001;
          "
        >
          <X :size="18" />
        </button>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.grid {
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>