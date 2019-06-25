
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node main.js
 *  Execution:    node main.js
 *  
 *  Purpose:     The software to be designed is a program that can be used to 
 *               maintain an address book.
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   22-06-2019
 * 
 ******************************************************************************/
var createFile = require('./CreateFile')
var readFile = require('./ReadFile')
var search = require('./SearchDetails')
var remove = require('./RemoveDetails')
var edit = require('./EditDetails')
var sortName = require('./SortByName')
var sortZip = require('./SortZip')

//  Menu driven method is used to repeated ask to user
try{
do {
    console.log('----------------------------------------------------------------------------')

    console.log('\n1.Create new file.\n2.Insert details.\n3.Read details.\n4.Search details.\n'+
                    '5.Delete Details.\n6.Update details.\n7.Sort details by name\n8.Sort details by zip ode\n0.Exit')
    var choice = require('readline-sync').question('Enter choice to perform operation:')
    
    switch (choice) {
        
        //  Choice 1 used to create new file and insert records into it.
        case '1': 
            var fileName = require('readline-sync').question('Enter file name to create:')
            createFile.fileOperation.create(fileName)
            createFile.fileOperation.write(fileName)
            break;

        //  choice 2 used to write records into existing file.
        case '2': 
            var fileName = require('readline-sync').question('Enter file name to write:')
            createFile.fileOperation.write(fileName)
            break;

        //  choice 3 used to display all records.
        case '3':
            var fileName = require('readline-sync').question('Enter file name to read:')
            readFile.fileOperation.read(fileName)
            break;    

        //  choice 4 used to search perticular record.  
        case '4':
            var fileName = require('readline-sync').question('Enter file name to search:')
            console.log(search.fileOperation.search(fileName))
            break;

        //  choice 5 used to remove perticular record.
        case '5': var fileName = require('readline-sync').question('Enter file name:')
                  console.log('----------------------------------------------------------------------------')
                  console.log('\nRemoved record from book:\n',remove.fileOperation.remove(fileName))
            break;

        //  choice 6 used to edit existing details.
        case '6':var fileName = require('readline-sync').question('Enter file name to edit details:')
                edit.fileOperation.edit(fileName)
            break;

        //  choice 7 used to sort records by name
        case '7':var fileName = require('readline-sync').question('Enter file name to sort by name:')
                sortName.fileOperation.sort(fileName)
                readFile.fileOperation.read(fileName)
            break;

        //  choice 7 used to sort records by zip code
        case '8':var fileName = require('readline-sync').question('Enter file name to sort by zip code:')
                sortZip.fileOperation.sort(fileName)
                readFile.fileOperation.read(fileName)
                break;

        case '0': 
                console.log('\n-----------------------Thank you. Visit again---------------------------\n')
            break;

        case 'default': 
                console.log('\n-----------------------Please Enter correct choice-----------------------') 
                break;
    }
    throw 'Error is occured,Please Enter details carefully.'
} while (choice != '0');
}
catch(e)
{
    console.log(e)
}
