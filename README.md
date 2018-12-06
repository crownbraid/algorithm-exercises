```javascript
/* identify and count most frequent letter in a sentence */

const mostCommonLetter = sentence => {
	const sentAsArrayOfAlphaNums = sentence.replace(/[^A-Za-z0-9]/gi, '').split(''),
	      uniqueLetters = [...new Set( sentAsArrayOfAlphaNums)].sort();

	 // Create array of objects listing count of each letter in the sentence => then reduce array to highest count
	return uniqueLetters.map(letter => {
		const count =  sentAsArrayOfAlphaNums.filter(l => l == letter).length
		return {letter, count};
	})
	.reduce( (max, curr) => curr.count > max.count ? curr : max);
}

 
 
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
function symDiff(arr1, arr2) {
  return arr1.filter(num => !arr2.includes(num))
         .concat(arr2.filter(num => !arr1.includes(num)));
}
function multSymDiffs(...args) {
    let totDiff = args.reduce(symDiff).sort();
    let totDiffNoDuplicates = totDiff.filter( (el, i, arr) => el != arr[i-1]);
    return totDiffNoDuplicates;
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




// check if string ends with another string without using .endsWith()
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


// numerical binary search
const binarySearch = (array, value, start, end) => {
    const start = start === undefined ? 0 : start;
    const end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    var index = Math.floor((start + end) / 2);
    var item = array[index];

    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index+1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index-1);
    }
};


// merge sort
const mergeSort = array => {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle),
    	right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

const merge = (left, right, array) => {
    let leftIndex = 0,
	rightIndex = 0,
	outputIndex = 0;
	
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (var i=leftIndex; i<left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (var i=rightIndex; i<right.length; i++) {
        array[outputIndex++] = right[i];
    }
	
    return array;
};


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




//finds the largest prime factor of a given number
function lPrimeFac(num) {
  if (num % Math.floor(num) != 0 || num <= 2) { return "Please enter an appropriate number"; break;};
  for (div = 2; num != div; div++) {
    if (num % div == 0) {num /= div; div = 2;};
  };
  return div;
};




//finds largest palindromic product
for (let num1 = 999; ; i--) {
  for (let num2 = 999; num2 >= num1; num2--) {
    pro = (num1 * num2).toString;
    for (let i = 0; ; i++) {
      if (pro.charAt(i) != pro.charAt(pro.length - 1 - i)) {break};
      if (i == Math.floor(pro.length / 2)) {
        write(pro + ", the product of " + num1 + " and " + num2 + " is the largest palindromic product of two " + digit + " numbers.");
      };
    };
  };
};





/* draws a grid of specified width */
function grid(width) {
   var row1 = "";
   for (var i = 0; i < width; i++) {
      if (i % 2 == 0) {
         row1 += " ";
      } else {
         row1 += "#";
      };
   };
   var row2 = row1.slice(1, row1.length) + row1.charAt(0);
   for (var i = 0; i < width; i++) {
      if (i % 2 == 0) {
         write(row1 + "\n");
      } else {
         write(row2 + "\n");
      };
   };
}

grid(25);






/*You are given the following information, but you may prefer to do some research for yourself.
1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?*/
function Mondays() {
  var count = 0;
  var daysInMonths = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
  var day = 1 + 365 - 31;
  for (y = 1901; y <= 2000; y++) {
    for (m = 0; m <= 11; m++) {
      day += daysInMonths[m];
      if (m==1 && leap(y)) {day+=1;}
      day = day % 7;
      if (day == 0) {count++;}
    }
  }
  return count;
}
function leap(year) {
  return (year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0));
}
console.log(Mondays());




// find the Pythagorean triplet (a2 + b2 = c2) for which a + b + c = 1000.
var a, b, c, abTest;

for (a = 0; a < 1000; a++) {
  for (b = a + 1; b < 1000; b++) {
    c = 1000 - a - b;
    if (c <= b) {break;}
    abTest = Math.pow(a, 2) + Math.pow(b, 2);
    if (abTest == Math.pow(c, 2)) {
      // console.log("a equals: " + a + " b equals: " + b + " c equals: " + c);
      console.log(a * b * c);
    }
  }
}




// largest product in a grid
var hor, dia1 = 0, dia2 = 0, ver = 0;

var nums = [[08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
[49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
[81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
[52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
[22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
[24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
[32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
[67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
[24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
[21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
[78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
[16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
[86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
[19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
[04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
[88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
[04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
[20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
[20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
[01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]];

hor = Math.max(...nums.map(function(horArr) {
  var greatest = 0;
  for (i = 0; i < (horArr.length - 3); i++) {
    var adj = horArr[i] * horArr[i + 1] * horArr[i + 2] * horArr[i + 3];
    if (adj > greatest) {greatest = adj;}
  }
  return greatest;
}));

for (i = 0; i < nums[0].length; i++) {
  for (j = 0; j < nums.length - 3; j++) {
    var adj = nums[j][i] * nums[j + 1][i] * nums[j + 2][i] * nums[j + 3][i];
    if (adj > ver) {ver = adj;}
  }
}

for (i = 0; i < nums[0].length - 3; i++) {
  for (j = 0; j < nums.length - 3; j++) {
    var adj = nums[j][i] * nums[j + 1][i + 1] * nums[j + 2][i + 2] * nums[j + 3][i + 3];
    if (adj > dia1) {dia1 = adj;}
  }
}

for (i = nums[0].length - 1; i > 2; i--) {
  for (j = 0; j < nums.length - 3; j++) {
    var adj = nums[j][i] * nums[j + 1][i - 1] * nums[j + 2][i - 2] * nums[j + 3][i - 3];
    if (adj > dia2) {dia2 = adj;}
  }
}

console.log(Math.max(...[hor, dia1, dia2, ver]));

```
