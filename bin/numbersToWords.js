const MIN_INPUT = 0;
const MAX_INPUT = 100000;

const SINGLES_LESS_THAN_TWENTY = [
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

const TENS_LESS_THAN_A_HUNDRED = [
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

const WORDS = {
  HUNDRED: "hundred",
  THOUSAND: "thousand",
  AND: "and",
};

const ZERO = 0;
const TEN = 10;
const TWENTY = 20;
const ONE_HUNDRED = 100;
const ONE_THOUSAND = 1000;

const numbersToWords = (number) => {
  if (isNaN(number) || number < MIN_INPUT || number > MAX_INPUT)
    return "invalid input";

  if (number == ZERO) return "zero";

  const numString = "" + number;

  if (numString < TWENTY) {
    return SINGLES_LESS_THAN_TWENTY[parseInt(numString)];
  }

  if (numString < ONE_HUNDRED) {
    if (numString % TEN === 0) {
      return TENS_LESS_THAN_A_HUNDRED[numString / TEN];
    }

    return `${numbersToWords(numString[0] * TEN)}-${numbersToWords(
      numString[1]
    )}`;
  }

  if (numString < ONE_THOUSAND) {
    if (numString % ONE_HUNDRED === 0) {
      return `${numbersToWords(numString[0])} ${WORDS.HUNDRED}`;
    }

    return `${numbersToWords(numString[0])} ${WORDS.HUNDRED} ${
      WORDS.AND
    } ${numbersToWords(numString - numString[0] * ONE_HUNDRED)}`;
  }

  if (numString % ONE_THOUSAND === 0) {
    return `${numbersToWords(numString / ONE_THOUSAND)} ${WORDS.THOUSAND}`;
  }

  const OPTIONAL_AND = numString.slice(-3) < ONE_HUNDRED ? WORDS.AND + " " : "";
  return `${numbersToWords(numString.slice(0, -3))} ${
    WORDS.THOUSAND
  } ${OPTIONAL_AND}${numbersToWords(numString.slice(-3))}`;
};

module.exports = numbersToWords;
