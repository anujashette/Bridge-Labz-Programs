/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node Anagram.js
 *  Execution:    node Anagram.js
 *  
 *  Purpose:     One string is an anagram of another if the second is simply a 
 *               rearrangement of the first. For example, 'heart' and 'earth' are anagrams.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since   05-06-2019
 *
 ******************************************************************************/

var read = require(`readline-sync`)
var str1 = read.question('Enter first String :')
var str2 = read.question('Enter second string :')

/*
    Firstly check length of both string is equal or not.
    If length is not equal then Strings are not anagram.
*/

if (str1.length == str2.length) {
    var s1 = sort(str1)
    var s2 = sort(str2)

    console.log('sorted string', s1, '  ', s2)

    var result = compare(s1, s2)
    console.log(result)
}

else {
    console.log('Strings are not anagram')
}


/*
   Doing sorting of both string.
*/
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

/*
    Comparing strings if both string contains same letter then they are anagram
    otherwise not anagram
*/

function compare(s1, s2) {
    var flag = 'Strings are not anagram'
    for (var i = 0; i < s1.length; i++) {

        if (s1.charAt(i) != s2.charAt(i)) {
            flag = 'Strings are not anagram'
            return flag
        }
        else {
            flag = 'Strings are anagram'
        }

    }

    if (flag == 'Strings are anagram') {
        return flag
    }

}