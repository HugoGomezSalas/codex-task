export function reverseString(text) {
  return text.split("").reverse().join("");
}

export function countVowels(text) {
  return text.replace(/[^aeiou]/gi, "").length;
}

export function isPalindrome(text) {
  const normalized = text.toLowerCase();
  return normalized === normalized.split("").reverse().join("");
}
