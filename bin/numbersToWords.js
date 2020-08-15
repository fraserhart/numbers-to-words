const MIN_INPUT = 0;
const MAX_INPUT = 100000;

const SINGLES = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const TENS = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const HUNDRED = "hundred";
const THOUSAND = "thousand";
const AND = "and";

const numbersToWords = (number) => {
  if (isNaN(number) || number < MIN_INPUT || number > MAX_INPUT)
    return "invalid input";

  if (number == 0) return "zero";

  const numString = "" + number;

  if (numString < 20) {
    return SINGLES[parseInt(numString)];
  }

  if (numString < 100) {
    if (numString % 10 === 0) {
      return TENS[numString / 10];
    }

    return `${numbersToWords(numString[0] * 10)}-${numbersToWords(
      numString[1]
    )}`;
  }

  if (numString < 1000) {
    if (numString % 100 === 0) {
      return `${numbersToWords(numString[0])} ${HUNDRED}`;
    }

    return `${numbersToWords(numString[0])} ${HUNDRED} ${AND} ${numbersToWords(
      numString - numString[0] * 100
    )}`;
  }

  if (numString % 1000 === 0) {
    return `${numbersToWords(numString / 1000)} ${THOUSAND}`;
  }

  const OPTIONAL_AND = numString.slice(-3) < 100 ? AND + " " : "";
  return `${numbersToWords(
    numString.slice(0, -3)
  )} ${THOUSAND} ${OPTIONAL_AND}${numbersToWords(numString.slice(-3))}`;
};

module.exports = numbersToWords;
