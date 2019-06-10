
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node Coupon.js
 *  Execution:    node Coupon.js
 *  
 *  Purpose:      Given N distinct Coupon Numbers, how many random numbers do you
 *                need to generate distinct coupon number? This program simulates 
 *                this random process.
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   04-06-2019
 *
 ******************************************************************************/

var n = require('readline-sync').question('Enter no to generate coupons:')
var array = []

/*
   Distinct random coupon no generated using random() function
*/

for (var i = 0; i < n; i++) {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    // randomNo = getRandomInt(0, n)
    array[i] = getRandomInt(0, n)
}

/*
    filer() is used to select only dintinct coupon no.
    In this function element contains array elementand 
    position contains index of array.
*/


uniqueArray = array.filter(function (element, position) {
    return array.indexOf(element) == position;
})

console.log('distinct coupon no:', uniqueArray)
console.log('Total no of distinct:', uniqueArray.length)

