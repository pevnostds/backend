# Sistem Informasi Pengolahan Data Bidan Neng (Backend)
Backend dari aplikasi ini dibangun menggunakan Express.js untuk mengelola API yang digunakan oleh aplikasi frontend. Express.js adalah framework minimalis dan fleksibel untuk Node.js yang memungkinkan pembuatan aplikasi web dan API dengan mudah.

## Getting Started
Proyek ini menggunakan [Express.js](https://expressjs.com/) untuk backend.

### Prerequisites
Pastikan Anda telah menginstal perangkat lunak berikut:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

Ikuti langkah-langkah berikut untuk menginstal dan menjalankan backend:

### Clone repository:
```bash
git clone https://github.com/pevnostds/backend.git
cd backend
```

## Install Dependencies  
```
npm instal
```
## Setup Environment Variables:  
Sebelum menjalankan aplikasi, buat file .env di direktori utama dan tentukan variabel lingkungan yang diperlukan.  
Berikut adalah contoh file .env:  
```
PORT=5000
DB_HOST=localhost
DB_USER=your-db-username
DB_PASS=your-db-password
DB_NAME=your-database-name
```
## Start the application:  
Jalankan aplikasi dengan perintah berikut:  
```
npm start
```
Backend Anda akan berjalan di http://localhost:3003.  

## Features
Aplikasi backend ini menyediakan fitur sebagai berikut:  
- Manajemen data pasien
- Pengelolaan data rekam medis pasien
- Laporan
- Sistem autentikasi dan otorisasi menggunakan JWT (JSON Web Token)
- Penggunaan database relasional (misalnya PostgreSQL, MySQL) untuk menyimpan data

## Contributing
Jika Anda ingin berkontribusi pada proyek ini, ikuti langkah-langkah berikut:  
- Fork repositori ini.
- Buat branch baru untuk fitur atau perbaikan yang Anda inginkan ``` (git checkout -b fitur-anda).  ```
- Commit perubahan Anda ``` (git commit -m 'Menambahkan fitur baru').  ```
- Push branch ke repositori fork Anda ``` (git push origin fitur-anda).  ```
- Buat pull request untuk menggabungkan perubahan Anda ke repositori utama.


