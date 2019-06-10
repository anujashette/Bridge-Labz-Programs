
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node Triplet.js
 *  Execution:    node Triplet.js
 *  
 *  Purpose:      A program with cubic running time. Read in N integers and counts the
 *                number of triples that sum to exactly 0.
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   04-06-2019
 *
 ******************************************************************************/

var read = require('readline-sync');
var count=0
var arr = inputreadLineArray()
var flag=false

/*
    Array taken from user
*/

function inputreadLineArray() {
    var l = read.question("How many element you want enter in array");
    var arr = new Array(l);

    console.log("Enter " + l + " element in array");
    for (let index = 0; index < l; index++) {

        arr[index] = Number(read.question(""));
    }
    return arr;
}

/*
   Taken 3 for loop to iterate each no in to Find distinct 
   triples (i, j, k) such that if(a[i] + a[j] + a[k] = 0)
   then triplet is found.
*/

for (var i = 0; i < arr.length - 2; i++) {
    for (var j = i + 1; j < arr.length - 1; j++) {
        for (var k = j + 1; k < arr.length; k++) {
            var sum = arr[i] + arr[j] + arr[k]
            if (sum == 0) {
                console.log(`${arr[i]}+${arr[j]}+${+arr[k]} ==${sum}`)
                count=count+1
                flag = true
            }
        }
    }
}

if (flag == true) {
    console.log('triplet is found')
    console.log('no of triplets found: ',count)
}
else
{
    console.log('triplet is not found')
 
}

