const assert=require('chai').assert;
const expect=require('chai').expect;

var reference=require('/home/admin1/AnujaShette/Node Programs/DataStructure/AnagramTwoD.js');
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




describe('Test add() and get() ',function(){
    it('output should be elements added into stack and display in reverse order',function(){
        for(var i=0; i<anagarm.length;i++)
        {
            stack.add(anagarm[i])
        }
        assert.equal(stack.get(),'991 919 691 619 631 613 491 419 397 379 373 337 331 313 293 239 197 179 193 139 173 137 131 113 97 79 73 37 71 17 31 13 ');
        
        console.log('Prime anagram in stack using linked list:')
        console.log(stack.get())
    });
    });