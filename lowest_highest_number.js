const nums = [3, 1, 4, 1, 5, 9];

const findLowestAndHighest = (arr) => {
    if (arr.length === 0) return null;
    
    if(arr.length === 1) return { lowest: arr[0], highest: arr[0] };

    let lowest = arr[0];
    let highest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }

    return { lowest, highest };
};

console.log(findLowestAndHighest(nums));