var fs = require('fs');
exports.fileOperation={

    remove : function(fileName,index)
    {
        var json = fs.readFileSync(fileName + '.json')
            json = JSON.parse(json)
        json.splice(index)

        return json[index];
    }
    
}    