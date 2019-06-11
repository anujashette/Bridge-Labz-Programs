
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node ToBinary.js
 *  Execution:    node ToBinary.js
 *  
 *  Purpose:   Write a static function toBinary that outputs the binary (base 2) 
 *             representation of the decimal number typed as the input. It is based 
 *             on decomposing the number into a sum of powers of 2.
 * 
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   10-06-2019
 *
 ******************************************************************************/

var digit = require('readline-sync').question('Enetr number :')

//Conversion of  decimal to binary.

var bit = parseInt(digit, 10).toString(2)
bit = bit.toString()
var power = 1
var array = []

// Reverse the binary bits.
var rev = bit.split("").reverse().join('')
console.log('decimal to binary', bit)

/*
    DtoB() function used  to check where 1 is present in binary bits there only assign power of two.
    Power is increment repeatedly. And for first element of binary is 1 then assign 1 or if not assign 0.
*/

class DToB {
    static ToBinary() {
        for (var i = 0; i < rev.length; i++) {
            // console.log(power)
            if (i == 0) {
                if (rev.charAt(i) == 1) {
                    array[i] = 1
                }
            }

            else if (i > 0) {
                if (rev.charAt(i) == 1) {
                    array[i] = power
                }
            }
            power = power * 2

        }
    }
}

DToB.ToBinary()

var a = 0

for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        a += array[i]
    }
}
console.log('Binary to decimal: ', a)
