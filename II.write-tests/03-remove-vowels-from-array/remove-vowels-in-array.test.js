const removeVowelsForWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  var input = ["Irina", "Etza", "Daniel"];
  var output = ["__i_a", "___a", "_a_ie_"];

  var result = removeVowelsForWords(input);
  // Assert
  expect(result).toEqual(output);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
