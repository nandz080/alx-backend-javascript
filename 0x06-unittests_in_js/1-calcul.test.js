const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('return the sum of 2 rounded no.s', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT operation', () => {
    it('return the subtraction of 2 rounded no.s', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE operation', () => {
    it('return the division of two rounded no.s', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('return "Error" if the 2nd no. is rounded to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Error handling', () => {
    it('return error for invalid type', () => {
      assert.strictEqual(calculateNumber('INVALID_TYPE', 1.4, 4.5), 'Error');
    });
  });
});
