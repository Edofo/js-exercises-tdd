const greetPeople = require("./greet-people");

test("print list of names prefixed with Hello", function() {
  // Arrange
  var people = ['Irina', 'Ashleigh', 'Etza'];

  var greeting = "Hello IrinaAshleighEtza";
  
  var result = greetPeople(people);

  expect(result).toEqual(greeting);
});
