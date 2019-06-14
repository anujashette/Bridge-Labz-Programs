 
class LinkedList {
     constructor()
     {
        this.head = null
     }


 add  (data) {
    var node = {
        data: data,
        next: null
    }

    if (!this.head) {
        this.head = node
    }
    else {
       var current = this.head    
        
            while (current.next) {
                current = current.next;
            }
            current.next = node;

            current = this.head
            while(current.next)
            {
                if(current.data > current.next.data)
                {
                    var temp = current.data
                    current.data = current.next.data
                    current.next.data = temp
                }
                current = current.next
            }
    }
}

// get() function can dislay list of items.
get  () {
     var output = ''
     var current = this.head
    while (current != null) {
        output += current.data
        output += ' '
        current = current.next
    }
//    return output
   console.log(output)
}
}

exports.LinkedList={
    LinkedList
}