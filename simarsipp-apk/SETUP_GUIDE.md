# 🚀 Setup Guide - Firebase Structure untuk SIMARSIP

## Ringkasan Masalah & Solusi

### ❌ Masalah Sebelumnya:
- Pengajuan surat TIDAK link ke kampus pengirim
- BAA dashboard menampilkan pengajuan dari semua kampus
- Tidak ada routing otomatis berdasarkan kampus

### ✅ Solusi Yang Diterapkan:
- Setiap pengajuan sekarang simpan `organisasi` dan `kampus`
- BAA dashboard filter hanya pengajuan dari kampus mereka
- Organisasi baru link otomatis ke BAA yang sesuai

---

## 📋 Setup Step-by-Step

### Step 1: Buka Setup Page
```
https://[host]/simarsip-apk/setup-firebase-struktur.html
```

### Step 2: Jalankan 3 Task

**Task 1: Buat Akun Organisasi HMIF IDE LPKIA**
- Klik: "📝 Buat Akun HMIF IDE LPKIA"
- Hasilnya:
  ```
  Email: hmif.ide@lpkia.ac.id
  Password: HmifIde2026!
  Organisasi: Institut Digital Ekonomi LPKIA (IDE LPKIA)
  Kampus: IDE LPKIA - Jl. Soekarno-Hatta No.456...
  ```

**Task 2: Migrasi Data Pengajuan**
- Klik: "🔄 Migrasi Data Pengajuan"
- Hasilnya: Semua pengajuan surat yang sudah ada akan dapat:
  ```
  organisasi: "Institut Digital Ekonomi LPKIA (IDE LPKIA)"
  kampus: "IDE LPKIA - Jl. Soekarno-Hatta No.456..."
  ```

**Task 3: Buat Akun BAA IDE LPKIA**
- Klik: "👤 Buat Akun BAA IDE LPKIA"
- Hasilnya:
  ```
  Email: baa.ide@lpkia.ac.id
  Password: BaaIde2026!
  Kampus: IDE LPKIA - Jl. Soekarno-Hatta No.456...
  ```

---

## ✅ Verifikasi Setup

### Test Login Sebagai Organisasi
```
Path: /login.html
Email: hmif.ide@lpkia.ac.id
Password: HmifIde2026!
Kampus: IDE LPKIA
Login
```
→ Akan melihat greeting: **"Hi, Institut Digital Ekonomi LPKIA (IDE LPKIA)!"**

### Test Login Sebagai BAA
```
Path: /index_baa.html (atau dari dashboard)
Email: baa.ide@lpkia.ac.id
Password: BaaIde2026!
Kampus: IDE LPKIA
Login
```
→ Dashboard BAA hanya tampilkan pengajuan dari IDE LPKIA

---

## 🔄 Cara Menambah Kampus Baru

Jika ingin menambah organisasi dari kampus lain, ikuti langkah ini:

### 1. Buat Akun Organisasi Baru
Manual di Firebase Console atau extend setup page:
```
{
  name: "[Nama Ketua]",
  email: "[email]@example.com",
  password: "[password]",
  organisasi: "[Nama Organisasi/Kampus]",
  kampus: "[Alamat Lengkap Kampus]",
  role: "organisasi"
}
```

### 2. Buat Akun BAA untuk Kampus Itu
```
{
  name: "BAA [Nama Kampus]",
  email: "baa[nama]@example.com",
  password: "[password]",
  kampus: "[Alamat Lengkap SAMA seperti organisasi]",
  role: "BAA"
}
```

**⚠️ PENTING:** Kampus harusnya PERSIS SAMA antara organisasi dan BAA!

---

## 📊 File Yang Berubah

### Setup & Migration
- ✅ `setup-firebase-struktur.html` - **Baru!** Setup page

### Backend
- ✅ `index_baa.html` - Filter pengajuan per kampus (DIUPDATE)
- ✅ `register.html` - Organisasi jadi required field (DIUPDATE)

### Submission Creation (Otomatis catet organisasi & kampus)
- ✅ `index.html` - Pengajuan ruangan
- ✅ `peminjaman.html` - Peminjaman ruangan
- ✅ `peralatan.html` - Peminjaman peralatan  
- ✅ `dispensasi.html` - Dispensasi

---

## 💾 Credentials untuk Testing

### Super Admin
- Email: `admin@simarsip.dev`
- Password: `Admin2026!Simarsip`

### HMIF IDE LPKIA
- Email: `hmif.ide@lpkia.ac.id`
- Password: `HmifIde2026!`

### BAA IDE LPKIA
- Email: `baa.ide@lpkia.ac.id`
- Password: `BaaIde2026!`

---

## 🐛 Troubleshooting

| Problem | Solusi |
|---------|--------|
| BAA lihat pengajuan dari organisasi lain | Pastikan field `kampus` PERSIS SAMA antara BAA & submission |
| Greeting tetap "Hi, Organisasi!" | Pastikan organisasi field di-fill saat registrasi |
| Pengajuan tidak tersimpan | Buka DevTools (F12) → Console, lihat error message |
| Setup page not responding | Pastikan Firebase terkoneksi (check console) |

---

## 📚 Dokumentasi Lengkap

Untuk detail lebih, baca: **FIREBASE_STRUCTURE.md**

---

**Next Step:** 
1. Buka `setup-firebase-struktur.html`
2. Jalankan 3 task
3. Test login dengan credentials yang diberikan
4. Buat pengajuan baru → verify organisasi & kampus tercatat di Firebase

Butuh bantuan? Cek console browser (F12) untuk error details!
