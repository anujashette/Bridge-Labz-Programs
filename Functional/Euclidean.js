
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node Euclidean.js
 *  Execution:    node Euclidean.js
 *  
 *  Purpose:      Calculate Euclidean distance from the point (x, y) to the origin (0, 0).
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   04-06-2019
 *
 ******************************************************************************/

 /*
      Two integer command-line arguments x and y
 */
var x=process.argv[2]
var y=process.argv[3]

distance(x,y)

/*
    Calculate distance = sqrt(x*x + y*y). Used Math.power function to calculate
    power of x and y.
*/

function distance(x,y)
{
    var euclid=Math.sqrt(Math.pow(x,x)+Math.pow(y,y))
    console.log(`Euclidean distance is `, euclid)
}


