import { WHATSAPP_NUMBER } from "./config"

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(price)

interface FormData {
  nama: string
  whatsapp: string
  alamat: string
  kota: string
  layanan: string
  paket: string
  tanggal: string
  jam: string
  catatan?: string
}

export const generateWAMessage = (form: FormData): string => {
  const text = `PEMESANAN JASA SEDOT WC
Nama     : ${form.nama}
WhatsApp : ${form.whatsapp}
Alamat   : ${form.alamat}
Kota     : ${form.kota}
Layanan  : ${form.layanan}
Paket    : ${form.paket}
Tanggal  : ${form.tanggal}
Jam      : ${form.jam}
Catatan  : ${form.catatan || "-"}
Mohon konfirmasi ketersediaan jadwal. Terima kasih.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export const generatePaketWAMessage = (namaPaket: string): string => {
  const text = `Halo, saya tertarik dengan ${namaPaket}.

Mohon info lebih lanjut. Terima kasih.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export const generateDefaultWAMessage = (): string => {
  const text = `Halo, saya ingin menanyakan layanan sedot WC. Mohon informasinya. Terima kasih.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
