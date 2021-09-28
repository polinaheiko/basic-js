import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  var r = 0
    if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i)
    {
      if (arr[i] === '--discard-next') { 
        if (i != arr.length) { 
          arr.splice(i, 2) 
          r = i
        }
        else { arr.splice(i, 1) }
      }
      else if (arr[i] === '--discard-prev') { 
        if (i != 0) { 
          arr.splice(i - 1, 2) 
        }
        else { arr.splice(i, 1) }
        
      }
      else if (arr[i] === '--double-next') { 
        if (i != arr.length) { arr.splice(i, 1, arr[i+1]) }
        else { arr.splice(i, 1) }
      }
      else if (arr[i] === '--double-prev') {
        if (i != 0 && i != r) { arr.splice(i, 1, arr[i-1]) }
        else { arr.splice(i, 1) }
      }
      else {
        i++
      }
    }
    return arr
  }

  throw new Error ("'arr' parameter must be an instance of the Array!")
}
