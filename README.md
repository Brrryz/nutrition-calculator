# PKI Nutrition Calculator

Website statis tanpa framework/runtime dependency. Seluruh kalkulasi berjalan di browser. Bisa di-deploy langsung ke Vercel tanpa build command, package install, backend, API key, atau environment variable.

## Fitur yang sudah diimplementasikan
- **Personal Nutrition Calculator:** input jenis kelamin, usia, tinggi, berat, aktivitas fisik, dan tujuan berat badan; hasil BMI/kategori, rentang berat badan ideal, BMR, TDEE, target kalori, makronutrien, dan rekomendasi pangan berbasis aturan.
- **Food Nutrition Calculator:** pencarian makanan, pemilihan item, input gram, scaling nutrisi per 100 gram, ringkasan makro, dan tabel energi, protein, lemak, karbohidrat, serat, natrium, kalsium, zat besi, vitamin A dan C.
- Responsive desktop/mobile, validasi input, empty state, search suggestions, navigasi dua halaman, disclosure rumus.
- Tidak ada login atau penyimpanan data pribadi. Tidak ada data yang dikirim ke server.

## Menjalankan lokal
Cara paling sederhana: buka `index.html` di browser. Untuk menjalankan server lokal (opsional):

```bash
python -m http.server 8000
```

Pemeriksaan tanpa dependency: `npm run check` dan `npm test` (Node.js diperlukan).

Lalu buka `http://localhost:8000`.

## Deploy ke Vercel
1. Upload/push seluruh isi folder ke repository GitHub.
2. Vercel → **Add New → Project** → import repository.
3. Framework Preset: **Other**.
4. Build Command: kosongkan / None.
5. Output Directory: `.` (root project).
6. Install Command: kosongkan.
7. Deploy. `vercel.json` sudah disertakan.

Alternatif dengan Vercel CLI: jalankan `vercel` dari root folder.

## Rumus yang digunakan

### BMI dan rentang berat badan
`BMI = berat badan (kg) / tinggi badan (m)^2`

Kategori prototipe: `<18,0` berat badan kurang; `18,0–24,9` rentang normal; `25,0–29,9` berat badan berlebih; `≥30` obesitas. Batas ini mengikuti angka 18–24,9 yang disebut dalam diskusi proyek dan harus dikonfirmasi untuk populasi target final.

Rentang berat badan dihitung dari batas BMI tersebut:
- Minimum = `18,0 × tinggi(m)^2`
- Maksimum = `24,9 × tinggi(m)^2`

### BMR: Mifflin–St Jeor
- Pria: `10 × BB(kg) + 6,25 × TB(cm) − 5 × usia + 5`
- Wanita: `10 × BB(kg) + 6,25 × TB(cm) − 5 × usia − 161`

### TDEE
`TDEE = BMR × faktor aktivitas (PAL)`

Faktor aktivitas prototipe: 1,20 sangat ringan; 1,375 ringan; 1,55 sedang; 1,725 tinggi; 1,90 sangat tinggi. Angka PAL perlu disepakati dengan pemilik produk/ahli gizi.

### Target energi
Pemeliharaan: `TDEE`; penurunan: `TDEE − 300 kkal`; peningkatan: `TDEE + 300 kkal`. Batas bawah teknis prototipe adalah 1.200 kkal/hari. Ini bukan rekomendasi medis individual. Perhitungan tidak berlaku untuk usia di bawah 18 tahun, kehamilan, atau menyusui.

### Makronutrien
Distribusi energi default: 50% karbohidrat, 20% protein, 30% lemak.
- Karbohidrat (g) = kalori target × 50% ÷ 4
- Protein (g) = kalori target × 20% ÷ 4
- Lemak (g) = kalori target × 30% ÷ 9

Pembagian ini merupakan asumsi awal untuk prototipe, bukan target klinis yang sudah disahkan.

### Kandungan pangan
`jumlah nutrien porsi = jumlah nutrien per 100 g × berat porsi / 100`

## Penting sebelum dipakai untuk data nyata

**Database pangan saat ini adalah DATA DEMO, bukan data TKPI 2020.** Nilai contoh sengaja ditandai `(DEMO)` dan badge `DATA DEMO`. Evan menyebut memiliki database PDF TKPI 2020, tetapi PDF tersebut tidak tersedia di file percakapan yang bisa saya akses saat membangun website ini. Karena itu saya tidak mengklaim nilai contoh sebagai data resmi.

Untuk mengganti data demo, edit array `foods` di bagian atas `app.js`. Setiap item menggunakan struktur:

```js
{
  id: 'kode-pangan',
  name: 'Nama pangan',
  category: 'Kelompok pangan',
  n: {
    energy: 0, protein: 0, fat: 0, carbs: 0, fiber: 0,
    sodium: 0, calcium: 0, iron: 0, vitA: 0, vitC: 0
  }
}
```

Nilai dalam objek `n` adalah nilai per 100 gram. Pertahankan satuan dan definisi dari dokumen sumber. Jangan mengisi nilai yang tidak tersedia dengan nol; perluas skema untuk nilai `null`/tidak tersedia bila dataset asli memiliki data yang kosong. Verifikasi silang beberapa baris terhadap PDF sebelum mengganti label demo.

Vitamin/mineral untuk kebutuhan harian belum diberi angka AKG karena tabel referensi final berdasarkan kelompok umur/jenis kelamin/kondisi fisiologis belum diberikan atau disahkan. UI menandai nilai ini sebagai perlu referensi AKG, bukan mengarang angka.

## Struktur project

```text
index.html                 Markup dua halaman
styles.css                 Visual design dan responsive rules
app.js                     Interaksi UI, kalkulasi, data demo
tests/smoke.cjs             Smoke tests kalkulasi dan interaksi
healthy-meal-hero.png      Hero image
vercel.json                Konfigurasi deploy statis
README.md                  Dokumentasi
```

## Batasan dan catatan keselamatan
- Tidak menyimpan riwayat pengguna dan tidak membutuhkan akun.
- Tidak menggunakan AI/ML. Rekomendasi dibuat dengan aturan deterministik.
- Kondisi penyakit hanya menampilkan peringatan; aplikasi tidak menghasilkan diet terapi.
- Hasil hanya estimasi edukatif, bukan diagnosis atau pengganti konsultasi ahli gizi/dokter.
- Data demo tidak boleh dipakai untuk keputusan kesehatan atau dipresentasikan sebagai TKPI.
