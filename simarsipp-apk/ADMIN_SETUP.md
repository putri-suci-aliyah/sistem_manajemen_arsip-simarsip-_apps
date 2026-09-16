# 🔐 SUPER ADMIN SETUP

## Credentials Super Admin

Gunakan credentials berikut untuk login sebagai Super Admin:

```
📧 Email: admin@simarsip.dev
🔐 Password: Admin2026!Simarsip
```

## Cara Setup

1. Buka file `seed-super-admin.html` di browser
2. Form sudah pre-filled dengan credentials di atas
3. Klik tombol **"Buat Super Admin"**
4. Akun akan tersimpan di Firebase Realtime Database
5. Login dengan email dan password di atas + pilih kampus apapun

## Catatan Penting

- ⚠️ Credentials ini HANYA untuk developer/owner
- ⚠️ Jangan dibagikan ke user lain
- ⚠️ Untuk production, implement authentication yang lebih aman
- Role di Firebase: `super_admin`

## Verifkasi

Setelah setup, akun akan tersimpan di:
```
Firebase Realtime Database
└── users/
    └── super_admin_[timestamp]/
        ├── email: admin@simarsip.dev
        ├── password: Admin2026!Simarsip
        ├── name: Super Admin
        ├── role: super_admin
        └── ...
```

Bisa diakses via Firebase Console jika diperlukan.
