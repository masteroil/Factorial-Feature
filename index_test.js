var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    //code
    it("returns correct value of 5!", () => {
      //set up
      const inputNumber = 5;
      const expectedResult = 120;
      //exercise
      const result = Calculate.factorial(inputNumber);
      //verify
      assert.equal(Calculate.factorial(5), 120);
    });

    //code
    it("returns correct value of 3!", () => {
      //set up
      const inputNumber = 3;
      const expectedResult = 6;
      //exercise
      const result = Calculate.factorial(inputNumber);
      //verify
      assert.equal(Calculate.factorial(5), 120);
    });
    it("returns correct value of 0!", () => {
      //set up
      const inputNumber = 0;
      const expectedResult = 1;
      //exercise
      const result = Calculate.factorial(inputNumber);
      //verify
      assert.equal(result.expectedResult);
    });
  });
});
