/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node HarmonicNo.js
 *  Execution:    node HarmonicNo.js
 *  
 *  Purpose:      Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N.
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   01-06-2019
 *
 ******************************************************************************/

var readline = require('readline')
var read = readline.createInterface(process.stdin, process.stdout)


/*
   harmonic() function compute (1/1 + 1/2 + 1/3 + ... + 1/N) till N
*/
function harmonic(n) {

    var i = 1
    var harNo = 0

//    Ensure N != 0
    
    if (n != 0) {
        while (i <= n) {
            harNo = harNo + 1 / i
            i++
        }
    }
    console.log(`harmonic of ${n} is ${harNo}`)
}

read.question('Enter Nth no to find :', function (n) {
    harmonic(n)
    read.close()
})
