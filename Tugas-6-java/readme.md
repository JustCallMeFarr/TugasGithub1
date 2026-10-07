# Tugas Pertemuan 6 JavaScript

Tugas ini terdiri dari dua file:

- `data.js` : berisi 10 data awal menggunakan Array of Object.
- `controller.js` : berisi program untuk melihat, menambah, dan menghapus data melalui terminal.

## Fitur Program

Program memiliki beberapa fitur utama:

1. Menampilkan data menggunakan `map()`.
2. Menambahkan data baru menggunakan `push()`.
3. Menghapus data menggunakan `splice()`.
4. Program dapat dijalankan secara interaktif melalui terminal.
5. Data yang ditampilkan saat pertama kali dijalankan merupakan data awal yang terdapat di `data.js`.

## Menu Program

Saat program dijalankan, tersedia beberapa pilihan:

1. **Lihat data**  
   Menampilkan seluruh data yang tersedia.

2. **Tambah data**  
   Meminta pengguna memasukkan nama, umur, alamat, dan email, kemudian data tersebut ditambahkan ke dalam array.

3. **Hapus data**  
   Menampilkan daftar data dan meminta pengguna memilih nomor data yang ingin dihapus.

4. **Keluar**  
   Mengakhiri program.

## Cara Menjalankan

Pastikan Node.js sudah terpasang di komputer.

Buka terminal pada folder tugas, kemudian jalankan perintah:

```bash
node controller.js
