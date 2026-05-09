export interface Testimoni {
  id: number
  nama: string
  kota: string
  alamat: string
  bintang: number
  pesan: string
  paket: string
}

const testimoni: Testimoni[] = [
  {
    id: 1,
    nama: "Bpk. Mujiono",
    kota: "Blotongan, Kota Salatiga",
    alamat: "Jalan Fatmawati, Semarang-Salatiga, Blotongan, Kota Salatiga",
    bintang: 5,
    pesan: "Awalnya takut mahal, ternyata harganya ramah banget di kantong. Hasilnya tetap maksimal.",
    paket: "Paket Rumahan"
  },
  {
    id: 2,
    nama: "Bp. Santoso K",
    kota: "Tingkir Tengah, Kota Salatiga",
    alamat: "Perum Taman Mutiara, Tingkir Tengah, Kec. Tingkir, Kota Salatiga",
    bintang: 5,
    pesan: "Harga bersahabat, bisa dinego juga. Mantap, langsung deal.",
    paket: "Paket Rumahan"
  },
  {
    id: 3,
    nama: "Bp. Joni W",
    kota: "Kec. Sidorejo, Kota Salatiga",
    alamat: "Jl. Kemiri Raya Salatiga, Kec. Sidorejo, Kota Salatiga",
    bintang: 5,
    pesan: "Hasilnya benar-benar tuntas. Nggak ada sisa bau, lancar semua.",
    paket: "Paket Rumahan"
  },
  {
    id: 4,
    nama: "Ibu Hasnah",
    kota: "Pulutan, Kec. Tuntang, Kota Salatiga",
    alamat: "Jl. H. Ilyas, Sraten Satu, Pulutan, Kec. Tuntang, Kota Salatiga",
    bintang: 5,
    pesan: "Rumah di gang kecil pun aman. Selang panjang sehingga tetap bisa dijangkau dan hasilnya memuaskan.",
    paket: "Paket Rumahan"
  },
  {
    id: 5,
    nama: "Bu Budi R",
    kota: "Rowoboni, Kec. Banyubiru",
    alamat: "Jalan Raya Muncul, Rowoboni, Kec. Banyubiru",
    bintang: 5,
    pesan: "Cukup WA, langsung berangkat. Cepat banget responnya. Sangat membantu keadaan darurat. Cepat tanggap, cepat datang, dan cepat beres. Pelayanan secepat ini jarang banget ditemukan.",
    paket: "Paket Rumahan"
  },
  {
    id: 6,
    nama: "Bu Wardana",
    kota: "Kumpulrejo, Kec. Argomulyo, Kota Salatiga",
    alamat: "Bendosari, Kumpulrejo, Kec. Argomulyo, Kota Salatiga",
    bintang: 5,
    pesan: "Ada garansi bikin saya tenang. Kalau ada masalah lagi, tinggal hubungi. Tapi sampai sekarang WC tetap lancar.",
    paket: "Paket Rumahan"
  },
  {
    id: 7,
    nama: "Bpk. Siswono B",
    kota: "Kec. Sidorejo, Kota Salatiga",
    alamat: "Jl. Kartini, Salatiga, Kec. Sidorejo, Kota Salatiga",
    bintang: 5,
    pesan: "Kerjanya detail, nggak setengah-setengah. Setelah dibersihkan, masih dicek lagi. Mantap.",
    paket: "Paket Komersial"
  },
  {
    id: 8,
    nama: "Ibu Wina Raharjo",
    kota: "Karanggede, Kabupaten Boyolali",
    alamat: "Jl. Raya Karanggede - Gemolong, Karanggede, Kabupaten Boyolali",
    bintang: 5,
    pesan: "Tenaganya sopan, sabar, dan tahu cara kerja yang benar. Jadi saya pun tenang melihat hasilnya.",
    paket: "Paket Rumahan"
  },
  {
    id: 9,
    nama: "Bpk. Agus Gunadi",
    kota: "Kec. Sidorejo, Kota Salatiga",
    alamat: "Jl. Diponegoro, Kec. Sidorejo, Kota Salatiga",
    bintang: 5,
    pesan: "Harga ekonomis tapi kualitas premium. Sudah hemat, rumah jadi bersih. Nggak nyesel pilih di sini.",
    paket: "Paket Rumahan"
  },
  {
    id: 10,
    nama: "Mas Sujarwo",
    kota: "Sidorejo Kidul, Kec. Tingkir, Kota Salatiga",
    alamat: "Jl. Marditomo Sidorejo Kidul, Kec. Tingkir, Kota Salatiga",
    bintang: 5,
    pesan: "Satu kata: profesional. Dari awal datang sampai selesai, cara kerjanya bikin percaya.",
    paket: "Paket Komersial"
  },
  {
    id: 11,
    nama: "Bu Fatimah",
    kota: "Kalicacing, Kec. Sidomukti, Kota Salatiga",
    alamat: "Jl. Adisucipto, Kalicacing, Kec. Sidomukti, Kota Salatiga",
    bintang: 5,
    pesan: "Kalau soal harga, ini yang paling masuk akal. Cocok buat semua kalangan, apalagi hasilnya juga maksimal.",
    paket: "Paket Rumahan"
  },
  {
    id: 12,
    nama: "Bpk. Deni K",
    kota: "Kutowinangun Kidul, Kec. Tingkir, Kota Salatiga",
    alamat: "Perumahan Wahid Blok E, Kutowinangun Kidul, Kec. Tingkir, Kota Salatiga",
    bintang: 5,
    pesan: "Rumah saya agak masuk ke dalam, tapi selangnya panjang jadi tetap bisa di sedot.",
    paket: "Paket Rumahan"
  }
]

export default testimoni
