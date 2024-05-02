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
            const minus = (callback) => -1 * callback(); //change the callback to negative
            const divideBy = (callback) => 1 / callback();

    each calculation will have one operand and 2 inters
R
    return values based on function that were written

P
    the operands takes in anguments which are numbers 
        the number operator function is invoke that inside the operand funtion and ruturns that callback invoked with appropriate sumbol 
    the outer higher function takes in one argument and invokes that
    eight(minus(three()))
        - function eight(callack1(callback2)){
            return 8(callback1(callback2()))
        }


*/

// Example
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

function eight(callback1) {}
