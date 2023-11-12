// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

/**
 * PREP
 * input--> array of strings where each string is "x:y"
 * return total number of points recieved
    * if x>y:3 
    * if x<y:0
    * if x=y:1
* procedures 
    * loop through array with map 
        * inisde callback function use a helper function to determine who won
            * helper function recieves string split ':', change the elements in the array to intergers ,compare and then return value
        * use reduce to return the final answer 
 */
function points(games) {
    let finalPoints = [...games].map(match => {
        return pointsEarned(match)
    })
    return finalPoints.reduce((acc, nextItem) => acc + nextItem, 0)
}
function pointsEarned(match) {
    let arrayofPoints = match.split(':').map(Number)
    if (arrayofPoints[0] > arrayofPoints[arrayofPoints.length - 1]) {
        return 3
    }
    else if (arrayofPoints[0] < arrayofPoints[arrayofPoints.length - 1]) {
        return 0
    }
    else { return 1 }
}
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]))//==> 30 point for team x 
console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]))
console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]))