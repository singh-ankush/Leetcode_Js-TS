function singleNumber(nums) {
    const s1 = new Set();
    const s2 = new Set();

    for (const n of nums) {
        if (s1.has(n)) {
            s2.add(n);
        } else {
            s1.add(n);
        }
    }

    for (const n of s2) {
        s1.delete(n);
    }

    return [...s1][0];
}

const nums = [2, 4, 4, 5, 6, 8, 2, 6, 5];
console.log(singleNumber(nums));