var fs = require('fs');
exports.fileOperation={

    edit : function(fileName)
    {
        var item = require('readline-sync').question('\n Enter first name to edit details:')
        var temp=''
        var json = fs.readFileSync(fileName + '.json')
            json = JSON.parse(json)

            //  Search record to make changes into it.
            for(var i=0;i<json.length;i++)
            {
                if(item == json[i].firstname)
                {
             
                    json[i].firstname = require('readline-sync').question('\n Enter first name :');
                    json[i].lastname = require('readline-sync').question('\n Enter last name :');
                    json[i].address = require('readline-sync').question('\n Enter address :');
                    json[i].city = require('readline-sync').question('\n Enter city :');
                    json[i].state = require('readline-sync').question('\n Enter state :');
                    json[i].zip = require('readline-sync').question('\n Enter zip code :');
                    json[i].phoneno = require('readline-sync').question('\n Enter phone no :');            

                   temp = json[i].firstname
                    break;
                }
                else
                {
                    console.log('Record not  found')
                    break;
                }
                // console.log(json[i])
            }
     
            //  json object covert into string and write it into json file.
            json = JSON.stringify(json, null, 2)
            fs.writeFileSync(fileName + '.json', json)
            console.log('Details updated successfully')
    
            
        return temp;
    }
    
}    