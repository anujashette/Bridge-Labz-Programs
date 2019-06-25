

/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out:node twoDArray.js
 *  Execution:    node twoDArray.js
 *  
 *  Purpose:      A library for reading in 2D arrays of integers, doubles, or
 *                booleans from standard input and printing them out to standard output.
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   04-06-2019
 *
 ******************************************************************************/

 /*
    Input r rows, c Cols, and r * c inputs for 2D Array using readline-sync
 */

var read =  require('readline-sync')
var r=read.question('Enter no of row:')
var c=read.question('Enter no of column:')

var array=new Array(r)

/*
    created 2 dimensional array in memory to read in r rows and c cols
*/

for(var i=0;i<r;i++)
{
    array[i]=new Array(r)
}

for(var i=0;i<r;i++)
{
    for(var j=0;j<c;j++)
    {
        var value=read.question('Enter no of values:')
        console.log(array[i][j]=value)
    }
}
    console.log(array)
