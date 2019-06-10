
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node Quadratic.js
 *  Execution:    node Quadratic.js
 *  
 *  Purpose:     Write a program Quadratic.java to find the roots of the equation
 *               a*x*x + b*x + c. Since the equation is x*x, hence there are 2 roots.
 *               The 2 roots of the equation can be found using a formula 
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   04-06-2019
 *
 ******************************************************************************/

var read = require(`readline-sync`)

var a = read.question('Enter value of a')
var b = read.question('Enter value of b')
var c = read.question('Enter value of c')

var delta = b * b - (4 * a * c)                          // delta is calculated
console.log('Delta', delta)

var Root1 = (-b + Math.sqrt(delta)) / (2 * a)            // First root calculated
var Root2 = (-b - Math.sqrt(delta)) / (2 * a)            // Second root calculated

console.log('Root 1 of x', Root1)
console.log('Root 2 of x', Root2)