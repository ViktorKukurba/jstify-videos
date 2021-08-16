const num = 1000000000;
const numSepar = 1_000_000_000;

console.log(num === numSepar); // true

const altNum = 1e9;
console.log(num === altNum); // true

const decimalNum = 1.000_121;

const bNum = 0b10_00_01;
const oNum = 0o75_64;
const xNum = 0xab_22_7f;
