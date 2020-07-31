// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {}
  
  // Method 1 = Reverse Array
  //return str.split('')
  //.reverse()
  //.join('');


  //////////////////////////////

  //Method 2 = For loop (decreasing array)

  //let revString = '';
  //for(let i = str.length - 1; i >= 0; i--) {
  //revString = revString + str[i];
  //}
  //return revString;
//}

  // Method 2.1 = For Loop (increasing array)
  
  //let revString = '';
  //for(let i = 0; i <= str.length -1; i++) {
  //revString = str[i] + revString;
  //}
  //return revString;
//}

///////////////////////////////

  // Method 3 For/of Loop

//   let revString = '';
//   for(let char of str) {
//     revString = char + revString;
//   }
//   return revString;
// }

//////////////////////////////

  // Method 4 .forEach

//   let revString = '';
//   str.split('').forEach(function(char) {
//     revString = char + revString;
//   });
//   return revString;
// }

// Method 4.1 using ES6 Arrow Function

// let revString = '';
//   str.split('').forEach(char => revString = char + revString);
//   return revString;
// }

///////////////////////////////////

  //Method 5 Reduce

//   return str.split('').reduce(revString, char) {
//     return char + revString
//   }, '');
// }

  // Method 5.1 Reduce w/ arrow function

//   return str.split('').reduce((revString, char) => char + revString, '');
// }

//////////////////////////////////////////////////////////////////////////////

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {}
  
  
//Method 1 = if statement

  // const revString = str.split('').reverse().join('');
  // if(revString == str) {
  //   return 'true, is a palindrome';
  // } else {
  //   return 'false';
  // }

// Method 2 = boolean logic
//   const rts = str.split('').reverse().join('');
//   return rts === str;
// }


/////////////////////////////////////////////////////////////////////////

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {}
//   const revString = int.toString().split('').reverse().join('');

//   return parseInt(revString) * Math.sign(int)
// }

//////////////////////////////////////////////////////////////////////////

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {

  // Method 1 (old but acceptable)
  // const strArr = str.toLowerCase().split(' ');
  // for(let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
  // }
  // return strArr.join(' ');

  //////////////////////////////
  
  //Method 2 (using map function)

  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(function(word) {
  //     return word[0].toUpperCase() + word.substring(1);
  //   })
  //   .join(' ');

//Method2.1 - Arrow Function (generally best)

  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.substring(1)) 
  //   .join(' ');


///////////////////////////

// Method 3 (using regular expression)

  // return str.replace(/\b[a-z]/gi, function(char) {
  //   return char.toUpperCase();
  // })
}

///////////////////////////////////////////////////////////////////////////////////////


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

// key value pair
function maxCharacter(str) {
  // const charMap = {};
  // let maxNum = 0;
  // let maxChar = '';

  // str.split('').forEach(function(char) {
  //   if(charMap[char]) {
  //     charMap[char]++;
  //   } else {
  //     charMap[char] = 1;
  //   }
  // });

  // for(let char in charMap) {
  //   if(charMap[char] > maxNum) {
  //     maxNum = charMap[char];
  //     maxChar = char;
  //   }
  // }
  // return maxChar;
}

/////////////////////////////////////////////////////////////////////////

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {

    for(let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) { // could replace with '(i % 15 === 0)' instead of using 3 and 5
        console.log('fizzbuzz!');
      } else if(i % 3 === 0) {
        console.log('fizz!');
      } else if (i % 5 === 0) {
        console.log('buzz!');
      } else {
      console.log(i);
    }
  }
}



// Call Function
const output = fizzBuzz();

console.log(output);
