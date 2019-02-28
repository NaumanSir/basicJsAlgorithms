// // Print numbers 1 to 275
// for(var i=1; i<276; i++) {
//   console.log(i);
// }


// // Print all odd numbers from 1 to 300
// for(var i=1; i<301; i=i+2) {
//   console.log(i);
// }


// // Print Sum: print the sum of all the odd numbers from 1 to 5000
// var sum = 0;

// for(var i=1; i<5001; i=i+2) {
//   sum = sum + i;
// }
// console.log(sum)


// // Iterate through a given array.
// var arr = [2,3,4,5,6,7];

// for(var i=0; i<arr.length; i++) {
//   console.log(arr[i]);
// }


// // Find the max of a given array
// var arr = [1,-42,16,9,27];
// var max = arr[0];

// for(var i=0; i<arr.length; i++) {
//   if(max<arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max)


// // Find the average of a given array
// var arr = [1,3,5,7,20];
// var sum = 0;

// for(var i=0; i<arr.length; i++) {
//   sum = sum + arr[i];
// }

// var avg = sum / arr.length;
// console.log(avg)


// // Generate an array containing all odd numbers from 1 to 275
// var arr = [];

// for(var i=1; i<276; i=i+2) {
//   arr.push(i);
// }
// console.log(arr)


// // Greater than y: given an array, write a program which prints the number of values in that array whose value is greater than the provided value y
// var arr = [1,3,5,7];
// var y = 3;
// var count = 0;

// for(var i=0; i<arr.length; i++) {
//   if(arr[i] > y) {
//     count++;
//   }
// }
// console.log('There are ' + count + ' numbers greater than ' + y + ' in this array.')


// // Square the values of a given array
// var sqarr = [1,4,7,10];
// for(var i=0; i<sqarr.length; i++) {
//   sqarr[i] = sqarr[i] * sqarr[i];
// }
// console.log(sqarr)


// // Eliminate negative numbers of a given array turning them to 0
// var arr = [6,8,-10,3,-5];
// for(var i=0; i<arr.length; i++) {
//   if(arr[i] < 0) {
//     arr[i] = 0;
//   }
// }
// console.log(arr);


// // Min, max, and average of a given array
// var arr = [1,5,10,-3];
// var max = arr[0];
// var min = arr[0];
// var sum = 0;
// for(var i=0; i<arr.length; i++) {
//   if(arr[i] < min) {
//     min = arr[i];
//   }
//   if(arr[i] > max) {
//     max = arr[i];
//   }
//   sum = sum + arr[i];
// }
// var avg = sum / arr.length;
// console.log(min, max, avg);


// // Shift the values in a given array left
// var arrx = [1,5,10,-3,6];
// for(var i=0; i<arrx.length-1; i++) {
//   arrx[i] = arrx[i+1];
// }
// arrx[arrx.length-1] = 0;
// console.log(arrx);


// // Negative numbers to string
// var arry = [-2,-5,16];
// for(var i=0; i<arry.length; i++) {
//   if(arry[i] < 0) {
//     arry[i] = 'unicorn';
//   }
// }
// console.log(arry);


// // Create a random array with 10 values with integers between 0 and 100
// var arr = [];
// for(var i=0; i<10; i++) {
//   var rand_int = Math.floor(Math.random() * 101);
//   arr.push(rand_int);
// }
// console.log(arr);


// // Swap the first and last values of a given array without creating a new array
// var swaparr = [8,4,5,7,6];
// var temp = swaparr[0];
// swaparr[0] = swaparr[swaparr.length-1];
// swaparr[swaparr.length-1] = temp;
// console.log(swaparr);


// // Reverse the values of an array
// var x = [3,2,1,0,-1,-2,-3];
// for(var i=0; i<x.length/2; i++) {
//   var temp = x[i];
//   x[i] = x[x.length - 1 - i];
//   x[x.length - 1 - i] = temp;
// }
// console.log(x);


// // Insert a new number, x, at the index y.
// var arr = [5,7,9,12];
// var x = 10;
// var y = 2;

// arr.push(0);
// arr[arr.length - 1] = arr[arr.length - 2];
// arr[arr.length - 2] = arr[arr.length - 3];
// arr[y] = x;
// console.log(arr);

// /* more efficient method for above ^ */
// arr.push(0);
// for(var i=0; i<arr.length-1; i>y; i--) {
//   arr[i] = arr[i-1];
// }

// arr[y] = x;

// console.log(arr);
