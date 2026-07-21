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
]

export function getKotaBySlug(slug: string): KotaData | undefined {
  return kotaList.find((k) => k.slug === slug)
}