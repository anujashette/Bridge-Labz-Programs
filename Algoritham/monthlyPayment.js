
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node MonthlyPayment.js
 *  Execution:    node MonthlyPayment.js
 *  
 *  Purpose:    calculate monthlyPayment that reads in three command-line arguments 
 *              P, Y, and R 
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   08-06-2019
 *
 ******************************************************************************/
var Payment = 0

var P = parseInt(process.argv[2])
var Y = parseInt(process.argv[3])
var R = parseInt(process.argv[4])

class util {
    static PaymentCalculator(P, Y, R) {
        var n = 12 * Y
        var r = R / (12 * 100)

        console.log()
        Payment = P * r / (1 - (Math.pow(1 + r, -n)))

        console.log('Payment', Payment)
    }
}

util.PaymentCalculator(P, Y, R)