const { isEven } = require('../index');
const { expect } = require('chai');

describe('isEven', () => {

  it('should find 4 to be even', () => {
    expect(isEven(4))
      .to.be.true;
  });

  it('should find 5 to not be even', () => {
    expect(isEven(5))
      .to.be.false;
  });

  it('should not accept non-numbers as parameters', () => {
    const num = isEven('string');
    expect(Number.isNaN(num))
      .to.be.false;
  });

});