// // 7 kyu

// ========================1 TASK========================

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution('abcde', 'cde'));
console.log(solution('abcde', 'abc'));

// others SOLUTIONS

//  =====2======
// const solution = (str, ending) => str.endsWith(ending);

//  =====3======

// function solution(str, ending){
//     if (typeof(str) != "string" || typeof(ending) != "string")
//       throw "wrong type";
//     if (ending.length>str.length)
//       return false;
//     return str.substr(str.length-ending.length, ending.length) == ending;
//   }

//  =====4======

// function solution(str, ending){
//     return str.substr(-ending.length) == ending;
//   }

//  =====5======

// function solution(str, ending){
//     return str.slice(0 - ending.length) === ending;
//   }

// ========================2 TASK========================

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  const splitString = str.split(' ');

  function reverseWord(word) {
    return word.split('').reverse().join('');
  }

  let reverseWords = splitString.map(reverseWord);
  return reverseWords.join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

//  =====2======

// function reverseWords(str) {
//     return str.split(' ').map(function(word){
//       return word.split('').reverse().join('');
//     }).join(' ');
//   }

//  =====3======

//   function reverseWords(str) {
//     // Go for it
//     //split words into seperate arrays
//     return str.split("").reverse().join("").split(" ").reverse().join(" ");
//   }

//  =====4======

//   function reverseWords(str) {
//     let reversedWord = '';
//     let reversedStr = '';
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] !== ' ') {
//         reversedWord = str[i] + reversedWord;
//       } else {
//         reversedStr += reversedWord + ' ';
//         reversedWord = '';
//       }
//     }
//     return reversedStr + reversedWord;
//   }

//  =====5======

// var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)

// ========================3 TASK========================
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel('This website is for losers LOL!'));

//  =====2======

//   function disemvowel(str) {
//     return (str || "").replace(/[aeiou]/gi, "");
//   }
//  =====3======

// const vowels = 'aeiou';

// function disemvowel(str) {
//   return str
//     .split('')
//     .filter(letter => !vowels.includes(letter.toLowerCase()))
//     .join('');
// }
//  =====4======

// function disemvowel(str) {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];

//     return str.split('').filter(function(el) {
//       return vowels.indexOf(el.toLowerCase()) == -1;
//     }).join('');
//   }

// ========================4 TASK========================

// Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.

// At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.

// Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.

// Example:

// [10,10,10,18,20,20] --> 12

function passed(list) {
  const passList = list.filter(el => el <= 18);

  if (passList.length === 0) {
    return 'No pass scores registered.';
  }
  const sum = passList.reduce((acc, el) => acc + el, 0);
  const average = Math.round(sum / passList.length);
  return average;
}

console.log(passed([10, 10, 10, 18, 20, 20]));

//  =====2======
// function passed (list) {
//     var c=0;
//     var d=0;
//     for (var i=0; i<list.length; ++i)
//       if (list[i]<=18)
//       {
//         c++;
//         d+=list[i];
//       }
//     return c==0?'No pass scores registered.':Math.round(d/c);
//   }

//  =====3======
// function passed (list) {

//     // dont need a new array - just a new variable to loop to tally total scores
//     // and another new variable to count number of passes
//     // single for loop can do two actions as looping through same data
//     // if statement with one condition (<=18) but two outputs (increment passes and sum score)
//     // then divide two variables using round function

//     let passedScores = 0;
//     let numberPassed = 0;

//       for (let i=0; i < list.length; i++)

//         if (list[i] <= 18) {
//           passedScores += list[i];
//           numberPassed++
//         }

//       if (numberPassed === 0) {
//         return 'No pass scores registered.'
//         } else {
//           return Math.round(passedScores/numberPassed)
//         }
//     }

// ========================5 TASK========================

// Coding in function countAnimals. function accept two parameters: animals, a string contains some animals; count, an array list of which animals we should count. The result should be a number array.

// Examples
// countAnimals("dog,cat",["dog","cat"]); //=> [1,1]
// countAnimals("dog,cat",["dog","cat","pig"]); //=> [1,1,0]
// countAnimals("dog,dog,cat",["dog","cat"]); //=> [2,1]
// countAnimals("dog,dog,cat",["pig","cow"]); //=> [0,0]

function countAnimals(animals, count) {
  const anim = [];
  const regex = new RegExp(count.join('|'), 'g'); //для пошуку всіх тварин зі списку

  const matches = animals.match(regex); //для знаходження всіх співпадінь між регулярним виразом і рядком animals

  for (const animal of count) {
    const countAnimal = matches
      ? matches.filter(match => match === animal).length
      : 0;
    anim.push(countAnimal);
  }
  return anim;
}
console.log(countAnimals('dog,cat', ['dog', 'cat']));

// мій варіант без регулярного виразу
// function countAnimals(animals, count) {
//     const animalArray = animals.split(','); // розділити рядок animals на масив за комами
//     const result = [];

//     for (const targetAnimal of count) {
//       let countForAnimal = 0;
//       for (const animal of animalArray) {
//         if (animal === targetAnimal) {
//           countForAnimal+=1;
//         }
//       }
//       result.push(countForAnimal);
//     }

//     return result;
//   }

//  =====3======
// function countAnimals(animals,count){
//     return count.map(animal => (animals.match(new RegExp(animal, "g")) || []).length);
//   }

//  =====4======

//   const countAnimals = (animals,count) => count.map(x => animals.split(x).length - 1);

//  =====5======

// function countAnimals(animals,count){
//     return count.map(function(x){
//       return (animals.match(new RegExp(x,'g'))||[]).length;
//     });
//   }

// You get a new job working for Eggman Movers. Your first task is to write a method that will allow the admin staff to enter a person’s name and return what that person's role is in the company.

// You will be given an array of object literals holding the current employees of the company. You code must find the employee with the matching firstName and lastName and then return the role for that employee or if no employee is not found it should return "Does not work here!"

// The array is preloaded and can be referenced using the variable employees ($employees in Ruby). It uses the following structure.

// let employees = [ {firstName: "Dipper", lastName: "Pines", role: "Boss"}, ...... ]
// There are no duplicate names in the array and the name passed in will be a single string with a space between the first and last name i.e. Jane Doe or just a name.

// ========================6 TASK========================

function findEmployeesRole(name) {
  const [firstName, lastName] = name.split(' ');

  for (let i = 0; i < employees.length; i += 1) {
    if (
      employees[i].firstName === firstName &&
      employees[i].lastName === lastName
    ) {
      return employees[i].role;
    }
  }
  return 'Does not work here!';
}

//  =====2======

// function findEmployeesRole(name) {
//     for(var i = 0; i < employees.length; i++)
//       if(name === employees[i].firstName + " " + employees[i].lastName) return employees[i].role;
//     return "Does not work here!";
//   }

//  =====3======

// function findEmployeesRole(name) {
//     let [employee] = employees.filter(x => `${x.firstName} ${x.lastName}` === name);
//     return employee ? employee.role : "Does not work here!";
//   }

//  =====4======

// const findEmployeesRole = (() => {

//     let employees = [
//         { firstName: "Ollie",  lastName: "Hepburn",  role: "Boss" },
//         { firstName: "Morty",  lastName: "Smith",    role: "Truck Driver" },
//         { firstName: "Peter",  lastName: "Ross",     role: "Warehouse Manager" },
//         { firstName: "Cal",    lastName: "Neil",     role: "Sales Assistant" },
//         { firstName: "Jesse",  lastName: "Saunders", role: "Admin" },
//         { firstName: "Anna",   lastName: "Jones",    role: "Sales Assistant" },
//         { firstName: "Carmel", lastName: "Hamm",     role: "Admin" },
//         { firstName: "Tori",   lastName: "Sparks",   role: "Sales Manager" },
//         { firstName: "Peter",  lastName: "Jones",    role: "Warehouse Picker" },
//         { firstName: "Mort",   lastName: "Smith",    role: "Warehouse Picker" },
//         { firstName: "Anna",   lastName: "Bell",     role: "Admin" },
//         { firstName: "Jewel",  lastName: "Bell",     role: "Receptionist" },
//         { firstName: "Colin",  lastName: "Brown",    role: "Trainee" }
//     ];

//     return name => employees.reduce((o, e) => (o[`${e.firstName} ${e.lastName}`] = e.role, o), {})[name] || 'Does not work here!';

// })();

// ========================7 TASK========================

// Write a function that takes two arguments, and returns a new array populated with the elements that only appear once, in either one array or the other, taken only once; display order should follow what appears in arr1 first, then arr2:

// hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]) // [4, 5]
// hotSingles(["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"]) // ["tartar", "domino"]
// hotSingles([77, "ciao"], [78, 42, "ciao"]) // [77, 78, 42]
// hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5, 4]) // [4,5]

//Мої варіанти не пройшли повну перевірку на кодеварс
function hotSingles(arr1, arr2) {
  const concatArrs = arr1.concat(arr2);

  let elCounts = {};

  concatArrs.forEach(el => {
    if (elCounts[el]) {
      elCounts[el] += 1;
    } else {
      elCounts[el] = 1;
    }
  });

  const unElem = [];
  concatArrs.forEach(el => {
    if (elCounts[el] === 1) {
      unElem.push(el);
      elCounts[el] = 0;
    }
  });
  return unElem;
}

console.log(hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5])); //

// other my solution
function hotSingles(arr1, arr2) {
  const concatArrs = arr1.concat(arr2);

  const elCounts = concatArrs.reduce((counts, el) => {
    counts[el] = (counts[el] || 0) + 1;
    return counts;
  }, {});
  const unElem = concatArrs.filter(el => {
    return elCounts[el] === 1;
  });
  return unElem;
}

console.log(hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]));
console.log(hotSingles(['tartar', 'blanket', 'domino'], ['blanket']), [
  'tartar',
  'domino',
]);
console.log(hotSingles([77, 'basketweave'], [78, 42, 'basketweave']));
console.log(hotSingles([100, 45, 'ciao'], [100, 2, 3, 45, 5]));
console.log(hotSingles([10, 200, 30], [10, 20, 3, 4, 5, 200]));
console.log(hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5, 4]));
//консоль видає вірні тести, але кодеварсу видніше

// варіанти іншиї учасників =====2======

// function hotSingles(arr1, arr2) {
//     var newArr = [];
//     for(var i=0;i<arr1.length;i++)
//     {
//       if(!newArr.includes(arr1[i]) && !arr2.includes(arr1[i]))
//       {
//         newArr.push(arr1[i]);
//       }
//     }
//     for(var i=0;i<arr2.length;i++)
//     {
//       if(!newArr.includes(arr2[i]) && !arr1.includes(arr2[i]))
//       {
//         newArr.push(arr2[i]);
//       }
//     }
//     return newArr;
//   }

// =====3======
// var hotSingles = (a1,a2) => [...new Set(a1.concat(a2))].filter(v => !a1.includes(v) || !a2.includes(v));

// =====4======

// function hotSingles(arr1, arr2) {
//     let firstFilter =  arr1.filter(e => !arr2.includes(e))
//     let secondFilter =  arr2.filter(e => !arr1.includes(e))
//     let combined = [...firstFilter, ...secondFilter];

//     return combined.filter((e, i) => combined.indexOf(e) === i)
//   }

// =====5======

// const hotSingles = (A, B) => [...new Set([
//     ...A.filter(a => !B.includes(a)),
//     ...B.filter(b => !A.includes(b))
//   ])]

// ========================8 TASK========================

// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

// function combine(...objs) {
//   const returnedTarget = {};
//   objs.forEach(obj => {
//     Object.assign(returnedTarget, obj);
//   });
//   return returnedTarget;
// }
// const objA = { a: 10, b: 20, c: 30 };
// const objB = { a: 3, c: 6, d: 3 };
// const objC = { a: 5, d: 11, e: 8 };
// const objD = { c: 3 };
// console.log(combine((objA, objB, objC)));

function combine(...objs) {
  const returnedTarget = {};

  for (const obj of objs) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (returnedTarget.hasOwnProperty(key)) {
          returnedTarget[key] += obj[key];
        } else {
          returnedTarget[key] = obj[key];
        }
      }
    }
  }
  return returnedTarget;
}

// =====2======

// function combine() {
//     var obj = {}

//     for (var i = 0; i < arguments.length; i++) {
//           for (var key in arguments[i]) {
//             obj[key] = obj[key] ? obj[key] + arguments[i][key]: arguments[i][key]
//           }
//     }

//     return obj;
//   }
// =====3======

// function combine(...obj) {
//     let objArr = [].concat(...obj)
//     let finalObj = {}
//     objArr.forEach(object => {
//       for(key in object){
//         if(finalObj[key]) finalObj[key] = finalObj[key] + object[key]
//         else finalObj[key] = object[key]
//       }
//     })
//     return finalObj
//   }

// =====4======

// const combine = (...args) => {
//     const res = {}

//     args.forEach(obj => {
//       const keys = Object.keys(obj)

//       keys.forEach(key => {
//         if(!res[key]) {
//           res[key] = obj[key]
//         } else {
//           res[key] += obj[key]
//         }
//       })
//     })

//     return res
//   }\

// ========================9 TASK========================

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
  const sum = a + b;
  const str = sum.toString(2);
  return str;
}

//   function addBinary(a,b){
//   return (a+b).toString(2)
// }

// function addBinary(a,b) {
//     var c = a + b;
//     var res = '';
//     while (c >= 1) {
//       var res = c % 2 + res;
//       c = Math.floor(c / 2);
//     }
//     return res;
//   }

// const addBinary = (a, b) => Math.trunc(a + b).toString(2)

// ========================10 TASK========================

// Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!

// You will have to define a function, which will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either a.m. or p.m.) as input.

// Your task is to return a four-digit string that encodes that time in 24-hour time.

// Notes
// By convention, noon is 12:00 pm, and midnight is 12:00 am.
// On 12-hours clock, there is no 0 hour, and time just after midnight is denoted as, for example, 12:15 am. On 24-hour clock, this translates to 0015.

function to24hourtime(hour, minute, period) {
  if (period === 'am' && hour === 12) {
    hour = 0;
  } else if (period === 'pm' && hour !== 12) {
    hour += 12;
  }
  return hour.toString().padStart(2, '0') + minute.toString().padStart(2, '0');
}

//   function to24hourtime(hour, minute, period) {
//     return String(period=='am'?hour%12:hour==12?12:hour+12).padStart(2,'0')+(minute+'').padStart(2,'0');
//   }

// // ========================11 TASK========================
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  const counts = {};

  for (const num of numbers) {
    if (counts[num]) {
      counts[num] += 1;
    } else {
      counts[num] = 1;
    }
  }

  for (const num in counts) {
    if (counts[num] === 1) {
      return parseInt(num);
    }
  }
}

console.log(stray([1, 1, 2]));

// // ========================12 TASK========================

// You're looking through different hex codes, and having trouble telling the difference between #000001 and #100000
// We need a way to tell which is red, and which is blue!
// That's where you create hex_color()!
// It should read an RGB input, and return whichever value (red, blue, or green) is of greatest concentration!
// But, if multiple colors are of equal concentration, you should return their mix!

// red + blue = magenta

// green + red = yellow

// blue + green = cyan

// red + blue + green = white
// One last thing, if the string given is empty, or has all 0's, return black!

// Examples:

// hexColor('087 255 054') == 'green'
// hexColor('181 181 170') == 'yellow'
// hexColor('000 000 000') == 'black'
// hexColor('001 001 001') == 'white'

function hexColor(codes) {
  const rgbComponents = codes.split(' ');

  const red = parseInt(rgbComponents[0]);
  const green = parseInt(rgbComponents[1]);
  const blue = parseInt(rgbComponents[2]);

  const maxConcentration = Math.max(red, green, blue);

  if (codes.trim() === '' || (red === 0 && green === 0 && blue === 0)) {
    return 'black';
  }

  if (
    red === maxConcentration &&
    green === maxConcentration &&
    blue === maxConcentration
  ) {
    return 'white';
  } else if (red === maxConcentration && green === maxConcentration) {
    return 'yellow';
  } else if (red === maxConcentration && blue === maxConcentration) {
    return 'magenta';
  } else if (green === maxConcentration && blue === maxConcentration) {
    return 'cyan';
  } else if (red === maxConcentration) {
    return 'red';
  } else if (green === maxConcentration) {
    return 'green';
  } else if (blue === maxConcentration) {
    return 'blue';
  }
}

console.log(hexColor('087 255 054'));
console.log(hexColor('181 181 170'));
console.log(hexColor('000 000 000'));
console.log(hexColor('001 001 001'));

// =====2======

// function hexColor(rgb) {
//   let colors = (rgb || '0 0 0').split(' ').map(Number);
//   let max = Math.max(colors[0], colors[1], colors[2]);
//   let hash = colors.map(c => c > 0 && c == max ? '1' : '0').join('');

//   return {
//     '000': 'black',
//     '111': 'white',
//     '100': 'red',
//     '110': 'yellow',
//     '010': 'green',
//     '011': 'cyan',
//     '001': 'blue',
//     '101': 'magenta'
//   }[hash];
//}

// =========3==========
// const COLORS = ["black", "blue", "green", "cyan", "red", "magenta", "yellow", "white"];

// function hexColor(codes) {
//   if (!codes) return COLORS[0];
//   const rgb = codes.split` `,
//     max = Math.max(...rgb),
//     bindex = rgb.map(color => +(color > 0 && color == max)).join``;
//   return COLORS[parseInt(bindex, 2)];
// }

// ========================13 TASK========================

// Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.
// Given an array arr, swap its first and last elements and return the resulting array.
// Example
// For arr = [1, 2, 3, 4, 5], the output should be [5, 2, 3, 4, 1]
// Input/Output
// [input] integer array arr
// Constraints: 0 ≤ arr.length ≤ 50,  -1000 ≤ arr[i] ≤ 1000
// [output] an integer array
// Array arr with its first and its last elements swapped.

function firstReverseTry(arr) {
  if (arr.length === 0) {
    return [];
  }

  let tempArr = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = tempArr;
  return arr;
}
console.log(firstReverseTry([1, 2, 3, 4, 5]));
console.log(firstReverseTry([]));
console.log(firstReverseTry([23, 54, 12, 3, 4, 56, 23, 12, 5, 324]));
//

//===============2==============
// function firstReverseTry(arr) {
//   return arr.length > 1 ? arr.slice(-1).concat(arr.slice(1, -1), arr[0]) : arr
// }

//===============3==============

// function firstReverseTry(arr) {
//   return arr.length <= 1
//     ? arr
//     : [arr[arr.length - 1], ...arr.slice(1, -1), arr[0]];
// }

// ========================14 TASK========================

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

function sum(numbers) {
  let sumM =
    numbers.length > 0
      ? numbers.reduce(function (sumM, numb) {
          return sumM + numb;
        }, 0)
      : 0;
  return sumM;
}

let nth = [];

let sumNth = sum(nth);

//============2============

// function sum(numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

//============3============

// sum = function (numbers) {
//   "use strict";
//   var total = 0;
//   for(var i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// };

// ========================15 TASK========================

// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right.
// solve([5,4,3,2,1]) = [5,4,3,2,1]

// Notice that the last element is always included. All numbers will be greater than 0.
// More examples in the test cases.

// Good luck!
function solve(arr) {
  const result = [];
  const add = [];
  let max = arr[arr.length - 1];

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] >= max && !add.includes(arr[i])) {
      result.push(arr[i]);
      max = arr[i];
      add.push(arr[i]);
    }
  }

  return result.reverse();
}

console.log(solve([16, 17, 14, 3, 14, 5, 2]));
console.log(solve([92, 52, 93, 31, 89, 87, 77, 105]));
console.log(solve([75, 47, 42, 56, 13, 55]));
console.log(solve([67, 54, 27, 85, 66, 88, 31, 24, 49]));
console.log(solve([76, 17, 25, 36, 29]));
console.log(solve([104, 18, 37, 9, 36, 47, 28]));

//================2=================

// function solve(arr) {

//   let res = arr.slice(-1)
//     max = res[0];

//   for (let i = arr.length - 2; i >= 0; i--)
//     if (arr[i] > max)
//       res.unshift(max = arr[i]);

//   return res;

// };

//================3=================

// const solve = array => array.filter((num, index, array) => array.slice(index + 1).every(value => value < num), [])

//================4=================

// function solve(arr) {
//   return arr.filter((v, i) => arr.slice(i+1).every(x => x < v))
// }

// ========================16 TASK========================
// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy',
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob',
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).

const whosOnline = friends => {
  const result = {
    online: [],
    offline: [],
    away: [],
  };
  for (const friend of friends) {
    if (friend.status === 'online' && friend.lastActivity <= 10) {
      result.online.push(friend.username);
    } else if (friend.status === 'online' && friend.lastActivity > 10) {
      result.away.push(friend.username);
    } else {
      result.offline.push(friend.username);
    }
  }

  return result;
};
