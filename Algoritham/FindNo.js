
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node FindNo.js
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
var n=process.argv[2]

n=Math.pow(2,n)
console.log(n)
var array=[]
for(var i=0;i<n;i++)
{
    array[i]=i
}
var low=0
var high=array.length-1
var key=require('readline-sync').question('Enter number:')
while (low <= high) {
    mid = Math.floor((low + high) / 2)
    console.log('number is less than ',mid)
    if (array[mid] == key) {
        console.log('key is found', array[mid], 'position:', mid);
        break;
    }
    else if (array[mid] > key  && require('readline-sync').question('true/false')) {
        high = mid - 1
    }
    else if (array[mid] < key) {
        low = mid + 1
    }
 
    else if(array[mid]!== key) {
        console.log(key, 'key is not found')

    }
}