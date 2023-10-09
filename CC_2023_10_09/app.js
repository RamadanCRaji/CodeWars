// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

/**
 * input are three intgegers a,b,c
 * create a fucntion that returns true if the input can be used to build a triangle
 * Example
    * isTriangle(1,2,2), true
    * 4<5
* formula of a triangle
    * Use the triangle inequality theorem to check to see if the sum of any two sides is greater than the last side 
    * 
 */
function isTriangle(a, b, c) {
    return a + b > c && a + c > b && c + b > a
}


