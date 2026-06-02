const data = [1, 2, 3, 2, 4, 1, 5];

const removeDuplicates = (arr) => {
    const uniqueSet = new Set(arr);
    return Array.from(uniqueSet);
};

console.log(removeDuplicates(data));