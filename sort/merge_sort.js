/**
 * @param   {Array} arr left
 * @param   {Array} arr right
 * @returns {Array}     sorted
 */
const merge = (left, right) => {
    let i = 0, j = 0;
    let partial_sorted = [];

    while (i < left.length) {
        if (right[j] < left[i]) {
            partial_sorted.push(right[j++]);
        }
        else {
            partial_sorted.push(left[i++]);
        }
    }

    return partial_sorted.concat((i < left.length ? left.slice(i) : right.slice(j)));
};

/**
 * @param   {Array} arr unsorted
 * @returns {Array}     sorted
 */
const MergeSort = (arr) => {
    let sorted;
    
    if (arr.length === 1) {
        return arr;
    }
    else {
        let mid = arr.length >> 1;
        let left = MergeSort(arr.slice(0, mid));
        let right = MergeSort(arr.slice(mid));

        sorted = merge(left, right);
    }

    return sorted;
};

module.exports = MergeSort;