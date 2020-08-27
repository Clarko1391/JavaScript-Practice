// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

  //strip out punctuation
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  //sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  //returns the first longest word value in array after sorting, but does not asccount for multiple words of the same length
  // return sorted[0];

  //if multiple words, put into new array
  const longestWordArr = sorted.filter((word) => word.length === sorted[0].length);

  //check if more than one array value exists
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}


// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  //SOLUTION 1 using 'while' loop
  // // init chunked array
  // const chunkedArr = [];
  // // set index
  // let i = 0;

  // // loop while index is less than the array length
  // while (i < arr.length) {
  //   // slice out from the index to the index + the chunk length and push onto the chunked array
  //   chunkedArr.push(arr.slice(i, i + len));
  //   // increment by chunk len
  //   i += len;
  // }
  // return chunkedArr;

  //SOLUTION 2 using 'for each'

  //init chunkedArr
  const chunkedArr = [];

  //loop through arr
  arr.forEach(function(val) {
    //get last element
    const last = chunkedArr[chunkedArr.length - 1];
    
    //check if last exists and if its equal to the chunk length
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // //SOLUTION 1 (throws error that a.concat(b) is not a function, not sure what I'm missing)
  // return arrays.reduce(function (a, b) {
  //   return a.concat(b);
  // });
  
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
const output = flattenArray([1, 2], [3, 4], [5, 6], [7]);

console.log(output);
