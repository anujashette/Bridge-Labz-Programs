var digit = require('readline-sync').question('Enetr number :')

var bit = parseInt(digit, 10).toString(2)
bit = bit.toString()
var power = 1
var array = []
var rev = bit.split("").reverse().join('')
console.log('decimal to binary', bit)
//console.log(rev)
class DToB {
    static ToBinary() {
        for (var i = 0; i < rev.length; i++) {
            // console.log(power)
            if (i == 0) {
                if (rev.charAt(i) == 1) {
                    array[i] = 1

                }
            }
            else if (i > 0) {
                if (rev.charAt(i) == 1) {
                    array[i] = power
                }
            }
            power = power * 2

        }
    }
}

DToB.ToBinary()

var a = 0

for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        a += array[i]
    }
}
console.log('Binary to decimal: ', a)
