const assert=require('chai').assert;
const expect=require('chai').expect;

var reference=require('/home/admin1/AnujaShette/Node Programs/DataStructure/AnagramTwoD.js');
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

describe('Test add() and get() ',function(){
    it('output should be elements added into Queue',function(){
        for(var i=0; i<anagarm.length;i++)
        {
            queue.add(anagarm[i])
        }
        assert.equal(queue.get(),'13 31 17 71 37 73 79 97 113 131 137 173 139 193 179 197 239 293 313 331 337 373 379 397 419 491 613 631 619 691 919 991 ');
        console.log('Prime anagram in Queue using linked list:')
        console.log(queue.get())
    });
    });