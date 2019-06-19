var fs = require('fs');
var expression= fs.readFileSync('expression.txt','utf8')

var name  = require('readline-sync').question('Enter your name:')
var fullname  = require('readline-sync').question('Enter your full name:')
var mobileNo  = require('readline-sync').question('Enter your mobile no:')
var date  = new Date()
date =date.getDate() +'/'+date.getMonth()+'/'+date.getFullYear()



console.log()

expression = expression.replace("<<name>>",name)

expression = expression.replace("<<full name>>",fullname)

expression = expression.replace("xxxxxxxxxx",mobileNo)

expression = expression.replace("01/01/2016",date)
console.log(expression)