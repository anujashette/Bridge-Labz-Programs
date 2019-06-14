var r=10,c=0,j=0

var prime = require('../Utility/Algoritham')

var value=prime.prime.primeNo()
var array=new Array(r)

for (var i = 0; i < r; i++) {
    array[i] = new Array(r)
}
for (var i = 0; i < r; i++) {

    for (j = 0; j <= c; j++) {
        counter = 0
       
            if (i % j == 0) {
                counter++
            }
        
        if (counter == 2) {
            array[i][j] = j

        }
    }

    c = c + 100; j = j + 100
}

console.log(array)
  
//  primeNo() {

//     var arr = new Array()
//     var index = 0

//     var counter = 0
//     for (var no = 0; no <= 1000; no++) {
//         counter = 0
//         for (var i = 1; i <= no; i++) {
//             if (no % i == 0) {
//                 counter++
//             }
//         }
//         if (counter == 2) {
//             //  console.log(no)
//             arr[index] = no
//             index++
//         }

//     }
//     return arr
// }
