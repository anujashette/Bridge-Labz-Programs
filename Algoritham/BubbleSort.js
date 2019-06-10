//var arr = [57, 67546, 76,4, 455, 8, 15, 2165, 51, 12]

var n=require(`readline-sync`).question('Enter length')
var arr=new Array()
for(var i=0;i<n-1;i++)
{
    arr[i]=require(`readline-sync`).question('Enter array')

}
for(var i=0;i<arr.length-1;i++)
{
    for(var j=0;j<arr.length-i-1;j++)
    {
        if(parseInt(arr[j])>parseInt(arr[j+1]))
        {
            var temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}

console.log(arr)