/**
 * @param {string} str
 * @return {string}
 */
// function returns string without spaces from the beginning and from the end, and in upper letter register
const transformString = (str) => {
  // write your code here
  return str.trim().toUpperCase();
};

/**
 * @param {number[]} array
 * @return {number}
 */
// function should return max number from array
const findMaxNumber = (array) => {
  // write your code here
  let a;
  let b;

  if (array.length === 0) {
    return NaN;
  }

  else {
    for (let i = 0; i < array.length - 1; i++) {
   
      if (array[i] > array[i + 1]) {
        a = array[i];
      }

      else {
        b = array[i + 1];
      }
    } 
  } 

  if (a > b) {
    return a;
  }

  else {
    return b;
  }
};


/**
 * @param {string} str
 * @return {number[]}
 */
// function returns array of length of every word in string
const getStringWordsLength = (str) => {
  // write your code here
  if (str === '') {
    const toArray = str.split('');
    return toArray;
  }

  else {
    const toArray = str.split(', ');
    const res = toArray.map(item => item.length);
    return res;
  }
};

/**
 * @param {number[]} numArray
 * @param {number} degree
 * @return {number[]}
 */
// function returns array of numbers as result of initial number and degree
const getTransformedNumbers = (numArray, degree) => {
  // write you code here
  const res = numArray.map(item => item ** degree);
  return res;
  
};

/**
 * @param {string} text
 * @return {string}
 */
// function returns text with all first letters at the beginning of sentence capitalized
const getTransformedText = (text) => {
  // write your code here
  const toArray = text.split('. ');
  const toArrayTransform = toArray.map((item) => {return item[0].toUpperCase().concat(item.slice(1))});
  return toArrayTransform.join('. ');
};

/**
 * @param {any[]} array
 * @return {number[]}
 */
// function filters array and return only array of positive integers
const getPositiveIntegers = (array) => {
  // write your code here
  const res = array.filter(item =>typeof item === 'number' && item > 0 && item < Infinity);  
  return res;
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {number}
 */
// functions return index of element in array
const getElementIndex = (array, value) => {
  // write your code here
  const res = array.findIndex(item => item === value);
  return res;
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {any | null}
 */
// function returns item from array or undefined if item is not found
const getItem = (array, value) => {
  // write your code here
  const res = array.find(item => item === value);
  return res;
};

/**
 * @param {string[]} array
 * @param {string} word
 * @return {boolean}
 */
// function returns true if word is in every string in array and false if is not
const isWordInEveryArrayString = (array, word) => {
  // write your code here
  if (array.length === 0) {
    return false;
  }

  else {
  const res = array.every(item => item.indexOf(word) !== -1);
  return res;
  }
};

/**
 * @param {number[]} array
 * @return {boolean}
 */
// function returns true if any number in array is negative
const isNegativeNumbersInArray = (array) => {
  // write your code here
  const res = array.some(item => item < 0);
  return res;
};

/**
 * @param {number[]} array
 * @param {number} startPosition
 * @param {number} endPosition
 * @return {any[]}
 */
// function returns part of array from start to end (including end) positions
const returnArrayPart = (array, startPosition, endPosition) => {
  // write your code here
  const res = array.slice(startPosition, endPosition + 1);
  return res;
};


module.exports = {
  transformString,
  findMaxNumber,
  getStringWordsLength,
  getTransformedNumbers,
  getTransformedText,
  getPositiveIntegers,
  getElementIndex,
  getItem,
  isWordInEveryArrayString,
  isNegativeNumbersInArray,
  returnArrayPart,
};
