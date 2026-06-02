const data = [1, 2, 3, 2, 4, 1, 5];

const showDuplicates = (arr) => {
    const countMap = new Map();
    const duplicates = new Set();

    for (const item of arr) {
        if (countMap.has(item)) {
            countMap.set(item, countMap.get(item) + 1);
            duplicates.add(item);
        } else {
            countMap.set(item, 1);
        }
    }

    return Array.from(duplicates);
}

console.log(showDuplicates(data));