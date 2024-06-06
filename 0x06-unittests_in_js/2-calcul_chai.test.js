const { expect } = require('chai');
const { it, describe } = require('mocha');
const calculateNumber = require('./2-calcul_chai.cjs');

describe('calculateNumber', () => { 
    describe('SUM', () => {
      it('check if no.s rounded return the sum', () => {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      });
      it('check if no.s rounded 2nd time returns the sum', () => {
        expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      });
      it('check if no.s round 3rd time returns sum', () => {
        expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      });
      it('check if no.s rounded 4h time returns sum', () => {
        expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      });
      it('check if no.s rounded 5th time return sum', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      });
      it('checking negative return', () => {
        expect(calculateNumber('SUM', -1.3, -3.7)).to.equal(-5);
      });
    });
    describe('SUBTRACT', () => {
      it('check if no.s rounded return the diff', () => {
        expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      });
      it('check if no.s rounded 2nd time returns the diff', () => {
        expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
      });
      it('check if no.s round 3rd time returns diff', () => {
        expect(calculateNumber('SUBTRACT', 6.2, 3.7)).to.equal(2);
      });
      it('check if no.s rounded 4h time returns diff', () => {
        expect(calculateNumber('SUBTRACT', 5.5, 3.7)).to.equal(2);
      });
      it('check if no.s rounded 5th time return diff', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      });
      it('checking negative return', () => {
        expect(calculateNumber('SUBTRACT', -1.3, -3.7)).to.equal(3);
      });
    });
    describe('DIVIDE', () => {
      it('check if no.s rounded return the quotient', () => {
        expect(calculateNumber('DIVIDE', 3, 1)).to.equal(3);
      });
      it('check if no.s rounded returens quotient', () => {
        expect(calculateNumber('DIVIDE', 4, 3.7)).to.equal(1);
      });
      it('check if no.s rounded retuns quotient', () => {
        expect(calculateNumber('DIVIDE', 2.2, 0.7)).to.equal(2);
      });
      it('check if no.s rounded returns quotient', () => {
        expect(calculateNumber('DIVIDE', 15, 2.7)).to.equal(5);
      });
      it('check if no.s rounded returns quotient', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      });
      it('checking negative return', () => {
        expect(calculateNumber('DIVIDE', -1.3, 0)).to.equal('Error');
      });
    });
});
