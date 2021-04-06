/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr1 = arr;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] !== -1 && arr1[j] !== -1 && arr1[j] < arr1[i]) {
        [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
      }
    }
  }
  return arr1;
}

module.exports = sortByHeight;
