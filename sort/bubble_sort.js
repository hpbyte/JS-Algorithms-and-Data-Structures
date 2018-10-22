/**
 * @param   {Array} arr Unsorted array 
 * @return  {Array}     Sorted array
 */
const bubbleSort = (arr) => {
    let didSwap;
    let len = arr.length;
    
    for (let i = 0; i < len; i++) {
        didSwap = false;

        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                didSwap = true;
            }
        }

        if (!didSwap) {
            break;
        }
    }

    return arr;
}

module.exports = bubbleSort;