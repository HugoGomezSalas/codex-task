import {
  countVowels,
  isPalindrome,
  reverseString
} from "../src/string-utils.js";

describe("reverseString", () => {
  test("invierte una palabra simple", () => {
    expect(reverseString("hola")).toBe("aloh");
  });

  test("mantiene una cadena vacia", () => {
    expect(reverseString("")).toBe("");
  });
});

describe("countVowels", () => {
  test("cuenta correctamente las vocales", () => {
    expect(countVowels("murcielago")).toBe(5);
  });

  test("devuelve 0 si no hay vocales", () => {
    expect(countVowels("rhythm")).toBe(0);
  });
});

describe("isPalindrome", () => {
  test("detecta un palindromo", () => {
    expect(isPalindrome("reconocer")).toBe(true);
  });

  test("detecta una palabra que no es palindromo", () => {
    expect(isPalindrome("javascript")).toBe(false);
  });
});
