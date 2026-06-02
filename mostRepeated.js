function mostFrequent(nums) {
    const freq = new Map();

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let maxElement;
    let maxCount = 0;

    for (const [num, count] of freq) {
        if (count > maxCount) {
            maxCount = count;
            maxElement = num;
        }
    }

    return { element: maxElement, occurrences: maxCount };
}

const nums = [1, 2, 3, 2, 4, 1, 5, 1];
console.log(mostFrequent(nums));