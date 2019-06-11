
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node temperatureCoversion.js
 *  Execution:    node temperatureCoversion.js
 *  
 *  Purpose:    Calculate given the temperature in fahrenheit as input outputs the temperature 
 *              in Celsius or viceversa using the formula
 * 
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   10-06-2019
 *
 ******************************************************************************/
var F=0,C=0
var no=0

/*
    User can give choice to in which unit he/she wants to convert  the temperature.

*/ 

class util{

    static checkstatic()
    {
        do{
            console.log('1. Celsius to fahrenheit :')
            console.log('2. fahrenheit to Celsius:')
            console.log('0. Exit')
            no=parseInt(require('readline-sync').question('Enter any temperature to convert in fahrenheit/Celsius:'))
            var choice=parseInt(require('readline-sync').question('Enter your choice:'))


            switch(choice)
            {
                case 1: 
                    F=(no * 9/5) + 32 
                    console.log('*************************************\n')
                    console.log(' [Celsius:',no,'to fahrenheit:',F,']\n')
                    console.log('*************************************\n')
                    break;
                
                case 2: 
                    C=(no - 32) * 5/9
                    console.log('*************************************\n')

                    console.log('[Farehheit:',no,'to celsius:',C,']\n')
                    console.log('*************************************\n')

                    break;
                
                case 0: console.log('Exit')
                    break;    

                default: console.log('Please select 1 or 2')
                     break;   
            }

        }while(choice == 1 || choice == 2)
    }
}

util.checkstatic()


