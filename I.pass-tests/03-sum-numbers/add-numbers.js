function addNumbers(numbers) {

    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}
module.exports = addNumbers;
