//square and sum the array element and calculate average of the array
let nums=[1,2,3,4,5];
const square =nums.map((num)=> num*num);
console.log(square);
let sum=square.reduce((acc,cur)=>acc+cur,0);
let avg =sum/nums.length;
console.log(avg);
//create a new array using map function whose each element is equal to the original ele +5.
console.log(nums.map((nums)=>nums+5));
//create a new array whose elements in uppercase 
let str=["om","sai","ram"];
console.log(str.map((str)=>str.toUpperCase()));








