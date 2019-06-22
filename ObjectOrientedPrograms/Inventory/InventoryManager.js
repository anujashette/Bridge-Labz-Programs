
var fs = require('fs')
var json = fs.readFileSync('stockDetails.json')
json = JSON.parse(json)

do {
    console.log('\t------------------------------------------------------------------')

    console.log('Enter (1) for buy items and \n (2) for update items \n (3) for add new item \n (4) for remove item \n and (0) for exit.')
    var choice = require('readline-sync').question('Enter choice:')

    switch (choice) {
        case '1': buyItems()
            break;

        case '2': update()
            break;

        case '3': add()
            break;    
        case '4':remove()
            break;
        case '0': console.log('Thank you. Visit again...\n')
            break;
    }

} while (choice != '0');

// Calculate total value of each Stock.
function calculate(weight, pkg) {
    value = weight * pkg;

    return value;
}

// Display stock report.
function display(name, weight, value) {
    console.log('\t  Name \t\t\t  weight  \t    Price  ')
    console.log('\t-------------------------------------------------------------')
    console.log('\t|' + name + '\t\t|\t' + weight + '\t|\t' + value + ' $        |')
}

function buyItems() {
    do {

        console.log('\t------------------------------------------------------------------')
        console.log('Which ingredient want to buy:')
        console.log('Enter 1.Rice  2.Wheat  3.Pulses  0.Exit')
        var choice = require('readline-sync').question('Enter choice:')

        switch (choice) {
            case '1':
                console.log('\n Which rice want to buy:')
                console.log('Enter  1.Arborio  2.Basmati  3.Brown')
                item = require('readline-sync').question('Enter choice:')
                var weight = require('readline-sync').question('Enter weight:')

                var value = calculate(weight, json.inventory.rice[item - 1].price)
                display(json.inventory.rice[item - 1].name, weight, value)

                break;

            case '2':
                console.log('\n Which Wheat want to buy:')
                console.log('Enter  1.Spelt  2.White  3.Simple')
                item = require('readline-sync').question('Enter choice:')
                var weight = require('readline-sync').question('Enter weight:')

                var value = calculate(weight, json.inventory.wheat[item - 1].price)
                display(json.inventory.wheat[item - 1].name, weight, value)


                break;

            case '3':
                console.log('\n Which pulse want to buy:')
                console.log('Enter  1.Masur  2.peas  3.lentils')
                item = require('readline-sync').question('Enter choice:')
                var weight = require('readline-sync').question('Enter weight:')

                var value = calculate(weight, json.inventory.pulses[item - 1].price)
                display(json.inventory.pulses[item - 1].name, weight, value)
                break;
            case '0': console.log('Thank you. Visit again...\n')
                break;
        }

    } while (choice != '0');
}

function update() {
    do {
        console.log('\n Update details of ingrediets:')
        console.log('Enter 1.Rice   2.Wheat   3.Pulses 4.Add new item  0.Exit')
        var choice = require('readline-sync').question('Enter choice:')

        switch (choice) {
            case '1':
                console.log('\n Update price of rice:')
                console.log('Enter  1.Arborio  2.Basmati  3.Brown')
                item = require('readline-sync').question('Enter choice:')
                p = parseInt(require('readline-sync').question('Enter updated price:'))

                json.inventory.rice[item - 1].price = p
                write(json)

                break;

            case '2':
                console.log('\n Update price of wheat:')
                console.log('Enter  1.Spelt  2.White  3.Simple')
                item = require('readline-sync').question('Enter choice:')
                p = parseInt(require('readline-sync').question('Enter updated price:'))

                json.inventory.wheat[item - 1].price = p
                write(json)

                break;

            case '3':
                console.log('\n Update price of pulses:')
                console.log('Enter  1.Masur  2.peas  3.lentils')
                item = require('readline-sync').question('Enter choice:')
                p = parseInt(require('readline-sync').question('Enter updated price:'))

                json.inventory.pulses[item - 1].price = p
                write(json)
                break;

            case '0': console.log('Thank you. Visit again...\n')
                break;
        }
    } while (choice != '0');
}

function add()
{
    console.log('\n Add new item into list:\n 1.Rice  \n2.Wheat \n3.pulse')
                item = require('readline-sync').question('Enter choice:')
                name = require('readline-sync').question('Enter item name:')
                price = parseInt(require('readline-sync').question('Enter item price:'))

                if (item == 1)
                    addItems(name, price, json.inventory.rice)
                else if (item == 2)
                    addItems(name, price, json.inventory.wheat)
                else
                    addItems(name, price, json.inventory.pulses)
}

function addItems(name, price, path) {
    var add = {
        name: name,
        price: price
    }

    path.push(add)
    write(json)
}

function write(json) {
    json = JSON.stringify(json)
    fs.writeFileSync('stockDetails.json', json)
}

function remove()
{
    json = fs.readFileSync('stockDetails.json')
    json = JSON.parse(json)

    var item = require('readline-sync').question('\n Enter item name want to be delete:')

    for(var i=0;i<json.inventory.rice.length;i++)
    {
        if(item == json.inventory.rice[i].name)
        {
            json.inventory.rice.splice(i)
        }
        console.log(json.inventory.rice[i])
    }
    write(json)
}