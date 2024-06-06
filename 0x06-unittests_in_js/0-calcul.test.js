const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('return 4 when inputs are 1 and 3 cheking if no.s round', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('return 5 when inputs are 1 and 3.7 and check if rounds 2nd round', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('return 5 when inputs are 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('return 6 when inputs are 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('handle negative numbers correctly', function() {
    assert.strictEqual(calculateNumber(-1.3, -3.7), -5);
  });

  it('handle mixed positive and negative numbers correctly', function() {
    assert.strictEqual(calculateNumber(1.5, -3.7), -2);
  });
});
