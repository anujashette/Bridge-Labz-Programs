
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node FindDay.js
 *  Execution:    node FindDay.js
 *  
 *  Purpose:    Calculate day of week.  
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   07-06-2019
 *
 ******************************************************************************/

var d = parseInt(process.argv[2])
var m = parseInt(process.argv[3])
var d = parseInt(process.argv[4])

var day = ['sunday', 'Monday', 'tuesday', 'wednesday', 'Thusday', 'Friday', 'saturday']

y = y - ((14 - m) / 12)
var x = y + y / 4 - y / 100 + y / 400

m = m + 12 * ((14 - m) / 12) - 2
d = (d + x + ((31 * m) / 12)) % 7

console.log(d)
console.log(d = Math.round(d))

//Array index is matched with day that is day of week.

console.log(day[d])