exports.prime={
primeNo: function () {

    var arr = new Array()
    var index = 0

    var counter = 0
    for (var no = 0; no <= 1000; no++) {
        counter = 0
        for (var i = 1; i <= no; i++) {
            if (no % i == 0) {
                counter++
            }
        }
        if (counter == 2) {
            //  console.log(no)
            arr[index] = no
            index++
        }

    }
    return arr
}
};


















// //Empty head is declared to assign first node.
// class LinkedList {
//     constructor()
//     {
//         this.head = null
//     }
// }

// /* Takes input word from file into array and passes to add(data) function.
//     First element assiigned to head. Node  contains two fields i.e. data and next.
//     data holds items and next holds next node. 
// */

// LinkedList.prototype.orderedAdd = function (data) {
//     var node = {
//         data: data,
//         next: null
//     }

//     if (!this.head) {
//         this.head = node
//     }
//     else {
//         current = this.head         
//             while (current.next) {
//                 current = current.next;
//             }
           
//             current.next = node;
         
//     }
// }

// // get() function can dislay list of items.
// LinkedList.prototype.get = function () {
//      output = ''
//      current = this.head
//     while (current != null) {
//         output += current.data
//         output += ' '
//         current = current.next
//     }
//    return output
// }

// // remove(item) element remove item passed into parameter.
// //If remove current element then assign current.next to previous.next. 
// LinkedList.prototype.remove = function (item) {

//     if (!l.isEmpty()) 
//     {
//          current = this.head;
//          previous = current;
//         while (current != null)
//          {
//              if(this.head.data === item)
//              {
//                  this.head = current.next
//              }
//             if (current.data === item) 
//             {
//                 previous.next = current.next;
//                 console.log('Removed item is:', item, ' == ', current.data);
//             }
//             previous = current;
//             current = current.next;
//         }
//     }
//     else
//     {
//         console.log('List is empty.')
//     }
// }

// // Checks weather the list is empty or not.
// LinkedList.prototype.isEmpty = function(){

//      current=this.head;
//     if(current == null)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }

// /*
//     search a item.If the Word is not found then add it to the list, and if 
//     it found then remove the word from the List.
// */
// LinkedList.prototype.search = function (item){
//      flag = false;
//     if (!l.isEmpty()) 
//     {
//          current = this.head;
      
//         while (current != null)
//          {
//             if (current.data === item) 
//             {
//                 flag = true;
//             }
            
//             current = current.next;
//         }
//     }
//     else
//     {
//         console.log('List is empty.')
//     }

//     if(flag != true)
//     {
//         l.orderedAdd(item)
//     }
//     else
//     {
//         l.remove(item)
//     }

//     return flag;
// }

// // size() returns size of linked list(no of items)
// LinkedList.prototype.size = function (){

//      items=0;
//     if (!l.isEmpty()) 
//     {
//          current = this.head;
//         while (current != null)
//          {
//             items++;
//             current = current.next;
//         }
//     }
//     else
//     {
//         console.log('List is empty.')
//     }
//     return items;
// }


// let l=new LinkedList()

// exports.LL={
//     LinkedList
// }