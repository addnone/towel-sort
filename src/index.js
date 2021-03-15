
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let result = [];
  if (Array.isArray(matrix)) {
    matrix.forEach((value, index, array) => {
      index%2 === 0 ? result = result.concat(value) : result = result.concat(value.reverse())
    })
  }
  return result;
}
