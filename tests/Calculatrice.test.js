const Calculatrice = require("../Calculatrice.js");

describe("Add function", () => {
  test("should add 1 and 2 to equal 3", () => {
    let a = 1;
    let b = 2;
    let result = 3;

    expect(Calculatrice.add(a, b)).toEqual(result);
  });
});

describe("Substraction function", () => {
  test("should substract 2 and 1 to equal 1", () => {
    let a = 2;
    let b = 1;
    let result = 1;

    expect(Calculatrice.sub(a, b)).toEqual(result);
  });
});

describe("Multiplication function", () => {
  test("should multiply 2 and 2 to equal 4", () => {
    let a = 2;
    let b = 2;
    let result = 4;

    expect(Calculatrice.mul(a, b)).toEqual(result);
  });
});

describe("Division function", () => {
  test("should divide 4 and 2 to equal 2", () => {
    let a = 4;
    let b = 2;
    let result = 2;

    expect(Calculatrice.div(a, b)).toEqual(result);
  });
});

describe("Average function", () => {
  test("should calculate the avg of array [1, 5, 6, 8, 23] to equal 8.8", () => {
    let a = [1, 5, 6, 9, 23];
    let result = 8.8;

    expect(Calculatrice.avg(a)).toEqual(result);
  });
});
