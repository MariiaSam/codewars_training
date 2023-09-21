// 8 kyu

// ========================1 TASK========================

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because

function squareSum(numbers) {
  let sum = 0;

  for (i = 0; i < numbers.length; i += 1) {
    sum += numbers[i] ** 2;
  }
  return sum;
}

console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);

// others SOLUTIONS

//  =====2======
// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//       return (n*n) + sum;
//     }, 0)
//   }

//  =====3======
// function squareSum(numbers){
//     return numbers.reduce((sum,num) => sum + (num * num), 0);
// }

//   =====4======
// function squareSum(numbers){
//     var sum = 0;
//     numbers.forEach(function(n) {
//       sum += n * n
//     });
//     return sum;
//   }

//   =====5======

//     function squareSum(numbers)
// {
//   var totalSum = 0;
//   for (i=0;i<numbers.length;i++)
//   {
//     totalSum += Math.pow(numbers[i], 2);
//   }
//   return totalSum;
// }

// //  =====6======

// function squareSum(numbers) {
//     return numbers.map(n => n ** 2).reduce((a, b) => a + b, 0);
//   }

//========================2 TASK========================

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash(words) {
  const strWords = words.join(' ');
  return strWords;
}

console.log(smash(['hello', 'world']));

//  =====2======
//   const smash = words => words.join(' ');

//  =====3======
// function smash (words) {
// "use strict";
// var smashed = '';
// for(var i = 0; i<words.length; i++) {
//   smashed += words[i];
//   if(i!=words.length-1) {
//     smashed += ' ';
//   }
// }
// return smashed;
// };

//  =====4======
//    function smash (words) {
//     "use strict";
//     return words.join(" ").trim();
// };

// ========================3 TASK========================
// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

function findMultiples(integer, limit) {
  const multiples = [];
  for (i = integer; i <= limit; i += integer) {
    multiples.push(i);
  }
  return multiples;
}

//  =====2======
// function findMultiples(int,limit){
//     let multiples = [];
//     for(let i = int; i <= limit; i += int){ multiples.push(i); }
//     return multiples;
//   }

//  =====3======
// function findMultiples(int, limit) {
//     return Array.from({length: parseInt(limit/int)}, (_,i)=> (i+1)*int )
//   }

//  =====4======
// function findMultiples(integer, limit) {

//     let base = 0;
//     const multiples = [];

//     while (true) {
//       base += integer;
//       if (base > limit) break;
//       multiples.push(base);
//     }

//     return multiples;
//   }

// ========================4 TASK========================

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!
function removeEveryOther(arr) {
  const arrFilter = arr.filter((elem, item) => item % 2 === 0);
  return arrFilter;
} //перевіряє парне чи ні
removeEveryOther(['Hello', 'Goodbye', 'Hello Again']);

//  =====2======

//   function removeEveryOther(arr){
//     var newArr=[];
//   for (var i = 0; i < arr.length; i+=2){
//     newArr.push(arr[i]);
//     }
//   return newArr;
//   }

//  =====3======

// function removeEveryOther(arr){
//     //your code here
//     for (var i = 1; i < arr.length;i++){
//         arr.splice(i,1);
//     }
//     return arr;
//   }

//  =====4======

// function removeEveryOther(arr){
//     return arr.filter(function(x,y){
//       return y%2==0;
//     });
//   }
//  =====5======
// function removeEveryOther(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       arr.splice(i, 1);
//     }
//     return arr
//   }

// ========================5 TASK========================

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

function distinct(a) {
  const newArr = [...new Set(a)];
  return newArr;
}
//Об'єкти Set дозволяють вам зберігати унікальні значення будь-якого типу, як примітиви, так і інші типи об'єктів. У Set не може бути повторюваного значення. Почитати про це більше можна на  MDN Web Docs .

//  =====2======
// function distinct(arr) {
//     let res = [];

//     for(let i = 0; i < arr.length; i++){
//       if(!res.includes(arr[i])){
//         res.push(arr[i]);
//       }
//   }
//   return res;
//   }

//  =====3======

// const distinct = a => a.filter((item, index) => a.indexOf(item) === index);
//  =====4=====
// const distinct = arr => arr.filter((item, i, arr) => arr.indexOf(item) == i);

// ========================6 TASK========================

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
  const ArrSort = [...s].sort((a, b) => a.localeCompare(b));

  const firstElem = ArrSort[0];

  return (result = firstElem.split('').join('***').toLowerCase());
}
console.log(
  twoSort([
    'bitcoin',
    'take',
    'over',
    'the',
    'world',
    'maybe',
    'who',
    'knows',
    'perhaps',
  ])
);
console.log(
  twoSort([
    'turns',
    'out',
    'random',
    'test',
    'cases',
    'are',
    'easier',
    'than',
    'writing',
    'out',
    'basic',
    'ones',
  ])
);

// ========================7 TASK========================

//       Get ASCII value of a character.

// For the ASCII table you can refer to http://www.asciitable.com/
function getASCII(c) {
  return c.charCodeAt(0);
}

//   function getASCII(chars) {
//     return [...chars]
//       .map(char => char.charCodeAt())
//       .reduce((curr, prev) => prev + curr)
//   }
//   const getASCII = c => c.charCodeAt(0);

// ========================8 TASK========================
//  Your Job
//  Find the sum of all multiples of n below m

//  Keep in Mind
//  n and m are natural numbers (positive integers)
//  m is excluded from the multiples
//  Examples
//  sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
//  sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
//  sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
//  sumMul(4, -7)  ==> "INVALID"

function sumMul(n, m) {
  if (n <= 0 || m <= 0) {
    return 'INVALID';
  }

  let sum = 0;
  for (i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}

console.log(sumMul(0, 0));
console.log(sumMul(2, 9));
console.log(sumMul(4, -7));

// function sumMul(n,m){
//     if (n >= m) return "INVALID";

//   var sum = 0;
//     for (var i = n; i < m; i+=n) {
//       sum += i;
//     }
//     return sum;
//   }

// function sumMul(n,m){
//     if (n <= 0 || m <= 0) return "INVALID";

//     const last = Math.ceil(m/n) * n - n;
//     return (last + n) * (last / n) / 2;
//   }

//         const sumMul = (n, m) =>
//   m > n ? [...Array(m / n ^ 0)].map((_, idx) => ++idx * n).reduce((pre, val) => pre + val * (val < m)) : `INVALID`;


// ========================9 TASK========================

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

const stringToNumber = function(str){
  const  btn = Number(str)
      return btn;
    }

    console.log(stringToNumber("1234"))

    // var stringToNumber = function(str){
    //   return parseInt(str);
    // }

    // var stringToNumber = function(str){
    //   return +str;
    // }