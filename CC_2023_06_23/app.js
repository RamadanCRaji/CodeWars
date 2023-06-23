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
/*
===============================================
refractoring code because last commit was wrong 
===============================================
*/
let singleInstance = null; // this will hold our single instance (that is the object that we will create)
function Singleton() {
  if (singleInstance) {
    return singleInstance; // each time we call this function with 'new' we have it checks if single instance is holding an object or not. aka is there already an instance that has been created. At the first instance it is no so this never runs
  }
  singleInstance = this; // this is pointing to the empty object that was just created
}
// the word new just creates an empty object{} at first

var obj1 = new Singleton(); // at this point new creates an empty object. it then goes into the constructor function. SingleInstance is already null so it skips the first conditional and moves to the second line. it takes that empty object and give it to SingleInstance. It now holds the empty object aka that empty object is bound to SingleInstance or we can say that SIngleInstance points to that instance( which has a name now called obj1). (this is refering to that empty object). there is no explicit return of the object then js automatically does that. the new instance gets a name called obj1

var obj2 = new Singleton(); //Now we attempt to create a second instance of Singleton. But because singletonInstance is no longer null (it's obj1), the Singleton function returns singletonInstance instead of creating a new instance. So obj2 is actually the same object as singletonInstance and obj1. they are all pointing to the same object.
