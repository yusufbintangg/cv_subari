<script setup lang="ts">
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import HeroSection from './components/sections/HeroSection.vue'
import LayananSection from './components/sections/LayananSection.vue'
import PaketHargaSection from './components/sections/PaketHargaSection.vue'
import KeunggulanSection from './components/sections/KeunggulanSection.vue'
import ProsesKerjaSection from './components/sections/ProsesKerjaSection.vue'
import GaleriSection from './components/sections/GaleriSection.vue'
import CakupanWilayahSection from './components/sections/CakupanWilayahSection.vue'
import TestimoniSection from './components/sections/TestimoniSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
import BookingFormSection from './components/sections/BookingFormSection.vue'
import WhatsAppFloating from './components/shared/WhatsAppFloating.vue'
import BackToTop from './components/shared/BackToTop.vue'
</script>

<template>
  <div class="min-h-screen">
    <Navbar />

    <main>
      <HeroSection />
      <LayananSection />
      <PaketHargaSection />
      <KeunggulanSection />
      <ProsesKerjaSection />
      <GaleriSection />
      <CakupanWilayahSection />
      <TestimoniSection />
      <FaqSection />
      <BookingFormSection />
    </main>

    <Footer />

    <WhatsAppFloating />
    <BackToTop />
  </div>
</template>