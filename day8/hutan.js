import { parseLines as pl } from "../utils/index.js";

const lines = pl("./day8/day_8_input.txt", false);
/** @type {number[][]} */
const trees = [];

for (let i = 0, len = lines.length; i < len; i++) {
    /** @type {number[]} */
    const baris = [];
    for (let j = 0; j < lines[i].length; j++) {
        const pohon = Number(lines[i][j]);
        baris.push(pohon);
    }
    trees.push(baris);
}

// console.log(trees[4]);

const jumlahPohonLuar = trees.length + trees[0].length - 1;
// console.log(jumlahPohonLuar);

let pohonTerlihat = 0;

/**
 * @description digunakan untuk mengambil item dalam array 2 dimensi
 * @author LitFill
 * @date 20/09/2023
 * @param {number} arah - arah= atas: 0, kanan: 1, bawah: 2, kiri: 3
 * @param {number} langkah - jarak dari sumber
 *
 * @returns {any} nilai item yang diambil
 */
function lintas(arah, langkah) {}
