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

console.log(hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]))
console.log(hotSingles(["tartar", "blanket", "domino"], ["blanket"]),["tartar", "domino"])
console.log(hotSingles([77, "basketweave"], [78, 42, "basketweave"]))
console.log(hotSingles([100, 45, "ciao"], [100, 2, 3, 45, 5]))
console.log(hotSingles([10, 200, 30], [10, 20, 3, 4, 5, 200]))