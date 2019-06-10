var y=parseInt(process.argv[2])
var m=parseInt(process.argv[3])
var d=parseInt(process.argv[4])


var day=['sunday','Monday','tuesday','wednesday','Thusday','Friday','saturday']
//  y = y - (14 - m) / 12

// var x = y + y/4 - y/100 + y/400

//  m = m + 12 * ((14 - m) / 12) - 2

//  d = Math.floor((d + x + 31*m / 12) % 7)


y = y - ((14 - m) / 12)
var x = y + y/4 - y/100 + y/400

m = m + 12 * ((14 - m) / 12) - 2
d = (d + x +( (31 * m) / 12)) % 7
console.log(d)
console.log(d=Math.round(d))
// if(d>0.5)
// {
//     console.log(Math.floor(d+1))

// }
// else
// {
//     console.log(Math.floor(d-1))

// }

console.log(day[d])