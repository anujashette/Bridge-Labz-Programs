// // var re = /(\w+)\s(\w+)/;
// // var str = 'John Smith';
// // var newstr = str.replace(re, '$1, $1');
// // console.log(newstr);


// var text = 'Образец text на русском языке';
// var regex = /[\u0400-\u04FF]+/g;

// var match = regex.exec(text);
// console.log(match[0]);        // logs 'Образец'
// console.log(regex.lastIndex); // logs '7'

// var match2 = regex.exec(text);
// console.log(match2[0]);       // logs 'на' [did not log 'text']
// console.log(regex.lastIndex); // logs '15'
const express = require('express')
const app = express()

app.use(express.json())

app.post('/form', (req, res) => {
  const name  = req.body.name
  const email = req.body.email
  const age   = req.body.age
})

const { check } = require('express-validator/check');
app.post('/form', [
    check('name').isLength({ min: 3 }),
    check('email').isEmail(),
    check('age').isNumeric()
  ], (req, res) => {
    const name  = req.body.name
    const email = req.body.email
    const age   = req.body.age
  })