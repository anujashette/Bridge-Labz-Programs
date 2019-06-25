var fs = require('fs');
exports.fileOperation={

    search : function(fileName)
    {
        var flag=0
        var i=0
        var temp =false
        search(fileName);

       function search(fileName)
        {
            var json = fs.readFileSync(fileName + '.json')
            json = JSON.parse(json)
    
            var item = require('readline-sync').question('\n Enter first name want to be search:')
    
            //   Searching perticular record from file.
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
                    temp =true
                    //  If user want to continue searching then he/she will enter 1 or enter any other no 
                    flag = require('readline-sync').question('\n You want to search again \n then enter 1 or enter any no')
    
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
   
       return temp  
    }

}