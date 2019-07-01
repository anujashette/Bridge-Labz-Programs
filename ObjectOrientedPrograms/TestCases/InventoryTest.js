// const assert = require('chai').assert;

// var fs = require('fs');

// var fs = require("fs");
// var value = 0

//     // JSON file reading
//     var content = fs.readFileSync('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/Inventory/Product.json');
//     var flag = false
//     // Parsing JSON oject into string.
//     content = JSON.parse(content)

// // Getting details from JSON to calculate total price.

//     for (var i = 0; i < 3; i++) {
//         var weight = require('readline-sync').question('\nEnter weight in Kg to buy ' + content.inventory.rice[i].name + ' ');
//        value= calculate(content.inventory.rice[i].name, weight, content.inventory.rice[i].price)
//         price = content.inventory.rice[i].price;

//         describe('Test calculate() function', function () {
//             it('ensure  that details read from json file', function () {
//                 assert.equal(value,weight*price)
//             });
//         });

//         weight = require('readline-sync').question('\nEnter weight in Kg to buy ' + content.inventory.wheat[i].name + ' ');
//         value=calculate(content.inventory.wheat[i].name, weight, content.inventory.wheat[i].price)
//         price = content.inventory.wheat[i].price
//         describe('Test calculate() function', function () {
//             it('ensure  that details read from json file', function () {
//                 assert.equal(value,weight*price)
//             });
//         });

//         weight = require('readline-sync').question('\nEnter weight in Kg to buy ' + content.inventory.pulses[i].name + ' ');
//        value= calculate(content.inventory.pulses[i].name, weight, content.inventory.pulses[i].price)
//         price = content.inventory.pulses[i].price
//         describe('Test calculate() function', function () {
//             it('ensure  that details read from json file', function () {
//                 assert.equal(value,weight*price)
//             });
//         });
//     }


// // calculating price for total weight.
// function calculate(name, weight, pkg) {
//     value = weight * pkg;
//     console.log('                                            ')
//     console.log('  Name :' + name + '     weight: ' + weight + '    Price/Kg: ' + pkg + '     Total Rs: ' + value + '    ')
//     return value;
// }

