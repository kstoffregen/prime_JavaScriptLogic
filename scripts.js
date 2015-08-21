//Question 1: You have two arrays. One of prime numbers and one of non-primes. Write a function that adds the numbers in the arrays together, but add the non-primes in reverse order, and returns that information in a new array. So the first prime should be added to the last non-prime, the second prime should be added to the second to last non-prime, etc.

// var primes = [2, 3, 5, 7, 11, 13, 17, 19];
// var nonPrimes = [1, 4, 6, 8, 9, 10, 12, 14];

// function addArrays(array){
// 	var arrayC = [];
// 	var arrayB = nonPrimes.reverse();
// 	for(var i = 0; i < array.length; i++){
// 		arrayC[i] = array[i] + arrayB[i];
// 	}
// 	return arrayC;
// }

// console.log(addArrays(primes));

//Question 2: Using the following arrays, write a function that merges the numbers together, in order, and returns the result as a new array. The result should be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Hint: Array.prototype.Sort can do the sorting for you, based on a comparison function. 
//Write a comparison function, that takes two parameters. If the first is less than the second, return -1. If the first is greater than the second, return 1. If they are equal, return 0. Pass your comparison function to Array.prototype.Sort.

var numbers1 = [4, 1, 6, 5, 8];
var numbers2 = [7, 3, 2, 9, 10];

var arrayMerged = numbers1.concat(numbers2);

arrayMerged.sort(function (a, b){
	if(a < b){
		return -1;
	} else if(a > b) {
		return 1;
	} else {
		return 0;
	}
});

console.log(arrayMerged);

