/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node LeapYear.js
 *  Execution:    node LeapYear.js
 *  
 *  Purpose:      Find Leap Year
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   31-05-2019
 *
 ******************************************************************************/

var count = 0;
var readline = require('readline');
var read = readline.createInterface(process.stdin, process.stdout);

read.question("Enter your year:", function (year) {
    var digit = fourDigit(year)
/*
    if year entered by user is 4 digits then it will check leap year or not.
    In case 1900 is not a leap year but 1900 is divided by 4.To check such cases needs to check it is divided by 100 .
    If it is true then that year(1900) is not a leap year.   
*/
    if (digit == 4) {
        if (year % 400 == 0) {
            console.log(`${year} is leap year`)
        }
        else if (year % 100 == 0) {
            console.log(`${year} is not leap year`)
        }
        else if (year % 4 == 0) {
            console.log(`${year} is leap year`)
        }
        else {
            console.log(`${year} is not leap year`)
        }
    }

    else {
        console.log('Enter 4 digit year')

    }
    read.close();

});

/*
    fourDigit() used to ensure year entered by user having 4 digits
*/
function fourDigit(no) {
   
    do {
        no = Math.floor(no / 10)
        count++;
    } while (no1 > 0)

    return count;
}