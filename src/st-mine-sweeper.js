import { NotImplementedError } from '../extensions/index.js';

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
export default function minesweeper (matrix) {
  var matrix2 = [...Array(matrix.length)].map(e => Array(matrix[0].length))

  var rowLimit = matrix.length-1;
  var columnLimit = matrix[0].length-1;
  var num = 0
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      num = 0
      for(var x = Math.max(0, i-1); x <= Math.min(i+1, rowLimit); x++) {
        for(var y = Math.max(0, j-1); y <= Math.min(j+1, columnLimit); y++) {
          if((x !== i || y !== j) && matrix[x][y] === true) { num++ }
        }
      }
      matrix2[i][j] = num
    }
  }
  return matrix2
}