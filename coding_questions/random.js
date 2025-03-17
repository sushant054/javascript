function isPalindrome(str){
    return str=== str.split('').reverse().join('');
}
console.log(isPalindrome("Hello"));
console.log(isPalindrome("abccba"));

//Largest num..
function findLargest(arr){
    return Math.max(...arr);

}
console.log(findLargest([2,8,4,1]));

//factorial
function factorial(n){
 return n === 0 ? 1 : n * factorial(n-1);
}
console.log(factorial(5));


//primeNumber
function isPrime(n){
     if(n<2) return false;
     for(let i=2;i<=Math.sqrt(n);i++){
        if(n % i===0){
            return false;
        }
        return true;
     }
}
console.log (isPrime(5));

//Remove duplicates
function removeDuplicates(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicates([1,2,3,3,4,5]));

//find missing number in array
function findMissingNumber(arr){
    let n = arr.length +1;
    let sum = (n*(n+1))/2;
    return sum -arr.reduce((acc,num)=>acc + Number, 0);

}

//first non repeating char..
function firstNonRepeatingChar(str){
    for(let char of str){
        if(str.indexOf(char)=== str.lastIndexOf(char))
        return char;
    }
    return null;
}
console.log(firstNonRepeatingChar("swiss"));

// second Largest Number in array..
function secondLargest(arr){
    let unique = [...new Set(arr)];
    unique.sort((a,b)=>b-a);
    return unique[1];

}
console.log (secondLargest([3,1,4,4,5,2]));

//check if two strings ate anagrams..
function anagrams(str1,str2){
    return str1.split('').sort().join('')===str2.split('').sort().join('');

}
console.log(anagrams("Hello","Holle"));
 