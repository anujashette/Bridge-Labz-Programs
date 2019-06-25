
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node RegularExpression.js
 *  Execution:    node RegularExpression.js
 *  
 *  Purpose:     Read in the following message: Hello <<name>>, We have your full 
 *               name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx. 
 *               Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016. 
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   19-06-2019
 * 
 ******************************************************************************/

 // String is read from file.
var fs = require('fs');
var expression= fs.readFileSync('expression.txt','utf8')

var name  = require('readline-sync').question('Enter your name:')
var fullname  = require('readline-sync').question('Enter your full name:')
var mobileNo  = require('readline-sync').question('Enter your mobile no:')
var date  = new Date()
date =date.getDate() +'/'+date.getMonth()+'/'+date.getFullYear()

// Changes are replaced at indicated string <<>>.
expression = expression.replace('<<name>>',name)
  
expression = expression.replace("<<full name>>",fullname)

// Validation for mobile no.It  should be 10 digits and it is number.
if(Number.isInteger(parseInt(mobileNo) )&& mobileNo.length==10)
{
    expression = expression.replace("xxxxxxxxxx",mobileNo)
}
else
{
    console.log('enter 10 digit no',mobileNo.length)
}   
expression = expression.replace("XX/XX/XXXX",date)
console.log(expression)

// Again write into file
fs.writeFileSync('expression.txt',expression)
