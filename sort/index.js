const bubbleSort = require('./bubble_sort');
const selectionSort = require('./selection_sort');
const insertionSort = require('./insertion_sort');
const mergeSort = require('./merge_sort');

let unsorted = [5,2,3,1,10,7,0,9];
console.log("Unsorted Array : " + unsorted);

console.log("Bubble Sort    : " + bubbleSort(unsorted));
console.log("Selection Sort : " + selectionSort(unsorted));
console.log("Insertion Sort : " + insertionSort(unsorted));
console.log("Merge Sort     : " + mergeSort(unsorted));