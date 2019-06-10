var arr = [4, 8, 12, 15, 21, 45, 51, 57, 67, 76, 87]
var low = 0
var high = arr.length
var mid = 0

var key = require(`readline-sync`).question('Enter value to search:') 


function binarySearch(arr, low, high, key) {
    if (low > high) {
        return -1
    }
    else {
        mid = Math.floor((low + high) / 2)
        if (arr[mid] > key) {
            high = mid - 1
            return binarySearch(arr, low, high, key)
        }
        else if (arr[mid] < key) {
            low = mid + 1
            return binarySearch(arr, low, high, key)

        }
        else if (arr[mid] == key) {
            return 1
        }

    }

}

var value = binarySearch(arr, low, high, key)

if (value == 1) {
    console.log(arr[mid],'key is found at position:', mid)
}
else {
    console.log(key,'key is not found')
}




// if(arr[mid]>key)
// {
//     high=mid-1
// }
// else if(arr[mid]<key)
// {
//     low=mid+1
// }
// else if(arr[mid]==key)
// {
//     console.log('key is found',arr[mid],'position:',mid)

//     break;
// }
// else
// {
//     console.log('key is not found',arr[mid])

// }