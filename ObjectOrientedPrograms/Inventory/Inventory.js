
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node Inventory.js
 *  Execution:    node Inventory.js
 *  
 *  Purpose:     Create a JSON file having Inventory Details for Rice, Pulses and 
 *               Wheats with properties name, weight, price per kg.
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   19-06-2019
 * 
 ******************************************************************************/
var fs = require("fs");
var value = 0

// JSON file reading
var content = fs.readFileSync("Product.json");

// Parsing JSON oject into string.
content = JSON.parse(content)

// calculating price for total weight.
function calculate(name, weight, pkg) {
    value = weight * pkg;
    console.log('                                            ')
    console.log('  Name :' + name + '     weight: ' + weight + '    Price/Kg: ' + pkg + '     Total Rs: ' + value + '    ')
    return value;
}

// Getting details from JSON to calculate total price.
for (var i = 0; i < 3; i++) {
    var weight = require('readline-sync').question('\nEnter weight in Kg to buy ' + content.inventory.rice[i].name + ' ');
    calculate(content.inventory.rice[i].name, weight, content.inventory.rice[i].price)

    weight = require('readline-sync').question('\nEnter weight in Kg to buy ' + content.inventory.wheat[i].name + ' ');
    calculate(content.inventory.wheat[i].name, weight, content.inventory.wheat[i].price)

    weight = require('readline-sync').question('\nEnter weight in Kg to buy ' + content.inventory.pulses[i].name + ' ');
    calculate(content.inventory.pulses[i].name, weight, content.inventory.pulses[i].price)
}



// console.log(" \n"+ content.inventory.rice[0].name);
// console.log(" \n"+ content.inventory.rice[0].price);
// console.log(" \n"+ content.inventory.wheat[0].name);
// console.log(" \n"+ content.inventory.wheat[0].price);
// console.log(" \n"+ content.inventory.pulses[1].name);
// console.log(" \n"+ content.inventory.pulses[1].price);