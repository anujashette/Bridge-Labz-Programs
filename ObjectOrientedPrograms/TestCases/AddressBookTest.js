const assert = require('chai').assert;
const expect=require('chai').expect;
var fs = require('fs');

var address = require('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/CreateFile.js').fileOperation;
var result = address.write('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/AddressBook');

describe('Test write() function', function () {
    it('ensure  that details inserted into file', function () {
        var json = fs.readFileSync('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/AddressBook.json')
    json = JSON.parse(json)
    var length = json.length;
        assert.equal(result, length);
        console.log(result , '\n',length)
    });
});

address = require('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/ReadFile.js').fileOperation.read;
 var result1 = address('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/AddressBook');
describe('Test read() function', function () {
    it('ensure  that details read from file', function () {
        assert.equal(result1, json[0].firstname);
    });
});        

address = require('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/EditDetails.js').fileOperation.edit;
  result1 = address('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/AddressBook');
  var json = fs.readFileSync('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/AddressBook.json')
json = JSON.parse(json)
describe('Test edit() function', function () {
    it('ensure  that details updated into file', function () {
        assert.equal(result1, json[0].firstname);
    });
});        

address = require('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/RemoveDetails.js').fileOperation.remove;
  result1 = address('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/AddressBook');
 
describe('Test remove() function', function () {
    it('ensure  that details remove from file', function () {
        assert.isTrue(result1);
    });
});


address = require('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/SearchDetails.js').fileOperation.search;
  result1 = address('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/AddressBook');
 
describe('Test search() function', function () {
    it('ensure  that details search into file', function () {
        assert.isTrue(result1);
    });
});

address = require('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/SortByName.js').fileOperation.sort;
  result1 = address('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/AddressBook');
var json = fs.readFileSync('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/AddressBook.json')
json = JSON.parse(json)

describe('Test sortbyname() function', function () {
  it('ensure  that sorted details by name', function () {
      for(var i=0 ;i<json.length;i++)
      {
          assert.equal(result1[i].firstname,json[i].firstname);
          assert.equal(result1[i].zip,json[i].zip);
      }
  });
});

address = require('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/SortZip.js').fileOperation.sort;
  result1 = address('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/AddressBook');
  var json = fs.readFileSync('/home/admin1/AnujaShette/Node Programs/ObjectOrientedPrograms/AddressBook/AddressBook.json')
  json = JSON.parse(json)

describe('Test sortbyZip() function', function () {
    it('ensure  that sorted details by zip code', function () {
        for(var i=0 ;i<json.length;i++)
        {
            assert.equal(result1[i].firstname,json[i].firstname);
            assert.equal(result1[i].phoneno,json[i].phoneno);
        }
    });
});



    
    
    
