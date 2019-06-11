
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node MergeSort.js
 *  Execution:    node MergeSort.js
 *  
 *  Purpose:    Write a program with Static Functions to do Merge Sort of list 
 *              of Strings. 
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   09-06-2019
 *
 ******************************************************************************/

var list = require('readline-sync').question('Enter string list:')
list = list.split(' ')
var low = 0, high = list.length, mid = 0
mergeSort(low, high)

//Spliting using recursion calling

function mergeSort(low, high) {
    if (low < high) {
        mid = Math.floor((low + high) / 2)
        mergeSort(low, mid)                           // Left hand side list
        mergeSort(mid + 1, high)                     // Right hand side list
        merge(low, high)
    }
}

//Swapping and merging performed in this function

function merge(low, high) {

    for (var i = low; i < high; i++) {
        for (var j = low; j < high - i; j++) {
            if (list[j] > list[j + 1]) {

                var temp = list[j]
                list[j] = list[j + 1]
                list[j + 1] = temp
            }
        }
    }
}

console.log(list)