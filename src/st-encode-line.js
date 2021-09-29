import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let regexp = /[^\w]|(.)\1{0,}/gi
  return str != '' ? str.match(regexp).map(el => (el.length > 1) ? el = el.length+el[0] : el).join('') : ''
}
