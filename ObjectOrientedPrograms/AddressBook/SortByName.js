var fs = require('fs');
var sortJsonArray = require('sort-json-array');

//  Sort by first name
exports.fileOperation={
    sort : function(fileName)
    {
        var json = fs.readFileSync(fileName + '.json')
        json = JSON.parse(json)

        sortJsonArray(json, 'firstname','asc')
        json = JSON.stringify(json, null, 2)
        fs.writeFileSync(fileName + '.json', json)
        console.log('Details sorted successfully')
    }
}
