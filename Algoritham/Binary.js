
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node Binary.js
 *  Execution:    node Binary.js
 *  
 *  Purpose:     convert decimal to Binary using toBinary function and perform the
 *               following functions. i. Swap nibbles and find the new number.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since   06-06-2019
 *
 ******************************************************************************/

/*
    digit - contains decimal number.
    bit   - conatins binary coversion of decimal number
*/
var digit = require('readline-sync').question('Enter any number:')
var bit = parseInt(digit, 10).toString(2)
var mid = 0, low = 0, hihg = 0
var nibble1 = ''
var nibble2 = ''

/*
    Check if no of bits less than 8 then needs to add 0 to complete 
    size of byte. Which helps to divide into 2 nibbles e.g.(decimal - 100, binary -1100100). 
    After initially adding 0 (binary of 100 is 01100100). 
*/
if (bit.length < 8) {
    console.log('converted decimal to binary', (bit = '0' + bit));
    high = bit.length - 1

    /*
        Middle is find to nibble i.e.(two nibbles are (0110) and (0100))
    */
    mid = Math.floor((hihg + low) / 2)

    for (var i = low; i <= mid; i++) {
        nibble1 = nibble1 + bit.charAt(i)
    }

    for (var i = mid + 1; i <= high; i++) {
        nibble2 = nibble2 + bit.charAt(i)
    }

    console.log('Nibble1:', nibble1)
    console.log('Nibble1:', nibble2)
}

/* 
    Swapping of two nibbles i.e.((0100) (0110))
*/

function swap(nibble1, nibble2) {
    var t = nibble1
    nibble1 = nibble2
    nibble2 = t
    console.log('Swapping Nibble1:', nibble1)
    console.log('Nibble1:', nibble2)

    return nibble1 + nibble2
}

bit = swap(nibble1, nibble2)

/*
    Again find decimal of swapped binary nibbles (01000110) == 100
*/
console.log('after swapping decimal  number: ', parseInt(bit, 2).toString(10))


