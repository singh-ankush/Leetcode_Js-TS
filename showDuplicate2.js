const data = [1, 2, 3, 2, 4, 1, 5];

const showDuplicates = (arr) => {
    const seen = new Set();
    return arr.filter(item => seen.has(item) ? true : !seen.add(item));
};

console.log(showDuplicates(data));