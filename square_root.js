function Sqrt(number) {
    if (number < 0) return NaN;
    
    let i = 0;

    while (i * i < number) {
        i++;
    }
    
    return i * i === number ? i : `Not a perfect square (Approx: ${i-1})`;
}

console.log(Sqrt(64));
console.log(Sqrt(20));