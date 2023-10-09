// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

/**
 * input are three intgegers a,b,c
 * create a fucntion that returns true if the input can be used to build a triangle
 * Example
    * isTriangle(1,2,2), true
    * 4<5
* formula of a triangle
    *1/2 base x height 
    a^2=b^+c^2
    i see to sides equal 
    if a =b =c then yes 
    if a^2=b^+c^2 then yes 
    if c^2> a^2+b^2 then yes 
    if c^2< a^2+b^2 then yes 
    create fucntion that checks if it meets either of those math conditions
 */
function isTriangle(a, b, c) {
    [a, b, c] = [a, b, c].sort((a, b) => a - b)
    if (isAcute(a, b, c)) return true
    if (isObtuse(a, b, c)) return true
    if (isRightAnle(a, b, c)) return true
    if (isEquiAngle(a, b, c)) return true
    else { return false; }
}
function isRightAnle(a, b, c) {
    return (c * c) === (b * b) + (a * a)
}
function isObtuse(a, b, c) {
    return (c * c) > (b * b) + (a * a)
}
function isAcute(a, b, c) {
    return (c * c) < (b * b) + (a * a)
}
function isEquiAngle(a, b, c) {
    return (a === b && b === c)
}


