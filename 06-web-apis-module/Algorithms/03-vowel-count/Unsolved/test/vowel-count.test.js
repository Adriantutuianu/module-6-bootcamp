const expect = chai.expect;

describe("vowelCount", function() {
  it('should return the number 3 when given the string "programmer"', function() {
    const str = "programmer";

    const result = vowelCount(str);

    expect(result).to.eql(3);
  });

  it('should return the number 8 when given the string "I think, therefore I am."', function() {
    const str = "I think, therefore I am.";

    const result = vowelCount(str);

    expect(result).to.eql(8);
  });

  it("should return the number 0 when given an empty string.", function() {
    const str = "";

    const result = vowelCount(str);

    expect(result).to.eql(0);
  });
});
