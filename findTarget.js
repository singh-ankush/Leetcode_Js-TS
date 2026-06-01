const findFirstPair = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
};

let numbers = [12,5,6,8,9];
let target = 14;

console.log(findFirstPair(numbers, target));