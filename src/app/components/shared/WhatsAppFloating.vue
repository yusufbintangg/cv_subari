<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import { MessageCircle } from "lucide-vue-next"
import { generateDefaultWAMessage } from "../../../lib/utils"

const isVisible = ref(true)
const showTooltip = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const bookingSection = document.getElementById("booking")
  if (!bookingSection) return

  observer = new IntersectionObserver(
    ([entry]) => { isVisible.value = !entry.isIntersecting },
    { threshold: 0.3 }
  )
  observer.observe(bookingSection)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div v-if="isVisible" class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
    <div
      v-if="showTooltip"
      class="bg-[#1E3A5F] text-white text-sm px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap"
      style="font-family: 'Inter', sans-serif"
    >
      Chat Sekarang
    </div>
    <div class="relative">
      <span
        class="absolute inset-0 rounded-full bg-green-400 opacity-60"
        style="animation: pulse-ring 1.8s ease-out infinite"
      />
      <a
        :href="generateDefaultWAMessage()"
        target="_blank"
        rel="noopener noreferrer"
        @mouseenter="showTooltip = true"
        @mouseleave="showTooltip = false"
        class="relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-transform duration-200 hover:scale-110"
        style="background-color: #25D366"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle :size="28" color="white" :fill="'white'" />
      </a>
    </div>
  </div>
</template>