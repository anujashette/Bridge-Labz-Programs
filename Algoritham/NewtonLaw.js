
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node temperatureCoversion.js
 *  Execution:    node temperatureCoversion.js
 *  
 *  Purpose:    Write a static function sqrt  to compute the square root of a 
 *              nonnegative number c given in the input using Newton's method:
 * 
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   08-06-2019
 *
 ******************************************************************************/

var c = parseInt(require('readline-sync').question('Enter No:'))
var t = c
var epsilon = 1e-15

while (Math.abs(t - c / t) > epsilon * t) {
    t = (c / t + t) / 2
}

console.log(t)






