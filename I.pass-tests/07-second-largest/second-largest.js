function secondLargest(numbers) {
    numbers.sort();
    const i = numbers.length;
    const secondLarge = numbers[i-1];
    return secondLarge;
}

module.exports = secondLargest;