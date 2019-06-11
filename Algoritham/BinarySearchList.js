
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node BinarySearchList.js
 *  Execution:    node BinarySearchList.js
 *  
 *  Purpose:       Read in a list of words from File. Then prompt the user to enter
 *                 a word to search the list. The program reports if the search word is found in the list.
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   06-06-2019
 *
 ******************************************************************************/

var fs = require('fs')
var arrar = 0
var ref = require('./Utility')

/*
Reading file contents from demo.txt
*/

var data = fs.readFileSync('demo.txt', 'utf8');
console.log('List of Name:', data)

arrar = ref.method.BubbleSortString(data);

console.log(arrar)
/*
  Input is taken from user  using prompts.
*/

const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'meaning',
    message: 'Which name you want search?  '
  });


  ref.method.BinarySearchStriing(arrar, response.meaning)

})();
