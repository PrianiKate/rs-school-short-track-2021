/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const names1 = names;
  for (let i = 0; i < names.length; i++) {
    if (names.indexOf(names[i]) < i) {
      let id = 1;
      while (names) {
        const test = `${names[i]}(${id})`;
        if (names.indexOf(test) === -1 || names.indexOf(test) > i) {
          names1[i] = test;
          break;
        }
        id++;
      }
    }
  }
  return names1;
}

module.exports = renameFiles;
