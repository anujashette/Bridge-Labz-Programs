var fs=require('fs')
var arrar=0
var ref=require('./Utility')
var data = fs.readFileSync('demo.txt','utf8');
console.log('List of Name:',data)

arrar=ref.method.BubbleSortString(data);

console.log(arrar)

const prompts = require('prompts');
 
(async () => {
  const response = await prompts({
    type: 'text',
    name: 'meaning',
    message: 'Which name you want search?  '
  });
 

  ref.method.BinarySearchStriing(arrar,response.meaning)

})();
