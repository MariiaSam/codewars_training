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

// ========================3 TASK========================
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }

  console.log(disemvowel("This website is for losers LOL!"));


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

function passed (list) { 

    const passList = list.filter(el => el <= 18)
    
    if (passList.length === 0) {
     return 'No pass scores registered.'
    }
  const sum =passList.reduce((acc,el ) => acc +el, 0 )
    const average = Math.round(sum /passList.length)
  return average
    } 

    console.log(passed([10,10,10,18,20,20]));

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