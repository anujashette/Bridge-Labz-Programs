var fs = require('fs');
var validate = require('./Validations');


exports.fileOperation = {

    create: function (fileName) {

        // writeFile function with filename, content and callback function
        fs.writeFileSync(fileName + '.json', '[]', function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
        });
    },

    write: function (fileName) {
        var obj={}
        var json = fs.readFileSync(fileName + '.json')
        json = JSON.parse(json)

        write(fileName)

        function write(fileName) {

           
            //  Input taken from user to write details
            var fname = require('readline-sync').question('Enter first name:');
            fname = validate.validate.validFName(fname)
            var lname = require('readline-sync').question('Enter last name:');
            lname = validate.validate.validLName(lname)
            var address = require('readline-sync').question('Enter address:');
            address = validate.validate.validAddress(address)
            var city = require('readline-sync').question('Enter city:');
            city = validate.validate.validCity(city)
            var state = require('readline-sync').question('Enter state:');
            state = validate.validate.validState(state)
            var zip = require('readline-sync').question('Enter zip code:');
            zip = validate.validate.validZip(zip)
            var phoneno = require('readline-sync').question('Enter pnone no:');
            phoneno = validate.validate.validPhone(phoneno)

            //  Add details of address book into json file
              obj = {
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
            console.log('Details inserted successfully')

            
        }

        json = fs.readFileSync(fileName + '.json')
        json = JSON.parse(json)
        return json.length;
    }
}