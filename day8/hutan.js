import { parseLines as pl } from "../utils/index.js";
import { matrixMax } from "../utils/index.js";
// import { lintas } from "../utils/index.js";

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

// console.log(trees[4][3]);
// console.table(trees.splice(0, 5));
// console.log(lintas(trees, 1, 10));

const jumlahPohonLuar = 2 * (trees.length + trees[0].length - 2);
console.log(jumlahPohonLuar);

console.log(
    "part 1: jumlah pohon yang terlihat = %s.",
    hitungPohonTerlihat(trees) + jumlahPohonLuar
);
// console.log(
//     `part 1: jumlah pohon yang terlihat = ${
//         hitungPohonTerlihat(trees) + jumlahPohonLuar
//     }`
// );

console.log(
    "part 2: skor pohon maksimal = %s.",
    matrixMax(hitungSkorPohon(trees))
);

/**
 * @description menghitung jumlah pohon yang terlihat dari luar hutan
 * @author LitFill
 * @date 23/09/2023
 * @param {number[][]} grid
 * @return {number} jumlah pohon yang terlihat
 */
function hitungPohonTerlihat(grid) {
    const jumlahBaris = grid.length;
    const jumlahKolom = grid[0].length;
    let pohonTerlihat = 0;

    for (let i = 1; i < jumlahBaris - 1; i++) {
        for (let j = 1; j < jumlahKolom - 1; j++) {
            const pohonSekarang = grid[i][j];
            /** @type {number[]} */
            const arrayArahTerlihat = new Array(4).fill(1);

            for (let k = i - 1; k >= 0; k--) {
                if (pohonSekarang <= grid[k][j]) {
                    arrayArahTerlihat[0] = 0;
                    break;
                }
            }
            for (let k = i + 1; k < jumlahBaris; k++) {
                if (pohonSekarang <= grid[k][j]) {
                    arrayArahTerlihat[1] = 0;
                    break;
                }
            }
            for (let l = j - 1; l >= 0; l--) {
                if (pohonSekarang <= grid[i][l]) {
                    arrayArahTerlihat[2] = 0;
                    break;
                }
            }
            for (let l = j + 1; l < jumlahKolom; l++) {
                if (pohonSekarang <= grid[i][l]) {
                    arrayArahTerlihat[3] = 0;
                    break;
                }
            }

            if (arrayArahTerlihat.reduce((a, b) => a + b)) {
                pohonTerlihat++;
            }
        }
    }
    return pohonTerlihat;
}
/**
 * @description menghitung skor scenic pohon didalam grid
 * @author LitFill
 * @date 23/09/2023
 * @param {number[][]} grid
 * @return {number[][]}
 */
function hitungSkorPohon(grid) {
    const jumlahBaris = grid.length;
    const jumlahKolom = grid[0].length;
    /** @type {number[][]} */
    let skor = new Array(jumlahBaris);

    for (let i = 0; i < jumlahBaris; i++) {
        skor[i] = new Array(jumlahKolom);
    }

    for (let i = 0; i < jumlahBaris; i++) {
        for (let j = 0; j < jumlahKolom; j++) {
            const pohonSekarang = grid[i][j];
            /** @type {number[]} */
            const arraySkorPohon = new Array(4).fill(0);

            for (let k = i - 1; k >= 0; k--) {
                arraySkorPohon[0]++;
                if (pohonSekarang <= grid[k][j]) {
                    break;
                }
            }
            for (let k = i + 1; k < jumlahBaris; k++) {
                arraySkorPohon[1]++;
                if (pohonSekarang <= grid[k][j]) {
                    break;
                }
            }
            for (let l = j - 1; l >= 0; l--) {
                arraySkorPohon[2]++;
                if (pohonSekarang <= grid[i][l]) {
                    break;
                }
            }
            for (let l = j + 1; l < jumlahKolom; l++) {
                arraySkorPohon[3]++;
                if (pohonSekarang <= grid[i][l]) {
                    break;
                }
            }
            skor[i][j] = arraySkorPohon.reduce((a, b) => a * b);
        }
    }
    return skor;
}
