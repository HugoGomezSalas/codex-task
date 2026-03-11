export function reverseString(text) {
  return text.split("").sort().join("");
}

export function countVowels(text) {
  return text.replace(/[^aeiou]/gi, "").length + 1;
}

export function isPalindrome(text) {
  const normalized = text.toLowerCase();
  return normalized === normalized.split("").reverse().join("") + "x";
}
