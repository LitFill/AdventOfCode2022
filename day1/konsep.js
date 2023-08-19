const listKalori = [
    [7896, 4992, 1382, 2920, 7533, 2709, 6020, 5321, 2698, 6806, 8008],
    [1340, 1472, 7147, 2707, 5491, 7003, 2337, 1401, 5309, 4385, 2805],
    [6019, 1924, 8917, 6303, 9358, 3640, 1563, 1902],
    [10946, 10333, 8504, 6110, 10157],
    [4578, 1711, 3343, 6159, 4045, 3487, 3070, 5663, 3518, 5839, 5911, 4970, 4852, 4512],
    [4277, 3324, 6172, 8272, 2707, 3292, 6599, 1204, 7030, 3075],
    [6907, 5595, 10251, 8654, 4036, 11545],
    [16787, 11035, 12217],
    [2196, 1519, 5810, 6837, 1193, 6480, 1237, 1659, 4323, 2896, 3878, 2894],
    [15886, 20356, 23636],
    [8795, 7986, 14228, 15738, 13503],
    [6598, 17951, 17508, 2446],
    [1382, 3232, 6467, 2791, 6250, 2704, 3898, 5569, 8676],
    [2582, 8767, 3195, 7957, 6614],
    [24737, 34912],
    [28868, 34308],
    [2703, 20947],
    [5548, 5930, 6705, 4227, 6120, 8723, 4597]
];

const objJumlahKalori = {};
const listJumlahKalori = [];

for (let i = 0; i < listKalori.length; i++) {
    // objJumlahKalori[`${listKalori[i]}`] = jumlahArray(listKalori[i]);
    listJumlahKalori.push(jumlahArray(listKalori[i]));
}

function jumlahArray(array) {
    let jumlah = 0;
    for (let i = 0; i < array.length; i++) {
        jumlah += array[i];
    }
    return jumlah;
}

// console.log(objJumlahKalori);
console.log(listJumlahKalori);
console.log(`total: ${jumlahArray(listJumlahKalori)}, mean: ${Math.ceil(jumlahArray(listJumlahKalori)/listJumlahKalori.length)}`);
console.log(maxOfArray(listJumlahKalori));
// console.log(jumlahArray(listKalori[2]));

function maxOfArray(array) {
    let maks = 0;
    let index;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maks) {
            maks = array[i];
            index = i;
        }
    }
    return { maks, index };
}