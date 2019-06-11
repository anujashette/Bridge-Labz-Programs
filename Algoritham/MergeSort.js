var list=require('readline-sync').question('Enter string list:')
 list=list.split(' ')
var low=0,high=list.length,mid=0
mergeSort(low,high)

function mergeSort(low,high)
{

    if(low<high)
    {
        mid=Math.floor((low+high)/2)
        mergeSort(low , mid)                    // Left hand side list
        mergeSort(mid+1,high)                     // Right hand side list
        merge(low,high)
    }
}

function merge(low,high)
{
    // console.log(low , mid, high)
    for (var i = low; i < high; i++) {
        for(var j=low;j<high-i;j++)
        {
        if (list[j] > list[j+1]) {

            var temp = list[j]
            list[j] = list[j+1]
            list[j+1] = temp
        }
    }
    }

}

console.log(list)