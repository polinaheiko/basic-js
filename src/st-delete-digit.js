import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  var arr = [], s = '', original = n.toString()
  for (var i = 0; i < original.length; i++) {
    arr.push(parseInt(original.slice(0,i) + original.slice(i + 1,)))
  }  
  return Math.max.apply(null, arr)
}
