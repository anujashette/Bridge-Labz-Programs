
var alphabet = /[:alpha:]/g
var digit = /([0-9]{6}|[0-9]{3}\s[0-9]{3}|[0-9]{10})/g
var addressvalid = /([0-9]|[:alpha:]+)/g
var write = require('./CreateFile')

exports.validate = {

// vliadate first name
 validFName :function (fname) {
    if (fname.match(alphabet)) {
        return fname;
    }
    else {
        console.log('\nPlease enter valid first name:')
        write.fileOperation.write(fileName)
    }
},
// vliadate last name
 validLName : function(lname) {

    if (lname.match(alphabet)) {
        return lname;
    }
    else {
        console.log('\nPlease enter valid last name:')
        write.fileOperation.write(fileName)
    }
},

// vliadate address 
 validAddress : function(address) {

    if (address.match(addressvalid)) {
        return address;
    }
    else {
        console.log('\nPlease enter valid address with plot no:')
        write.fileOperation.write(fileName)
    }
},

// vliadate city 
 validCity : function(city) {
    if (city.match(alphabet)) {
        return city;
    }
    else {
        console.log('\nPlease enter valid city name:')
        write.fileOperation.write(fileName)
    }
},

// vliadate state 
 validState : function(state) {

    if (state.match(alphabet)) {
        return state;
    }
    else {
        console.log('\nPlease enter valid state name:')
        write.fileOperation.write(fileName)
    }
},

// vliadate zip code 
 validZip : function(zip) {

    if (zip.match(digit) && zip.length == 6) {
        return zip;
    }
    else {
        console.log('\nPlease enter valid zip code of 6 digits:')
        write.fileOperation.write(fileName)
    }
},

// vliadate phone no
 validPhone : function(phoneno) {

    if (phoneno.match(digit) && phoneno.length == 10) {
        return phoneno;
    }
    else {
        console.log('\nPlease enter valid phone number:')
        write.fileOperation.write(fileName)
    }
}
}