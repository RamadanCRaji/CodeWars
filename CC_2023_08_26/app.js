// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".


/*
P:
    four inputs here- entered code, validcode, currentDate, expirationDate
    all as strings 
R:
    return true if the code is valid that is entered code = valid code and current date is not greater than coupon date
E:
    checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
    checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
P:
    i have four parameters, 
    e_C 
    c_C
    cur_D: "July 9, 2015"
    ex_D: "July 2, 2015"
    right of the bat if e_C !==c_C return false : this means that the customer has the worong code 
    another condition to to check 
        covert the dates into array using arr.split(' ')
        create an object that contains the month of the year and their numerical form 
        transform each element in the both cur_D  array and  ex_D array  to numberial form using map
         if obj[e] return obj[e] else return Number(e)
        then have a final comparison 
        if(arr1[0]===arr2[0] && arr1[1]===arr2[1] && arr1[2]===arr2[2] ){} else return false 
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode !== correctCode) return false;
    let Months = { 'january': 1, 'february': 2, 'march': 3, 'april': 4, 'may': 5, 'june': 6, 'july': 7, 'August': 8, 'september': 9, 'october': 10, 'november': 11, 'december': 12 };
    currentDate = currentDate.toLowerCase().replaceAll(',', '').split(' ').map(e => Months[e] ? Months[e] : Number(e))
    expirationDate = expirationDate.toLowerCase().replaceAll(',', '').split(' ').map(e => Months[e] ? Months[e] : Number(e))
    if ((currentDate[2] < expirationDate[2]) || ((currentDate[2] === expirationDate[2]) && (currentDate[0] < expirationDate[0]))) {
        return true
    }
    else if (currentDate[2] === expirationDate[2] && currentDate[0] === expirationDate[0]) {
        return currentDate[1] <= expirationDate[1]
    }
    else { return false }
}
console.log(checkCoupon("123", '123', "September 5, 2014", "October 1, 2014"))
console.log(checkCoupon("123a", "123", "July 9, 2015", "July 2, 2015"))
