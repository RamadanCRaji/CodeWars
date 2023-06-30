// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.
// For example, given the following list:

/*
PREP
P: array of object containing list of people and their programming skills and origin 
R:
    Return the number of people who are from Europe and programming language is JavaScript;
E:
    var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
    ];
    your function should return number 1.   
P:
    use arr.filter
    have conditonal statment
        if item[continent]===Europe and item[language] ==='Javascript' then retrun that object 
    return arr.length 
*/ function countDevelopers(list) {
  let jSEuroDeveloper = list.filter((item) => {
    if (item["continent"] === "Europe" && item["language"] === "JavaScript") {
      return item;
    }
  });
  return jSEuroDeveloper.length;
}
