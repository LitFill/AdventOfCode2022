import { parseLines as pl } from "../utils/index.js";
import { matrixMax } from "../utils/index.js";
// import { lintas } from "../utils/index.js";

const lines = pl("./day8/day_8_input.txt", false);

// /** @type {number[][]} */
// const trees = [];
//
// for (let i = 0, len = lines.length; i < len; i++) {
// /** @type {number[]} */
// const baris = [];
//
// for (let j = 0; j < lines[i].length; j++) {
//     const pohon = Number(lines[i][j]);
//     baris.push(pohon);
// }
// trees.push(baris);
// }

// console.log(trees[4][3]);
// console.table(trees.splice(0, 5));
// console.log(lintas(trees, 1, 10));

const trees = lines.map((line) => line.split("").map((char) => Number(char)));

const jumlahPohonLuar = 2 * (trees.length + trees[0].length - 2);
// console.log(jumlahPohonLuar);

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

console.log(
    "part 1 Opt: jumlah pohon yang terlihat = %s.",
    hitungPohonTerlihatOpt(trees) + jumlahPohonLuar
);
console.log(
    "part 2 Opt: skor pohon maksimal = %s.",
    matrixMax(hitungSkorPohonOpt(trees))
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

/**
 * @description menghitung jumlah pohon yang terlihat dari luar hutan
 * @param {number[][]} grid
 * @return {number} jumlah pohon yang terlihat
 */
function hitungPohonTerlihatOpt(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let pohonTerlihat = 0;

    grid.forEach((row, i) => {
        row.forEach((pohonSekarang, j) => {
            const visible = isPohonTerlihat(grid, i, j, rows, cols);
            if (visible) {
                pohonTerlihat++;
            }
        });
    });

    return pohonTerlihat;
}

/**
 * @description Mengembalikan true jika pohon pada koordinat (i, j) terlihat dari luar hutan.
 * @param {number[][]} grid
 * @param {number} i
 * @param {number} j
 * @param {number} rows
 * @param {number} cols
 * @return {boolean}
 */
function isPohonTerlihat(grid, i, j, rows, cols) {
    const pohonSekarang = grid[i][j];
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    for (const [dx, dy] of directions) {
        let x = i + dx;
        let y = j + dy;
        while (x >= 0 && x < rows && y >= 0 && y < cols) {
            if (grid[x][y] >= pohonSekarang) {
                return false;
            }
            x += dx;
            y += dy;
        }
    }

    return true;
}

/**
 * @description menghitung skor scenic pohon didalam grid
 * @param {number[][]} grid
 * @return {number[][]}
 */
function hitungSkorPohonOpt(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const skor = Array.from({ length: rows }, () => Array(cols).fill(0));

    grid.forEach((row, i) => {
        row.forEach((pohonSekarang, j) => {
            const skorPohon = calculatePohonSkor(grid, i, j);
            skor[i][j] = skorPohon;
        });
    });

    return skor;
}

/**
 * @description Menghitung skor pohon pada koordinat (i, j) berdasarkan ketinggian sekitarnya.
 * @param {number[][]} grid
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
function calculatePohonSkor(grid, i, j) {
    const pohonSekarang = grid[i][j];
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    let skorPohon = 1;

    for (const [dx, dy] of directions) {
        let x = i + dx;
        let y = j + dy;
        while (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
            if (grid[x][y] >= pohonSekarang) {
                break;
            }
            skorPohon++;
            x += dx;
            y += dy;
        }
    }

    return skorPohon;
}
