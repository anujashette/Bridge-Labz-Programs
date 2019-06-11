
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node WindChill.js
 *  Execution:    node WindChill.js
 *  
 *  Purpose:     Write a program WindChill.java that takes two double command-line
 *               arguments t and v and prints the wind chill. Use Math.pow(a, b) to compute ab. 
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   04-06-2019
 *
 ******************************************************************************/

 /*
    Note: the formula is not valid if t is larger than 50 in absolute value or if v 
    is larger than 120 or less than 3 (you may assume that the values you get are in that range).
 */

console.log(`Please enter temperature less than 50 and wind speed between 3 to 120`);
var w = 0

var t = process.argv[2]
var v = process.argv[3]

console.log(e)

WindCalculate(t, v)

console.log(`Temperature is:`, t)
console.log(`wind speed is:`, v)

/*
    Calculated wind chill based on temperature t (in Fahrenheit) and the wind speed v (in miles per hour).
*/

function WindCalculate(t, v) {
    if (t < 50 && v > 3 && v < 120) {
        w = 35.74 + 0.6215 * t + (42.75 * t - 35.75) * Math.pow(v, 0.16)
        console.log(`Wind Chill is:`, w)
    }
    else {
        console.log(`Temperature must be less than 50 and wind speed between 3 to 120`);
    }
}