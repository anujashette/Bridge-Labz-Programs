/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node FlipCoin.js
 *  Execution:    node FlipCoin.js
 *  
 *  Purpose:      Flip Coin and print percentage of Heads and Tails
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   01-06-2019
 *
 ******************************************************************************/

var tail=0;
var head=0;
var readline=require('readline');
var read=readline.createInterface(process.stdin,process.stdout);

read.question("Enter no of time to flip coin :",function(answar){

  var num = flip(answar)

    console.log(`Tails ${tail/answar*100}%`)
    console.log(`Heads ${head/answar*100}%`)

    read.close();

});

/*
     Used Random Function to get value between 0 and 1. If random no < 0.5 then tails ortherwise heads.
     head and tails no of counts. 
*/

function flip(answar)
{
    if(answar.length>0)
    {
        for(var i=1;i<=answar;i++)
        {
            var no=Math.random();
            console.log(no)
            if(no<0.5)
            {
                tail++;
            }
            else
            {
                head++;
            }
        }
    }
    console.log(tail,head)
}