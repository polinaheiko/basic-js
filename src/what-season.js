import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter']
  
  if (Object.prototype.toString.call(date) === '[object Date]') {
    var datevalidator = date.toString();
    if (date.toString() == datevalidator) {
      return seasons[date.getMonth()]
    }
    else {
      throw new Error ("Invalid date!")
    }
  } 
  else if (isNaN(date) && date != undefined || Number.isInteger(date)) {
    throw new Error ("Invalid date!")
  }
  else {
    return 'Unable to determine the time of year!'
  }


}
