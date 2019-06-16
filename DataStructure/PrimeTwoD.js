
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node PrimeTwoD.js
 *  Execution:    node PrimeTwoD.js
 *  
 *  Purpose:     Take a range of 0 - 1000 Numbers and find the Prime numbers in 
 *               that range. Store the prime numbers in a 2D Array, the first dimension 
 *               represents the range 0-100, 100-200, and so on.
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   15-06-2019
 * 
 ******************************************************************************/

var r=10,c=100,j=0,no=0
var max =0
var TempArray = []
var Twoarray=new Array(r)


 function primeNo() {

    var index = 0
    max+=100
    var counter = 0
    var array=new Array()

    for ( no = no; no <=max ; no++) {
        counter = 0
        for (var i = 1; i <= no; i++) {
            if (no % i == 0) {
                counter++
            }
        }
        if (counter == 2) {
            
            array[index] = no
            index++
        }
    }
  
    return array
}

function Dimension()
{
    TempArray=primeNo();
    for (var i = 0; i < r; i++) {
        Twoarray[i] = new Array(r)
    }
    for (var i = 0; i < r; i++) {

        for (j = 0; j < TempArray.length; j++) {
            Twoarray[i][j]=TempArray[j]

        }
        
        TempArray=primeNo();
    }
}

try{
    Dimension()
    displayBoard(Twoarray)
}
catch(e)
{
    console.log('Error',e)
}

function displayBoard(board){
    var buffer = '';
    for (var i = 0; i < board.length; i++) {
       for (var x = 0; x < board[i].length; x++) {
         buffer += board[i][x]+',';
       }
       buffer += '\n \n';
    }
    console.log(buffer);
 }


// var ref = require('../Utility/PrimeTwoD')

// ref.util.primeTwo();