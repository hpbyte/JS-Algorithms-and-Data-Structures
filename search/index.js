const LinearSearch = require('./linear_search');
const BinarySearch = require('./binary_search');

const unsorted = [5,2,3,1,10,7,0,9];
const sorted = [0,1,2,3,5,7,9,10];
const target = 7;

console.log(`
    Array Unsorted  ${unsorted} 
    Array Sorted    ${sorted}
    Target Element  ${target}
`);

console.log('Linear Search  : Found at Index ' + LinearSearch(unsorted, target));
console.log('Binary Search  : Found at Index ' + BinarySearch(sorted, target));