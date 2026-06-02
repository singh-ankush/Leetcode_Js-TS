const animals = ["cat", "dog", "rabbit", "cat", "dog", "cat"];

const firstOccurrence = (arr, target) => {
    const animal = arr.indexOf(target);

    return 'first occurance:' + (animal !== -1 ? animal : null);
}

console.log(firstOccurrence(animals, "rabbit"));