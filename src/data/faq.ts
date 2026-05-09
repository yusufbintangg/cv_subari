export interface Faq {
  id: number
  pertanyaan: string
  jawaban: string
}

const faq: Faq[] = [
  {
    id: 1,
    pertanyaan: "Berapa lama proses sedot WC berlangsung?",
    jawaban: "Tergantung kapasitas dan kondisi septic tank. Paket Rumahan biasanya 1-2 jam, Paket Komersial 2-4 jam. Tim kami akan estimasi waktu saat survei awal."
  },
  {
    id: 2,
    pertanyaan: "Apakah melayani panggilan darurat malam hari?",
    jawaban: "Ya. Kami beroperasi 24 jam sehari, 7 hari seminggu termasuk hari libur nasional. Untuk darurat, hubungi WhatsApp kami dan teknisi akan segera dikerahkan."
  },
  {
    id: 3,
    pertanyaan: "Area mana saja yang dilayani?",
    jawaban: "Kami melayani seluruh wilayah Jawa Tengah, termasuk Salatiga, Semarang, Solo, Magelang, Boyolali, Klaten, Purwokerto, Tegal, Pekalongan, dan sekitarnya."
  },
  {
    id: 4,
    pertanyaan: "Apakah ada biaya survei atau biaya tersembunyi?",
    jawaban: "Tidak ada. Survei awal gratis dan harga yang kami kutip sudah all-in tanpa biaya tambahan. Transparansi harga adalah komitmen kami."
  },
  {
    id: 5,
    pertanyaan: "Bagaimana cara memesan layanan?",
    jawaban: "Isi form booking di website ini atau langsung hubungi WhatsApp kami. Setelah itu tim kami akan menghubungi Anda dalam 15 menit untuk konfirmasi jadwal."
  },
  {
    id: 6,
    pertanyaan: "Apakah bisa request jadwal tertentu?",
    jawaban: "Bisa. Saat booking, pilih tanggal dan jam preferensi Anda. Kami akan konfirmasi ketersediaan. Untuk layanan rutin atau kontrak, jadwal bisa diatur tetap setiap bulan."
  }
]

export default faq
