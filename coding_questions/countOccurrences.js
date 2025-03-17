function countOccurrences(arr) {
    let countMap = {};

    arr.forEach(element => {
        countMap[element] = (countMap[element] || 0) + 1;
    });

    return countMap;
}
 
const arr = ['a', 'b', 'c', 'd', 'e', 'e'];
console.log(countOccurrences(arr));
