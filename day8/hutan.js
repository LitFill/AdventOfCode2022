import { parseLines as pl } from "../utils/index.js";
import { lintas } from "../utils/index.js";

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
// console.table(trees.splice(0, 5));
console.log(lintas(trees, 1, 10));

const jumlahPohonLuar = trees.length + trees[0].length - 1;
// console.log(jumlahPohonLuar);

let pohonTerlihat = 0;

for (let i = 1, n = trees.length; i < n - 1; i++) {
    for (let j = 1, m = trees[i].length; j < m - 1; j++) {}
}
