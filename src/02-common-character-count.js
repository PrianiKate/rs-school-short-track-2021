/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const count = (s) => {
    const dict = new Map();
    for (let i = 0; i < s.length; i++) {
      if (dict.has(s[i])) {
        dict.set(s[i], dict.get(s[i]) + 1);
      } else {
        dict.set(s[i], 1);
      }
    }
    return dict;
  };

  const dict1 = count(s1);
  const dict2 = count(s2);
  let ans = 0;
  dict1.forEach((value, x) => {
    if (dict2.has(x)) {
      ans += Math.min(value, dict2.get(x));
    }
  });
  return ans;
}

module.exports = getCommonCharacterCount;
