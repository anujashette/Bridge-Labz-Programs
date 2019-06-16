
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node AnagramTwoD.js
 *  Execution:    node AnagramTwoD.js
 *  
 *  Purpose:     Extend the Prime Number Program and store only the numbers in 
 *               that range that are Anagrams. For e.g. 17 and 71 are both Prime and 
 *               Anagrams in the 0 to 1000 range.
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   16-06-2019
 * 
 ******************************************************************************/

var j = 0, no = 0, index1 = 0, r = 10, i = 0
var max = 0
var first = new Array()
var notAnagram = new Array(1)
var anagramArray = new Array(1)

// 2D array initialized
for (var i = 0; i < r; i++) {
    notAnagram[i] = new Array()
    anagramArray[i] = new Array()
}

// Finding prime no in the range of 0 - 100 ,101 - 200 so on till 1000
function primeNo() {

    var index = 0
    max += 100
    var counter = 0
    var array = new Array()


    for (no = no; no <= max; no++) {
        counter = 0
        for (var i = 1; i <= no; i++) {
            if (no % i == 0) {
                counter++
            }
        }
        if (counter == 2) {

            array[index] = no
            index++
        }
    }

    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {

            anagram(array[i], array[j])
        }

    }
}

// Finding anagram between range of 100 till 1000
function anagram(st1, st2) {

    var str1 = st1.toString()
    var str2 = st2.toString()

    if (str1.length == str2.length) {
        var s1 = sort(str1)
        var s2 = sort(str2)
        var result = compare(s1, s2)
        if (result == 'String is anagram') {

            first[index1] = str1;
            index1++;

            first[index1] = str2;
            index1++;
        }
    }
}

function sort(str) {
    var Lowercase = str.toLowerCase()
    var arr = Lowercase.split('')
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {

                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr.toString()
}

function compare(s1, s2) {
    var flag = 'String is not anagram'
    for (var i = 0; i < s1.length; i++) {

        if (s1.charAt(i) != s2.charAt(i)) {
            flag = 'String is not anagram'
            return flag
        }
        else {
            flag = 'String is anagram'
        }
    }

    if (flag == 'String is anagram') {

        return flag
    }

}

// anagram no assigned to 2D array.
for (i = 0; i < r; i++) {
    for (j = 0; j < 1; j++) {

        anagramArray[i][j] = first

    }
    try {
        primeNo()
    } catch (e) {
        console.log('Error', e)
    }

}

try {

    console.log('Prime Anagram')
    displayBoard(anagramArray)
    // console.log('Prime but not anagram')
    // displayBoard(notAnagram)
    
}
catch (e) {
    console.log('Error', e)
}

// Display 2D array of prime anagram
function displayBoard(board) {
    var buffer = '';
    for (var i = 0; i < 1; i++) {
        for (var x = 0; x < board[i].length; x++) {
            buffer += board[i][x];
            buffer += ','
        }
        buffer += '\n \n';
    }
    console.log(buffer);
}



exports.primeAnagram={

    anagram : function()
    {
        return first;
    }
};