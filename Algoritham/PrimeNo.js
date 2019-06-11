/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node Anagram.js
 *  Execution:    node Anagram.js
 *  
 *  Purpose:     Take a range of 0 - 1000 Numbers and find the Prime numbers in
 *               that range.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since   05-06-2019
 *
 ******************************************************************************/

console.log('Prime no between o to 1000')
var counter=0
for(var no=0;no<=1000;no++)
{
    counter=0
    for(var i=1;i<=no;i++)
    {
        if(no%i==0)
        {
            counter++
        }
    }
    if(counter == 2)
    {
        console.log(no)
    }
   
}