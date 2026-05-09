<script setup lang="ts">
import { ref, onMounted } from "vue"
import { MessageSquare, CalendarCheck, Truck, Droplets, CheckCircle } from "lucide-vue-next"

const steps = [
  {
    icon: MessageSquare,
    judul: "Hubungi / Form",
    deskripsi: "Hubungi via WA atau isi form website",
  },
  {
    icon: CalendarCheck,
    judul: "Konfirmasi Jadwal",
    deskripsi: "Tim kami mengonfirmasi jadwal & harga",
  },
  {
    icon: Truck,
    judul: "Teknisi Datang",
    deskripsi: "Armada meluncur ke lokasi Anda",
  },
  {
    icon: Droplets,
    judul: "Proses Sedot",
    deskripsi: "Pengerjaan cepat & tuntas",
  },
  {
    icon: CheckCircle,
    judul: "Selesai & Bersih",
    deskripsi: "Pengecekan hasil & pembayaran",
  },
]

const visibleSteps = ref<boolean[]>(Array(steps.length).fill(false))
const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!sectionRef.value) return

  const obs = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // setTimeout chain — sama persis dengan React version
        steps.forEach((_, i) => {
          setTimeout(() => {
            visibleSteps.value[i] = true
          }, i * 150)
        })
        obs.disconnect()
      }
    },
    { threshold: 0.2 }
  )

  obs.observe(sectionRef.value)
})
</script>

<template>
  <section id="proses" ref="sectionRef" style="background-color: #F8FAFC">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

      <!-- Heading -->
      <div class="text-center mb-16">
        <h2
          style="
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
            font-size: clamp(1.6rem, 3vw, 2.25rem);
            color: #1E293B;
          "
        >
          Cara Kerja Kami — Mudah &amp; Cepat
        </h2>
        <div class="flex justify-center mt-3">
          <div style="width: 56px; height: 4px; border-radius: 2px; background-color: #F59E0B" />
        </div>
      </div>

      <!-- DESKTOP: horizontal timeline -->
      <div class="hidden md:block">
        <div class="relative flex items-start justify-between">

          <!-- Dashed connector line -->
          <div
            class="absolute"
            style="
              top: 44px;
              left: calc(10% + 44px);
              right: calc(10% + 44px);
              height: 2px;
              border-top: 2.5px dashed #CBD5E1;
              z-index: 0;
            "
          />

          <div
            v-for="(step, i) in steps"
            :key="step.judul"
            class="flex flex-col items-center text-center flex-1 relative z-10"
            :style="{
              opacity: visibleSteps[i] ? 1 : 0,
              transform: visibleSteps[i] ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`,
            }"
          >
            <!-- Icon circle + badge -->
            <div class="relative mb-5">
              <div style="
                width: 88px;
                height: 88px;
                border-radius: 50%;
                background-color: white;
                border: 2px solid #E2E8F0;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #1E3A5F;
                box-shadow: 0 2px 12px rgba(30,58,95,0.08);
              ">
                <component :is="step.icon" :size="30" :stroke-width="1.8" />
              </div>

              <!-- Step number badge -->
              <div style="
                position: absolute;
                top: 0;
                right: 0;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background-color: #1E3A5F;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 6px rgba(0,0,0,0.2);
              ">
                <span style="
                  font-family: 'Space Grotesk', sans-serif;
                  font-weight: 700;
                  font-size: 0.7rem;
                  color: white;
                  line-height: 1;
                ">{{ i + 1 }}</span>
              </div>
            </div>

            <!-- Title -->
            <h3 style="
              font-family: 'Plus Jakarta Sans', sans-serif;
              font-weight: 700;
              font-size: 0.95rem;
              color: #1E293B;
              line-height: 1.3;
              margin-bottom: 4px;
            ">{{ step.judul }}</h3>

            <!-- Description -->
            <p style="
              font-family: 'Inter', sans-serif;
              font-size: 0.8rem;
              color: #64748B;
              line-height: 1.5;
              max-width: 140px;
            ">{{ step.deskripsi }}</p>
          </div>
        </div>
      </div>

      <!-- MOBILE: vertical timeline -->
      <div class="flex md:hidden flex-col gap-0">
        <div
          v-for="(step, i) in steps"
          :key="step.judul"
          class="flex items-start gap-4"
          :style="{
            opacity: visibleSteps[i] ? 1 : 0,
            transform: visibleSteps[i] ? 'translateX(0)' : 'translateX(-16px)',
            transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`,
          }"
        >
          <!-- Left: circle + vertical dashed line -->
          <div class="flex flex-col items-center" style="min-width: 64px">
            <div class="relative shrink-0">
              <div style="
                width: 64px;
                height: 64px;
                border-radius: 50%;
                background-color: white;
                border: 2px solid #E2E8F0;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #1E3A5F;
                box-shadow: 0 2px 8px rgba(30,58,95,0.07);
              ">
                <span style="transform: scale(0.85); display: flex">
                  <component :is="step.icon" :size="30" :stroke-width="1.8" />
                </span>
              </div>
              <div style="
                position: absolute;
                top: 0;
                right: 0;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #1E3A5F;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <span style="
                  font-family: 'Space Grotesk', sans-serif;
                  font-weight: 700;
                  font-size: 0.62rem;
                  color: white;
                  line-height: 1;
                ">{{ i + 1 }}</span>
              </div>
            </div>

            <!-- Vertical dashed connector (kecuali step terakhir) -->
            <div
              v-if="i < steps.length - 1"
              style="
                width: 2px;
                flex: 1;
                min-height: 32px;
                border-left: 2.5px dashed #CBD5E1;
                margin: 4px 0;
              "
            />
          </div>

          <!-- Right: text -->
          <div class="pt-3 pb-6">
            <h3 style="
              font-family: 'Plus Jakarta Sans', sans-serif;
              font-weight: 700;
              font-size: 0.95rem;
              color: #1E293B;
              margin-bottom: 4px;
            ">{{ step.judul }}</h3>
            <p style="
              font-family: 'Inter', sans-serif;
              font-size: 0.83rem;
              color: #64748B;
              line-height: 1.6;
            ">{{ step.deskripsi }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>