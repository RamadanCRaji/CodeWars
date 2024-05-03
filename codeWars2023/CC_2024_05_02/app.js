// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

/*
P
    function for each number 0-9 
         const nine=()=> 9
        const one=()=>1
    function for each math expression
        minus(three())
            const minus = (callback) => left orperand - right operand
            const divideBy = (callback) => left oprand * 1 / right operand;

    each calculation will have one operand and 2 inters
        left operand [oprator] right operand 
R
    return values based on function that were written

P
   on each operand function, check if function number (arg)
    - if true, pass the number as an argument to the callback
    - if is not true, we'll just return the number
    operator function 
        accept the first argument as the right operand 
            - return a function with argument and the value of tht right operand
    retutn the final calculation
*/

// Number functons
const zero = (callback) => (callback ? callback(0) : 0);
const one = (callback) => (callback ? callback(1) : 1);
const two = (callback) => (callback ? callback(2) : 2);
const three = (callback) => (callback ? callback(3) : 3);
const four = (callback) => (callback ? callback(4) : 4);
const five = (callback) => (callback ? callback(5) : 5);
const six = (callback) => (callback ? callback(6) : 6);
const seven = (callback) => (callback ? callback(7) : 7);
const eight = (callback) => (callback ? callback(8) : 8);
const nine = (callback) => (callback ? callback(9) : 9);

// operation function
const times = (right) => (left) => left * right;
const minus = (right) => (left) => left - right;
const plus = (right) => (left) => left + right;
const dividedBy = (right) => (left) => Math.floor(left / right);

// Examples
console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
