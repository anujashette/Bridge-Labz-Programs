// let expect = require("chai").expect;
 
// class SortedList {
//     constructor() {
//         this.list = [];
//     }
 
//     add(element) {
//         this.list.push(element);
//         this.sort();
//     }
 
//     remove(index) {
//         this.vrfyRange(index);
//         this.list.splice(index, 1);
//     }
 
//     get(index) {
//         this.vrfyRange(index);
//         return this.list[index];
//     }
 
//     vrfyRange(index) {
//         if (this.list.length == 0) throw new Error("Collection is empty.");
//         if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
//     }
 
//     sort() {
//         this.list.sort((a, b) => a - b);
//     }
 
//     get size() {
//         return this.list.length;
//     }
// }
 
 
// describe("Tests for this task", function () {
 
//     let myList;
//     beforeEach(function () {
//         myList = new SortedList();
//     });
// //Test initial state:
//     describe("Test initial state", function () {
//         it("add should exist", function () {
//             expect(SortedList.prototype.hasOwnProperty("add")).to.equal(true);
//         });
//         it("remove should exist", function () {
//             expect(SortedList.prototype.hasOwnProperty("remove")).to.equal(true);
//         });
//         it("get should exist", function () {
//             expect(SortedList.prototype.hasOwnProperty("get")).to.equal(true);
//         });
//         it("size should exist", function () {
//             expect(SortedList.prototype.hasOwnProperty("size")).to.equal(true);
//         })
//     });
 
// //add():
//     describe("Test add", function () {
//         it("add with 1 element", function () {
//             myList.add(5);
//             expect(myList.list.join(", ")).to.equal("5");
//         });
//         it("add with many elements", function () {
//             myList.add(5);
//             myList.add(4);
//             myList.add(3);
//             expect(myList.list.join(", ")).to.equal("3, 4, 5");
//         });
//     });

// //remove():
//     describe("Test remove", function () {
//         it("remove with empty list", function () {
//             expect(() => myList.remove()).throw(Error, "Collection is empty.")
//         });
//         it("remove with negative index", function () {
//             myList.add(3);
//             expect(() => myList.remove(-1)).throw(Error, "Index was outside the bounds of the collection.")
//         });
//         it("remove - index is equal to list length", function () {
//             myList.add(3);
//             expect(() => myList.remove(1)).throw(Error, "Index was outside the bounds of the collection.")
//         });
//         it("remove - index is bigger than list length", function () {
//             myList.add(3);
//             expect(() => myList.remove(2)).throw(Error, "Index was outside the bounds of the collection.")
//         });
//         it("remove - test with correct index", function () {
//             myList.add(3);
//             myList.add(4);
//             myList.add(5);
//             myList.remove(1);
//             expect(myList.list.join(", ")).to.equal("3, 5");
//         });
//     });

// //get():
//     describe("Test get", function () {
//         it("get with empty list", function () {
//             expect(() => myList.get()).throw(Error, "Collection is empty.")
//         });
//         it("get with negative index", function () {
//             myList.add(3);
//             expect(() => myList.get(-1)).throw(Error, "Index was outside the bounds of the collection.")
//         });
//         it("get - index is equal to list length", function () {
//             myList.add(3);
//             expect(() => myList.get(1)).throw(Error, "Index was outside the bounds of the collection.")
//         });
//         it("get - index is bigger than list length", function () {
//             myList.add(3);
//             expect(() => myList.get(2)).throw(Error, "Index was outside the bounds of the collection.")
//         });
//         it("get - test with correct index", function () {
//             myList.add(3);
//             myList.add(4);
//             myList.add(5);
//             let element = myList.get(1);
//             expect(element).to.equal(4);
//         });
//     });
 
// //size():
//     describe("Test size", function () {
//         it("size with empty list", function () {
//             expect(myList.size).to.equal(0);
//         });
//         it("size with non-empty list", function () {
//             myList.add(1);
//             myList.add(2);
//             myList.add(3);
//             expect(myList.size).to.equal(3);
//         });
//     });
// });