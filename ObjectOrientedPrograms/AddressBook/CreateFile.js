var fs = require('fs');
var alphabet = /[:alpha:]/g
var digit = /([0-9]{6}|[0-9]{3}\s[0-9]{3}|[0-9]{10})/g
var addressvalid = /([0-9]|[:alpha:]+)/g

exports.fileOperation = {

    create: function (fileName) {

        // writeFile function with filename, content and callback function
        fs.writeFileSync(fileName + '.json', '[]', function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
        });
    },

    write: function (fileName) {

        var json = fs.readFileSync(fileName + '.json')
        json = JSON.parse(json)

        write(fileName)

        function write(fileName) {

            //  Input taken from user to write details
            var fname = require('readline-sync').question('Enter first name:');
            fname = validFName(fname)
            var lname = require('readline-sync').question('Enter last name:');
            lname = validLName(lname)
            var address = require('readline-sync').question('Enter address:');
            address = validAddress(address)
            var city = require('readline-sync').question('Enter city:');
            city = validCity(city)
            var state = require('readline-sync').question('Enter state:');
            state = validState(state)
            var zip = require('readline-sync').question('Enter zip code:');
            zip = validZip(zip)
            var phoneno = require('readline-sync').question('Enter pnone no:');
            phoneno = validPhone(phoneno)

            //  Add details of address book into json file
            var obj = {
                firstname: fname,
                lastname: lname,
                address: address,
                city: city,
                state: state,
                zip: zip,
                phoneno: phoneno
            }
            json.push(obj)
            json = JSON.stringify(json, null, 2)
            fs.writeFileSync(fileName + '.json', json)
        }

        // vliadate first name
        function validFName(fname) {
            if (fname.match(alphabet)) {
                return fname;
            }
            else {
                console.log('\nPlease enter valid first name:')
                write(fileName)
            }
        }
        // vliadate last name
        function validLName(lname) {

            if (lname.match(alphabet)) {
                return lname;
            }
            else {
                console.log('\nPlease enter valid last name:')
                write(fileName)
            }
        }

        // vliadate address 
        function validAddress(address) {

            if (address.match(addressvalid)) {
                return address;
            }
            else {
                console.log('\nPlease enter valid address with plot no:')
                write(fileName)
            }
        }

        // vliadate city 
        function validCity(city) {
            if (city.match(alphabet)) {
                return city;
            }
            else {
                console.log('\nPlease enter valid city name:')
                write(fileName)
            }
        }

        // vliadate state 
        function validState(state) {

            if (state.match(alphabet)) {
                return state;
            }
            else {
                console.log('\nPlease enter valid state name:')
                write(fileName)
            }
        }

        // vliadate zip code 
        function validZip(zip) {

            if (zip.match(digit) && zip.length == 6) {
                return zip;
            }
            else {
                console.log('\nPlease enter valid zip code of 6 digits:')
                write(fileName)
            }
        }

        // vliadate phone no
        function validPhone(phoneno) {

            if (phoneno.match(digit) && phoneno.length == 10) {
                return phoneno;
            }
            else {
                console.log('\nPlease enter valid phone number:')
                write(fileName)
            }
        }
    }
}
