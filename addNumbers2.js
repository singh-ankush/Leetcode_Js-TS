let sum = 0

const sums = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}

numbers = [12,5,6,8,9]
console.log(sums(numbers))