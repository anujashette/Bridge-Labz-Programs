var fs = require('fs');
exports.fileOperation={

    read : function(fileName)
    {
        var json = fs.readFileSync(fileName + '.json')
        json = JSON.parse(json)

        console.log('\n\tADDRESS BOOK DETAILS\t')
        for(var i=0; i<json.length;i++)
        {   
            console.log('\t----------------------------------------------------------------------------')
            console.log('\tFirst Name:\t',json[i].firstname)
            console.log('\tLast Name:\t',json[i].lastname)
            console.log('\tAddress:\t',json[i].address)
            console.log('\tCity:\t\t',json[i].city)
            console.log('\tState:\t\t',json[i].state)
            console.log('\tZip Code:\t',json[i].zip)
            console.log('\tPhone No:\t',json[i].phoneno)
        }

    }
}