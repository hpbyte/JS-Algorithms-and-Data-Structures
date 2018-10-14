/**
 * @param   {Array}     array to be searched
 * @param   {Number}    element to be searched
 * @returns {Number}    index of element if found
 */

 const LinearSearch = (arr, ele) => {
    for (let i = 0; i < arr.length; i++) {
        if (ele === arr[i]) {
            return i;
        }
    }
    return -1;
 };

 module.exports = LinearSearch;