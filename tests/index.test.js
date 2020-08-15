const numbersToWords = require("../bin/numbersToWords");

test("the function exists", () => {
  expect(numbersToWords).toBeDefined();
});

test("0 returns zero", () => {
  expect(numbersToWords(0)).toBe("zero");
});

test("out of bounds numbers are rejected", () => {
  expect(numbersToWords(-1)).toBe("invalid input");
  expect(numbersToWords(100001)).toBe("invalid input");
});

test("non numerical input is rejected", () => {
  expect(numbersToWords("asdf")).toBe("invalid input");
  expect(numbersToWords({})).toBe("invalid input");
});

test("single digit numbers", () => {
  expect(numbersToWords(2)).toBe("two");
  expect(numbersToWords(5)).toBe("five");
  expect(numbersToWords(7)).toBe("seven");
  expect(numbersToWords(9)).toBe("nine");
});

test("10 to 19", () => {
  expect(numbersToWords(10)).toBe("ten");
  expect(numbersToWords(15)).toBe("fifteen");
  expect(numbersToWords(17)).toBe("seventeen");
  expect(numbersToWords(19)).toBe("nineteen");
});

test("rounded tens", () => {
  expect(numbersToWords(20)).toBe("twenty");
  expect(numbersToWords(50)).toBe("fifty");
  expect(numbersToWords(90)).toBe("ninety");
});

test("unrounded tens", () => {
  expect(numbersToWords(21)).toBe("twenty-one");
  expect(numbersToWords(48)).toBe("forty-eight");
  expect(numbersToWords(55)).toBe("fifty-five");
  expect(numbersToWords(67)).toBe("sixty-seven");
  expect(numbersToWords(88)).toBe("eighty-eight");
  expect(numbersToWords(99)).toBe("ninety-nine");
});

test("rounded hundreds", () => {
  expect(numbersToWords(100)).toBe("one hundred");
  expect(numbersToWords(600)).toBe("six hundred");
  expect(numbersToWords(300)).toBe("three hundred");
  expect(numbersToWords(900)).toBe("nine hundred");
});

test("unrounded hundreds", () => {
  expect(numbersToWords(101)).toBe("one hundred and one");
  expect(numbersToWords(908)).toBe("nine hundred and eight");
  expect(numbersToWords(766)).toBe("seven hundred and sixty-six");
  expect(numbersToWords(999)).toBe("nine hundred and ninety-nine");
});

test("rounded thousands", () => {
  expect(numbersToWords(1000)).toBe("one thousand");
  expect(numbersToWords(50000)).toBe("fifty thousand");
  expect(numbersToWords(99000)).toBe("ninety-nine thousand");
  expect(numbersToWords(100000)).toBe("one hundred thousand");
});

test("unrounded thousands", () => {
  expect(numbersToWords(1001)).toBe("one thousand and one");
  expect(numbersToWords(50451)).toBe(
    "fifty thousand four hundred and fifty-one"
  );
  expect(numbersToWords(99999)).toBe(
    "ninety-nine thousand nine hundred and ninety-nine"
  );
});
