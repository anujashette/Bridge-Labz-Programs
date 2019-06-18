
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node anagramStack.js
 *  Execution:    node anagramStack.js
 *  
 *  Purpose:     Add the Prime Numbers that are Anagram in the Range of 0 - 1000
 *               in a Stack using the Linked List and Print the Anagrams in the
 *               Reverse Order.
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   16-06-2019
 * 
 ******************************************************************************/

 //Anagram taken from AnagramTwoD file.
var reference=require('./AnagramTwoD');
var anagarm=reference.primeAnagram.anagram()

// LinkedList constructor is created to initialize top.
function LinkedList()
{
    this.top=null;
}

// add() function adding elements into stack.
LinkedList.prototype.add = function (data) {
    var node = {
        data: data,
        next: null
    }

    var temp = node;
    temp.next=this.top
    this.top = temp
    
}

// get() function can dislay list of items.
LinkedList.prototype.get = function () {
    output = ''
    current = this.top
    while (current != null) {
        output += current.data
        output += ' '
        current = current.next
    }
    return output
}

// Object creation
var stack = new LinkedList()
for(var i=0; i<anagarm.length;i++)
{
    stack.add(anagarm[i])
}

console.log('Prime anagram in stack using linked list:')
console.log(stack.get())
