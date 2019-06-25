var fs = require('fs');
var sortJsonArray = require('sort-json-array');

//  Sort by zip code
exports.fileOperation={
    sort : function(fileName)
    {
        var json = fs.readFileSync(fileName + '.json')
        json = JSON.parse(json)

        sortJsonArray(json, 'zip','asc')
        json = JSON.stringify(json, null, 2)
        fs.writeFileSync(fileName + '.json', json)
        console.log('Details sorted successfully')

        json = JSON.parse(json)
    
        return json
    }
}