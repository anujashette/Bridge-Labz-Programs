
function palindrome(no)
{

var temp=no
var rev=0

while(no>0)
{
    var rem=no%10
    rev=(rev*10)+rem
    no=Math.floor(no/10)
    
}
if(temp==rev)
{
    console.log('prime no which is palinrome' , temp)
}
}

