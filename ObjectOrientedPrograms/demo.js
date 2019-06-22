var str='56';
var str1='anuja';
var letter = /[:alpha:]+/

// var letter = /[0-9]{1}/g
if(str.match(letter))
{
  console.log('true')
}

// // add data into file
// var fs = require('fs')
// fs.writeFileSync('newfile.json', '[]', function (err) {
//   if (err) throw err;
//   console.log('File is created successfully.');
// }); 

// var file = fs.readFileSync('newfile.json')
// file=JSON.parse(file)


//  var obj ={ name:require('readline-sync').question('enter middle name:'),
//  price:require('readline-sync').question('enter middle name:')}

//  file.push(obj)

// // file.details[0].mname = require('readline-sync').question('enter middle name:')

// file = JSON.stringify(file)
// fs.writeFileSync('newfile.json',file)

// // console.log(file[0].name)


// // var fs = require('fs');
 
// // writeFile function with filename, content and callback function

