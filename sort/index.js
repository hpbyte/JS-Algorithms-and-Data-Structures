const BubbleSort = require('./bubble_sort');
const SelectionSort = require('./selection_sort');
const InsertionSort = require('./insertion_sort');
const MergeSort = require('./merge_sort');

let unsorted = [5,2,3,1,10,7,0,9];
console.log("Unsorted Array : " + unsorted);

console.log("Bubble Sort    : " + BubbleSort(unsorted));
console.log("Selection Sort : " + SelectionSort(unsorted));
console.log("Insertion Sort : " + InsertionSort(unsorted));
console.log("Merge Sort     : " + MergeSort(unsorted));