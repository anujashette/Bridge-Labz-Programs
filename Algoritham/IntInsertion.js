
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node IntInsertion.js
 *  Execution:    node IntInsertion.js
 *  
 *  Purpose:     Reads in strings from standard input and prints them in sorted order.
 *               Uses insertion sort.
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   05-06-2019
 *
 ******************************************************************************/

// var arr = [57, 67546, 76,4, 455,65,56,3,98]

var n=require(`readline-sync`).question('Enter length:')
var arr=new Array()
for(var i=0;i<n;i++)
{
    arr[i]=require(`readline-sync`).question('Enter array:')

}

var v=0
for(var i=1;i<arr.length;i++)
{
    v=i
    for(var j=i-1;j>=0;j--)
    {
        if(parseInt(arr[j])>parseInt(arr[v]))
        {
            var temp=arr[j]
            arr[j]=arr[v]
            arr[v]=temp
            v=j
        }
    }
}

    console.log(arr)

