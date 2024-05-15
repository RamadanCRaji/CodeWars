// Array Mappings
// Oh no, the map method for arrays has been disabled. Can you fix it?

// In case you haven't come across the map method for arrays, here is how it works:

// [1,2,3].map(x => x ** 2) === [1,4,9]
// [1,2,3].map(x => 2 * x) === [2,4,6]
// [1,2,3].map(x => 2 ** x) === [2,4,8]
// [1,2,3].map(x => x.toString()) === ["1","2","3"]
// ["1","2","3"].map(x => parseInt(x)) === [1,2,3]
// ["random","array","to","be","mapped"].map(x => mapping(x)) === [mapping("random"),mapping("array"),mapping("to"),mapping("be"),mapping("mapped")]

/* 
P
   an  array object which map method is called on 
R
   enure that map method returns an array with length staying the same
P
   map method
      takes in CBF
      it can pass C,I,A to the CBF 
   Array.prototype.map=function(cbf){
      return Array.from(this,cbf)
   }

*/

//E
// [1,2,3].map(x => x ** 2) ===> [1,4,9]
// [1,2,3].map(x => 2 ** x) === [2,4,8]
