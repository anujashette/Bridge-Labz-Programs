var fs = require('fs');
exports.fileOperation={

    remove : function(fileName)
    {
        var item = require('readline-sync').question('\n Enter first name want to be remove:')
        var temp=''
        var flag = false;
        var json = fs.readFileSync(fileName + '.json')
            json = JSON.parse(json)

            //  Using splice function remove that record from json array.
            for(var i=0;i<json.length;i++)
            {
                if(item == json[i].firstname)
                {
                    temp = json[i];
                    json.splice(i,1)
                    flag = true
                }
                // console.log(json[i])
            }
        
        json = JSON.stringify(json, null, 2)
        fs.writeFileSync(fileName + '.json', json)
        console.log('Details removed successfully')

        return flag;
    }
    
}    