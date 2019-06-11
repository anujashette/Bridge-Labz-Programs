
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node VendingMachine.js
 *  Execution:    node VendingMachine.js
 *  
 *  Purpose:    There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can
 *              be returned by Vending Machine. Write a Program to calculate the 
 *              minimum number of Notes as well as the Notes to be returned by the
 *              Vending Machine as a Change. 
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   10-06-2019
 *
 ******************************************************************************/

var amount = parseInt(require('readline-sync').question('Enter note amount:'))

var change = [1000, 500, 100, 50, 10, 5, 2, 1]
var noOfNotes = 0
var remainingAmt = 0
var re = 0
console.log('Number of minimum Notes needed to give the change:')
noNotes(amount)

/*
    amount should be greater than change.
*/



function noNotes(amount) {
    for (var i = 0; i < change.length; i++) {

        if (amount >= change[i]) {
            noOfNotes = Math.floor(amount / change[i]);                        //number of minimum Note needed to give the change. 
            re = re + noOfNotes
            console.log(change[i] + '--' + noOfNotes)
            remainingAmt = amount % change[i];                                 //Remaining amount.
            return noNotes(remainingAmt)

        }

    }
}

console.log('Total No of notes ', re)                                    // list of Rs Notes that would given in the Change
