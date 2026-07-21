export interface KotaKlien {
  nama: string
  kecamatan: string
}

export interface KotaTestimoni {
  nama: string
  lokasi: string
  isi: string
}

export interface KotaData {
  slug: string
  nama: string
  metaTitle: string
  metaDescription: string
  intro: string
  kecamatanDicover: string[]
  klien: KotaKlien[]
  testimoni?: KotaTestimoni[]
  penutup: string
}

export const kotaList: KotaData[] = [
  {
    slug: 'salatiga',
    nama: 'Salatiga',
    metaTitle: 'Sedot WC Salatiga 24 Jam | Layanan Cepat & Terpercaya',
    metaDescription:
      'Jasa sedot WC Salatiga melayani seluruh 4 kecamatan (Sidorejo, Sidomukti, Argomulyo, Tingkir). Sudah dipercaya perusahaan & instansi di Salatiga. Hubungi sekarang.',
    intro: `Salatiga adalah salah satu wilayah operasional utama kami, dengan kantor yang berlokasi di Kecandran, Kecamatan Sidomukti. Karena berbasis langsung di kota ini, kami bisa merespons panggilan lebih cepat dibanding penyedia jasa dari luar kota. Selama beroperasi di Salatiga, kami sudah menjangkau keempat kecamatan yang ada — Sidorejo, Sidomukti, Argomulyo, dan Tingkir — baik untuk kebutuhan rumah tangga maupun instansi dan perusahaan.`,
    kecamatanDicover: ['Sidorejo', 'Sidomukti', 'Argomulyo', 'Tingkir'],
    klien: [
      { nama: 'PT Charoen Pokphand Indonesia', kecamatan: 'Tingkir' },
      { nama: 'PT Indo Sakura Indah', kecamatan: 'Argomulyo' },
      { nama: 'PT Selalu Cinta Indonesia', kecamatan: 'Argomulyo' },
      { nama: 'PT Agric Amarga Jaya', kecamatan: 'Sidorejo' },
      { nama: 'Hotel Beringin Salatiga', kecamatan: 'Sidomukti' },
      { nama: 'RS DKT Salatiga', kecamatan: 'Tingkir' },
    ],
    penutup: `Dari pengalaman menangani kebutuhan perusahaan dan instansi seperti di atas, kami tahu betul standar kecepatan dan kebersihan yang dibutuhkan untuk skala besar. Standar yang sama ini yang kami bawa ke setiap panggilan rumah tangga di Salatiga — baik itu di Sidorejo, Sidomukti, Argomulyo, maupun Tingkir. Tim siap datang di hari yang sama untuk area sekitar kantor kami di Kecandran, dan menjangkau seluruh Salatiga untuk jadwal terencana.`,
  },
  {
    slug: 'semarang',
    nama: 'Semarang',
    metaTitle: 'Sedot WC Semarang 24 Jam Bergaransi | CV Subari',
    metaDescription:
      'Layanan sedot WC Semarang profesional & bergaransi. Melayani area Pedurungan, Banyumanik, Tembalang, Genuk, hingga Semarang Barat 24 Jam.',
    intro: `Semarang merupakan pusat aktivitas komersial dan pemukiman padat di Jawa Tengah. CV Subari siap melayani kebutuhan sedot WC, pengurasan septic tank, dan pelancaran saluran mampet di seluruh wilayah Kota Semarang dengan armada tangki besar dan tim profesional responsif 24 jam.`,
    kecamatanDicover: ['Banyumanik', 'Tembalang', 'Pedurungan', 'Genuk', 'Semarang Barat', 'Semarang Selatan', 'Gajahmungkur', 'Ngaliyan'],
    klien: [
      { nama: 'Kawasan Industri Wijayakusuma', kecamatan: 'Tugu' },
      { nama: 'Area Komersial Simpang Lima', kecamatan: 'Semarang Selatan' },
      { nama: 'Perumahan Graha Candi Golf', kecamatan: 'Tembalang' },
    ],
    penutup: `Layanan sedot WC Semarang dari CV Subari mengutamakan kebersihan kerja, pengerjaan tanpa bongkar berlebih, dan jaminan tuntas. Hubungi tim kami sekarang untuk panggilan darurat maupun perawatan rutin.`,
  },
  {
    slug: 'ungaran',
    nama: 'Ungaran',
    metaTitle: 'Sedot WC Ungaran (Kab. Semarang) 24 Jam | CV Subari',
    metaDescription:
      'Jasa sedot WC Ungaran Barat & Ungaran Timur profesional. Panggilan 24 jam untuk rumah tangga, pabrik, dan fasilitas umum di Kabupaten Semarang.',
    intro: `Sebagai pusat pemerintahan Kabupaten Semarang, kawasan Ungaran memiliki dinamika industri dan pemukiman yang terus berkembang. CV Subari memberikan layanan kuras septic tank cepat untuk wilayah Ungaran Barat, Ungaran Timur, dan sekitarnya.`,
    kecamatanDicover: ['Ungaran Barat', 'Ungaran Timur', 'Bergas', 'Pringapus', 'Bawen'],
    klien: [
      { nama: 'PT Ungaran Sari Garments', kecamatan: 'Ungaran Barat' },
      { nama: 'Kawasan Industri Bergas', kecamatan: 'Bergas' },
    ],
    penutup: `Tim kami siap meluncur ke lokasi Anda di Ungaran dengan respon cepat. Bergaransi dan menggunakan selang panjang untuk menjangkau gang sempit.`,
  },
  {
    slug: 'boyolali',
    nama: 'Boyolali',
    metaTitle: 'Sedot WC Boyolali Murah & Bergaransi | CV Subari',
    metaDescription:
      'Jasa sedot WC Boyolali melayani kawasan Mojosongo, Ampel, Teras, hingga Cepogo. Solusi cepat septic tank penuh & saluran tersumbat.',
    intro: `Untuk wilayah Boyolali dan sekitarnya, CV Subari hadir memberikan solusi pengurasan WC dan penanganan saluran mampet secara higienis, rapi, dan transparan tanpa biaya tersembunyi.`,
    kecamatanDicover: ['Boyolali Kota', 'Mojosongo', 'Teras', 'Ampel', 'Banyudono', 'Cepogo'],
    klien: [
      { nama: 'PT Ciomas Adisatwa', kecamatan: 'Mojosongo' },
      { nama: 'Kawasan Industri Teras', kecamatan: 'Teras' },
    ],
    penutup: `Hubungi CV Subari untuk penanganan WC penuh di Boyolali. Kami pastikan proses kerja bersih, cepat, dan septic tank kembali berfungsi normal.`,
  },
  {
    slug: 'demak',
    nama: 'Demak',
    metaTitle: 'Jasa Sedot WC Demak 24 Jam Tuntas | CV Subari',
    metaDescription:
      'Sedot WC Demak melayani Mranggen, Sayung, Karanganyar, dan sekitarnya. Panggilan 24 jam untuk rumah, pondok pesantren, dan pabrik.',
    intro: `Kabupaten Demak dengan wilayah pemukiman padat dan area industri seperti Sayung dan Mranggen membutuhkan layanan pengelolaan limbah yang andal. CV Subari siap membantu masalah WC meluap & septic tank penuh di Demak.`,
    kecamatanDicover: ['Demak Kota', 'Mranggen', 'Sayung', 'Karanganyar', 'Bonang', 'Guntur'],
    klien: [
      { nama: 'Kawasan Industri Sayung', kecamatan: 'Sayung' },
      { nama: 'Area Pesantren & Pemukiman Mranggen', kecamatan: 'Mranggen' },
    ],
    penutup: `CV Subari siap datang ke lokasi di Demak tepat waktu dengan peralatan vakum bertenaga tinggi untuk hasil penyedotan maksimal.`,
  },
  {
    slug: 'grobogan',
    nama: 'Grobogan / Purwodadi',
    metaTitle: 'Sedot WC Purwodadi Grobogan Bergaransi | CV Subari',
    metaDescription:
      'Layanan sedot WC Grobogan & Purwodadi. Melayani pengurasan septic tank rumah tangga, pasar, dan instansi secara cepat & aman.',
    intro: `CV Subari memperluas jangkauan layanan hingga Kabupaten Grobogan dan Purwodadi. Kami menangani penyedotan WC penuh dan perbaikan limbah domestik secara profesional.`,
    kecamatanDicover: ['Purwodadi', 'Grobogan', 'Toroh', 'Tawangharjo', 'Godong', 'Gubug'],
    klien: [
      { nama: 'PT Nesia Pan Pasifik', kecamatan: 'Grobogan' },
      { nama: 'Fasilitas Komersial Purwodadi', kecamatan: 'Purwodadi' },
    ],
    penutup: `Percayakan perawatan limbah rumah tangga & bisnis Anda di Grobogan kepada CV Subari. Buka 24 jam, langsung direspons tim operasional.`,
  },
  {
    slug: 'sragen',
    nama: 'Sragen',
    metaTitle: 'Sedot WC Sragen Cepat & Murah | CV Subari',
    metaDescription:
      'Jasa sedot WC Sragen terpercaya. Melayani Sragen Kota, Gemolong, Masaran, dan sekitarnya dengan armada tangki bersih.',
    intro: `Kebutuhan kuras WC di Kabupaten Sragen kini lebih mudah dengan hadirnya tim CV Subari. Kami melayani area Sragen Kota hingga kecamatan pinggiran dengan respon cepat.`,
    kecamatanDicover: ['Sragen Kota', 'Gemolong', 'Masaran', 'Sidoharjo', 'Kalijambe', 'Karangmalang'],
    klien: [
      { nama: 'Area Industri Masaran', kecamatan: 'Masaran' },
      { nama: 'Pertokoan Sragen Kota', kecamatan: 'Sragen Kota' },
    ],
    penutup: `Dapatkan penawaran harga terbaik dan garansi pengerjaan tuntas untuk wilayah Sragen dari CV Subari.`,
  },
  {
    slug: 'temanggung',
    nama: 'Temanggung',
    metaTitle: 'Sedot WC Temanggung 24 Jam Bergaransi | CV Subari',
    metaDescription:
      'Sedot WC Temanggung melayani Parakan, Kranggan, dan sekitarnya. Pengurasan septic tank bersih, cepat, tanpa bau menyengat.',
    intro: `CV Subari melayani jasa kuras WC dan penanganan saluran mampet di Kabupaten Temanggung. Kami mengutamakan kebersihan dan kerapihan pengerjaan di lokasi konsumen.`,
    kecamatanDicover: ['Temanggung Kota', 'Parakan', 'Kranggan', 'Kedu', 'Bulu'],
    klien: [
      { nama: 'Kawasan Komersial Parakan', kecamatan: 'Parakan' },
      { nama: 'Fasilitas Publik Temanggung', kecamatan: 'Temanggung Kota' },
    ],
    penutup: `Jangan tunggu sampai meluap! Segera hubungi CV Subari untuk jadwal pengurasan WC berkala di Temanggung.`,
  },
  {
    slug: 'wonogiri',
    nama: 'Wonogiri',
    metaTitle: 'Sedot WC Wonogiri Respon Cepat 24 Jam | CV Subari',
    metaDescription:
      'Jasa sedot WC Wonogiri melayani Wonogiri Kota, Selogiri, Ngadirojo, dan sekitarnya. Layanan ramah, bersih, dan bergaransi.',
    intro: `CV Subari menjangkau wilayah Kabupaten Wonogiri untuk membantu masyarakat dan pelaku usaha mengatasi masalah septic tank penuh dan sanitasi tersumbat.`,
    kecamatanDicover: ['Wonogiri Kota', 'Selogiri', 'Ngadirojo', 'Baturetno', 'Praci'],
    klien: [
      { nama: 'Area Komersial Selogiri', kecamatan: 'Selogiri' },
      { nama: 'Fasilitas Umum Wonogiri Kota', kecamatan: 'Wonogiri Kota' },
    ],
    penutup: `Layanan CV Subari di Wonogiri siap dipanggil kapan saja. Konsultasi gratis via WhatsApp 24 Jam!`,
  }
]

export function getKotaBySlug(slug: string): KotaData | undefined {
  return kotaList.find((k) => k.slug === slug)
}