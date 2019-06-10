
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node Permutation.js
 *  Execution:    node Permutation.js
 *  
 *  Purpose:     Create static functions to return all permutation of a String using 
 *               iterative method and Recursion method.
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   04-06-2019
 *
 ******************************************************************************/

var array=require('readline-sync').question('Enter String :')
array=array.split('')
var len = (array.length - 1) * (array.length);
var flag = 0

/*
    For loops are used to make diffrent permutation of String.
    No of combination should be strng length into string length -1
    i.e.(length of string 3 then (3*2=6) 6 ways to arrange that string).
*/

for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array.length - 1; j++) {
        flag++

        if (flag <= len) {

            console.log(array.join(''))
            array = swap(j, array)
        }
        else {
            break;
        }

    }

}

/*
    Swap function doing different arrangment.
*/

function swap(j, array) {
    var temp = array[j]
    array[j] = array[j + 1]
    array[j + 1] = temp

    return array

}