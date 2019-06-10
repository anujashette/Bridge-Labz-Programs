var read = require('readline-sync');
inputreadLineArray()
function inputreadLineArray() 
{
var l = read.question("How many element you want enter in array");
var arr = new Array(l);

console.log("Enter " + l + " element in array");
for (let index = 0; index < l; index++) {

arr[index] = Number(read.question(""));

}
return arr;
}