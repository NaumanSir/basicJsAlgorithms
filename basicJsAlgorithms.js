// Print numbers 1 to 275
for(var i=1; i<276; i++) {
  console.log(i);
}


// Print all odd numbers from 1 to 300
for(var i=1; i<301; i=i+2) {
  console.log(i);
}


// Print Sum: print the sum of all the odd numbers from 1 to 5000
var sum = 0;

for(var i=1; i<5001; i=i+2) {
  sum = sum + i;
}
console.log(sum)


// Iterate through a given array.
var arr = [2,3,4,5,6,7];

for(var i=0; i<arr.length; i++) {
  console.log(arr[i]);
}


// Find the max of a given array
var arr = [1,-42,16,9,27];
var max = arr[0];

for(var i=0; i<arr.length; i++) {
  if(max<arr[i]) {
    max = arr[i];
  }
}
console.log(max)


// Find the average of a given array
var arr = [1,3,5,7,20];
var sum = 0;

for(var i=0; i<arr.length; i++) {
  sum = sum + arr[i];
}

var avg = sum / arr.length;
console.log(avg)


// Generate an array containing all odd numbers from 1 to 275
var arr = [];

for(var i=1; i<276; i=i+2) {
  arr.push(i);
}
console.log(arr)


// Greater than y: given an array, write a program which prints the number of values in that array whose value is greater than the provided value y
var arr = [1,3,5,7];
var y = 3;
var count = 0;

for(var i=0; i<arr.length; i++) {
  if(arr[i] > y) {
    count++;
  }
}
console.log('There are ' + count + ' numbers greater than ' + y + ' in this array.')


// Square the values of a given array
var sqarr = [1,4,7,10];
for(var i=0; i<sqarr.length; i++) {
  sqarr[i] = sqarr[i] * sqarr[i];
}
console.log(sqarr)
