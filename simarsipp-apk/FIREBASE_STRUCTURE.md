# 📋 Firebase Structure & Routing Flow - SIMARSIP

## Overview
Sistem SIMARSIP menggunakan struktur Firebase yang dirancang untuk mengarahkan pengajuan ke BAA yang sesuai berdasarkan kampus.

---

## 1. Struktur Data Firebase

### Users Node
```
/users/
├── user_1 (admin)
│   ├── name: "Admin Simarsip"
│   ├── role: "Admin Simarsip"
│   ├── email: "admin@simarsip.dev"
│   └── Password: Admin2026!Simarsip
│
├── user_2 (organisasi A)
│   ├── name: "Budi Santoso"
│   ├── organisasi: "Institut Digital Ekonomi LPKIA (IDE LPKIA)"
│   ├── kampus: "IDE LPKIA - Jl. Soekarno-Hatta No.456, Batununggal..."
│   ├── role: "organisasi"
│   ├── email: "hmif.ide@lpkia.ac.id"
│   └── password: "HmifIde2026!"
│
└── user_3 (BAA Kampus)
    ├── name: "BAA IDE LPKIA"
    ├── kampus: "IDE LPKIA - Jl. Soekarno-Hatta No.456, Batununggal..."
    ├── role: "BAA"
    ├── email: "baa.ide@lpkia.ac.id"
    └── password: "BaaIde2026!"
```

### Pengajuan (Submissions) Node
```
/pengajuan/
├── ruangan/
│   └── submission_1
│       ├── title: "Rapat Koordinasi BEM"
│       ├── room: "Ruang 101"
│       ├── date: "2026-04-15"
│       ├── status: "pending"
│       ├── organisasi: "Institut Digital Ekonomi LPKIA (IDE LPKIA)" ← PENTING!
│       ├── kampus: "IDE LPKIA - Jl. Soekarno-Hatta No.456..." ← PENTING!
│       └── createdAt: "2026-04-10T10:00:00Z"
│
├── peralatan/
│   └── submission_2
│       ├── title: "Peminjaman Proyektor"
│       ├── equipmentName: "Proyektor Epson"
│       ├── status: "pending"
│       ├── organisasi: "Institut Digital Ekonomi LPKIA (IDE LPKIA)"
│       ├── kampus: "IDE LPKIA - Jl. Soekarno-Hatta No.456..."
│       └── createdAt: "2026-04-09T14:00:00Z"
│
└── dispensasi/
    └── submission_3
        ├── title: "Dispensasi Lomba Debat"
        ├── status: "pending"
        ├── organisasi: "Institut Digital Ekonomi LPKIA (IDE LPKIA)"
        ├── kampus: "IDE LPKIA - Jl. Soekarno-Hatta No.456..."
        └── createdAt: "2026-04-08T11:00:00Z"
```

---

## 2. Flow Pengajuan

### Flow Diagram:
```
[ORGANISASI USER REGISTRASI]
        ↓
    organisasi: "Institut Digital Ekonomi LPKIA (IDE LPKIA)"
    kampus: "IDE LPKIA - Jl. Soekarno-Hatta..."
        ↓
[BUAT PENGAJUAN (Ruangan/Peralatan/Dispensasi)]
        ↓
Otomatis dicatat dengan:
    organisasi: dari loggedUser.organisasi
    kampus: dari loggedUser.kampus
        ↓
[SIMPAN KE FIREBASE]
    /pengajuan/ruangan/{id}
    /pengajuan/peralatan/{id}
    /pengajuan/dispensasi/{id}
        ↓
[BAA DASHBOARD]
    Filter berdasarkan BAA.kampus
    Tampilkan hanya pengajuan dengan kampus yang sama
        ↓
[BAA APPROVE/REJECT]
    Update status ke Firebase
```

---

## 3. Cara Setup Data Awal

### Step 1: Buka Setup Page
```
1. Buka browser → http://localhost/simarsip-apk/setup-firebase-struktur.html
   (atau sesuai host Anda)
```

### Step 2: Jalankan Setup Tasks

#### Task 1: Buat Akun Organisasi HMIF IDE LPKIA ✓
- Klik tombol **"Buat Akun HMIF IDE LPKIA"**
- Hasil: Akun dibuat dengan:
  ```
  📧 Email: hmif.ide@lpkia.ac.id
  🔐 Password: HmifIde2026!
  🏢 Organisasi: Institut Digital Ekonomi LPKIA (IDE LPKIA)
  📍 Kampus: IDE LPKIA - Jl. Soekarno-Hatta No.456...
  ```

#### Task 2: Migrasi Data Pengajuan ✓
- Klik tombol **"Migrasi Data Pengajuan"**
- Hasil: Semua pengajuan surat yang sudah ada akan diupdate dengan:
  ```
  organisasi: "Institut Digital Ekonomi LPKIA (IDE LPKIA)"
  kampus: "IDE LPKIA - Jl. Soekarno-Hatta No.456..."
  ```

#### Task 3: Buat Akun BAA untuk IDE LPKIA ✓
- Klik tombol **"Buat Akun BAA IDE LPKIA"**
- Hasil: Akun BAA dibuat dengan:
  ```
  📧 Email: baa.ide@lpkia.ac.id
  🔐 Password: BaaIde2026!
  📍 Kampus: IDE LPKIA - Jl. Soekarno-Hatta No.456...
  ```

---

## 4. Login & Testing

### Test 1: Login Sebagai HMIF IDE LPKIA
```
1. Go to: http://localhost/simarsip-apk/login.html
2. Email: hmif.ide@lpkia.ac.id
3. Password: HmifIde2026!
4. Pilih Kampus: IDE LPKIA
5. Login
6. Akan melihat greeting: "Hi, Institut Digital Ekonomi LPKIA (IDE LPKIA)!"
7. Buat pengajuan (ruangan/peralatan/dispensasi)
   → Data akan otomatis tersimpan dengan organisasi & kampus
```

### Test 2: Login Sebagai BAA IDE LPKIA
```
1. Go to: http://localhost/simarsip-apk/login.html
2. Email: baa.ide@lpkia.ac.id
3. Password: BaaIde2026!
4. Pilih Kampus: IDE LPKIA (isi sendiri karena BAA)
5. Login ke Dashboard BAA
6. Akan hanya melihat pengajuan dari IDE LPKIA
   (Pengajuan dari organisasi/kampus lain TIDAK akan ditampilkan)
```

---

## 5. Cara Menambah Kampus & Organisasi Baru

### Jika ingin menambah organisasi dari kampus lain:

#### Step 1: Buat Akun Organisasi Baru
```javascript
// Manual di Firebase Console atau buat helper page
{
  name: "[Nama Ketua Organisasi]",
  email: "[email]@example.com",
  password: "[password]",
  organisasi: "[Nama Organisasi]",
  kampus: "[Alamat Lengkap Kampus]",
  role: "organisasi",
  status: "Aktif"
}
```

#### Step 2: Buat Akun BAA untuk Kampus Itu
```javascript
{
  name: "BAA [Nama Kampus]",
  email: "baa[nama]@example.com",
  password: "[password]",
  kampus: "[Alamat Lengkap Kampus Sama]",
  role: "BAA",
  status: "Aktif"
}
```

#### Step 3: Pastikan Kampus Konsisten
- User organisasi harus punya `kampus` yang SAMA dengan BAA
- Contoh:
  ```
  ORGANISASI:
  kampus: "IDE LPKIA - Jl. Soekarno-Hatta No.456..."
  
  BAA:
  kampus: "IDE LPKIA - Jl. Soekarno-Hatta No.456..." ← HARUS SAMA!
  ```

---

## 6. File-File Yang Diupdate

### Backend Logic:
- ✅ `index_baa.html` - Filter pengajuan berdasarkan kampus BAA
- ✅ `setup-firebase-struktur.html` - Setup & migrasi data

### Submission Creation:
- ✅ `index.html` - Pengajuan ruangan
- ✅ `peminjaman.html` - Peminjaman ruangan
- ✅ `peralatan.html` - Peminjaman peralatan
- ✅ `dispensasi.html` - Pengajuan dispensasi

Semua file di atas sekarang otomatis menambahkan:
```javascript
organisasi: loggedUser.organisasi,
kampus: loggedUser.kampus
```

---

## 7. Verifikasi Data di Firebase Console

Untuk memverifikasi setup berhasil, buka Firebase Console:

### Users
```
https://console.firebase.google.com/project/simarsip-apk/database
→ users
  → Cari: hmif.ide@lpkia.ac.id
    Fields harus ada: organisasi, kampus, role: "organisasi"
  → Cari: baa.ide@lpkia.ac.id
    Fields harus ada: kampus, role: "BAA"
```

### Pengajuan
```
/pengajuan/ruangan/
  → Setiap item harus punya: organisasi, kampus
```

---

## 8. Troubleshooting

### Problem: BAA melihat pengajuan dari organisasi lain
**Solusi:** Pastikan `kampus` field di:
- BAA user
- Submission data
...PERSIS SAMA (case-sensitive, spasi, tanda baca semuanya harus sama)

### Problem: Pengajuan tidak tersimpan dengan kampus
**Solusi:** 
1. Pastikan user sudah login
2. Check localStorage bahwa `loggedUser` memiliki field `organisasi` dan `kampus`
3. Buka console (F12) untuk lihat error

### Problem: Setup page tidak bekerja
**Solusi:**
1. Pastikan Firebase terkoneksi (check console log)
2. Pastikan di file yang sama dengan HMIF setup page

---

## 9. Credentials untuk Testing

### Super Admin (Dashboard Admin)
```
📧 Email: admin@simarsip.dev
🔐 Password: Admin2026!Simarsip
```

### Organisasi HMIF IDE LPKIA
```
📧 Email: hmif.ide@lpkia.ac.id
🔐 Password: HmifIde2026!
```

### BAA IDE LPKIA
```
📧 Email: baa.ide@lpkia.ac.id
🔐 Password: BaaIde2026!
```

---

## 10. Best Practices

✅ **DO:**
- Selalu gunakan NAMA KAMPUS yang sama untuk organisasi & BAA-nya
- Simpan credentials di tempat aman (jangan commit ke Git)
- Test login sebelum memberikan ke user

❌ **DON'T:**
- Jangan membuat organisasi tanpa BAA yang sesuai
- Jangan mengubah `kampus` field setelah data sudah ada
- Jangan menggunakan nama kampus yang berbeda-beda untuk organisasi sama

---

**Last Updated:** 2026-04-15
**Versi:** 1.0
