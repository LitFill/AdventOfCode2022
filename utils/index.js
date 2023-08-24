const fs = require("fs");

/**
 * Membaca dan mem-parsing isi berkas menjadi array berisi baris-baris.
 *
 * @param {string} fileName - Nama berkas yang akan dibaca dan diproses.
 * @param {boolean} trim - Opsi untuk memotong spasi pada setiap baris jika diaktifkan.
 * @returns {string[]} Array yang berisi baris-baris dari berkas yang diproses.
 */
function parseLines(fileName, trim) {
    const contents = fs.readFileSync(fileName).toString().split("\n");
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
function parseInput(fileName) {
    readFileSync(fileName).toString();
}

module.exports = {
    parseLines,
    parseInput,
};
