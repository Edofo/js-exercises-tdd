// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(array) {
    const numbers = array.filter(
        (value) => typeof value === 'number'
    )

    return numbers.reduce((a, b) => a + b) / numbers.length

}

module.exports = average;