/*
We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.
We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return {name: this.firstName + ' ' + this.lastName};
}

var n = new NameMe('John', 'Doe');
n.firstName //Expected: John
n.lastName //Expected: Doe
n.name //Expected: John Doe

*/
/*
solution
P: will paramerters always be strings? Yes
R: Return all the values of the properties but specifically the name property
E: if n=new NameMe('John', 'Doe');, n.name should return: John Doe
   n.name should return: John Doe
   n.firstName //Expected: John
   n.lastName //Expected: Doe
P: the name property needs to have 'this.' added to it and removed from the object literal notation. 
    remove the object literal notation
*/
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + " " + this.lastName;
}
//refractoring code
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = `${this.firstName} ${this.lastName}`;
}
