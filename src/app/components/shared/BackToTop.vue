<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import { ArrowUp } from "lucide-vue-next"

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => window.addEventListener("scroll", handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener("scroll", handleScroll))
</script>

<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-24 right-6 z-50 flex items-center justify-center w-11 h-11 rounded-full shadow-lg transition-all duration-200 hover:scale-110 hover:opacity-90"
    style="background-color: #1E3A5F"
    aria-label="Kembali ke atas"
  >
    <ArrowUp :size="20" color="white" />
  </button>
</template>