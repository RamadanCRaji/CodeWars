// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

/*
P:
    two array inputs- arr1 is the exam code and arr2 is the students answer
    correct answer equals +4
    wrong answers = -1
    blank answers = 0
R:
    return the total scores for each student
E:
    checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
    checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
    checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
    checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
P:
    use a forEach loop
    conditional that checks if the student's answer is '' and if it is  then score+=0
    another conditon that checks if both are equal and if true, then score +=4 else score -=1 
    return score

*/
function checkExam(array1, array2) {
  let score = 0;
  array1.forEach((e, i) => {
    if (array2[i] === "") {
      score += 0;
    } else if (e === array2[i]) {
      score += 4;
    } else {
      score -= 1;
    }
  });
  return score < 0 ? 0 : score;
}
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))

