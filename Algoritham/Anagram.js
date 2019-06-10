var read = require(`readline-sync`)
var str1 = read.question('Enter first String :')
var str2 = read.question('Enter second string :')



if (str1.length == str2.length) {
    var s1 = sort(str1)
    var s2 = sort(str2)

    console.log('sorted string', s1, '  ', s2)

    var result = compare(s1, s2)
    console.log(result)
}

else {
    console.log('String is not anagram')
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