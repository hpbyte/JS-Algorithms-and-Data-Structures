/**
 * @param   {Array}     array to be searched
 * @param   {Number}    element to be searched
 * @returns {Number}    index of element if found
 */
const binarySearch = (sorted, target) => {
    let start = 0, end = sorted.length - 1;

    while (start <= end) {
        const mid = (start + end) >> 1;

        if (target === sorted[mid]) {
            return mid;
        }
        else if (target < sorted[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return -1;
}

module.exports = binarySearch;