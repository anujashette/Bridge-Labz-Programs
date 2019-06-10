
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node Gambler.js
 *  Execution:    node Gambler.js
 *  
 *  Purpose:      Simulates a gambler who start with $stake and place fair $1 
 *                bets until he/she goes broke (i.e. has no money) or reach $goal.
 *                Keeps track of the number of times he/she wins and the number of
 *                bets he/she makes. Run the experiment N times, averages the results,
 *                and prints them out
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   02-06-2019
 *
 ******************************************************************************/

var $stake=require('readline-sync').question('Enter stack amount:')
var $goal=require('readline-sync').question('Enter Goal:')
var noOfTimes=require('readline-sync').question('Enter no Of Times to play:')
var cash=$stake
var track=0
var win=0

/*
    Game is paly till Stack (cash) greater than 0 or goal is achived or no of bets completed
    If random no generate less than 0.5 then he/she win 1$ otherwise loss 1$ each time
*/

for(var i=1;i<=noOfTimes;i++)
{
    
    while(cash>0 && cash<$goal)
    {
        track++
        if(Math.random()<0.5)
        {
            cash++;
            win++;
        }
        else
        {
            cash--;
        }
    }
}

/*
    Print No of times he/she wins.
    Print Percentage win and losss.
*/

console.log('No of times win',win)
console.log('Percentage of win:',(win*100)/track,'%')
console.log('Percentage of loss:',((track-win)*100)/track,'%')
