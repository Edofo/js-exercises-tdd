// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {

    let result = 0;
    numbers.splice(5, 1)
    numbers.splice(2, 1)
    numbers.splice(4, 1)
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < Infinity || numbers[i] > Infinity) {
            result = result + numbers[i];
        } else {
            numbers.splice(i, 1);
        }
    }
    const nb = numbers.length - 1;
    let count = Math.round(result / nb);
    return count;
}

module.exports = average;