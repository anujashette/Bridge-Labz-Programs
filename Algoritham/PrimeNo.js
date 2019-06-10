console.log('Prime no between o to 1000')
var counter=0
for(var no=0;no<=1000;no++)
{
    counter=0
    for(var i=1;i<=no;i++)
    {
        if(no%i==0)
        {
            counter++
        }
    }
    if(counter == 2)
    {
        console.log(no)
    }
   
}