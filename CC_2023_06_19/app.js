// For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. It should have a toString method that returns a human readable string indicating the argument information passed in. It should also allow the name property to be set.

// create your Animal class like object here

/*

PREP
P: 2 parameters being passed in - name and type
    one toString method
R:
  Return a human readable string indicating the argumens passed in 
E:
  let dog = new Animal('Max', 'dog');
  dog.toString(); // should return 'Max is a dog'
  dog.type; // should == 'dog'
  dog.name; // should == 'Max'
  dog.name = 'Lassie'; // should set name to 'Lassie'
P:
  create the class using the class keyword 
  i will need a constructor
  i need a setter method and a getter method for the name property 
  the name property needs to be prepended with an underscore to keep it private 
*/

class Animal {
    constructor(name,type){
      this._name=name;
      this.type=type;
    }
    get name(){
      return this._name;
    }
    set name(value){
      this._name=value
    }
    toString(){
      return `${this.name} is a ${this.type}`
    }
  }