
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node AnagramQueue.js
 *  Execution:    node AnagramQueue.js
 *  
 *  Purpose:     Add the Prime Numbers that are Anagram in the Range of 0 - 1000
 *               in a Queue using the Linked List and Print the Anagrams from the 
 *               Queue.
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   16-06-2019
 * 
 ******************************************************************************/

var reference=require('./AnagramTwoD');
var anagarm=reference.primeAnagram.anagram()

// LinkedList constructor is created to initialize top.
function LinkedList()
{
    // this.head=null;
    this.front=null;
    this.rear=null;
}

// add() function adding elements into queue.
LinkedList.prototype.add = function (data) {
    var node = {
        data: data,
        next: null
    }

    if (!this.front && !this.rear) {
        this.front = node
        this.rear = node
    }
    else {
        current = this.rear
        current.next = node;
        this.rear = current.next
    }

}

// get() function can dislay list of items.
LinkedList.prototype.get = function () {
    output = ''
    current = this.front
    while (current != null) {
        output += current.data
        output += ' '
        current = current.next
    }
    return output
}
    
var queue = new LinkedList()
for(var i=0; i<anagarm.length;i++)
{
    queue.add(anagarm[i])
}

console.log('Prime anagram in Queue using linked list:')
console.log(queue.get())
