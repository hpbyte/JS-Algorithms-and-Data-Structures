/**
 * @param   {Array} Array   unsorted
 * @returns {Array}         sorted
 */
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        const key = arr[i];

        while (j >= 0 && (key < arr[j])) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }

    return arr;
}

module.exports = insertionSort;