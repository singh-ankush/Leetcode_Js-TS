numbers = [12,5,6,8,9]

const sum = (numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0)
}

console.log(sum(numbers))