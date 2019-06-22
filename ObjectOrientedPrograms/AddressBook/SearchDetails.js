var fs = require('fs');
exports.fileOperation={

    search : function(fileName)
    {
        var flag=0
        var i=0
        search(fileName);

       function search(fileName)
        {
            var json = fs.readFileSync(fileName + '.json')
            json = JSON.parse(json)
    
            var item = require('readline-sync').question('\n Enter first name want to be search:')
    
            for( i=0;i<json.length;i++)
            {
                if(item == json[i].firstname || item == json[i].lastname)
                {
                    console.log('\t----------------------------------------------------------------------------')
                    console.log('\tFirst Name:\t',json[i].firstname)
                    console.log('\tLast Name:\t',json[i].lastname)
                    console.log('\tAddress:\t',json[i].address)
                    console.log('\tCity:\t\t',json[i].city)
                    console.log('\tState:\t\t',json[i].state)
                    console.log('\tZip Code:\t',json[i].zip)
                    console.log('\tPhone No:\t',json[i].phoneno)
    
                     flag = require('readline-sync').question('\n You want to search again \n then enter 1 or \n To remove searched record enter any no:')
    
                    if(flag == 1)
                    {
                        search(fileName)
                    }
                    else
                    {
                        break;
                    }
                }
                else

                {
                    console.log('Record not found in details...')
                }
    
            }
    
        }
       if(flag == 1)
            return i;
       else
            return 'not found'     
    }

}