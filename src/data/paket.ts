export interface Paket {
  id: string
  nama: string
  harga: number
  hargaDisplay: string
  deskripsi: string
  kapasitas: string
  fitur: string[]
  isPopular: boolean
}

const paket: Paket[] = [
  {
    id: "rumahan",
    nama: "Paket Rumahan",
    harga: 250000,
    hargaDisplay: "Mulai Rp 250.000",
    deskripsi: "Cocok untuk septic tank rumah tinggal standard",
    kapasitas: "1.000 - 3.000 liter",
    fitur: [
      "Kapasitas septic tank 1.000-3.000 liter",
      "Armada tanki 3.000 liter",
      "Teknisi berpengalaman",
      "Bebas biaya survei",
      "Garansi bersih 30 hari",
      "Proses 1-2 jam"
    ],
    isPopular: false
  },
  {
    id: "komersial",
    nama: "Paket Komersial",
    harga: 600000,
    hargaDisplay: "Mulai Rp 600.000",
    deskripsi: "Untuk ruko, kantor, kos-kosan, dan restoran",
    kapasitas: "3.000 - 8.000 liter",
    fitur: [
      "Kapasitas septic tank 3.000-8.000 liter",
      "Armada tanki 6.000 liter",
      "2 teknisi profesional",
      "Bebas biaya survei",
      "Garansi bersih 60 hari",
      "Proses 2-4 jam",
      "Laporan kondisi septic tank"
    ],
    isPopular: true
  },
  {
    id: "industri",
    nama: "Paket Industri",
    harga: 0,
    hargaDisplay: "Hubungi Kami",
    deskripsi: "Untuk pabrik, hotel, rumah sakit, dan fasilitas besar",
    kapasitas: "8.000 liter ke atas",
    fitur: [
      "Kapasitas tidak terbatas (multi-trip)",
      "Armada tanki khusus",
      "Tim teknisi lengkap",
      "Survei lokasi gratis",
      "Kontrak berkala tersedia",
      "Proses fleksibel sesuai kebutuhan",
      "Laporan teknis lengkap",
      "Prioritas jadwal darurat"
    ],
    isPopular: false
  }
]

export default paket
