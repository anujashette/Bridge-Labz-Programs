
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node GuessNo.js
 *  Execution:    node GuessNo.js
 *  
 *  Purpose:       takes a command-line argument N, asks you to think of a number 
 *                 between 0 and N-1, where N = 2^n, and always guesses the answer with n questions.

 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   06-06-2019
 *
 ******************************************************************************/
var n = process.argv[2]

n = Math.pow(2, n)
console.log(n)
var array = []
for (var i = 0; i < n; i++) {
    array[i] = i
}

/*
    If  guessed no mid less than mid then enter true otherwise enter false.
*/

console.log('guessed no mid less than mid then enter true otherwise enter false.')
var low = 0
var high = array.length - 1
var key = require('readline-sync').question('Enter number:')

while (low <= high) {
    mid = Math.floor((low + high) / 2)
    console.log('number is less than ', mid)
    if (array[mid] == key) {
        console.log('key is found', array[mid], 'position:', mid);
        break;
    }

    else if (array[mid] > key && require('readline-sync').question('true/false')) {
        high = mid - 1
    }

    else if (array[mid] < key) {
        low = mid + 1
    }

    else if (array[mid] !== key) {
        console.log(key, 'key is not found')
    }
}