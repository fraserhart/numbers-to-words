#!/usr/bin/env node
const numbersToWords = require("../bin/numbersToWords");
var args = process.argv.slice(2);
console.log(numbersToWords(args[0]));
