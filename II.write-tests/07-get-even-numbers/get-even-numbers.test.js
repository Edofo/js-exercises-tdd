// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
const getEven = require("./get-even-numbers");

test("Get even numbers", function() {
    var input = [22, 13, 73, 82, 4]
    var expected = [22, 82, 4]

    var result = getEven(input);

    expect(result).toEqual(expected);
});