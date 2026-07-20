export interface KlienArea {
  nama: string
  kecamatan: string
}

export interface Kota {
  slug: string
  nama: string
  judulHero: string
  deskripsiIntro: string
  kecamatan: string[]
  klien: KlienArea[]
  paragrafPenutup: string
}

export const dataKota: Kota[] = [
  {
    slug: 'salatiga',
    nama: 'Salatiga',
    judulHero: 'Jasa Sedot WC & Septic Tank Salatiga 24 Jam',
    deskripsiIntro:
      'CV Subari melayani jasa sedot WC, septic tank, dan limbah domestik di seluruh wilayah Kota Salatiga — mencakup 4 kecamatan: Sidomukti, Sidorejo, Tingkir, dan Argomulyo. Kantor operasional kami sendiri berlokasi di Kecandran, Sidomukti, sehingga armada bisa merespons panggilan darurat di area Salatiga lebih cepat dibanding wilayah lain.',
    kecamatan: ['Sidomukti', 'Sidorejo', 'Tingkir', 'Argomulyo'],
    klien: [
      { nama: 'PT Charoen Pokphand Indonesia', kecamatan: 'Tingkir' },
      { nama: 'PT Indo Sakura Indah', kecamatan: 'Argomulyo' },
      { nama: 'PT Selalu Cinta Indonesia', kecamatan: 'Argomulyo' },
      { nama: 'PT Agric Amarga Jaya', kecamatan: 'Sidorejo' },
      { nama: 'Hotel Beringin Salatiga', kecamatan: 'Sidomukti' },
      { nama: 'RS DKT Salatiga', kecamatan: 'Tingkir' },
    ],
    paragrafPenutup:
      'Selain rumah tangga, kami juga dipercaya menangani kebutuhan sedot limbah untuk industri, hotel, dan rumah sakit di Salatiga — mulai dari perusahaan manufaktur di kawasan Tingkir dan Argomulyo hingga fasilitas kesehatan dan perhotelan di pusat kota. Pengalaman menangani klien korporat ini membuat kami paham standar kebersihan dan kecepatan respons yang dibutuhkan, baik untuk panggilan rumahan maupun kontrak berkala skala industri.',
  },
]

export function getKotaBySlug(slug: string): Kota | undefined {
  return dataKota.find((k) => k.slug === slug)
}