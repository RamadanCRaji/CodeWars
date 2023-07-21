// You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

// eg:

// spread(someFunction, [1, true, "Foo", "bar"] )
// // is the same as...
// someFunction(1, true, "Foo", "bar")

/*
P:
    a callback funtion and an array or argument passed into a higher order funtion 
R:
    ensure the higer order funtion also returns the result of calling the callback function 
E
    spread(someFunction, [1, true, "Foo", "bar"] ) 
    // is the same as...
    someFunction(1, true, "Foo", "bar")
P:
    create a higher order function with two arguments
        callback and arry of list 
    invoke the higer order function and pass in the arr of arguments upacked into variables 
    add the keyword return 
    the callback function could be performing any fucntion the main goal is to pass it arguments 
*/
function spread(callback, arrOfArgument) {
  return callback(...arrOfArgument);
}

function callback(x, y) {
  return x + y;
}
console.log(spread(callback, [1, 2]));//==> 3

console.log(callback(1, 2));//==>3
