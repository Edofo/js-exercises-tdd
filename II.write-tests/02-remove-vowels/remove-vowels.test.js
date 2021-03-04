const removeVowels = require("./remove-vowels");

test("remove vowels from word", function() {
  var good = "_a_ue_";

  var result = removeVowels('samuel');
  // Assert
  expect(result).toEqual(good);
});
