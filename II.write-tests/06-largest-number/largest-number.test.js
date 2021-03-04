// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
const largestNumber = require("./largest-number");

test("Get largest number of an array", function() {
    var input = [3, 21, 88, 4, 36];
    var expected = 88;

    var result = largestNumber(input);

    expect(result).toEqual(expected);
});