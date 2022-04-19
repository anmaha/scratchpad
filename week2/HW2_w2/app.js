// Homework Assignment

// Requirements

// Please write code that implements various functions, following the requirements in the list below:

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
maxOfTwoNumbers = (i,j) => {
    // ADD YOUR CODE HERE
    if (i > j){
        return i;
      }
      else if(j>i){
        return j;
      } 
      else {
        return "Numbers are equal"
      }  
    };
    console.log(maxOfTwoIntegers(1,12));

    // Define a function maxOfThree that takes three numbers as arguments and returns the 
    //largest of them.

    maxOfThree = (i,j,k) => {
        // ADD YOUR CODE HERE
        let max = i;
        if (j> max){
            max = j;
        }
        if (k> max){
            max = k;
        }
        return max;
      };
      
// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
isCharacterAVowel = (x) => {
    // ADD YOUR CODE HERE
    let vowels = ['a','e','i','o','u'];
    for (let i=0; i < vowels.length; i++){
        if (x === vowels[i])
            return true; 
    }
            return false;
      
  };
  
console.log(isCharacterAVowel('q'));
console.log(isCharacterAVowel('u'));
console.log(isCharacterAVowel('i'));
console.log(isCharacterAVowel('a'));


// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

sumArray = (array) => {
    // ADD YOUR CODE HERE
  let add = 0;
    for (let i=0; i< array.length; i++){
      add += array[i];
    }
    return add;
  };

console.log(sumArray(numArray));

multArray = (array) => {
    // ADD YOUR CODE HERE
  let mult = 1;
  for (let i=0; i< array.length; i++){
      mult *= array[i];
    }
  return mult;
  };

console.log(multArray(numArray));

// Write a function that returns the number of arguments passed to the function when called.

function func1() {}
function func2(a, b) {}
console.log(func1.length);
// expected output: 0
console.log(func2.length);
// expected output: 2
numArguments = (func) => {
    let num = func.length;
    return num;
}

console.log(numArguments(func1))
// output 0

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
reverseString = (someString) => {
    // ADD YOUR CODE HERE
    let reverse = '';
    for (let i = someString.length-1; i>=0; i--){
        reverse += someString[i];
    }
    return reverse;
};
console.log(reverseString('jag tester'));

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

words = ['word','software','list'];
findLongestWord = (wordsArray) => {
    // the variable that will hold the letterCount
    let count = 0;
    // loop through words
    for (i = 0; i<wordsArray.length; i++){
      //console.log(wordsArray[i].length)
      let numberOfLetters = wordsArray[i].length;
      if (count < numberOfLetters){
        count = numberOfLetters;
      }
    } return count;
};

console.log(findLongestWord(words))
  
// Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
filterLongWords = (wordsArray,i) => {
      let filter =[];
        for (i=0; i<wordsArray.length; i++){
            let numLetters = wordsArray[i].length;
            if(numLetters > x){
                filter.push(wordsArray[i]);
             }
            }
            return filter;
  };
    
// Bonus

// Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().
// Write a function that takes a string as argument and returns an object where:
// the keys are the characters that occur in the string
// the values are the number of occurrences for each letter, regardless of the case
// For example, calling the function with the string "Per Scholas" will return:

// {
//   a: 1,
//   c: 1,
//   e: 1,
//   h: 1,
//   l: 1,
//   o: 1,
//   p: 1,
//   r: 1,
//   s: 2,
// }
