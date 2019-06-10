var stop = 0, elapsed = 0
var syart=0

function startM()
{
    start = Date.now();
    console.log("start time=" + start);
}

function stopM()
{
    stop = Date.now();
    console.log("stop time=" + stop);
    elapsed = stop - start;
    console.log("elapsed time=" + elapsed+'ms');
}

var ref = require(`./Utility`)


// console.log('******************************************prime no which is palindrome******************************************')

// var arr = ref.method.primeNo()


// for (let i of arr) {
//     ref.method.Palindrome(i)
// }

// console.log('Prime no which is anagram')

// for (var i = 0; i <= arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//         ref.method.anagram(arr[i], arr[j])
//     }
// }



// console.log(`******************************************Binary Search******************************************`)

// var n=require(`readline-sync`).question('Enter length:')
// var array=new Array()
// for(var i=0;i<n;i++)
// {
//     array[i]=require(`readline-sync`).question('Enter array:')

// }

//     var key = require(`readline-sync`).question('Enter value to search:')
    
//     startM()

//     ref.method.binarySearch(array,key)

//     stopM()

// console.log('******************************************Bubble sorting******************************************')   

// var n=require(`readline-sync`).question('Enter length:')
// var array=new Array()
// for(var i=0;i<n;i++)
// {
//     array[i]=require(`readline-sync`).question('Enter array:')

// }
// startM()
// ref.method.IntBubbleSort(array)
// stopM()

// console.log('******************************************Insertion sorting******************************************')

// var n=require(`readline-sync`).question('Enter length:')
// var array=new Array()
// for(var i=0;i<n;i++)
// {
//     array[i]=require(`readline-sync`).question('Enter array:')

// }
// startM()
// ref.method.IntInsertionSort(array)
// stopM()



// console.log(`******************************************Binary Search String******************************************`)
//     var va = require(`readline-sync`).question('Enter String:')
//     var arr = va.toLowerCase().split(' ').sort()
//     var key = require(`readline-sync`).question('Enter value to search:')

// startM()

// ref.method.BinarySearchStriing(arr,key)

// stopM()

// console.log('******************************************Bubble Sort String******************************************')
// var n = require(`readline-sync`).question('Enter String')
// startM()
// var bubblesort=ref.method.BubbleSortString(n)
// console.log(bubblesort.join(' '))
// stopM()

// console.log('******************************************Insertion Sort String******************************************')
// var n = require(`readline-sync`).question('Enter String:')
// var arr = n.toLowerCase().split(' ')
// startM()
// console.log(ref.method.InsertionSortString(arr))
// stopM()



