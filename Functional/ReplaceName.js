/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out:  node ReplaceName.js
 *  Execution:    node ReplaceName.js
 *  
 *  Purpose:      Take user input and Replace String Template “Hello <<UserName>>,
 *                How are you?”
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   31-05-2019
 *
 ******************************************************************************/
var readline = require('readline');
var read = readline.createInterface(process.stdin, process.stdout);
console.log(`Hello <<user name>>! How are you?`);

read.question("Enter your name:", function (answar) {

    check(answar)
    read.close();
});

/*
Check function is used to replace name of user in string 
*/
function check(answar) {
    if (answar.length >= 3) {
        console.log(`Hello ${answar}! How are you?`);
    }
    else {
        console.log(`Enter atleast 3 charecters`)
    }
}
