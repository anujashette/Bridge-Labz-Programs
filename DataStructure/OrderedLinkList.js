
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node OrderedLinkList.js
 *  Execution:    node OrderedLinkList.js
 *  
 *  Purpose:     Read .a List of Numbers from a file and arrange it ascending 
 *               Order in a Linked List. Take user input for a number, if found 
 *               then pop the number out of the list else insert the number in 
 *               appropriate position
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   14-06-2019
 * 
 ******************************************************************************/

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
        output += ','
        current = current.next
    }
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


let l = new LinkedList()
var fs = require('fs')

try {


    var data = fs.readFileSync('OrderedList.txt', 'utf8')

    data = data.split(',')

    l.add(parseInt(data[0]));
    for (var i = 1; i < data.length; i++) {
        l.search(parseInt(data[i]));
    }

    console.log('Added items in linked list:')
    console.log(l.get())

    if (l.search(parseInt(require('readline-sync').question('\n\nEnter item to be search :'))))
        console.log('Item is found. Removed from the list \n')
    else
        console.log('Item is not found. Added into list')
    console.log(l.get(), '\n')

    console.log('List is updated into file')
    fs.writeFileSync('OrderedList.txt', l.get())
}
catch (e) {
    console.log(e)
}
