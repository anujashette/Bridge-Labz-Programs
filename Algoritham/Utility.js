

exports.method =
    {
        anagram: function (st1, st2) {

            var str1 = st1.toString()
            var str2 = st2.toString()

            if (str1.length == str2.length) {
                var s1 = sort(str1)
                var s2 = sort(str2)
                var result = compare(s1, s2)
                if (result == 'String is anagram') {
                    console.log(result)

                }
            }

            // else{
            //     console.log('String is not anagram')
            // }

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
                    console.log(s1, ' ', s2)
                    return flag
                }

            }
        },


        primeNo: function () {

            var arr = new Array()
            var index = 0

            var counter = 0
            for (var no = 0; no <= 1000; no++) {
                counter = 0
                for (var i = 1; i <= no; i++) {
                    if (no % i == 0) {
                        counter++
                    }
                }
                if (counter == 2) {
                    //  console.log(no)
                    arr[index] = no
                    index++
                }

            }
            return arr
        },


        Palindrome: function (no) {

            var temp = no
            var rev = 0

            while (no > 0) {
                var rem = no % 10
                rev = (rev * 10) + rem
                no = Math.floor(no / 10)
            }
            if (temp == rev) {
                console.log(temp)
            }
        },

        binarySearch: function (arr, key) {

            var low = 0
            var high = arr.length - 1

            while (low <= high) {
                mid = Math.floor((low + high) / 2)

                if (arr[mid] > key) {
                    high = mid - 1
                }
                else if (arr[mid] < key) {
                    low = mid + 1
                }
                else if (arr[mid] == key) {
                    console.log('key is found', arr[mid], 'position:', mid);
                    break;
                }
                else if (arr[mid] !== key) {
                    console.log(key, 'key is not found')

                }
            }

        },

        IntBubbleSort: function (arr) {
            for (var i = 0; i < arr.length - 1; i++) {
                for (var j = 0; j < arr.length - i - 1; j++) {
                    if (parseInt(arr[j]) > parseInt(arr[j + 1])) {
                        var temp = arr[j]
                        arr[j] = arr[j + 1]
                        arr[j + 1] = temp
                    }
                }
            }

            console.log('Sorted array', arr)
        },

        IntInsertionSort: function (arr) {

            var v = 0
            for (var i = 1; i < arr.length; i++) {
                v = i
                for (var j = i - 1; j >= 0; j--) {
                    if (parseInt(arr[j]) > parseInt(arr[v])) {

                        var temp = arr[j]
                        arr[j] = arr[v]
                        arr[v] = temp
                        v = j
                    }
                }
            }
            console.log(arr)
        },

        BinarySearchStriing: function (arr, key) {

            console.log(arr)
            var low = 0
            var high = arr.length
            var mid = 0

            function binarySearch(arr, low, high) {
                if (low > high) {
                    return -1
                }
                else {
                    mid = Math.floor((low + high) / 2)
                    if (arr[mid] > key) {
                        high = mid - 1
                        return binarySearch(arr, low, high)
                    }
                    else if (arr[mid] < key) {
                        low = mid + 1
                        return binarySearch(arr, low, high)

                    }
                    else if (arr[mid] == key) {
                        return 1
                    }
                }
            }

            var value = binarySearch(arr, low, high)

            if (value == 1) {
                console.log(arr[mid], 'key is found at position:', mid)
            }
            else {
                console.log(key, 'key is not found')
            }
        },

        BubbleSortString: function (a) {
            var arr = a.toLowerCase().split(' ')

            for (var i = 0; i < arr.length - 1; i++) {
                for (var j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {

                        var temp = arr[j]
                        arr[j] = arr[j + 1]
                        arr[j + 1] = temp
                    }
                }
            }

            return arr

        },

        InsertionSortString: function (arr) {



            var v = 0
            for (var i = 1; i < arr.length; i++) {
                v = i
                for (var j = i - 1; j >= 0; j--) {
                    if (arr[j] > arr[v]) {
                        var temp = arr[j]
                        arr[j] = arr[v]
                        arr[v] = temp
                        v = j
                    }
                }
            }
            return arr
        }

    };