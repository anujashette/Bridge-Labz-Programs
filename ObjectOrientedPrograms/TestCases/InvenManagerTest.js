const assert = require('chai').assert;

var manager = require('../../Node Programs/ObjectOrientedPrograms/Inventory/InventoryManager.js').update

var result = manager()
console.log(result)
describe('Test update() function', function () {
      it('ensure  that sorted details by name', function () {
         
              assert.isNotString(result);

      });
      it('ensure  that entered price is integer or float', function () {
         
        assert.isNumber(result);
    
        });
    });
