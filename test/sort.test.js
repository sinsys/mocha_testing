const { sort } = require('../index');
const { expect } = require('chai');

describe('sort', () => {

  it('should sort a numerical array', () => {
    const list = [5, 3, 1],
          answer = sort(list),
          expectedAnswer = [1, 3, 5];
    expect(answer)
      .to.deep.equal(expectedAnswer);
  });

  it('should sort a complex numerical array', () => {
    const list = [32, 15, 104],
          answer = sort(list),
          expectedAnswer = [15, 32, 104];
    expect(answer)
      .to.deep.equal(expectedAnswer);
  });  

  it('should sort a string array', () => {
    const list = ['f', 'c', 'a'],
          answer = sort(list),
          expectedAnswer = ['a', 'c', 'f'];
    expect(answer)
      .to.deep.equal(expectedAnswer);
  });

  it('should not accept non-array param', () => {
    const nonList = {a: 5, b: 3, c: 1},
          answer = sort(nonList),
          expectedAnswer = false;
    expect(answer)
      .to.deep.equal(expectedAnswer);
  });  

})

// Other methods
// expect(actualAnswer).to.equal(expectedAnswer); //using expect
// actualAnswer.should.equal(expectedAnswer); //using should
// assert.equal(actualAnswer, expectedAnswer); //using assert