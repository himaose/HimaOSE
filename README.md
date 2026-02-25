## Landing Page Himpunan Mahasiswa Oseanografi

Repository ini berisi kode sumber untuk landing page **Himpunan Mahasiswa Oseanografi (HIMA OSE)**. Landing page ini dibuat untuk menampilkan profil himpunan, kegiatan, informasi keanggotaan, serta kontak yang dapat dihubungi.

### Tujuan Proyek

- **Profil organisasi**: Menjelaskan visi, misi, dan struktur kepengurusan HIMA OSE.
- **Etalase kegiatan**: Menampilkan program kerja, dokumentasi kegiatan, dan agenda terbaru.
- **Informasi keanggotaan**: Memberikan informasi cara bergabung dan manfaat keanggotaan.
- **Pusat informasi**: Menyediakan tautan penting seperti media sosial, formulir pendaftaran, dan kontak.

### Teknologi yang Digunakan

- **HTML5** untuk struktur halaman.
- **CSS3** (bisa menggunakan CSS murni atau framework seperti Tailwind/Bootstrap).
- **JavaScript** (opsional) untuk interaksi dasar seperti animasi, navigasi, dan form.

Jika Anda menggunakan framework atau library lain (misalnya React, Vue, atau Next.js), sesuaikan bagian ini sesuai stack yang digunakan.

### Struktur Proyek (Usulan Sederhana)

- `index.html` – Halaman utama landing page HIMA OSE.
- `assets/css/` – File CSS (style utama, responsive, dll).
- `assets/js/` – File JavaScript untuk interaksi.
- `assets/img/` – Logo, foto kegiatan, dan ilustrasi lain.

Struktur dapat disesuaikan dengan kebutuhan, namun disarankan untuk memisahkan file berdasarkan fungsinya agar rapi dan mudah dikelola.

### Menjalankan Secara Lokal

1. **Clone repository**:
   ```bash
   git clone https://github.com/<username>/<nama-repo>.git
   cd <nama-repo>
   ```
2. **Buka di browser**:
   - Cara paling sederhana: klik dua kali `index.html` atau buka lewat browser (`File > Open`).
   - Disarankan menggunakan _live server_ (misalnya ekstensi Live Server di VS Code) agar perubahan langsung terlihat.

### Konten Utama Landing Page (Rekomendasi)

- **Hero section**: Nama himpunan, tagline, dan tombol ajakan (Call To Action), misalnya "Gabung HIMA OSE" atau "Lihat Kegiatan".
- **Tentang HIMA OSE**: Sejarah singkat, visi, misi, dan nilai-nilai.
- **Program Kerja & Kegiatan**: Daftar program unggulan, dokumentasi foto, dan agenda mendatang.
- **Struktur Kepengurusan**: Ketua, wakil, dan divisi-divisi (contoh: Akademik, PSDM, Humas, Riset, dll).
- **Testimoni/Highlight Prestasi** (opsional): Cerita singkat dari anggota atau capaian himpunan.
- **Kontak & Media Sosial**: Email, Instagram, Line/WhatsApp, dan lain-lain.

### Panduan Kontribusi

1. **Buat branch baru** untuk setiap perubahan:
   ```bash
   git checkout -b feature/nama-fitur
   ```
2. **Lakukan perubahan** di file yang relevan (`index.html`, file CSS/JS, dsb).
3. **Uji di lokal**:
   - Pastikan tampilan responsif di layar laptop dan ponsel.
   - Cek kembali semua tautan dan form berfungsi dengan benar.
4. **Commit dengan pesan yang jelas**:
   ```bash
   git commit -m "feat: tambahkan section kegiatan"
   ```
5. **Push dan buat pull request** (jika menggunakan GitHub/GitLab):
   ```bash
   git push origin feature/nama-fitur
   ```

### Style & Desain (Saran)

- **Identitas warna**: Gunakan warna yang selaras dengan identitas jurusan/fakultas/oceanografi (misalnya nuansa biru laut).
- **Tipografi bersih**: Gunakan maksimal 2–3 jenis font, pastikan mudah dibaca.
- **Responsive design**: Pastikan tampilan rapi di berbagai ukuran layar (mobile first bila memungkinkan).
- **Aksesibilitas**: Gunakan kontras warna yang cukup, alt text untuk gambar, dan struktur heading yang benar.

### Lisensi

Sesuaikan bagian ini dengan kebijakan himpunan. Contoh:

> Kode sumber ini digunakan untuk keperluan internal Himpunan Mahasiswa Oseanografi. Penggunaan di luar itu harap menghubungi pengurus HIMA OSE.

