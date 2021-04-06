/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const can = (val) => val < value;
  let l = 0;
  let r = array.length;
  while (r - l > 1) {
    const mod = (l + r) % 2;
    const mid = (l + r - mod) / 2;
    if (can(array[mid])) {
      l = mid;
    } else {
      r = mid;
    }
  }
  for (let i = l; i <= r; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return l;
}

module.exports = findIndex;
