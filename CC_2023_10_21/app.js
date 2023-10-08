// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s) {
    //#Happy Coding! ^_^

    // convert hours to ms
    let hrsToMs = h * 3600000;

    // conver m to ms
    let MinToMs = m * 60000;

    //convert s to ms
    let secsToMs = s * 1000;

    // return time in milli seconds
    let time = hrsToMs + MinToMs + secsToMs;
    return time;
}

console.log(past(0, 1, 1))// past(0,1,1),61000

