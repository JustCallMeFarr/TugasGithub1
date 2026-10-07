// controller.js
// Program sederhana untuk melihat, menambah, dan menghapus data

const data = require("./data");
const readline = require("readline");

// Membuat input dari terminal
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk menampilkan semua data
function lihatData() {
    console.log("\n=== DAFTAR DATA ===");

    if (data.length === 0) {
        console.log("Belum ada data.");
        return;
    }

    data.map((item, index) => {
        console.log(
            `${index + 1}. ${item.nama} | Umur: ${item.umur} | ${item.alamat} | ${item.email}`
        );
    });
}

// Fungsi untuk menambahkan data baru
function tambahData() {
    console.log("\n=== TAMBAH DATA ===");

    input.question("Nama: ", (nama) => {
        input.question("Umur: ", (umur) => {
            input.question("Alamat: ", (alamat) => {
                input.question("Email: ", (email) => {

                    // Menambahkan data baru ke array
                    data.push({
                        nama: nama,
                        umur: Number(umur),
                        alamat: alamat,
                        email: email
                    });

                    console.log("\nData berhasil ditambahkan!");
                    menu();
                });
            });
        });
    });
}

// Fungsi untuk menghapus data
function hapusData() {
    lihatData();

    if (data.length === 0) {
        menu();
        return;
    }

    input.question(
        "\nMasukkan nomor data yang ingin dihapus: ",
        (nomor) => {
            const index = Number(nomor) - 1;

            if (index >= 0 && index < data.length) {
                const dataDihapus = data.splice(index, 1);

                console.log(
                    `\nData "${dataDihapus[0].nama}" berhasil dihapus.`
                );
            } else {
                console.log("\nNomor data tidak ditemukan.");
            }

            menu();
        }
    );
}

// Menu utama
function menu() {
    console.log("\n==============================");
    console.log("   SISTEM MANAJEMEN DATA");
    console.log("==============================");
    console.log("1. Lihat data");
    console.log("2. Tambah data");
    console.log("3. Hapus data");
    console.log("4. Keluar");
    console.log("==============================");

    input.question("Pilih menu: ", (pilihan) => {
        switch (pilihan) {
            case "1":
                lihatData();
                menu();
                break;

            case "2":
                tambahData();
                break;

            case "3":
                hapusData();
                break;

            case "4":
                console.log("\nProgram selesai. Terima kasih!");
                input.close();
                break;

            default:
                console.log("\nPilihan tidak tersedia.");
                menu();
        }
    });
}

// Program dimulai dari menu
console.log("Selamat datang di program manajemen data!");
lihatData();
menu();

