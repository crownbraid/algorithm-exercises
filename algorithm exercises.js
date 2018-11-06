/* Create a function that takes two or more arrays and returns an array of the symmetric 
difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), 
the mathematical term "symmetric difference" of two sets is the set 
of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). 
For every additional symmetric difference you take (say on a set D = {2, 3}), 
you should get the set with elements which are in either of the two the sets but not both 
(C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain only unique 
values (no duplicates).

*/
function diffArr(arr1, arr2) {
  return arr1
        .filter(num => !arr2.includes(num))
        .concat(arr2.filter(num => !arr1.includes(num)));
}
function sym(...args) {
    let arr = args.reduce(diffArr).sort();
    arr = arr.filter( (el, i, arr) => el != arr[i-1]);
    console.log(arr);
}




// Reverse String
function FirstReverse(str) { 
  return str.split('').reverse().join('');
}





/* given an array and some number of arguments, 
return an array with no instances that equal the additional arguments. */
const destroyer = (arr, ...args) => arr.filter( num => !args.includes(num));





// Print Factorial Product
function factorialize(num) {
  return [...Array(num + 1).keys()].slice(1)
          .reduce( (a, b) => a * b, 1);
}



// Calc length of longest word in sentence
function lengthOfLongestWordInSentence(str) {
  return str
          .split(' ')
  		  .sort((a, b) => b.length - a.length)
  		  [0].length;
}




// input array of arrays, return array of largest value from each sub-array
function largestValuesOfSubarrs(arr) {
  return arr.map(arr => Math.max(...arr));
}




// check if string ends with another string
function confirmEnding(str, target) {
  return str.slice(-target.length) == target;
}




// repeat a string a number of times
function repeatStringNumTimes(str, num) {
  if (num < 1) return "";
  else return Array(num).fill(str).join('');
}




// check if input is a boolean primitive
function isBool(input) {
  return (input === true || input === false) ? true : false;
}




// efficient palindrome checker
function isPalindrome(str) {
  let start = 0,
  	  end = str.length - 1;
  	  txt = str.toLowerCase();

  while (end > start) {
    if (txt[start].match(/[\W_]/)) {start++; continue;}
    if (txt[end].match(/[\W_]/)) {end--; continue;}
    
    if (txt[start] !== txt[end]) return false; 
    
    start++; 
    end--;
  }
  return true
}