import { parseLines } from "../utils/index.js";

const lines = parseLines("./day7/input.txt", true).join(";").split("$ ");

// console.log(lines);

// Constructing the file system by building a tree of sorts
const fs = {
    "/": {},
};

const stack = [fs["/"]];

for (let i = 2; i < lines.length; i++) {
    if (lines[i].includes("cd ")) {
        const [, next] = lines[i].replace(";", "").split(" ");
        if (next === "..") stack.shift();
        else stack.unshift(stack[0][next]);
    } else {
        const contents = lines[i]
            .slice(3, lines[i].length)
            .split(";")
            .filter((x) => x !== "");
        contents.forEach((c) => {
            if (c.includes("dir")) {
                const [, dir] = c.split(" ");
                stack[0][dir] = {};
            } else {
                const [size, name] = c.split(" ");
                stack[0][name] = +size;
            }
        });
    }
}

const totalSize = iterateSum(fs["/"]);
let dirSum = 0;
let dirToDeleteSize = totalSize;

iterate(fs["/"]);

// Part 1
console.log(dirSum);

// Part 2
console.log(dirToDeleteSize);

console.log(fs);

function iterateSum(obj) {
    let res = 0;
    Object.values(obj).forEach((val) => {
        if (typeof val === "object") res += iterateSum(val);
        else res += val;
    });
    return res;

    i;
}

function iterate(obj) {
    Object.values(obj).forEach((val) => {
        if (typeof val === "object") {
            const size = iterateSum(val);
            if (size < 100000) dirSum += size;
            if (
                70000000 - totalSize + size >= 30000000 &&
                size <= dirToDeleteSize
            )
                dirToDeleteSize = size;
            iterate(val);
        }
    });
}
