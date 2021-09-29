import { NotImplementedError } from '../extensions/index.js';

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
export default function sortByHeight(arr) {
  let len = arr.length;
  let checked;
  let h = 0;
  do {
      checked = false;
      for (let i = 0; i < len; i++) {
        h = 1

        if (arr [i] === -1) {
          continue
        }

        while (arr[i + h] === -1) {
          h++
        }

        if (arr[i] > arr[i + h]) {
          let tmp = arr[i];
          arr[i] = arr[i + h];
          arr[i + h] = tmp;
          checked = true;
        }
      }
  } while (checked);
  return arr;
}
