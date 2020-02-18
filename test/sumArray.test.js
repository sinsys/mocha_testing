const { sumOfArray } = require('../index');
const { expect } = require('chai');

describe('sumArray', () => {

  it('should return a promise', () => {
    expect(sumOfArray( [1, 2, 3]) )
      .to.be.a('promise');
  });

  it('should return a sum of an array of numbers', () => {
    return(
      sumOfArray( [1, 2, 3] )
        .then(ans => {
          expect(ans)
            .to.equal(6);
        })
    );
  });

  it('should sum an array of numbers and numeric strings', () => {
    return(
      sumOfArray( [1, "2", 3] )
        .then(ans => {
          expect(ans)
            .to.be.a('number')
            .that.equal(6);
        })
    );
  });

});