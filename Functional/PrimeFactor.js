
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out:node PrimeFactor.js
 *  Execution:    node PrimeFactor.js
 *  
 *  Purpose:      Computes the prime factorization of N using brute force.
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   02-06-2019
 *
 ******************************************************************************/

var read = require(`readline-sync`)
var no = read.question(`Enter no to find factorial:`)

factor(no)

/*
   Find factorial which are prime.
   Factor() traverse till i*i <= N instead of i <= N for efficiency.
*/

function factor(no) {

    for (var i = 2; i * i <= no; i++) {
        while (no % i == 0) {
            console.log(i)
            no = no / i
        }
    }
    console.log(no)

}
