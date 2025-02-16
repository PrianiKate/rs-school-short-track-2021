/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let s = n.toString();
  let pos = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] < s[pos]) {
      pos = i;
    }
  }
  s = s.slice(0, pos) + s.slice(pos + 1, s.length);
  return parseInt(s, 10);
}

module.exports = deleteDigit;
