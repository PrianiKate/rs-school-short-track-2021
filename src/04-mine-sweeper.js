/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const ans = [];
  for (let i = 0; i < n; i++) {
    const tmp = [];
    for (let j = 0; j < m; j++) {
      tmp.push(0);
    }
    ans.push(tmp);
  }
  const dx = [0, 0, 1, 1, 1, -1, -1, -1];
  const dy = [1, -1, 0, 1, -1, 0, 1, -1];
  const out = (x, y) => x < 0 || y < 0 || x >= n || y >= m;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let cnt = 0;
      for (let d = 0; d < 8; d++) {
        if (!out(i + dx[d], j + dy[d]) && matrix[i + dx[d]][j + dy[d]]) {
          cnt++;
        }
      }
      ans[i][j] = cnt;
    }
  }
  return ans;
}

module.exports = minesweeper;
