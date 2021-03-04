// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
const getSecondThird = require("./get-second-third");

test("Take second and third of an array", function() {
    var input = [90, 5, 11, 8, 6];
    var expected = [6, 8];

    var result =  getSecondThird(input);

    expect(result).toEqual(expected);
});