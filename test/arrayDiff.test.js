const { arrayDiff } = require('../index');
const { expect } = require('chai');

describe('arrayDiff', () => {
  
  it('should return a if no common elements', () => {
    expect(arrayDiff([1,2,3], [4,5,6]))
      .to.deep.equal([1,2,3]);
  });

  it('should return [] if same', () => {
    expect(arrayDiff([1,2,3], [1,2,3]))
      .to.deep.equal([]);
  });

  it('should return correctly if some elements are removed', () => {
    expect(arrayDiff([1,2,3], [2]))
      .to.deep.equal([1,3]);
  });

  it('should remove 1 from [1, 2, 3]', () => {
    expect(arrayDiff( 
      [1, 2, 3], 
      [1] 
    ))
      .to.not.include(1);
  });

});