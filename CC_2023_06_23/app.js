// In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

// Create an Singleton pattern, so there is one object in system.

/*
PREP
P: 
  create a class called  singleton that will serve as a   base class for instance
R: 
  new class instances but there should only be one instance 
E:
  var obj1 = new Singleton();
  var obj2 = new Singleton();
  obj1 === obj2; // => true
  obj1.test = 1;
  obj2.test; // => 1

P:
 create a base class callaed Singleton
    base class contains a method called test 
    add a setter 
    add a getter
*/
function Singleton() {
  return {
    _test: null,
    set test(value) {
      this._test = value;
    },
    get test() {
      return this._test;
    },
  };
}
