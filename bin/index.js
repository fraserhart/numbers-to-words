#!/usr/bin/env node
const numbersToWords = require("./numbersToWords");
var args = process.argv.slice(2);
console.log(numbersToWords(args[0]));
