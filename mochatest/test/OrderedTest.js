const assert=require('chai').assert;
const expect=require('chai').expect;
function LinkedList() {
this.head = null
}

/* Takes input word from file into array and passes to add(data) function.
    First element assiigned to head. Node  contains two fields i.e. data and next.
    data holds items and next holds next node. 
    sorted array.
*/
LinkedList.prototype.add = function (data) {
    var node = {
        data: data,
        next: null
    }

    if (!this.head) {
        this.head = node
    }
    else {
        current = this.head

        while (current.next) {
            current = current.next;
        }
        current.next = node;


        for (var i = 0; i < l.size(); i++) {
            current = this.head
            while (current.next) {
                if (current.data > current.next.data) {
                    temp = current.data
                    current.data = current.next.data
                    current.next.data = temp
                }
                current = current.next
            }
        }

    }
}

// get() function can dislay list of items.
LinkedList.prototype.get = function () {
    output = ''
    current = this.head
    while (current != null) {
        output += current.data
        output += ' '
        current = current.next
    }
    output=output.trim()
    return output
}


// remove(item) element remove item passed into parameter.
//If remove current element then assign current.next to previous.next. 
LinkedList.prototype.remove = function (item) {

    if (!l.isEmpty()) {
        current = this.head;
        previous = current;
        while (current != null) {
            if (this.head.data === item) {
                this.head = current.next
            }
            if (current.data === item) {
                previous.next = current.next;
                console.log('Removed item is:', item, ' == ', current.data);
            }
            previous = current;
            current = current.next;
        }
    }
    else {
        console.log('List is empty.')
    }
}

// Checks weather the list is empty or not.
LinkedList.prototype.isEmpty = function () {

    current = this.head;
    if (current == null) {
        return true;
    }
    else {
        return false;
    }
}

/*
    search a item.If the Word is not found then add it to the list, and if 
    it found then remove the word from the List.
*/
LinkedList.prototype.search = function (item) {
    flag = false;
    if (!l.isEmpty()) {
        current = this.head;

        while (current != null) {
            if (current.data === item) {
                flag = true;
            }

            current = current.next;
        }
    }
    else {
        console.log('List is empty.')
    }

    if (flag == true) {
        l.remove(item)
    }
    else {
        l.add(item)
    }
    return flag;
}
    

// size() returns size of linked list(no of items)
LinkedList.prototype.size = function () {

    items = 0;
    if (!l.isEmpty()) {
        current = this.head;
        while (current != null) {
            items++;
            current = current.next;
        }
    }
    else {
        console.log('List is empty.')
    }
    return items;
}


var fs = require('fs')
let l;
var data = fs.readFileSync('/home/admin1/AnujaShette/mochatest/test/list.txt', 'utf8')
data = data.split(' ')

describe("Tests for this task", function () {
 
    beforeEach(function () {
        l = new LinkedList();
    });
  
        //Test initial state:
            describe("Test initial state", function () {
                it("unorderedAdd should exist", function () {
                    expect(LinkedList.prototype.hasOwnProperty("add")).to.equal(true);
                });
                it("remove should exist", function () {
                    expect(LinkedList.prototype.hasOwnProperty("remove")).to.equal(true);
                });
                it("get should exist", function () {
                    expect(LinkedList.prototype.hasOwnProperty("get")).to.equal(true);
                });
                it("search should exist", function () {
                    expect(LinkedList.prototype.hasOwnProperty("search")).to.equal(true);
                });
                it("isEmpty should exist", function () {
                    expect(LinkedList.prototype.hasOwnProperty("isEmpty")).to.equal(true);
                });
                it("size should exist", function () {
                    expect(LinkedList.prototype.hasOwnProperty("size")).to.equal(true);
                });
            })
            });

            describe('Test add() and get() ',function(){
                    it('output should be elements added into list',function(){
                        l.add(parseInt(data[0]));
                        for (var i = 1; i < data.length; i++) {
                                l.search(parseInt(data[i]));
                            }
                        assert.equal(l.get(),'9 43 56 89 233');
                        console.log('Added items in linked list:')
                        console.log(l.get())
                    });
                    });
                
                    
                    describe('Test search() and remove()',function(){
                            it('output should be elements searched into list',function(){
                                var flag=''
                                if (l.search(parseInt(require('readline-sync').question('\n\nEnter item to be search :'))))
                                        console.log(flag='Item is found')
                                    else
                                        console.log(flag='Item is not found')
                                    console.log(l.get(), '\n')
                            if(flag == 'Item is found')
                                assert.equal(flag,'Item is found');
                            else
                                assert.equal(flag,'Item is not found');    
                            });
                            });

             
                            
describe('Write list again into file',function(){
        it('output should be elements write into file',function(){
            console.log('List is updated into file')
            fs.writeFileSync('/home/admin1/AnujaShette/mochatest/test/list.txt', l.get())
            var data1 = fs.readFileSync('/home/admin1/AnujaShette/mochatest/test/list.txt', 'utf8')

            assert.equal(l.get(),data1);
        });
        });