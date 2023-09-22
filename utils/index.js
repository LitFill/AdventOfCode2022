import { readFileSync as _readFileSync } from "fs";

/**
 * Membaca dan mem-parsing isi berkas menjadi array berisi baris-baris.
 *
 * @param {string} fileName - Nama berkas yang akan dibaca dan diproses.
 * @param {boolean} trim - Opsi untuk memotong spasi pada setiap baris jika diaktifkan.
 * @returns {string[]} Array yang berisi baris-baris dari berkas yang diproses.
 */
export function parseLines(fileName, trim) {
    const contents = _readFileSync(fileName).toString().split("\n");
    contents.pop();
    if (trim) {
        return contents.map((x) => x.trim());
    }
    return contents;
}

/**
 * Membaca dan mengembalikan isi berkas dalam bentuk teks.
 *
 * @param {string} fileName - Nama berkas yang akan dibaca.
 * @returns {string} Isi berkas dalam bentuk teks.
 */
export function parseInput(fileName) {
    _readFileSync(fileName).toString();
}

/**
 * Menjumlah elemen yang ada di sebuah array.
 *
 * @param {number[]} array - Array yang ingin dihitung jumlah elemennya.
 * @returns {number} Jumlah dari semua elemen array.
 */
export function jumlahArray(array) {
    let jumlah = 0;
    for (let i = 0, len = array.length; i < len; i++) {
        jumlah += array[i];
    }
    return jumlah;
}

/**
 * @description Fungsi ini digunakan untuk mengambil item dalam array 2 dimensi
 * @param {any[][]} array - Array 2D yang akan dilintasi.
 * @param {number} arah - Arah perjalanan: atas (0), kanan (1), bawah (2), kiri (3).
 * @param {number} langkah - Jarak perjalanan dari sumber.
 * @param {number[]} indexAwal - Indeks posisi awal dalam array. Default [0, 0].
 * @returns {any} Nilai item yang diambil dari array.
 * @throws {Error} Akan menghasilkan error jika arah yang diberikan tidak valid.
 */
export function lintas(array, arah, langkah, indexAwal = [0, 0]) {
    // Menghitung jumlah baris dan kolom dalam array.
    const jumlahBaris = array.length;
    const jumlahKolom = array[0].length;

    // Inisialisasi indeks terkini dengan salinan dari indeks awal.
    let indexTerkini = [...indexAwal];

    // Melakukan perjalanan sejauh langkah yang ditentukan.
    for (let i = 0; i < langkah; i++) {
        switch (arah) {
            case 0: // Atas
                indexTerkini[0] =
                    (indexTerkini[0] - 1 + jumlahBaris) % jumlahBaris;
                break;
            case 1: // Kanan
                indexTerkini[1] = (indexTerkini[1] + 1) % jumlahKolom;
                break;
            case 2: // Bawah
                indexTerkini[0] = (indexTerkini[0] + 1) % jumlahBaris;
                break;
            case 3: // Kiri
                indexTerkini[1] =
                    (indexTerkini[1] - 1 + jumlahKolom) % jumlahKolom;
                break;
            default:
                throw new Error(
                    "Arah tidak valid. Gunakan 0 untuk atas, 1 untuk kanan, 2 untuk bawah, atau 3 untuk kiri."
                );
        }
    }

    // Mengembalikan nilai item yang diambil dari array.
    return array[indexTerkini[0]][indexTerkini[1]];
}
