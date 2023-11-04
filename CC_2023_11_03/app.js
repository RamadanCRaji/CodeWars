/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above

*/

/**
 * Parameter
    * array input
    * element in Arr=customers 
    * intVal of element=== customer checkout time
*  return
    * Total time for all customers to checkout

* Pseudocade
    * create an array whose length===n and fill those positions with 0
        *  this represents the initial time it for both tills 
    * loop arr parameter and on each loop 
        *  find the till with the smallest checkout time 
        *  add the current customers time to the current checkout time at that till of interest
    * find the maximum amount of time for that till and that will be === total time it took for everyone to checkout 
 */


function queueTime(customers, n) {
    let tills = new Array(n).fill(0)

    customers.forEach(cutomer => {
        let nextTill = tills.indexOf(Math.min(...tills))
        tills[nextTill] = tills[nextTill] + customers
    })
    return Math.max(...tills)
}

// example 
console.log(queueTime([5, 3, 4], 1)) // R: total time => 12 
console.log(queueTime([10, 2, 3, 3], 2)) // R: total time=> 10