function rotate(matrix, direction) {
  const rowsCount = matrix.length
  const [firstRow] = matrix
  const columnsCount = firstRow.length
  const result = []
  for (let row = 0; row < columnsCount; row += 1) {
    result[row] = []
    for (let column = 0; column < rowsCount; column += 1) {
      result[row][column] =
        direction === 'counter-clockwise'
          ? matrix[column][columnsCount - row - 1]
          : matrix[rowsCount - column - 1][row]
    }
  }
  return result
}
