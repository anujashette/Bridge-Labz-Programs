var createFile = require('./CreateFile')
var readFile = require('./ReadFile')
var search = require('./SearchDetails')
var remove = require('./RemoveDetails')


do {
    console.log('\t----------------------------------------------------------------------------')

    console.log('\n1.Create new file.\n2.Write into existing file.\n3.Read file.\n4.Search details.\n'+
                    '5.Delete Details.6.Update details.\n7.Sort details by name\n\n0.Exit')
    var choice = require('readline-sync').question('Enter choice to perform operation:')

    switch (choice) {
        case '1': 
            var fileName = require('readline-sync').question('Enter file name to create:')
            createFile.fileOperation.create(fileName)
            createFile.fileOperation.write(fileName)
            break;

        case '2': 
            var fileName = require('readline-sync').question('Enter file name to write:')
            createFile.fileOperation.write(fileName)
            break;

        case '3':
            var fileName = require('readline-sync').question('Enter file name to read:')
            readFile.fileOperation.read(fileName)
            break;    

        case '4':
            var fileName = require('readline-sync').question('Enter file name to read:')
            search.fileOperation.search(fileName)

            break;

        case '5': var fileName = require('readline-sync').question('Enter file name to read:')
                  var index=search.fileOperation.search(fileName)
                  console.log(remove.fileOperation.remove(fileName,index))
            break;

        case '6':update()
            break;

        case '7':sort()
            break;

        case '0': 
        console.log('\n-----------------------Thank you. Visit again---------------------------\n')
            break;

        case 'default': 
        console.log('\n-----------------------Please Enter correct choice-----------------------')    
    }

} while (choice != '0');

