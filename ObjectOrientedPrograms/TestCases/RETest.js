// const assert = require('chai').assert;

// // String is read from file.
// var fs = require('fs');
// var expression = fs.readFileSync('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/RegularExpression/expression.txt', 'utf8')

// var name = require('readline-sync').question('Enter your name:')
// var fullname = require('readline-sync').question('Enter your full name:')
// var mobileNo = require('readline-sync').question('Enter your mobile no:')
// var date = new Date()
// date = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()

// // Test case
// describe('Test String', function () {
//     it('ensure  that input is string', function () {

//         assert.isNotNumber(name)
//     });
// });

// // Changes are replaced at indicated string <<>>.
// expression = expression.replace('<<name>>', name)

// // Test case
// describe('Test String', function () {
//     it('ensure  that input is string', function () {

//         assert.isNotNumber(fullname)
//     });
// });

// expression = expression.replace("<<full name>>", fullname)

// // Test case
// describe('Test Integer', function () {
//     it('ensure  that input is mobile number', function () {

//         assert.isNumber(parseInt(mobileNo));
//         assert.equal(mobileNo.length, 10)
//     });
// });

// // Validation for mobile no.It  should be 10 digits and it is number.
// if (Number.isInteger(parseInt(mobileNo)) && mobileNo.length == 10) {
//     expression = expression.replace("xxxxxxxxxx", mobileNo)
// }
// else {
//     console.log('enter 10 digit no', mobileNo.length)
// }
// expression = expression.replace("XX/XX/XXXX", date)
// console.log(expression)

// // Again write into file
// fs.writeFileSync('expression.txt', expression)
