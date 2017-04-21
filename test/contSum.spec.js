/*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;

const checkSum = require('../contSum.js');

describe('Continuous Sum', () => {
  it('should return true or false when given array and integer', () => {
    expect(checkSum([1,2,3,4,5], 12)).to.equal(true);
    expect(checkSum([1,2,3,4,5], 8)).to.equal(false);
    expect(checkSum([1,2,3,4,5], 6)).to.equal(true);
    expect(checkSum([1,2,3,4,5], 10)).to.equal(true);
  });
});