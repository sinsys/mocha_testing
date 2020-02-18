const { divide } = require('../index');
const chai = require('chai');
const { expect } = chai;

describe('divide', () => {

  it('should divide positive integers correctly', () => {
    const a = 8,
          b = 4,
          answer = divide(a, b),
          expectedAnswer = 2;
    expect(answer)
      .to.equal(expectedAnswer);
  });

  it('should throw an error when dividing by 0', () => {
    const a = 8,
          b = 0,
          fn = () => {
            divide(a, b)
          };
    expect(fn)
      .to.throw();
  });

  it('should not accept non-numbers as parameters', () => {
    const a = 5,
          b = [1, 2, 3],
          answer = divide(a, b);
    expect(Number.isNaN(answer))
      .to.be.eq(true);
  });

  it('should be strict on comparing values', () => {
    expect(2)
      .to.equal(2, '2 === 2'); // pass
  });

  // THESE TESTS ARE EXPECTED TO FAIL
  // UNCOMMENT TO SEE RESPONSE
  // it('should fail if incorrect types are passed', () => {
  //   expect(2)
  //     .to.equal("2", '2 === "2"'); // fail, wrong types
  // });

  // it('should fail if different values are compared', () => {
  //   expect(2)
  //     .to.equal(3, '2 === 3'); // fail, wrong values
  // });

  // it('should fail because string comparison is case sensitive', () => {
  //   expect('hen')
  //     .to.equal('Hen', "'hen' == 'Hen'"); // fail, string comparison is case sensitive
  // });

})



