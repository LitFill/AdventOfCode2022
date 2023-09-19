import { parseLines as pl } from "../utils/index.js";

const lines = pl("./day8/day_8_input.txt", false);

const trees = [];

for (let i = 0, len = lines.length; i < len; i++) {
    const baris = [];
    for (let j = 0; j < lines[i].length; j++) {
        const pohon = lines[i][j];
        baris.push(pohon);
    }
    trees.push(baris);
}

console.log(trees[4]);
