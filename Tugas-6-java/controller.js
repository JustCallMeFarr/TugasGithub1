// controller.js
// liat, tambah, hapus data pake data.js

const data = require("./data");

// 1. Preview data pake map
function lihatData() {
    console.log("=== DAFTAR DATA ===");

    data.map((item, index) => {
        console.log(
            `${index + 1}. Nama: ${item.nama}, Umur: ${item.umur}, Alamat: ${item.alamat}, Email: ${item.email}`
        );
    });
}

/// 2. tambah data pake push
function tambahData() {
    data.push(
        {
            nama: "Hendra Wijaya",
            umur: 25,
            alamat: "Jl. Cendana No. 4, Bogor",
            email: "hendra.wijaya@gmail.com"
        },
        {
            nama: "Maya Anggraini",
            umur: 20,
            alamat: "Jl. Anggrek No. 6, Jakarta",
            email: "maya.anggraini@gmail.com"
        }
    );

    console.log("\n=== DATA SETELAH DITAMBAH ===");
    console.log("2 data baru berhasil ditambahkan.");
}

// 3. hapus data
function hapusData(index) {
    if (index >= 0 && index < data.length) {
        const dataDihapus = data.splice(index, 1);
        console.log(`\nData ${dataDihapus[0].nama} berhasil dihapus.`);
    } else {
        console.log("\nIndex data tidak ditemukan.");
    }
}

// execute
lihatData();

tambahData();
lihatData();

hapusData(0);
lihatData();
