
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node StackReport.js
 *  Execution:    node StackReport.js
 *  
 *  Purpose:     Write a program to read in Stock Names, Number of Share, Share Price. 
 *               Print a Stock Report with total value of each Stock and the total value 
 *               of Stock.
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   20-06-2019
 * 
 ******************************************************************************/

var fs = require('fs')
var json = fs.readFileSync('stock.json')
json = JSON.parse(json)
var invest=[]
var totalInvest = 0

// Calculate total value of each Stock.
function calculateReport()
{
    for(var i=0; i<json.stock.length; i++)
    {
        invest[i]= json.stock[i].noofshare * json.stock[i].shareprice
        totalInvest += invest[i]
    }
    return invest;
}

// Display stock report.
function display()
{
    console.log('\t Stock Name \t No of Shares \t    Share Price   \t  investment per stock')
    console.log('\t-------------------------------------------------------------------------------')
    for(var i=0; i<invest.length; i++)
    {
        console.log('\t|'+json.stock[i].name+'\t\t|\t'+json.stock[i].noofshare +'\t|\t'+ json.stock[i].shareprice+' $\t\t|\t'+invest[i]+' $        |') 
    }
}

display(calculateReport())

//total value of Stock.
console.log('Total investment: '+totalInvest+' $')

// exports.report={

// }