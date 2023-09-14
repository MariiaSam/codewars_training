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
    const splitString = str.split(" ");
    
    function reverseWord(word){
      return word.split('').reverse().join("")
    }
    
    let reverseWords = splitString.map(reverseWord);
  return reverseWords.join(" ");
    
  }

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))

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
