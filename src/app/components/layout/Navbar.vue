<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import { Menu, X, Phone } from "lucide-vue-next"
import { SITE_CONFIG, WHATSAPP_NUMBER } from "../../../lib/config"

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Layanan", href: "#layanan" },
  { label: "Harga", href: "#harga" },
  { label: "Galeri", href: "#galeri" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#booking" },
]

const isOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref("hero")

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

let observers: IntersectionObserver[] = []

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true })

  const sections = navLinks.map((l) => l.href.replace("#", ""))
  sections.forEach((id) => {
    const el = document.getElementById(id)
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) activeSection.value = id
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    obs.observe(el)
    observers.push(obs)
  })
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
  observers.forEach((o) => o.disconnect())
  observers = []
})

const handleNavClick = (href: string) => {
  isOpen.value = false
  const id = href.replace("#", "")
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo, saya ingin menghubungi tim Sedot WC Salatiga.")}`

const navbarBg = (isScrolled: boolean) =>
  isScrolled ? "rgb(11, 77, 163)" : "rgba(255,255,255,0.08)"

const navbarShadow = (isScrolled: boolean) =>
  isScrolled
    ? "0 8px 32px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.12)"
    : "0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)"
</script>

<template>
  <!-- ── DESKTOP floating pill navbar ── -->
  <header
    class="fixed left-0 right-0 z-50 hidden lg:flex justify-center"
    style="top: 16px; pointer-events: none"
  >
    <div
      :style="{
        pointerEvents: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '960px',
        margin: '0 24px',
        padding: '10px 12px 10px 20px',
        borderRadius: '9999px',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        backgroundColor: navbarBg(scrolled),
        border: '1px solid rgba(255,255,255,0.16)',
        boxShadow: navbarShadow(scrolled),
        transition: 'all 0.3s ease',
      }"
    >
      <!-- Logo -->
      <a
        href="#hero"
        @click.prevent="handleNavClick('#hero')"
        style="text-decoration: none; display: flex; align-items: center; gap: 10px"
      >
        <!-- Icon badge -->
        <div
          style="
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: #f59e0b;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          "
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1E293B"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="1" y="3" width="15" height="13" rx="2" />
            <path d="M16 8h4l3 5v3h-7V8z" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
        </div>
        <!-- Text -->
        <div style="display: flex; flex-direction: column; line-height: 1">
          <span
            style="
              font-family: 'Plus Jakarta Sans', sans-serif;
              font-weight: 800;
              font-size: 1rem;
              letter-spacing: -0.01em;
              color: white;
            "
          >
            Sedot<span style="color: #f59e0b">WC</span>
          </span>
          <span
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              font-size: 0.65rem;
              color: rgba(255, 255, 255, 0.5);
              letter-spacing: 0.06em;
              margin-top: 1px;
            "
          >
            SALATIGA
          </span>
        </div>
      </a>

      <!-- Nav links -->
      <nav style="display: flex; align-items: center; gap: 4px">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click.prevent="handleNavClick(link.href)"
          :style="{
            display: 'block',
            padding: '7px 16px',
            borderRadius: '9999px',
            fontFamily: '\'Inter\', sans-serif',
            fontWeight: activeSection === link.href.replace('#', '') ? 600 : 500,
            fontSize: '0.875rem',
            textDecoration: 'none',
            color: 'rgb(255, 255, 255)',
            backgroundColor:
              activeSection === link.href.replace('#', '')
                ? 'rgba(15,23,42,0.75)'
                : 'transparent',
            border:
              activeSection === link.href.replace('#', '')
                ? '1px solid rgba(255,255,255,0.12)'
                : '1px solid transparent',
            boxShadow:
              activeSection === link.href.replace('#', '')
                ? '0 2px 8px rgba(0,0,0,0.25)'
                : 'none',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
          }"
          @mouseenter="
            (e) => {
              if (activeSection !== link.href.replace('#', ''))
                (e.currentTarget as HTMLAnchorElement).style.color = 'white'
            }
          "
          @mouseleave="
            (e) => {
              if (activeSection !== link.href.replace('#', ''))
                (e.currentTarget as HTMLAnchorElement).style.color =
                  'rgba(255,255,255,0.65)'
            }
          "
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- CTA -->
      <a
        :href="waLink"
        target="_blank"
        rel="noopener noreferrer"
        style="
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 18px;
          border-radius: 9999px;
          background-color: #f59e0b;
          color: #1e293b;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(245, 158, 11, 0.45);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        "
        @mouseenter="
          (e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.transform = 'scale(1.04)'
            el.style.boxShadow = '0 6px 20px rgba(245,158,11,0.6)'
          }
        "
        @mouseleave="
          (e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.transform = 'scale(1)'
            el.style.boxShadow = '0 4px 14px rgba(245,158,11,0.45)'
          }
        "
      >
        <Phone :size="14" />
        Hubungi Kami
      </a>
    </div>
  </header>

  <!-- ── MOBILE navbar ── -->
  <header
    class="fixed top-2 left-5 right-5  z-50 lg:hidden"
    style="
      backdrop-filter: blur(20px);
      border-radius: 23px;

      -webkit-backdrop-filter: blur(20px);
      background-color: rgba(15, 23, 42, 0.85);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.3);
    "
  >
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
      "
    >
      <!-- Logo -->
      <a
        href="#hero"
        @click.prevent="handleNavClick('#hero')"
        style="text-decoration: none; display: flex; align-items: center; gap: 10px"
      >
        <div
          style="
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: #f59e0b;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1E293B"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="1" y="3" width="15" height="13" rx="2" />
            <path d="M16 8h4l3 5v3h-7V8z" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
        </div>
        <span
          style="
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 800;
            font-size: 1rem;
            color: white;
          "
        >
          Sedot<span style="color: #f59e0b">WC</span>
          <span
            style="
              font-weight: 400;
              font-size: 0.7rem;
              color: rgba(255, 255, 255, 0.5);
              margin-left: 5px;
            "
            >Salatiga</span
          >
        </span>
      </a>

      <!-- Hamburger -->
      <button
        @click="isOpen = !isOpen"
        style="
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
        "
        aria-label="Toggle menu"
      >
        <X v-if="isOpen" :size="20" />
        <Menu v-else :size="20" />
      </button>
    </div>

    <!-- Mobile drawer -->
    <div
      :style="{
        maxHeight: isOpen ? '500px' : '0px',
        overflow: 'hidden',
        transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
        borderTop: isOpen ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }"
    >
      <div style="padding: 12px 16px 20px">
        <nav
          style="
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-bottom: 16px;
          "
        >
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click.prevent="handleNavClick(link.href)"
            :style="{
              display: 'block',
              padding: '11px 16px',
              borderRadius: '10px',
              fontFamily: '\'Inter\', sans-serif',
              fontWeight: activeSection === link.href.replace('#', '') ? 600 : 400,
              fontSize: '0.95rem',
              textDecoration: 'none',
              color:
                activeSection === link.href.replace('#', '')
                  ? 'white'
                  : 'rgba(255,255,255,0.65)',
              backgroundColor:
                activeSection === link.href.replace('#', '')
                  ? 'rgba(255,255,255,0.1)'
                  : 'transparent',
              borderLeft:
                activeSection === link.href.replace('#', '')
                  ? '3px solid #F59E0B'
                  : '3px solid transparent',
            }"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Mobile CTA buttons -->
        <div style="display: flex; flex-direction: column; gap: 8px">
          <a
            href="tel:+6285802753321"
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              padding: 12px;
              border-radius: 10px;
              background-color: rgba(255, 255, 255, 0.08);
              border: 1px solid rgba(255, 255, 255, 0.12);
              color: white;
              font-family: 'Plus Jakarta Sans', sans-serif;
              font-weight: 600;
              font-size: 0.9rem;
              text-decoration: none;
              min-height: 44px;
            "
          >
            <Phone :size="16" />
            Hubungi Sekarang
          </a>
          <a
            :href="waLink"
            target="_blank"
            rel="noopener noreferrer"
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              padding: 12px;
              border-radius: 10px;
              background-color: #f59e0b;
              color: #1e293b;
              font-family: 'Plus Jakarta Sans', sans-serif;
              font-weight: 700;
              font-size: 0.9rem;
              text-decoration: none;
              min-height: 44px;
            "
          >
            WhatsApp Sekarang
          </a>
        </div>
      </div>
    </div>
  </header>
</template>