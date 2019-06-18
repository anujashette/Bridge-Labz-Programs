
// LinkedList constructor is created to initialize top.
function LinkedList()
{
    this.root=null;
}

// add() function adding elements into stack.
LinkedList.prototype.add = function (data) {
    var node = {
        data: data,
        left: null,
        right: null 
    }

     parent = this.root;
     temp = node;

    if(this.root == null)
    {
        this.root = temp;
    }
    else
    {
        var current = this.root;

        while(current)
        {
            parent = current;
            if(temp.data > current.data)
            {
                current = current.right;
            }
            else
            {
                current = current.left;
            }
        }
        
        if(temp.data > parent.data)
        {
            parent.right = temp;
        }
        else
        {
            parent.left = temp;
        }

    }
   
}


var output = ''
// get() function can dislay list of items.
LinkedList.prototype.get = function (current) {
   
    
        if(current.left)
        {
            bst.get(current.left)
         
        }
        output += current.data
        output += ' '

        if(current.right)
        {
           bst.get(current.right)
           
        }
    
    
    return output
}

var bst = new LinkedList()
for(var i=0; i<5;i++)
{
    bst.add(i)
}

var temp = bst.root
console.log('Prime anagram in stack using linked list:')
console.log(bst.get(temp))
