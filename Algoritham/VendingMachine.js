var amount=parseInt(require('readline-sync').question('Enter note amount:'))

var change=[1000,500,100,50,10,5,2,1]
var noOfNotes=0
var remainingAmt=0
var re=0
console.log('Number of minimum Notes needed to give the change:')
noNotes(amount)
function noNotes(amount)
{
    for(var i=0;i<change.length;i++)
    {

       if(amount>=change[i])
       {    
        noOfNotes=Math.floor(amount/change[i]);
        re=re+noOfNotes
        console.log(change[i]+'--'+noOfNotes)
        remainingAmt=amount%change[i];
        return noNotes(remainingAmt)

       }

    }   
}

console.log('Total No of notes ',re)
