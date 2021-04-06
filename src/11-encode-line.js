/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let ans = '';
  let i = 0;
  while (i < str.length) {
    let cnt = 1;
    let j = i + 1;
    while (j < str.length && str[i] === str[j]) {
      j++;
      cnt++;
    }
    if (cnt > 1) {
      ans += cnt.toString();
    }
    ans += str[i];
    i = j;
  }
  return ans;
}

module.exports = encodeLine;
