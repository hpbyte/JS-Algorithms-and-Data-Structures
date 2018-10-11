/**
 * @param   {Array} Array   unsorted
 * @returns {Array}         sorted
 */
const SelectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i;
        // find smallest
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        // swap
        let tmp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = tmp;
    }

    return arr;
}

module.exports = SelectionSort;