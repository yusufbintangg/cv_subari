# TODO — React → Vue 3 Migration (Sedot WC Salatiga)

## Done
- [x] Analisis awal project: struktur folder, dependencies, komponen, React hook usage.
- [x] Buat laporan/README migrasi yang komprehensif (Single Source of Truth).

## Next
- [ ] Pastikan README sudah sesuai dengan state repo terkini (cek bagian yang menyebut file/struktur Vue, jika sudah berubah).
- [ ] Lanjutkan konversi sebenarnya: buat baseline Vue 3 project (Vite + Vue) dan port `src/lib/*`, `src/data/*`.
- [ ] Port root/assembly: `App` + `main`.
- [ ] Port layout/shared: `Navbar`, `Footer`, `WhatsAppFloating`, `BackToTop`, `ImageWithFallback`.
- [ ] Port core sections: `Hero`, `Layanan`, `PaketHarga`, `Keunggulan`, `ProsesKerja`, `Galeri`, `CakupanWilayah`, `Testimoni`, `Faq`, `BookingForm`.
- [ ] Baru pertimbangkan `components/ui/*` kalau ada import dari section yang sudah dipindah.

