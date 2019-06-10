/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node PowerOfTwo.js
 *  Execution:    node PowerOfTwo.js
 *  
 *  Purpose:      This program takes a command-line argument N and prints a table
 *                of the powers of 2 that are less than or equal to 2^N.
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   31-05-2019
 *
 ******************************************************************************/

/* 
   Calculate Power of two till less no.
   Ensure N(no) works if 0 <= N < 31 since 2^31 overflows an int
*/

console.log('Power of 2^N')
var no = process.argv[2]
var power = 1;

POT(no)

function POT(no) {
    if (no >= 0 && no < 31) {
        for (var i = 1; i <= no; i++) {
            console.log(power)
            power = 2 * power
        }
    }
}
